import projects from "@/data/projects";
import ProjectBlock from "@/components/ProjectBlock";

export default function CarolinaBucciPage() {
  const project = projects.find(p => p.id === "carolina-bucci");
  
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