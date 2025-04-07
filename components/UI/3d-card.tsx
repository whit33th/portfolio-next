"use client";

import { cn } from "@/lib/utils";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
  rotateX = 25, // Default value for X rotation sensitivity
  rotateY = 25, // Default value for Y rotation sensitivity
  threshold = 5, // Minimum movement threshold
  damping = 5, // Damping factor to smooth rotation
  transition = { duration: 0.3, timing: "cubic-bezier(0.4, 0, 0.2, 1)" },
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  rotateX?: number;
  rotateY?: number;
  threshold?: number;
  damping?: number;
  transition?: { duration: number; timing: string };
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [rotationValues, setRotationValues] = useState({ x: 0, y: 0 });
  const lastMousePosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    // Calculate the center-relative position
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    // Calculate the distance from center
    const distance = Math.sqrt(x * x + y * y);

    // Apply threshold - ignore tiny movements
    if (distance < threshold) {
      return;
    }

    // Apply damping to smooth the effect
    const dampX = x / (rotateX * damping);
    const dampY = y / (rotateY * damping);

    // Set the new rotation values with damping
    setRotationValues({
      x: -dampY,
      y: dampX,
    });

    // Apply the transformation
    containerRef.current.style.transform = `rotateY(${dampX}deg) rotateX(${-dampY}deg)`;

    // Store last position
    lastMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
    // Add a slight transition for initial tilt
    containerRef.current.style.transition = `transform ${
      transition.duration / 2
    }s ${transition.timing}`;
    // Clear transition after the initial movement
    setTimeout(() => {
      if (containerRef.current) containerRef.current.style.transition = "none";
    }, transition.duration * 250);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transition = `transform ${transition.duration}s ${transition.timing}`;
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    setRotationValues({ x: 0, y: 0 });
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("", containerClassName)}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn("", className)}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        " [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardItemProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
}

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    const handleAnimations = () => {
      if (!ref.current) return;

      ref.current.style.transition =
        "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";

      if (isMouseEntered) {
        ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      } else {
        ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      }
    };

    handleAnimations();
  }, [
    isMouseEntered,
    translateX,
    translateY,
    translateZ,
    rotateX,
    rotateY,
    rotateZ,
  ]);

  return (
    <Tag ref={ref} className={cn("w-fit", className)} {...rest}>
      {children}
    </Tag>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
