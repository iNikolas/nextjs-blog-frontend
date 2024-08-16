import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FeedPost } from "@/entities";

interface CardProps {
  data: FeedPost;
}

export function Card({ data }: CardProps) {
  return (
    <motion.div
      key={data.created}
      className="bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-64 mb-4">
        <Image
          src={data.meta.featuredImg}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-primary mb-2">{data.title}</h3>
        <p className="text-base-content">{data.meta.shortDesc}</p>
      </div>
    </motion.div>
  );
}
