import { projects } from "@/data/projects";
import ProjectGrid from "@/components/ProjectGrid";

export default function ProfessionalWorkPage() {
  const professionalProjects = projects.filter((p) => p.collection === "professional");

  return (
    <main className="min-h-screen flex flex-col gap-16 m-5 pt-[100px] md:p-5">
      <ProjectGrid projects={professionalProjects} />
    </main>
  );
}
