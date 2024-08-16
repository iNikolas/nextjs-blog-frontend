import { combine, createStore, sample } from "effector";
import { createForm } from "effector-forms";

import { createGate } from "effector-react";
import { createPostFx, showErrorMessageFx } from "@/effects";
import { NewPost } from "@/entities";

import { rules } from "./utils";
import { postsModel } from "../posts";

export const Gate = createGate();

export const form = createForm<NewPost>({
  fields: {
    title: {
      init: "",
      rules: [rules.required(), rules.minLength(5), rules.maxLength(100)],
      validateOn: ["blur"],
    },
    shortDesc: {
      init: "",
      rules: [rules.maxLength(250)],
      validateOn: ["blur"],
    },
    featuredImg: {
      init: "",
      rules: [rules.required(), rules.isUrl()],
      validateOn: ["blur"],
    },
    postImg: {
      init: "",
      rules: [rules.required(), rules.isUrl()],
      validateOn: ["blur"],
    },
    text: {
      init: "",
      rules: [rules.required(), rules.minLength(50), rules.maxLength(5000)],
      validateOn: ["blur"],
    },
  },
});

export const $newPostId = createStore("").reset(Gate.close);

export const $loading = combine([createPostFx.pending], (tuple) =>
  tuple.some(Boolean)
);

sample({ clock: form.formValidated, target: createPostFx });

sample({ clock: Gate.close, target: form.reset });

sample({
  clock: createPostFx.done,
  fn: ({ result, params }) => ({
    ...result,
    meta: {
      shortDesc: params.shortDesc,
      featuredImg: params.featuredImg,
    },
  }),
  target: postsModel.newPostCreated,
});

sample({
  clock: createPostFx.doneData,
  fn: ({ id }) => id,
  target: $newPostId,
});

sample({ clock: createPostFx.failData, target: showErrorMessageFx });
