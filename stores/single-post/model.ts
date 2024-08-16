import { combine, createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";

import { getSinglePostDataFx, showErrorMessageFx } from "@/effects";
import { IndividualPost } from "@/entities";

export const getPostDataRequested = createEvent<string>();

export const Gate = createGate<string>();

export const $post = createStore<IndividualPost | null>(null).reset(Gate.state);

export const $loading = combine([getSinglePostDataFx.pending], (tuple) =>
  tuple.some(Boolean)
);

export const $error = createStore(false)
  .on(getSinglePostDataFx.fail, () => true)
  .reset(getPostDataRequested);

sample({
  clock: Gate.state,
  source: { postId: Gate.state, view: Gate.status },
  filter: ({ view, postId }) => view && !!postId,
  fn: ({ postId }) => postId,
  target: getPostDataRequested,
});

sample({ clock: getPostDataRequested, target: getSinglePostDataFx });

sample({
  clock: getSinglePostDataFx.done,
  source: { postId: Gate.state, view: Gate.status },
  filter: ({ view, postId }, { params }) => view && postId === params,
  fn: (_, { result }) => result,
  target: $post,
});

sample({ clock: getSinglePostDataFx.failData, target: showErrorMessageFx });
