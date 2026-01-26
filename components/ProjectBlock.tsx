import React from "react";
// Placeholder MediaItemBlock component
function MediaItemBlock({ item }: { item: MediaItem }) {
  // Simple placeholder rendering, adjust later to handle images, video, text, etc.
  return <div>{JSON.stringify(item)}</div>;
}

type MediaItem = 
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "text"; content: string };

type Project = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  media?: MediaItem[];
  credits?: { role: string; name: string }[];
};

type ProjectBlockProps = {
  project: Project;
};

export default function ProjectBlock({ project }: ProjectBlockProps) {
  return (
    <article className="grid gap-12 md:grid-cols-2">
      <div className="space-y-6">
        {project.title && <h2 className="text-formLarge font-garamond">{project.title}</h2>}
        {project.description && <p className="text-formSmall">{project.description}</p>}

        {project.credits && project.credits.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 text-formSmall">
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
        {project.media?.map((item, i) => (
          <MediaItemBlock key={i} item={item} />
        ))}
      </div>
    </article>
  );
}