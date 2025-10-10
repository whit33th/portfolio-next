"use client";

import { IProject } from "@/data/projects";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../UI/3d-card";
import { HoverBorderGradient } from "../UI/hover-border-gradient";

export function ThreeDCard({
  image,
  git,
  website,
  stack,
  title,
  description,
  media = "image",
}: IProject) {
  return (
    <CardContainer className="inter-var flex h-full flex-1">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-card p-6 dark:border-white/[0.2] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem
          translateZ="35"
          className="flex w-full justify-between text-xl font-bold"
        >
          {title}
          <div className="flex gap-2">
            {website && (
              <Link target="_blank" href={website}>
                <HoverBorderGradient
                  as="button"
                  className="rounded-xl bg-black px-1.5 py-1.5 text-xs font-bold dark:bg-white"
                >
                  <Globe className="h-4 w-4" />
                </HoverBorderGradient>
              </Link>
            )}
            {git && (
              <Link target="_blank" href={git}>
                <HoverBorderGradient
                  as="button"
                  className="rounded-xl bg-black px-1.5 py-1.5 text-xs font-bold dark:bg-white"
                >
                  <Image
                    src="/img/stack/github.svg"
                    alt="GitHub"
                    width={20}
                    height={20}
                    className="h-4 w-4"
                    loading="lazy"
                  />
                </HoverBorderGradient>
              </Link>
            )}
          </div>
        </CardItem>
        <CardItem
          as="p"
          translateZ="35"
          className="mt-2 rounded-xl bg-foreground p-2 font-mono text-xs text-black"
        >
          {description}
        </CardItem>
        <CardItem translateZ="45" className="mt-4 w-full">
          {media === "image" ? (
            <Image
              src={image || "/img/grey.png"}
              height="1000"
              width="1000"
              className="aspect-video w-full rounded-xl object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
              loading="eager"
            />
          ) : (
            <video
              src={image}
              className="aspect-video w-full rounded-xl object-cover group-hover/card:shadow-xl"
              autoPlay
              poster="/img/grey.png"
              muted
              loop
              playsInline
            />
          )}
        </CardItem>
        <div className="mt-4 flex items-start justify-between gap-4">
          <CardItem translateZ={20} className="rounded-xl text-xs font-normal">
            <div className="flex flex-wrap gap-1">
              {stack.map((tech, index) => (
                <span
                  key={index}
                  className="whitespace-nowrap rounded-2xl bg-foreground px-2 py-1 text-[12px] font-bold text-black"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
