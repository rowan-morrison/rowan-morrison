"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MasonryGridProps } from "@/types/project";

export default function MasonryGrid({
  projects,
  vertical = false,
}: MasonryGridProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`grid gap-4 ${
        vertical
          ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
          : "grid-flow-col auto-cols-max overflow-x-auto"
      }`}>
      {projects.map((item) => (
        <Link key={item.id} href={`/projects/${item.categories}/${item.id}`}>
          <motion.div
            className={`relative overflow-hidden group cursor-pointer ${
              vertical ? "aspect-[4/5]" : "aspect-[3/2]"
            }`}
            style={vertical ? { aspectRatio: undefined } : undefined}
            layout
            layoutId={`work-image-${item.id}`}
          >
            {item.isVideo ? (
              <video
                src={item.images[0]}
                className="w-full h-full object-cover transition-transform duration-300"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <div className={`relative ${vertical ? "aspect-[4/5]" : "aspect-[3/2]"} w-full overflow-hidden`}>
                <Image
                  src={item.images[0]}
                  alt={typeof item.title === "string" ? item.title : "Project image"}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover w-full h-full transition-transform duration-300"
                  priority={false}
                />
              </div>
            )}
          </motion.div>

          <div className="mt-3 text-center transition-opacity duration-300 font-label text-labelLarge small-caps text-current">
            {item.title}
          </div>
        </Link>
      ))}
    </div>
  );
};