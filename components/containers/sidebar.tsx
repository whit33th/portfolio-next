"use client";
import { cn } from "@/lib/utils";
import {
  IconCode,
  IconDownload,
  IconStack2,
  IconUser,
} from "@tabler/icons-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Overlay from "../layouts/overlay";
import { Sidebar, SidebarBody, SidebarLink } from "../UI/sidebar";
import Dock from "./Dock";

export function SidebarDemo({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
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
      href: "/",
      icon: <IconUser className="h-5 w-5 flex-shrink-0" />,
    },
  ];
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    const cvUrl = "/resume.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col overflow-hidden rounded-md md:flex-row",
        "sticky left-0 top-0 h-screen",
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden px-4 md:px-0">
            <>
              <div className="flex flex-col items-center gap-2 sm:gap-0 md:flex-row">
                <Image
                  src="/img/me.webp"
                  className="aspect-square h-24 w-24 flex-shrink-0 rounded-xl object-cover md:h-12 md:w-12"
                  width={64}
                  height={64}
                  alt="My photo"
                  loading="eager"
                />
                <div className="ml-4 flex flex-col">
                  <h2 className="text-center text-lg font-semibold text-neutral-200 sm:text-start">
                    Daniil Kaminskyi
                  </h2>
                  <p className="text-sm text-neutral-400">
                    deniil019@gmail.com
                  </p>
                </div>
              </div>
            </>

            <div className="mt-4 flex h-full flex-col gap-4 rounded-xl border border-[#191919] bg-[#0c0c0c] p-6">
              {links.map((link, idx) => (
                <SidebarLink
                  pathname={pathname}
                  key={idx}
                  link={link}
                  onClick={handleLinkClick}
                />
              ))}
            </div>

            <div className="mt-auto">
              <div className="my-4">
                <div className="rounded-xl border border-[#191919] bg-[#0c0c0c] p-6">
                  <h3 className="mb-2 text-lg font-semibold text-neutral-200">
                    Resume
                  </h3>
                  <p className="mb-4 text-sm text-neutral-400">
                    Get my latest resume in PDF format
                  </p>
                  <p className="mb-2 text-xs text-neutral-500">
                    {" "}
                    Last updated 2025
                  </p>

                  <button
                    onClick={handleDownload}
                    className="flex w-full items-center justify-center gap-1 rounded-xl border border-[#191919] bg-[#0c0c0c] px-8 py-4 font-medium text-neutral-200 transition-colors hover:bg-[#151515]"
                  >
                    <IconDownload className="h-4 w-4" />
                    <span className="font-medium">Download</span>
                  </button>
                </div>
              </div>

              <div className="relative h-[60px]">
                <Dock position="bottom" />
              </div>
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      <main className="relative h-screen w-full overflow-y-auto">
        <Image
          src="/img/bg.png"
          alt="Background"
          width={500}
          height={500}
          className="fixed z-[-1] h-full w-full object-cover opacity-15"
        />
        <Overlay key={pathname}>{children}</Overlay>
      </main>
    </div>
  );
}
