import React from "react";
import Image from "next/image";
import { stack } from "@/data/stack";
import { CardBody, CardContainer, CardItem } from "@/components/UI/3d-card";
import { experience } from "@/data/experience";

function Page() {
  return (
    <div className="flex flex-col min-h-screen p-4 z-10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start pt-20 pb-16">
          <CardContainer className="relative w-48 h-48 lg:w-[400px] lg:h-[500px] rounded-xl overflow-hidden border border-neutral-800">
            <CardBody>
              <CardItem translateZ={40}>
                <Image
                  src="/img/me.webp"
                  alt="Me"
                  width={1000}
                  height={1000}
                  loading="eager"
                  className="object-cover "
                />
              </CardItem>
            </CardBody>
          </CardContainer>

          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-6xl pb-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
                Daniil Kaminskyi
              </h2>
              <p className="text-lg text-neutral-400">Frontend Developer</p>
            </div>

            <div className="space-y-6 max-w-2xl">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neutral-200">About</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Currently a student in programming course, passionate about web dev and
                  creating cool and memorable sites. Exploring new technologies and best
                  practices.
                </p>
              </div>

              {/* Experience Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neutral-200">Experience</h3>
                <div className="space-y-3">
                  {experience.map((exp) => (
                    <div
                      key={exp.id}
                      className="bg-[#0c0c0c] p-4 rounded-xl border border-[#191919] hover:border-neutral-700 transition-colors"
                    >
                      <p className="font-medium">{exp.position}</p>
                      <p className="text-sm text-neutral-400">{exp.company}</p>
                      <p className="text-sm text-neutral-400">{exp.period}</p>
                      <ul className="mt-2 text-sm text-neutral-400 list-disc ml-4">
                        {exp.responsibilities.map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neutral-200">What I Do</h3>
                <ul className="space-y-3">
                  <li className="bg-[#0c0c0c] p-4 rounded-xl border border-[#191919]">
                    <p className="font-medium">Frontend Development</p>
                    <p className="text-sm text-neutral-400">
                      Building responsive and modern web apps
                    </p>
                  </li>
                  <li className="bg-[#0c0c0c] p-4 rounded-xl border border-[#191919]">
                    <p className="font-medium">UI/UX Design</p>
                    <p className="text-sm text-neutral-400">
                      Creating intuitive user interfaces
                    </p>
                  </li>
                  <li className="bg-[#0c0c0c] p-4 rounded-xl border border-[#191919]">
                    <p className="font-medium">Web Performance</p>
                    <p className="text-sm text-neutral-400">
                      Optimizing for speed and efficiency
                    </p>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-neutral-200">Education</h3>
                  <div className="bg-[#0c0c0c] p-4 rounded-xl border border-[#191919]">
                    <p className="font-medium">
                      Informatics (Faculty of Applied Sciences)
                    </p>
                    <p className="text-sm text-neutral-400 mt-1">Poznan, Poland</p>
                    <p className="text-sm text-neutral-400">2021 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="py-16 space-y-8">
          <h3 className="text-2xl font-semibold text-neutral-200">Skills & Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stack.map((category) => (
              <div
                key={category.name}
                className="bg-[#0c0c0c] p-6 rounded-xl border border-[#191919]"
              >
                <h4 className="font-medium mb-4">{category.name}</h4>
                <div className="grid grid-cols-4 gap-3">
                  {category.content.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center gap-1">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <span className="text-[10px] text-neutral-400 text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
