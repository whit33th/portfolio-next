"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function StackCard({
  tech,
  index,
}: {
  tech: { name: string; icon: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className="flex flex-col items-center gap-2"
    >
      <Image
        className="aspect-square h-16 w-16 rounded-xl drop-shadow-lg sm:h-20 sm:w-20"
        src={tech.icon}
        alt={tech.name}
        width={80}
        height={80}
      />
      <div className="flex flex-col items-center">
        <span className="text-center text-sm font-medium">{tech.name}</span>
        <span className="text-center text-xs text-zinc-400">
          {tech.description}
        </span>
      </div>
    </motion.div>
  );
}
