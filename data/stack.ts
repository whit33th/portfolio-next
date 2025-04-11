interface ITechnology {
  name: string;
  icon: string;
  description: string;
}
interface IStackCategory {
  name: string;
  content: ITechnology[];
}

export const stack: IStackCategory[] = [
  {
    name: "Frontend",
    content: [
      {
        name: "React",
        icon: "/img/stack/react.svg",
        description: "JavaScript Library",
      },
      {
        name: "Next.js",
        icon: "/img/stack/nextjs.svg",
        description: "React Framework",
      },
      {
        name: "Tailwind CSS",
        icon: "/img/stack/tailwindcss.svg",
        description: "Utility-First CSS Framework",
      },
      {
        name: "TypeScript",
        icon: "/img/stack/typescript.svg",
        description: "Strongly Typed JavaScript",
      },
      {
        name: "Tanstack Query",
        icon: "/img/stack/tanstack.webp",
        description: "Data Fetching Library",
      },
      {
        name: "Zustand",
        icon: "/img/stack/zustand.webp",
        description: "State Management Library",
      },
      {
        name: "Prisma",
        icon: "/img/stack/prisma.webp",
        description: "ORM Service",
      },
      {
        name: "Framer Motion",
        icon: "/img/stack/motion.webp",
        description: "Animation Library",
      },
      {
        name: "PostgreSQL",
        icon: "/img/stack/postgresql.webp",
        description: "Relational Database",
      },
      {
        name: "Supabase",
        icon: "/img/stack/supabase.svg",
        description: "Database and Auth Service",
      },
      {
        name: "Clerk",
        icon: "/img/stack/clerk.webp",
        description: "Authentication Service",
      },
      {
        name: "Kinde",
        icon: "/img/stack/kinde.webp",
        description: "Authentication Service",
      },
    ],
  },
  {
    name: "Tools",
    content: [
      {
        name: "Git",
        icon: "/img/stack/git.svg",
        description: "Version Control System",
      },
      {
        name: "GitHub",
        icon: "/img/stack/github.svg",
        description: "Code Hosting Platform",
      },
      {
        name: "Vercel",
        icon: "/img/stack/vercel.webp",
        description: "Deployment Platform",
      },
      {
        name: "Netlify",
        icon: "/img/stack/netlify.svg",
        description: "Deployment Platform",
      },
      {
        name: "Figma",
        icon: "/img/stack/figma.svg",
        description: "Design Tool",
      },
      {
        name: "Notion",
        icon: "/img/stack/notion.svg",
        description: "Productivity Tool",
      },
      {
        name: "Trello",
        icon: "/img/stack/trello.svg",
        description: "Project Management Tool",
      },
      {
        name: "Swagger",
        icon: "/img/stack/swagger.svg",
        description: "API Documentation Tool",
      },
    ],
  },
];
