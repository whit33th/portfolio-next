"use client";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/UI/sidebar";
import {
 
  IconCode,
  IconStack2,
  IconUser,
  IconDownload,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SidebarDemo({ children }: { children: React.ReactNode }) {
  const links = [
    {
      label: "Projects",
      href: "/projects",
      icon: <IconCode className="h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Stack",
      href: "/stack",
      icon: <IconStack2 className="h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "About",
      href: "/about",
      icon: <IconUser className="h-5 w-5 flex-shrink-0" />,
    },
    // {
    //   label: "Resume",
    //   href: "/resume",
    //   icon: <IconArrowLeft className="h-5 w-5 flex-shrink-0" />,
    // },
  ];
  const [open, setOpen] = useState(false);
  const handleDownload = () => {
    const cvUrl = "/resume.pdf";
    window.open(cvUrl, "_blank");
  };
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row w-full flex-1 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <div>
                <SidebarLink
                  link={{
                    label: "Daniil Kaminskyi",
                    href: "/about",
                    icon: (
                      <Image
                        src="/img/me.webp"
                        className="h-7 w-7 flex-shrink-0 rounded-full"
                        width={50}
                        height={50}
                        alt="Avatar"
                      />
                    ),
                  }}
                />
              </div>
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>

            <div className="mt-auto mb-6 px-2">
              <div className="bg-[#0c0c0c] border border-[#191919] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutral-200 mb-2">Resume</h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Get my latest resume in PDF format
                </p>
                <p className="text-xs mb-2 text-neutral-500"> Last updated 2025</p>

                <button
                  onClick={handleDownload}
                  className=" w-full flex justify-center items-center gap-1 bg-[#0c0c0c] hover:bg-[#151515] border border-[#191919] rounded-xl px-8 py-4 text-neutral-200 font-medium transition-colors"
                >
                  <IconDownload className="h-4 w-4" />
                  <span className="font-medium">Download</span>
                </button>
              </div>
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <div className="" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre"
      >
        &lt;whit33th/&gt;
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
