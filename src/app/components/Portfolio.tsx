"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "EventUp – Event Management Platform",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Midtrans",
      "Recharts",
    ],
    image: "/portfolio/EventUp.jpg",
    link: "https://event-up-six.vercel.app/",
    situation:
      "An MVP web platform that connects event organizers and attendees in a single application.",
    task: "Build an event platform for browsing events, purchasing tickets, managing referrals, and organizer event management.",
    action:
      "Implemented full-stack features including event discovery, ticketing flow, referrals, and analytics dashboard.",
    result:
      "Delivered a fully functional MVP showcasing full-stack development and real-world event workflows.",
  },
  {
    title: "Omnifood Company Profile Website",
    technologies: ["React", "Next.js", "Tailwind CSS", "Backendless"],
    image: "/portfolio/omnifood.jpg",
    link: "https://omnifood-amber-iota.vercel.app/",
    situation:
      "A full-stack project to replicate and enhance a real-world company profile site using modern tools.",
    task: "Build a responsive multi-page website with dynamic content, blog creation, and user authentication.",
    action:
      "Implemented with Next.js, Tailwind CSS, Backendless, and API integration.",
    result:
      "Successfully launched a functional and responsive company profile app with blog features and login system.",
  },
  {
    title: "Nexter - Real Estate Portfolio",
    technologies: ["HTML", "SCSS", "CSS Grid"],
    image: "/portfolio/nexter.jpg",
    link: "https://nexter-hasbi.netlify.app/",
    situation:
      "A creative portfolio website for a fictional real estate brand to showcase luxury homes.",
    task: "Design and develop a highly visual, grid-based layout demonstrating CSS Grid mastery.",
    action: "Built layouts using semantic HTML5 and advanced CSS Grid.",
    result:
      "Delivered a responsive and visually polished real estate portfolio site.",
  },
  {
    title: "Bankist - Bank App Simulation",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/portfolio/bankist.jpg",
    link: "https://bankist-hasbi.netlify.app/",
    situation:
      "An interactive simulation project to deepen JavaScript DOM manipulation and event handling knowledge.",
    task: "Build a banking interface with features like login, transfers, loan requests, and account closure.",
    action:
      "Implemented multiple DOM features, timers, and form validation to mimic real banking logic.",
    result:
      "Built a smooth UX-focused simulation that helped reinforce advanced DOM and UI logic.",
  },
  {
    title: "Trillo - Hotel Booking UI",
    technologies: ["HTML", "SCSS"],
    image: "/portfolio/trillo.jpg",
    link: "https://trillo-hasbi.netlify.app/",
    situation:
      "A practice project to learn and apply SCSS during early stages of web development learning.",
    task: "Build a responsive hotel booking interface layout using semantic HTML and modern SCSS features.",
    action:
      "Structured the layout with HTML and styled it using SCSS variables, nesting, and mixins for reusable styles.",
    result:
      "Delivered a clean and responsive UI layout, strengthening my SCSS and layouting skills.",
  },
];

export default function Portfolio() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width < 768) setItemsToShow(1);
      else if (width < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const total = projects.length;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const visibleProjects = Array.from({ length: itemsToShow }, (_, i) => {
    const index = (startIndex + i) % total;
    return projects[index];
  });

  return (
    <motion.section
      id="portfolio"
      className="py-16 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="px-[12%] mb-10 text-center">
        <motion.h4
          className="text-lg mb-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          My Portfolio
        </motion.h4>
        <motion.h2
          className="text-4xl font-[var(--font-ovo)]"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          My Latest Work
        </motion.h2>
        <motion.p
          className="text-center max-w-2xl mx-auto mt-5 text-muted-foreground font-[var(--font-ovo)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Welcome to my web development portfolio. Here you&apos;ll find a
          selection of projects that reflect my journey and skills in building
          responsive and dynamic websites using HTML, CSS, JavaScript, React,
          and Next.js.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className="rounded-full shadow p-2 transition bg-white text-black hover:bg-gray-300"
          >
            ❮
          </button>
        </div>
        <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className="rounded-full shadow p-2 transition"
          >
            ❯
          </button>
        </div>

        {/* Cards */}
        {/* Cards Container */}
        <div
          className={`max-w-[86rem] mx-auto grid gap-6 transition-all duration-500 ${
            itemsToShow === 1
              ? "grid-cols-1"
              : itemsToShow === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }`}
        >
          {visibleProjects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg flex flex-col h-full w-full"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full h-48 relative bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </Link>

              <CardContent className="p-6 flex flex-col flex-grow">
                {/* Judul dengan tinggi tetap (2 baris) */}
                <h3 className="text-xl font-semibold mb-2 min-h-[3.5rem] line-clamp-2">
                  {project.title}
                </h3>

                {/* Technologies dengan tinggi tetap (3 baris/lebih tergantung konten) */}
                <div className="text-sm text-muted-foreground mb-4 min-h-[4rem]">
                  <span className="font-semibold text-black dark:text-white">
                    Technologies:
                  </span>{" "}
                  <p className="line-clamp-3">
                    {project.technologies.join(", ")}
                  </p>
                </div>

                {/* Bagian STAR - Gunakan flex-grow agar nempel ke bawah */}
                <div className="text-sm space-y-2 hidden lg:block mt-auto border-t pt-4">
                  <p className="line-clamp-2">
                    <strong>Situation:</strong> {project.situation}
                  </p>
                  <p className="line-clamp-2">
                    <strong>Task:</strong> {project.task}
                  </p>
                  <p className="line-clamp-2">
                    <strong>Action:</strong> {project.action}
                  </p>
                  <p className="line-clamp-2">
                    <strong>Result:</strong> {project.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
