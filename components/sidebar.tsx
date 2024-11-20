"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "@/components/mode-toggle";
import { FileText, Home, User, Code2, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#skills", label: "Skills", icon: Code2 },
    { href: "#contact", label: "Contact", icon: Mail },
    { href: "/cv", label: "CV", icon: FileText },
  ];

  const sidebar = (
    <div className={cn("pb-12 min-h-screen bg-sidebar", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font tracking-tight px-4"> {'Daniil Kaminskyi'}</h2>
            <ModeToggle />
          </div>
        </div>
        <div className="px-3 py-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start "
                asChild
              >
                <Link

                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <ScrollArea className="flex flex-col border-r bg-card">
          {sidebar}
        </ScrollArea>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 z-40 flex w-64 flex-col md:hidden"
          >
            <ScrollArea className="flex flex-col bg-card">
              {sidebar}
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}