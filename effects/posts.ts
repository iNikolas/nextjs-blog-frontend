import { createEffect } from "effector";

import { api } from "@/api";
import { PaginationData, PaginationQuery, PostsFeed } from "@/entities";

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
