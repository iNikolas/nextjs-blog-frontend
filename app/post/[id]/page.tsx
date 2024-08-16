import React from "react";
import { Post } from "./_components";

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <Post id={params.id} />
    </main>
  );
}
