export interface IProject {
  title: string;
  description: string;
  image: string;
  git?: string;
  website?: string;
  stack?: string[];
  media?: "video" | "image";
}

export const projects: IProject[] = [
  {
    title: "Night Club",
    description:
      "Modern, fully functional nightclub website with events, gallery, news, and an admin panel for easy content management — built with full SEO optimization.",
    image: "/img/projects/NightClub/1.png",
    git: "https://github.com/whit33th/night-club",
    website: "https://2progi.vercel.app/",
    stack: [
        "Next.js",
        "TypeScript",
        "Convex",
        "Tailwind CSS",
        "SEO (100/100 Lighthouse, 90/100 Analytics)",
        "ESLint",
        "Vercel",
        "Framer Motion",
        "i18n (Multi-language)",
    ],
  },
  {
    title: "Ballon Boutique",
    description:
      "E-commerce website for a balloon boutique, featuring a product catalog, shopping cart, and secure checkout process.",
    image: "/img/projects/BallonBoutique/1.png",
    git: "https://github.com/whit33th/Ballon-Boutique",
    website: "https://www.ballon.boutique",
    stack: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Tailwind CSS",
      "Stripe (Payments)",
      "Playwright (Testing)",
      "SEO",
      "Vercel",
      "Framer Motion",
      "next-intl (Multi-language)",
    ],
  },
  {
    title: "FlowNews",
    description:
      "FlowNews is a comprehensive news platform with a sophisticated email communication system.",
    image: "/img/projects/FlowNews/1.png",
    git: "https://github.com/whit33th/FlowNews_Resend",
    website: "https://flow-news-resend.vercel.app/",
    stack: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Resend",
      "Tailwind CSS",
      "ESLint",
      "Framer Motion",
      "Vercel",
    ],
  },

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
      "Framer Motion",
      "Netlify",
    ],
  },
  {
    title: "MojLekarz",
    description:
      "Portal for booking appointments with ready business logic for firm, admin, doctor and patient.",
    image: "/img/projects/mojlekarz/1.webp",
    git: "https://github.com/whit33th/Moj-Lekarz-MedPortal",
    stack: [
      "React",
      "CSS/SCSS",
      "Tanstack Query",
      "Zustand",
      "Framer Motion",
      "ESLint",
      "Netlify",
    ],
  },
  {
    title: "Waves",
    description:
      "Music player with a playlist and a search engine for finding songs.",
    image: "/img/projects/waves/1.webp",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Convex",
      "Zustand",
      "Framer Motion",
      "ESLint",
    ],
  },
  {
    title: "Growee",
    description:
      "Smart & Cute reminder app that helps you water your plants on time. Keep your plants healthy!",
    image: "/img/projects/Growee/1.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "NeonDB",
      "Next API",
      "Clerk",
      "Pinata",
      "ImageKit",
      "Browser Image Compression",
      "Vercel",
      "ESLint",
    ],
    git: "https://github.com/whit33th/growee",
  },
  {
    title: "TrueSight",
    description:
      "League of Legends analytics platform with champion win rates, profile stats, match history data and game insights.",
    image: "/img/projects/TrueSight/1.webp",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "RIOT API",
      "Next API",
      "Clerk",
      "Tanstack Query",
      "Prisma",
      "Vercel",
      "ESLint",
    ],
  },
  {
    title: "REMO",
    description:
      "A powerful content management platform with advanced email notification system built for creators who manage content across multiple social media platforms.",
    image: "/img/projects/REMO/1.png",
    git: "https://github.com/whit33th/remo",
    website: "https://remo-nu.vercel.app/",
    stack: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Resend",
      "Tailwind CSS",
      "ESLint",
      "Framer Motion",
      "Vercel",
    ],
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
    title: "Sphere",
    description: "Banking platform — landing page concept.",
    image: "/img/projects/Sphere/1.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Resend",
      "Tailwind CSS",
      "ESLint",
      "Framer Motion",
      "Vercel",
    ],
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
