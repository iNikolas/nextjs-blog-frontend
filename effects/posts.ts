import DOMPurify from "dompurify";
import { createEffect } from "effector";

import { api } from "@/api";
import {
  IndividualPost,
  NewPost,
  PaginationData,
  PaginationQuery,
  PostBase,
  PostsFeed,
} from "@/entities";

export const getAllPostsFx = createEffect(async function getAllPosts(
  pagination: PaginationQuery
): Promise<{ data: PostsFeed } & PaginationData> {
  const cancelToken = getAllPosts.name;

  api.abortRequest(cancelToken);

  const { data } = await api.posts.postsControllerFindAll(pagination, {
    cancelToken,
  });

  return {
    total: data.total,
    limit: data.limit,
    page: data.page,
    data: data.data.map((record) => ({
      id: record.post_id,
      created: record.created_at,
      updated: record.updated_at,
      title: record.title,
      meta: {
        shortDesc: record.meta?.short_desc ?? "",
        featuredImg: record.meta?.featured_img ?? "",
      },
    })),
  };
});

export const getSinglePostDataFx = createEffect(
  async (id: string): Promise<IndividualPost> => {
    const { data } = await api.posts.postsControllerFindOne(id);

    return {
      id: data.post_id,
      created: data.created_at,
      updated: data.updated_at,
      title: data.title,
      content: {
        text: DOMPurify.sanitize(data.content?.content ?? ""),
        postImg: data.content?.post_img ?? "",
      },
    };
  }
);

export const createPostFx = createEffect(
  async ({
    title,
    shortDesc,
    featuredImg,
    postImg,
    text,
  }: NewPost): Promise<PostBase> => {
    const { data } = await api.posts.postsControllerCreate({
      title,
      shortDesc,
      featuredImg,
      postImg,
      content: text,
    });

    return {
      id: data.post_id,
      created: data.created_at,
      updated: data.updated_at,
      title: data.title,
    };
  }
);
