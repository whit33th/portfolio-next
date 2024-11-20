"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import avatar from "@/assets/avatar.gif";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center space-y-8 max-w-3xl mx-auto px-4 pb-24"
      >
        <div className="space-y-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-8"
          >
            <Image
              className="w-20 h-20 rounded-full bg-card flex items-center justify-center"
              src={avatar}
              alt="avatar"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            Frontend Developer
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Crafting minimalist and functional web experiences with modern
            technologies
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg" className="group relative overflow-hidden">
            <Link href="#projects">
              <span className="relative z-10 flex items-center">
                View Projects
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="group glass-card"
          >
            <Link href="https://github.com" target="_blank">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              GitHub
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="group glass-card"
          >
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              LinkedIn
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ChevronRight className="h-6 w-6 rotate-90" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
