"use client";

import { useGate, useUnit } from "effector-react";
import { AnimatePresence } from "framer-motion";
import React from "react";

import { paginationLimit } from "@/config";
import { postsModel } from "@/stores";
import { Card, CardError, CardSkeleton } from "./components";

export function Feed() {
  useGate(postsModel.Gate);

  const feed = useUnit(postsModel.$postsFeed);
  const loading = useUnit(postsModel.$loading);
  const error = useUnit(postsModel.$error);

  return (
    <section className="py-8 px-2.5 bg-base-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-content mx-auto">
      <AnimatePresence>
        {feed.map((post, index) => (
          <Card key={post.id} data={post} isLast={index + 1 === feed.length} />
        ))}
      </AnimatePresence>
      {loading &&
        Array(paginationLimit)
          .fill(null)
          .map(() => <CardSkeleton key={`sleleton-${Math.random()}`} />)}
      {error && <CardError />}
    </section>
  );
}
