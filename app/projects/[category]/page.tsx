'use client';

import React from "react";
import projects from "@/data/projects";
import { useParams } from "next/navigation";
import Link from "next/link";
import type { WorkCategory } from "@/types/project";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as WorkCategory;
  
  const filteredProjects = projects.filter(p => 
    p.categories?.includes(category)
  );

  if (filteredProjects.length === 0) {
    return <div className="container mx-auto py-20">No projects found in this category</div>;
  }

  return (
    <section className="container mx-auto py-20">
      <h1 className="text-4xl font-garamond mb-12 capitalize">{category.replace(/-/g, ' ')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map(project => (
          <Link 
            key={project.id}
            href={`/projects/${category}/${project.id}`}
            className="hover:opacity-75 transition"
          >
            <div>
              <h3 className="text-xl font-garamond">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.previewText}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}