import { createForm } from "effector-forms";

import { NewPost } from "@/entities";

import { rules } from "./utils";

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
      rules: [rules.required(), rules.minLength(5), rules.maxLength(100)],
      validateOn: ["blur"],
    },
  },
});
