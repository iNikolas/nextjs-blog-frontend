import { combine, createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";

import { paginationLimit } from "@/config";
import { getAllPostsFx, showErrorMessageFx } from "@/effects";
import { PaginationData, PostsFeed } from "@/entities";

export const updatePostsFeedRequested = createEvent();

export const Gate = createGate();

export const $paginationData = createStore<PaginationData | null>(null);

export const $postsFeed = createStore<PostsFeed>([]);

export const $loading = combine([getAllPostsFx.pending], (tuple) =>
  tuple.some(Boolean)
);

export const $error = createStore(false)
  .on(getAllPostsFx.fail, () => true)
  .on(getAllPostsFx.pending, () => false);

const $hasMore = createStore(true);

sample({
  clock: Gate.open,
  source: { paginationData: $paginationData },
  filter: ({ paginationData }) => !paginationData,
  target: updatePostsFeedRequested,
});

sample({
  clock: updatePostsFeedRequested,
  source: {
    paginationData: $paginationData,
    hasMore: $hasMore,
    loading: $loading,
  },
  filter: ({ hasMore, loading }) => hasMore && !loading,
  fn: ({ paginationData }) => ({
    page: paginationData?.page ? paginationData.page + 1 : 1,
    limit: paginationData?.limit ? paginationData.limit : paginationLimit,
  }),
  target: getAllPostsFx,
});

sample({
  clock: getAllPostsFx.doneData,
  source: { postsFeed: $postsFeed },
  fn: ({ postsFeed }, { data }) => [...postsFeed, ...data],
  target: $postsFeed,
});

sample({
  clock: getAllPostsFx.doneData,
  fn: (data) => ({ page: data.page, limit: data.limit, total: data.total }),
  target: $paginationData,
});

sample({
  clock: $paginationData,
  source: { paginationData: $paginationData, postsFeed: $postsFeed },
  filter: ({ paginationData }) => !!paginationData,
  fn: ({ paginationData, postsFeed }) =>
    !paginationData || paginationData.total > postsFeed.length,
  target: $hasMore,
});

sample({ clock: getAllPostsFx.failData, target: showErrorMessageFx });
