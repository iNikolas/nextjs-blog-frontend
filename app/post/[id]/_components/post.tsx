"use client";

import { useGate, useUnit } from "effector-react";
import Image from "next/image";
import React from "react";

import { singlePostModel } from "@/stores";

import { PostError } from "./post-error";
import PostSkeleton from "./post-skeleton";

export function Post({ id }: { id: string }) {
  useGate(singlePostModel.Gate, id);

  const post = useUnit(singlePostModel.$post);
  const error = useUnit(singlePostModel.$error);
  const getPostDataRequested = useUnit(singlePostModel.getPostDataRequested);

  if (!post) {
    return (
      <>
        <PostSkeleton />
        {error && <PostError onRetry={() => getPostDataRequested(id)} />}
      </>
    );
  }

  return (
    <div className="prose md:prose-lg mx-auto mb-2 md:mb-6 px-2.5 md:px-0">
      <h1>{post.title}</h1>
      <Image
        priority
        width={800}
        height={400}
        src={post.content.postImg}
        alt={post.title}
      />
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: post.content.text }}
      />
    </div>
  );
}
