import StackCard from "@/components/containers/stackCard";
import { stack } from "@/data/stack";

function page() {
  const allTechnologies = stack.flatMap((c) => c.content);

  return (
    <div className="flex min-h-screen flex-col p-4">
      <div className="flex flex-col items-center space-y-2 pb-6 pt-8">
        <h1 className="text-5xl font-bold tracking-tight">Stack</h1>
        <p className="text-sm text-neutral-400">
          Technologies, resources and tools I use in my work
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="h-full rounded-xl border border-[#191919] bg-[#090909b6] p-6">
          <div className="grid grid-cols-2 justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {allTechnologies.map((tech, index) => (
              <StackCard key={index} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
