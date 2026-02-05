// ProjectBlock displays title, description, credits, media, captions. It does nothing else.

import projects from "@/data/projects";
import Link from "next/link";


type Project = typeof projects[number];

type MediaItem = {
  src: string;
  caption?: string | React.ReactNode;
};

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="space-y-16">
          {project.blocks?.map((block, blockIdx) => (
            <div
              key={blockIdx}
              className={
                block.type === "half"
                  ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                  : "flex flex-col gap-6"
              }
            >
              {(block.media as MediaItem[]).map((item, mediaIdx) => {
                const isVideo = item.src.endsWith(".mp4");

                return (
                  <div key={mediaIdx} className="relative w-full cursor-pointer transition-opacity duration-300 group">
                    {project.href ? (
                      <Link href={project.href} className="block">
                        {isVideo ? (
                          <video
                            src={item.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto"
                          />
                        ) : (
                          <img
                            src={item.src}
                            alt={item.caption ? String(item.caption) : ""}
                            className="w-full h-auto block"
                          />
                        )}
                      </Link>
                    ) : (
                      isVideo ? (
                        <video
                          src={item.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-auto"
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.caption ? String(item.caption) : ""}
                          className="w-full h-auto block"
                        />
                      )
                    )}

                    {item.caption && (
                      <div className="
                        absolute bottom-0 left-0 w-full text-overline
                        px-3 py-2
                        opacity-0
                        transition-opacity duration-300
                        group-hover:opacity-100
                        mix-blend-difference text-white
                      ">
                        {item.caption}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}