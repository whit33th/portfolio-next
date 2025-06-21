import AboutSection from "@/components/containers/sections/AboutSection";
import ServicesAndEducation from "@/components/containers/sections/ServiceAndEducation";
import SkillsSection from "@/components/containers/sections/SkillsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <div className="mx-auto w-full max-w-7xl">
        <AboutSection />
        <ServicesAndEducation />
        <SkillsSection />
      </div>
    </div>
  );
}
