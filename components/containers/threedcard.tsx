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
    <CardContainer className="inter-var flex flex-1 h-full">
      <CardBody className="bg-card relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="35" className="text-xl font-bold">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="35"
          className=" text-xs max-w-sm mt-1 text-black  p-2 rounded-xl bg-neutral-50"
        >
          {description}
        </CardItem>
        <CardItem translateZ="45" className="w-full mt-4">
          {media === "image" ? (
            <Image
              src={image || "/img/grey.png"}
              height="1000"
              width="1000"
              className="w-full object-cover aspect-video rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
              loading="eager"
            />
          ) : (
            <video
              src={image}
              className="w-full object-cover aspect-video rounded-xl group-hover/card:shadow-xl"
              autoPlay
              poster="/img/grey.png"
              muted
              loop
              playsInline
            />
          )}
        </CardItem>
        <div className="flex justify-between items-start mt-4 gap-4">
          <CardItem
            translateZ={20}
            className=" rounded-xl text-xs font-normal "
          >
            <div className="flex flex-wrap gap-1 ">
              {stack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-foreground text-black px-2 py-1 rounded-2xl text-[12px] font-bold whitespace-nowrap"
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
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white  text-xs font-bold"
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
