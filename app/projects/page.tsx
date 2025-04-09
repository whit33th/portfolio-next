import { ThreeDCard } from "../../components/containers/threedcard";
import { projects } from "@/data/projects";
import React from "react";

function page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 p-4">
      {projects.map((project, index) => (
        <ThreeDCard
          key={index}
          image={project.image}
          git={project.git}
          stack={project.stack}
          title={project.title}
          description={project.description}
          media={project.media === "video" ? "video" : "image"}
        />
      ))}
    </div>
  );
}

export default page;
