import { experience } from "@/data/experience";
import React from "react";
import { CardContainer, CardBody, CardItem } from "../../UI/3d-card";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center gap-12 py-12 lg:flex-row lg:items-start">
      <CardContainer className="relative h-48 w-48 overflow-hidden rounded-xl border border-neutral-800 lg:h-full lg:w-full">
        <CardBody>
          <CardItem translateZ={40}>
            <Image
              src="/img/me.webp"
              alt="My photo"
              width={400}
              height={400}
              loading="eager"
              className="object-cover"
            />
          </CardItem>
        </CardBody>
      </CardContainer>

      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <h2 className="bg-gradient-to-r from-neutral-200 to-neutral-500 bg-clip-text pb-1 text-6xl font-bold text-transparent">
            Daniil Kaminskyi
          </h2>
          <p className="text-lg text-neutral-400">Frontend Developer</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-200">About</h3>
            <p className="leading-relaxed text-neutral-400">
              I am a professional web developer with expertise in building
              websites. My experience includes proficiency in React, Next, and
              Tailwind CSS/SCSS/CSS. I continually engage in projects to refine
              my skills and explore emerging technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-200">
              Experience
            </h3>
            <div className="space-y-3">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-xl border border-[#191919] bg-[#0c0c0c] p-4 transition-colors hover:border-neutral-700"
                >
                  <p className="font-medium">{exp.position}</p>
                  <p className="text-sm text-neutral-400">{exp.company}</p>
                  <p className="text-sm text-neutral-400">{exp.period}</p>
                  <ul className="ml-4 mt-2 list-disc text-sm text-neutral-400">
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
