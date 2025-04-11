import React from "react";
import { HoverBorderGradient } from "../UI/hover-border-gradient";

export function BorderBtn({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
      >
        {children}
      </HoverBorderGradient>
    </div>
  );
}
