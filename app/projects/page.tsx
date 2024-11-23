import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default async function ProjectsPage() {
  return (
    <main className="min-h-screen ">
      <div className="container mx-auto px-8">
        
        <Projects />
        
      </div>
    </main>
  );
}