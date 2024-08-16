import { combine, createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";

import { paginationLimit } from "@/config";
import { getAllPostsFx , showErrorMessageFx } from "@/effects";
import { PaginationData, PostsFeed } from "@/entities";

const updatePostsFeedRequested = createEvent();

export const Gate = createGate();

export const $paginationData = createStore<PaginationData | null>(null);

export const $postsFeed = createStore<PostsFeed>([]);

export const $loading = combine([getAllPostsFx.pending], (tuple) =>
  tuple.some(Boolean)
);

sample({
  clock: Gate.open,
  source: { paginationData: $paginationData },
  filter: ({ paginationData }) => !paginationData,
  target: updatePostsFeedRequested,
});

sample({
  clock: updatePostsFeedRequested,
  source: { paginationData: $paginationData },
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

sample({ clock: getAllPostsFx.failData, target: showErrorMessageFx });
