import { createEffect } from "effector";

import { colorThemes } from "@/config";

export const changeDarkModeFx = createEffect((isDarkTheme: boolean) => {
  document.documentElement.dataset.theme = isDarkTheme
    ? colorThemes.dark
    : colorThemes.light;
});
