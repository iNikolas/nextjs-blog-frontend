import React from "react";

export default function PostSkeleton() {
  return (
    <div className="prose prose-lg mx-auto">
      <div className="skeleton skeleton-text h-12 w-3/4 mb-6" />

      <div className="relative w-full h-96 mb-8">
        <div className="skeleton skeleton-square h-full w-full rounded-lg" />
      </div>

      <div className="space-y-4">
        <div className="skeleton skeleton-text h-6 w-full mb-4" />
        <div className="skeleton skeleton-text h-6 w-5/6 mb-4" />
        <div className="skeleton skeleton-text h-6 w-4/5 mb-4" />
        <div className="skeleton skeleton-text h-6 w-2/3 mb-4" />
        <div className="skeleton skeleton-text h-6 w-full mb-4" />
        <div className="skeleton skeleton-text h-6 w-5/6 mb-4" />
        <div className="skeleton skeleton-text h-6 w-4/5 mb-4" />
        <div className="skeleton skeleton-text h-6 w-2/3 mb-4" />
      </div>
    </div>
  );
}
