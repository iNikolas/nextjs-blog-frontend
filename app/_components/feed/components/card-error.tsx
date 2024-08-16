import { useUnit } from "effector-react";
import { motion } from "framer-motion";
import React from "react";
import { AiOutlineReload } from "react-icons/ai";

import { postsModel } from "@/stores";

export function CardError() {
  const updatePostsFeedRequested = useUnit(postsModel.updatePostsFeedRequested);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-error text-error-content rounded-lg p-6 shadow-md flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        Oops, something went wrong!
      </h2>
      <p className="mb-6 text-center">
        We couldn&apos;t load the content. Please try again.
      </p>
      <button
        onClick={updatePostsFeedRequested}
        type="button"
        className="btn btn-primary w-full"
      >
        Retry <AiOutlineReload />
      </button>
    </motion.div>
  );
}
