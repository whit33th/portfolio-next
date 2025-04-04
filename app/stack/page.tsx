import React from "react";
import Image from "next/image";
import { stack } from "@/data/stack";

function page() {
  const allTechnologies = stack.flatMap((c) => c.content);

  return (
    <div className="flex flex-col min-h-screen p-4 z-10">
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
              <div key={index} className="flex flex-col items-center gap-2">
                <Image
                  className="rounded-xl drop-shadow-lg aspect-square w-16 h-16 sm:w-20 sm:h-20"
                  src={tech.icon}
                  alt={tech.name}
                  width={80}
                  height={80}
                />
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                  <span className="text-xs text-zinc-400 text-center">
                    {tech.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
