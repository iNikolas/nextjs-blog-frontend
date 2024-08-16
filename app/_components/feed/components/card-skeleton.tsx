import React from "react";

export function CardSkeleton() {
  return (
    <div className="mb-4 flex-col gap-4">
      <div className="skeleton h-64 w-full mb-8" />
      <div className="skeleton mb-5 h-8 w-[90%]" />
      <div className="skeleton h-4 mb-2 w-1/2" />
      <div className="skeleton h-4 mb-2 w-3/4" />
      <div className="skeleton h-4 w-1/3" />
    </div>
  );
}
