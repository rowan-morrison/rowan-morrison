import React from "react";
import { projects } from "@/data/projects";
import ProjectGrid from "@/components/ProjectGrid";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col gap-16 m-5 pt-[100px] md:p-5">
      <ProjectGrid projects={projects} />
    </main>
  );
}

export default Home;