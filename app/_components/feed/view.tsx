"use client";

import { useGate, useUnit } from "effector-react";
import { AnimatePresence } from "framer-motion";
import React from "react";

import { paginationLimit } from "@/config";
import { postsModel } from "@/stores/posts";
import { Card, CardSkeleton } from "./components";

export function Feed() {
  useGate(postsModel.Gate);

  const feed = useUnit(postsModel.$postsFeed);
  const loading = useUnit(postsModel.$loading);

  return (
    <section className="py-8 px-2.5 bg-base-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1120px] mx-auto">
      <AnimatePresence>
        {feed.map((post) => (
          <Card key={post.id} data={post} />
        ))}
      </AnimatePresence>
      {loading &&
        Array(paginationLimit)
          .fill(null)
          .map(() => <CardSkeleton key={`sleleton-${Math.random()}`} />)}
    </section>
  );
}
