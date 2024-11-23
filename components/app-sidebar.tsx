"use client";

import * as React from "react";
import {
  Frame,
  Map,
  PieChart,
  Briefcase,
  Pen,
  UserRound,
  Github,
  Linkedin,
  Send,
  Layers2,
  Mail 
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { BioSections } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Daniil Kaminskyi",
    
    passion: "Frontend Developer",
  },
  sections: [
    {
      name: "Projects",
      url: "/projects",
      icon: Pen,
    },
    // {
    //   name: "Experience",
    //   url: "/experience",
    //   icon: Briefcase,
    // },
    {
      name: "Stack",
      url: "/stack",
      icon: Layers2,
    },
    {
      name: "About",
      url: "/about",
      icon: UserRound,
    },
  ],
  links: [
    {
      name: "Contact",
      url: "/#",
      icon: Mail,
    },
    {
      name: "GitHub",
      url: "/#",
      icon: Github,
    },
    {
      name: "Linkedin",
      url: "/#",
      icon: Linkedin,
    },
    {
      name: "Telegram",
      url: "/#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <BioSections projects={data.sections} />
        <SidebarGroupLabel className="px-4">Contacts</SidebarGroupLabel>
        <BioSections projects={data.links} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
