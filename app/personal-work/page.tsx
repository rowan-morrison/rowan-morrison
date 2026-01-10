import { projects } from "@/data/projects";
import ProjectGrid from "@/components/ProjectGrid";

export default function PersonalPage() {
  const personalProjects = projects.filter((p) => p.collection === "studio");

  return (
    <main className="min-h-screen flex flex-col gap-16 m-5 pt-[100px] md:p-5">
      <ProjectGrid projects={personalProjects} />
    </main>
  );
}
