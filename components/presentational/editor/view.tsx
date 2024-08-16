import dynamic from "next/dynamic";
import React from "react";
import { ReactQuillProps } from "react-quill";

import { cn } from "@/utils";

import "react-quill/dist/quill.snow.css";

const DynamicQuill = dynamic(() => import("react-quill"), { ssr: false });

export function Editor({ className, ...props }: ReactQuillProps) {
  return (
    <DynamicQuill
      theme="snow"
      className={cn("[&_.ql-container]:h-60", className)}
      {...props}
    />
  );
}
