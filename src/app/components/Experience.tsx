import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "SEO Copywriter (Freelance)",
    company: "Remote",
    duration: "Jul 2024 – Dec 2024",
    responsibilities: [
      "Wrote 10-15 SEO articles daily, meeting weekly targets remotely",
    ],
  },
  {
    title: "Script Writer",
    company: "Radio Broadcast",
    duration: "2020",
    responsibilities: ["Created & researched content for radio broadcast"],
  },
  {
    title: "Event Coordinator",
    company: "National Seminar",
    duration: "2019",
    responsibilities: ["Managed team & logistics for national seminar"],
  },
  {
    title: "Public Relations Staff",
    company: "Event Committee",
    duration: "2019",
    responsibilities: ["Handled permits & speaker communication"],
  },
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg"
      >
        Experience
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-[var(--font-ovo)]"
      >
        My Journey
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-[var(--font-ovo)]"
      >
        Every journey begins with a step. From communication to code, I've grown
        through writing gigs, bootcamp projects, and team work. This timeline
        maps my path into tech
      </motion.p>

      <ul className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700">
        {experiences.map((exp, idx) => (
          <li
            key={idx}
            className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3"
          >
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700 dark:text-gray-300">
                  {exp.duration}
                </time>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-500 italic dark:text-gray-400">
                  {exp.company}
                </p>

                {/* Responsibilities tanpa bullet, sejajar */}
                <ul className="mt-0.5 text-sm text-gray-700 dark:text-gray-200 list-none pl-0 group-odd:pr-4 group-even:pl-4">
                  {exp.responsibilities.map((res, i) => (
                    <li
                      key={i}
                      className="group-odd:text-right group-even:text-left"
                    >
                      {res}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Experience;
