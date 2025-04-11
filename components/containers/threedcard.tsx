"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../UI/3d-card";
import Link from "next/link";
import { HoverBorderGradient } from "../UI/hover-border-gradient";
import { IProject } from "@/data/projects";

export function ThreeDCard({
  image,
  git,
  stack,
  title,
  description,
  media = "image",
}: IProject) {
  return (
    <CardContainer className="inter-var flex h-full flex-1">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-card p-6 dark:border-white/[0.2] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem translateZ="35" className="text-xl font-bold">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="35"
          className="mt-1 max-w-sm rounded-xl bg-neutral-50 p-2 text-xs text-black"
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

          {git && (
            <CardItem translateZ={20}>
              <Link target="_blank" href={git}>
                <HoverBorderGradient
                  as="button"
                  className="rounded-xl bg-black px-4 py-2 text-xs font-bold dark:bg-white"
                >
                  <span>GitHub</span>
                </HoverBorderGradient>
              </Link>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
