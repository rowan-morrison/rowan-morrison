// ProjectBlock is used in the individual project pages (e.g. /carolina-bucci) and renders title, description, credits, media, captions. It does nothing else. It is not used in the project grid on the homepage.

import React from "react";

type Project = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  images?: string[];
  imageCaption?: React.ReactNode[];
  credits?: { role: string; name: string }[];
  subSections?: {
    heading?: string | React.ReactNode;
    description?: string | React.ReactNode;
    blocks: {
      type: "full" | "half";
      media: {
        src: string;
        caption?: string | React.ReactNode;
      }[];
    }[];
  }[];
    previewHeading?: string | React.ReactNode;
  previewText?: string | React.ReactNode;
  isVideo?: boolean;
};

type ProjectBlockProps = {
  project: Project;
};

export default function ProjectBlock({ project }: ProjectBlockProps) {
  return (
    <article className="grid gap-12 md:grid-cols-2 m-4">
      <div className="space-y-6">
        {project.title && <h2 className="text-formLarge font-garamond">{project.title}</h2>}
        {project.description && <p className="text-formSmall">{project.description}</p>}

        {project.credits && project.credits.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 text-formSmall ml-20">
            {project.credits.map((c, i) => (
              <React.Fragment key={i}>
                <span className="opacity-60">{c.role}</span>
                <span>{c.name}</span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-12">
        {(project.subSections ?? [{
           heading: undefined,
  description: undefined,
          blocks: [{
            type: "full",
            media: project.images?.map((src, i) => ({
              src,
              caption: project.imageCaption?.[i]
            })) ?? []
          }] 
        }]).map((subSection, subIdx) => (
          <div key={subIdx} className="space-y-16">
            {subSection.heading && <h3 className="text-formLarge font-garamond">{subSection.heading}</h3>}
            {subSection.description && <p className="text-formSmall">{subSection.description}</p>}

            {subSection.blocks.map((block, blockIdx) => (
              <div
                key={blockIdx}
                className={block.type === "half"
                  ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                  : "flex flex-col gap-6"}
              >
                {block.media.map((item, i) => (
                  <div key={i} className="relative w-full">
                    {item.src.endsWith(".mp4") ? (
                      <video src={item.src} controls className="w-full" />
                    ) : (
                      <img
                        src={item.src}
                        alt={typeof item.caption === "string" ? item.caption : `Project image ${i + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    )}
                    {item.caption && <p className="text-formSmall mt-2">{item.caption}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </article>
  );
}