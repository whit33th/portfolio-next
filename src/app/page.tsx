import React from "react";
import Image from "next/image";
import { stack } from "@/data/stack";
import { CardBody, CardContainer, CardItem } from "@/components/UI/3d-card";
import { experience } from "@/data/experience";
import DecryptedText from "@/components/containers/DecryptedText";

export default function Home() {
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
                  alt="My photo"
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
                <DecryptedText
                  speed={70}
                  animateOn={"view"}
                  text="Daniil Kaminskyi"
                />
              </h2>
              <p className="text-lg text-neutral-400">
                <DecryptedText
                  speed={80}
                  animateOn={"view"}
                  text="Frontend Developer"
                />
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neutral-200">
                  <DecryptedText speed={90} animateOn={"view"} text="About" />
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  <DecryptedText
                    speed={50}
                    animateOn={"view"}
                    text="I am a professional web developer with expertise in building websites. My experience includes proficiency in React, Next, and Tailwind CSS/SCSS/CSS. I continually engage in projects to refine my skills and explore emerging technologies."
                  />
                </p>
              </div>

              {/* Experience Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neutral-200">
                  <DecryptedText
                    speed={90}
                    animateOn={"view"}
                    text="Experience"
                  />
                </h3>
                <div className="space-y-3">
                  {experience.map((exp) => (
                    <div
                      key={exp.id}
                      className="bg-[#0c0c0c] p-4 rounded-xl border border-[#191919] hover:border-neutral-700 transition-colors"
                    >
                      <p className="font-medium">
                        <DecryptedText
                          speed={70}
                          animateOn={"view"}
                          text={exp.position}
                        />
                      </p>
                      <p className="text-sm text-neutral-400">
                        <DecryptedText
                          speed={60}
                          animateOn={"view"}
                          text={exp.company}
                        />
                      </p>
                      <p className="text-sm text-neutral-400">
                        <DecryptedText
                          speed={60}
                          animateOn={"view"}
                          text={exp.period}
                        />
                      </p>
                      <ul className="mt-2 text-sm text-neutral-400 list-disc ml-4">
                        {exp.responsibilities.map((responsibility, index) => (
                          <li key={index}>
                            <DecryptedText
                              speed={40}
                              animateOn={"view"}
                              text={responsibility}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What I Do & Education Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 border-t border-neutral-800">
          {/* What I Do */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-200">
              <DecryptedText speed={90} animateOn={"view"} text="What I Do" />
            </h3>
            <div className="grid gap-4">
              <div className="bg-[#0c0c0c] p-4 rounded-xl border border-[#191919]">
                <p className="font-medium">
                  <DecryptedText
                    speed={70}
                    animateOn={"view"}
                    text="Frontend Development"
                  />
                </p>
                <p className="text-sm text-neutral-400">
                  <DecryptedText
                    speed={50}
                    animateOn={"view"}
                    text="Building responsive and modern web apps"
                  />
                </p>
              </div>
              <div className="bg-[#0c0c0c] p-4 rounded-xl border border-[#191919]">
                <p className="font-medium">
                  <DecryptedText
                    speed={70}
                    animateOn={"view"}
                    text="UI/UX Design"
                  />
                </p>
                <p className="text-sm text-neutral-400">
                  <DecryptedText
                    speed={50}
                    animateOn={"view"}
                    text="Creating intuitive user interfaces"
                  />
                </p>
              </div>
              <div className="bg-[#0c0c0c] p-4 rounded-xl border border-[#191919]">
                <p className="font-medium">
                  <DecryptedText
                    speed={70}
                    animateOn={"view"}
                    text="Web Performance"
                  />
                </p>
                <p className="text-sm text-neutral-400">
                  <DecryptedText
                    speed={50}
                    animateOn={"view"}
                    text="Optimizing for speed and efficiency"
                  />
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-200">
              <DecryptedText speed={90} animateOn={"view"} text="Education" />
            </h3>
            <div className="bg-[#0c0c0c] p-4 rounded-xl border border-[#191919]">
              <p className="font-medium">
                <DecryptedText
                  speed={70}
                  animateOn={"view"}
                  text="Informatics (Faculty of Applied Sciences)"
                />
              </p>
              <p className="text-sm text-neutral-400 mt-1">
                <DecryptedText
                  speed={60}
                  animateOn={"view"}
                  text="Poznan, Poland"
                />
              </p>
              <p className="text-sm text-neutral-400">
                <DecryptedText
                  speed={60}
                  animateOn={"view"}
                  text="2021 - 2025"
                />
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="pt-16 space-y-8">
          <h3 className="text-2xl font-semibold text-neutral-200">
            <DecryptedText
              speed={90}
              animateOn={"view"}
              text="Skills & Tools"
            />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stack.map((category) => (
              <div
                key={category.name}
                className="bg-[#0c0c0c] p-6 rounded-xl border border-[#191919]"
              >
                <h4 className="font-medium mb-4">
                  <DecryptedText
                    speed={70}
                    animateOn={"view"}
                    text={category.name}
                  />
                </h4>
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
                        className="w-6 h-6"
                      />
                      <span className="text-[10px] text-neutral-400 text-center">
                        <DecryptedText
                          speed={40}
                          animateOn={"view"}
                          text={tech.name}
                        />
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
