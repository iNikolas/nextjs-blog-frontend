"use client";

import { useGate, useUnit } from "effector-react";
import React from "react";
import { DarkModeSwitch, Props } from "react-toggle-dark-mode";

import { colorThemeModel } from "@/stores";

export function ThemeToggle({
  className,
  ...props
}: Omit<Props, "checked" | "onChange">) {
  useGate(colorThemeModel.Gate);

  const isDarkMode = useUnit(colorThemeModel.$isDarkMode);
  const darkModeSelected = useUnit(colorThemeModel.darkModeSelected);

  return (
    <button
      onClick={() => darkModeSelected(!isDarkMode)}
      type="button"
      className="ml-auto flex btn btn-ghost sm:btn-circle sm:shadow"
    >
      <DarkModeSwitch
        className={className}
        checked={!!isDarkMode}
        onChange={() => {}}
        size={18}
        {...props}
      />
    </button>
  );
}
