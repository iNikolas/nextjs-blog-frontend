"use client";

import React from "react";
import ReactQuill, { ReactQuillProps } from "react-quill";

import { cn } from "@/utils";

import "react-quill/dist/quill.snow.css";

export function Editor({ className, ...props }: ReactQuillProps) {
  return (
    <ReactQuill
      theme="snow"
      className={cn("[&_.ql-container]:h-60", className)}
      {...props}
    />
  );
}
