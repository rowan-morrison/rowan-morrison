import projects from "@/data/projects";
import ProjectBlock from "@/components/ProjectBlock";

export default function Central23Page() {
  const project = projects.find(p => p.id === "central23");
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main>
      <section className="container mx-auto py-20">
        <ProjectBlock project={project} />
      </section>
    </main>
  );
}