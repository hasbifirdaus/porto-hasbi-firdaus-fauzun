"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Omnifood Company Profile Website",
    technologies: ["React", "Next.js", "Tailwind CSS", "Backendless"],
    image: "/portfolio/omnifood.jpg",
    link: "https://omnifood-c4h2.vercel.app/",
    situation:
      "A full-stack project to replicate and enhance a real-world company profile site using modern tools.",
    task: "Build a responsive multi-page website with dynamic content, blog creation, and user authentication.",
    action:
      "Developed with Next.js, styled using Tailwind CSS, used Backendless for blog storage, and integrated dynamic team data from API.",
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
    action:
      "Used semantic HTML5 and advanced CSS Grid properties to structure complex layouts with responsive behavior.",
    result:
      "Successfully crafted a visually stunning and responsive real estate portfolio site that improved my layout structuring skills.",
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
      "Structured the layout with HTML and styled it using SCSS variables, nesting, and mixins to create reusable and organized styles.",
    result:
      "Completed a clean and responsive UI layout, improving my confidence in using SCSS and front-end layouting techniques.",
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
        <div
          className={` max-w-[86rem] flex items-center justify-center mx-auto gap-6 transition-all duration-500 ${
            itemsToShow === 1
              ? "grid-cols-1"
              : itemsToShow === 2
              ? "md:grid-cols-2"
              : "md:grid-cols-3"
          }`}
        >
          {visibleProjects.map((project, i) => (
            <Card
              key={i}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={650}
                  height={650}
                  quality={100}
                  className="w-full h-48 object-contain"
                />
              </Link>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Technologies:</span>{" "}
                  {project.technologies.join(", ")}
                </p>
                <div className="text-sm space-y-1 hidden lg:block">
                  <p>
                    <strong>Situation:</strong> {project.situation}
                  </p>
                  <p>
                    <strong>Task:</strong> {project.task}
                  </p>
                  <p>
                    <strong>Action:</strong> {project.action}
                  </p>
                  <p>
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
