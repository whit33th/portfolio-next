"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Skills() {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    "Tools & Others": ["Git", "VS Code", "Figma", "Responsive Design"],
    Learning: ["TypeScript", "Node.js", "Redux", "Testing"],
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tighter mb-4">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies I work with and am currently learning
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div key={category} variants={item}>
            <Card className=" h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="glass-card transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
