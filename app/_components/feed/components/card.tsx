import { format } from "date-fns";
import { useUnit } from "effector-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

import { FeedPost } from "@/entities";
import { postsModel } from "@/stores";

interface CardProps {
  data: FeedPost;
  isLast: boolean;
}

export function Card({ data, isLast }: CardProps) {
  const updatePostsFeedRequested = useUnit(postsModel.updatePostsFeedRequested);

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView) {
        updatePostsFeedRequested();
      }
    },
    skip: !isLast,
    triggerOnce: true,
  });

  const formattedDate = format(new Date(data.created), "PPP");

  return (
    <Link href={`/post/${data.id}`}>
      <motion.div
        ref={ref}
        key={data.created}
        className="bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-64 mb-4 overflow-hidden">
          <Image
            priority
            src={data.meta.featuredImg}
            alt={data.title}
            width={600}
            height={400}
            className="rounded-t-lg h-full absolute inset-0 object-cover object-top"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-primary mb-2">{data.title}</h3>
          <p className="text-base-content mb-4">{data.meta.shortDesc}</p>
          <motion.div
            className="absolute top-2 right-2 bg-primary text-white text-sm px-3 py-1 rounded-full shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {formattedDate}
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
