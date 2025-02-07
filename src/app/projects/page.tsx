import { ThreeDCard } from "@/components/containers/threedcard";
import { projects } from "@/data/projects";
import React from "react";

function page() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4 p-4">
      {projects.map((project) => (
        <ThreeDCard
          key={project.id}
          img={project.image}
          git={project.git}
          stack={project.stack}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default page;
