interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  git?: string;
  stack: string[];
}

export const projects: IProject[] = [
  {
    id: 1,
    title: "Tagly",
    description: "Price comparison tool for online shopping. (only in Poland region)",
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
    id: 2,
    title: "MojLekarz",
    description:
      "Portal for booking appointments with ready business logic for firm, admin, doctor and patient.",
    image: "/img/projects/mojlekarz/1.webp",
    git: "https://github.com/whit33th/moj-lekarz-react",
    stack: ["React", "Zustand", "Tanstack Query", "ESLint", "Netlify"],
  },
  {
    id: 3,
    title: "Design studio",
    description: "Website for a design studio with a portfolio and contact form.",
    image: "/img/projects/WebStudio/st1.png",
    git: "https://github.com/whit33th/design-studio",
    stack: ["React", "CSS/SCSS", "Zustand", "ESLint"],
  },
  {
    id: 4,
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
    id: 5,
    title: "RED",
    description: "Fashion store site.",
    image: "/img/projects/Red/1.webp",
    git: "https://github.com/whit33th/Red.com",
    stack: ["PHP", "CSS/SCSS", "API", "Azure"],
  },
  {
    id: 6,
    title: "Netflix",
    description: "Netflix clone.",
    image: "/img/projects/Netflix/1.webp",
    git: "https://github.com/whit33th/Netflix",
    stack: ["React", "Zustand", "SCSS", "Youtube API", "Netlify"],
  },
  {
    id: 7,
    title: "REEDEE",
    description: "Friendly neighborhood library.",
    image: "/img/projects/Reedee/1.webp",
    stack: ["React", "CSS/SCSS"],
  },
  {
    id: 8,
    title: "Medieval Dynasty",
    description: "Medieval game website.",
    image: "/img/projects/MD/1.webp",
    stack: ["React", "CSS/SCSS"],
  },
];
