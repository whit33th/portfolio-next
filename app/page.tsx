import { experience } from "@/data/experience";
import { stack } from "@/data/stack";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../components/UI/3d-card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-12 py-12 lg:flex-row lg:items-start">
          <CardContainer className="relative h-48 w-48 overflow-hidden rounded-xl border border-neutral-800 lg:h-[500px] lg:w-[400px]">
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
                <h3 className="text-xl font-semibold text-neutral-200">
                  About
                </h3>
                <p className="leading-relaxed text-neutral-400">
                  I am a professional web developer with expertise in building
                  websites. My experience includes proficiency in React, Next,
                  and Tailwind CSS/SCSS/CSS. I continually engage in projects to
                  refine my skills and explore emerging technologies.
                </p>
              </div>

              {/* Experience Section */}
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

        <div className="grid grid-cols-1 gap-8 pb-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-200">
              What I Do
            </h3>
            <div className="grid gap-4">
              <div className="rounded-xl border border-[#191919] bg-[#0c0c0c] p-4">
                <p className="font-medium">Frontend Development</p>
                <p className="text-sm text-neutral-400">
                  Building responsive and modern web apps
                </p>
              </div>
              <div className="rounded-xl border border-[#191919] bg-[#0c0c0c] p-4">
                <p className="font-medium">Web Performance</p>
                <p className="text-sm text-neutral-400">
                  Optimizing for speed and efficiency
                </p>
              </div>
              <div className="rounded-xl border border-[#191919] bg-[#0c0c0c] p-4">
                <p className="font-medium">Testing</p>
                <p className="text-sm text-neutral-400">
                  Creating reliable end-to-end tests
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-200">
              Education
            </h3>
            <div className="rounded-xl border border-[#191919] bg-[#0c0c0c] p-4">
              <p className="font-medium">
                Informatics (Faculty of Applied Sciences)
              </p>
              <p className="mt-1 text-sm text-neutral-400">Poznan, Poland</p>
              <p className="text-sm text-neutral-400">2021 - 2025</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-neutral-200">
            Skills & Tools
          </h3>
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
      </div>
    </div>
  );
}
