import { useUnit } from "effector-react";
import { useRouter } from "next/navigation";
import React from "react";

import { createPostModel } from "@/stores";

export function useNewPostRedicrect() {
  const newPostId = useUnit(createPostModel.$newPostId);
  const router = useRouter();

  React.useEffect(() => {
    if (newPostId) {
      router.push(`/post/${newPostId}`);
    }
  }, [newPostId, router]);

  return !!newPostId;
}
