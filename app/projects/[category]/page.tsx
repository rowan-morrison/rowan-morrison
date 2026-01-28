'use client';

import React from "react";
import projects from "@/data/projects";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  
  const filteredProjects = projects.filter(p => 
    p.categories?.includes(category)
  );

  if (filteredProjects.length === 0) {
    return <div className="container mx-auto py-20">No projects found in this category</div>;
  }

  return (
    <section className="container mx-auto py-20">
      <h1 className="text-4xl font-garamond mb-12">{category}</h1>
      {/* Render your project grid or list here */}
    </section>
  );
}