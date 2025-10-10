import { projects } from "@/data/projects";
import { Metadata } from "next";
import { ThreeDCard } from "../../components/containers/threedcard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my projects showcasing my skills and creativity.",
};

function page() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
      {projects.map((project, index) => (
        <ThreeDCard
          key={index}
          image={project.image}
          git={project.git}
          website={project.website}
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
