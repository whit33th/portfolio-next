export interface IProject {
  title: string;
  description: string;
  image: string;
  git?: string;
  stack: string[];
  media?: "video" | "image";
}

export const projects: IProject[] = [
  {
    title: "Tagly",
    description:
      "Price comparison tool for online shopping. (only in Poland region)",
    image: "/img/projects/tagly/1.webp",
    git: "https://github.com/whit33th/tagly",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Shopping API",
      "Supabase",
      "Tanstack Query",
      "Zustand",
      "ESLint",
      "Netlify",
    ],
  },
  {
    title: "MojLekarz",
    description:
      "Portal for booking appointments with ready business logic for firm, admin, doctor and patient.",
    image: "/img/projects/mojlekarz/1.webp",
    git: "https://github.com/whit33th/moj-lekarz-react",
    stack: ["React", "Zustand", "Tanstack Query", "ESLint", "Netlify"],
  },
  {
    title: "TrueSight",
    description:
      "League of Legends analytics platform with champion win rates, profile stats, match history data and game insights.",
    image: "/video/TrueSight.mkv",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "RIOT API",
      "Next API",
      "Clerk",
      "Tanstack Query",
      "Prisma",
      "ESLint",
    ],
    media: "video",
  },
  {
    title: "Design studio",
    description:
      "Website for a design studio with a portfolio and contact form.",
    image: "/img/projects/WebStudio/st1.png",
    git: "https://github.com/whit33th/design-studio",
    stack: ["React", "CSS/SCSS", "Zustand", "ESLint"],
  },
  {
    title: "PowderPlanet",
    description: "Just a fun project about Arcane World by Netflix.",
    image: "/img/projects/PowderPlanet/1.webp",
    git: "https://github.com/whit33th/PowderPlanet",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Tanstack Query (Riot API)",
      "3D Models",
      "ESLint",
      "Netlify",
    ],
  },
  {
    title: "RED",
    description: "Fashion store site.",
    image: "/img/projects/Red/1.webp",
    git: "https://github.com/whit33th/Red.com",
    stack: ["PHP", "CSS/SCSS", "API", "Azure"],
  },
  {
    title: "Netflix",
    description: "Netflix clone.",
    image: "/img/projects/Netflix/1.webp",
    git: "https://github.com/whit33th/Netflix",
    stack: ["React", "Zustand", "SCSS", "Youtube API", "Netlify"],
  },
  {
    title: "REEDEE",
    description: "Friendly neighborhood library.",
    image: "/img/projects/Reedee/1.webp",
    stack: ["React", "CSS/SCSS"],
  },
  {
    title: "Medieval Dynasty",
    description: "Medieval game website.",
    image: "/img/projects/MD/1.webp",
    stack: ["React", "CSS/SCSS"],
  },
];
