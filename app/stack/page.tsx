import React from "react";

import { stack } from "@/data/stack";

import StackCard from "@/components/containers/stackCard";

function page() {
  const allTechnologies = stack.flatMap((c) => c.content);

  return (
    <div className="flex flex-col min-h-screen p-4 ">
      <div className="pt-8 pb-6 flex flex-col items-center space-y-2">
        <h1 className="text-5xl font-bold tracking-tight">Stack</h1>
        <p className="text-sm text-neutral-400">
          Technologies, resources and tools I use in my work
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="bg-[#090909b6] rounded-xl p-6 h-full border border-[#191919]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
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
