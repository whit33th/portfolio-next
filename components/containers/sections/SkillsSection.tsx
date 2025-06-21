import { stack } from "@/data/stack";
import Image from "next/image";
import React from "react";

export default function SkillsSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-neutral-200">Skills & Tools</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {stack.map((category) => (
          <div
            key={category.name}
            className="rounded-xl border border-[#191919] bg-[#0c0c0c] p-6"
          >
            <h4 className="mb-4 font-medium">{category.name}</h4>
            <div className="grid grid-cols-4 gap-3">
              {category.content.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-1"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="text-center text-[10px] text-neutral-400">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
