// components/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { Wrench, Code2, ServerCog } from "lucide-react";

const skills = [
  {
    category: "Front-End Skills",
    icon: Code2,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Back-End Skills",
    icon: ServerCog,
    items: [
      "Node.js",
      "Express.js",
      "Django",
      "Ruby on Rails",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "Jenkins", "AWS", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full scroll-mt-20"
      >
        {/* Heading */}
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-2 text-base sm:text-lg"
        >
          My Skills
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-[var(--font-ovo)]"
        >
          Dev Toolkit
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-4 sm:mt-5 mb-8 sm:mb-12 font-[var(--font-ovo)] text-sm sm:text-base"
        >
          As an aspiring web developer, I've been learning essential
          technologies across the full development stack. From designing user
          interfaces to understanding backend processes, here are the core
          skills I'm currently building.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="bg-white dark:bg-zinc-900 p-5 sm:p-6 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-800"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {skill.category}
                  </h3>
                </div>
                <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
