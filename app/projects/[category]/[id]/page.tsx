import ProjectBlock from "@/components/ProjectBlock";
import projects from "@/data/projects";
import React from "react";
import Script from "next/script";
import type { WorkCategory } from "@/types/project";

interface PageProps {
  params: {
    category: WorkCategory;
    id: string;
  };
}

// export default function MerchandisingPage() {
//   const project = projects.find(p => p.id === "merchandising");
//   if (!project) return <div>Project not found</div>;

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find(p => p.id === params.id);
  if (!project) return <div>Project not found</div>;

  return (
    <>
    <section className="container mx-auto py-20">
      <ProjectBlock project={project} />
    </section>

<Script
  id="work-detail-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": project.title,
          "description": "A collection of my design and development projects",
          "url": `https://rowanmorrisons.com/${project.collection ?? "professional-work"}/${project.id}`,
          "creator": { "@type": "Person", "name": "Rowan Morrison" },
        }),
  }}
/>
    </>
  );
}