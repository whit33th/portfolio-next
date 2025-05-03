import { useState, useEffect, useCallback } from "react";
import { useSpring, animated, useSprings } from "@react-spring/web";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
} from "@tabler/icons-react";

type Position = "bottom" | "top" | "left" | "right";

interface DockProps {
  position?: Position;
  collapsible?: boolean;
  responsive?: Position;
}

const SOCIAL_ITEMS = [
  {
    icon: <IconBrandGithub className="h-5 w-5" />,
    href: "https://github.com/whit33th",
    label: "GitHub",
  },
  {
    icon: <IconBrandLinkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/whit33th/",
    label: "LinkedIn",
  },
  {
    icon: <IconBrandTelegram className="h-5 w-5" />,
    href: "https://t.me/whit33th",
    label: "Telegram",
  },
];

const Dock = ({
  position = "bottom",
  collapsible = false,
  responsive = "bottom",
}: DockProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isDockVisible, setDockVisible] = useState(!collapsible);
  const [currentPosition, setCurrentPosition] = useState<Position>(position);

  // gets the position-based translation
  const getTranslateValue = useCallback(
    (position: Position, isHovered: boolean) => {
      if (!isHovered) return "translateX(0px) translateY(0px)";

      const translations = {
        left: "translateX(5px) translateY(0px)",
        right: "translateX(-5px) translateY(0px)",
        top: "translateX(0px) translateY(5px)",
        bottom: "translateX(0px) translateY(-5px)",
      };
      return translations[position];
    },
    [],
  );

  // creates the spring for all items
  const [springs, api] = useSprings(
    SOCIAL_ITEMS.length,
    () => ({
      scale: 1,
      translate: "translateX(0px) translateY(0px)",
      config: { tension: 200, friction: 15 },
    }),
    [currentPosition],
  );

  // updates the springs when hover state changes
  useEffect(() => {
    api.start((index) => {
      const isHovered = index === hoverIndex;
      const isNeighbor =
        hoverIndex !== null && Math.abs(hoverIndex - index) === 1;

      return {
        scale: isHovered ? 1.5 : isNeighbor ? 1.3 : 1,
        translate: getTranslateValue(currentPosition, isHovered),
        immediate: false,
      };
    });
  }, [hoverIndex, currentPosition, api, getTranslateValue]);

  const handleMouseEnter = useCallback((index: number) => {
    setHoverIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverIndex(null);
  }, []);

  // handles the dock visibility for collapsible mode
  const handleParentMouseEnter = useCallback(() => {
    if (collapsible) setDockVisible(true);
  }, [collapsible]);

  const handleParentMouseLeave = useCallback(() => {
    if (collapsible) setDockVisible(false);
  }, [collapsible]);

  // handles the responsive positioning
  useEffect(() => {
    const updatePosition = () => {
      setCurrentPosition(
        responsive && window.innerWidth <= 768 ? responsive : position,
      );
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [position, responsive]);

  // gets the position-based styles
  const getDockStyle = useCallback((position: Position): string => {
    const styles = {
      left: "flex-col items-start justify-center h-full left-4",
      right: "flex-col items-end justify-center h-full right-4",
      top: "flex-row items-start justify-center w-full top-4",
      bottom: "flex-row items-end justify-center w-full bottom-4",
    };
    return styles[position] || styles.bottom;
  }, []);

  const visibilitySpring = useSpring({
    opacity: isDockVisible ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div
      className={`pointer-events-none absolute flex h-full w-full ${getDockStyle(
        currentPosition,
      )}`}
      onMouseEnter={handleParentMouseEnter}
      onMouseLeave={handleParentMouseLeave}
    >
      {/* @ts-expect-error - animated.div from react-spring has incompatible style props with TypeScript */}
      <animated.div
        className="pointer-events-auto flex w-full justify-center transition-all duration-200 ease-out"
        style={visibilitySpring}
      >
        {SOCIAL_ITEMS.map((item, index) => (
          // @ts-expect-error - animated.div from react-spring has incompatible style props with TypeScript
          <animated.div
            key={index}
            className="pointer-events-auto relative z-0 mx-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[#191919] bg-[#0c0c0c] transition-all duration-100 ease-out hover:z-[2] hover:bg-[#151515] hover:transition-colors hover:duration-300"
            style={{
              transform: springs[index].scale.to(
                (s) => `${springs[index].translate.get()} scale(${s})`,
              ),
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full w-full items-center justify-center text-neutral-200 hover:text-neutral-100"
              title={item.label}
            >
              {item.icon}
            </a>
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default Dock;
