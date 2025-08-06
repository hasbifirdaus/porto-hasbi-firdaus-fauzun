"use client";
import React, { useState, useEffect } from "react";
import db from "@/app/db/testimonial.json";
import Image from "next/image";
import { motion } from "framer-motion";
import { getDataTestimonials } from "@/lib/beckendless";

type Props = {
  isDarkMode: boolean;
};

interface ITestimonials {
  objectId: string;
  name: string;
  role: string;
  testimonial: string;
  photoUrl: string;
}

const Testimonials = ({ isDarkMode }: Props) => {
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await getDataTestimonials();
      setTestimonials(data ?? []);
    };
    fetchTestimonials();
  }, []);

  const total = testimonials.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);
  const getVisibleItems = () =>
    Array.from(
      { length: itemsToShow },
      (_, i) => testimonials[(currentIndex + i) % total]
    );

  if (!testimonials || testimonials.length === 0) {
    return <p className="text-center py-10">Loading testimonials...</p>;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="testimonials"
      className={`py-20 transition-all duration-500 ${
        isDarkMode ? "bg-[var(--dark-theme)] text-white" : " text-gray-800"
      }`}
    >
      <div className="w-full px-[12%] py-10 scroll-mt-20">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-2 text-lg"
        >
          Testimonials
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-[var(--font-ovo)]"
        >
          What clients say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-[var(--font-ovo)]"
        >
          Here are some kind words from people I&apos;ve worked with. Their
          feedback shows not just what we built together, but also the learning,
          teamwork, and dedication behind every project.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`grid gap-6 grid-cols-1 ${
            itemsToShow > 1 ? "md:grid-cols-3" : ""
          } transition-all duration-500`}
        >
          {getVisibleItems().map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden p-6 rounded-xl shadow-md text-center transition ${
                isDarkMode
                  ? "bg-[var(--dark-hover)] text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {/* Background image with light blur */}

              <Image
                key={item.photoUrl}
                src={item.photoUrl}
                alt="background blur"
                fill
                unoptimized
                className="object-cover blur-sm brightness-50 opacity-100 z-0"
              />

              {/* Foreground content */}
              <div key={item.objectId} className="relative z-10">
                <div className="flex justify-center mb-4">
                  <Image
                    src={item.photoUrl}
                    alt={item.name}
                    unoptimized
                    width={60}
                    height={60}
                    className="rounded-br-lg rounded-tl-lg border-2 border-gray-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-100 ">{item.role}</p>
                <p
                  className="text-sm italic mt-4 text-neutral-100 font-medium"
                  style={{
                    textShadow:
                      "0 0 4px rgba(255,255,255,0.3), 0 0 8px rgba(255,255,255,0.2)",
                  }}
                >
                  &quot;{item.testimonial}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className={`rounded-full shadow p-2 transition ${
              isDarkMode
                ? "bg-white text-black hover:bg-gray-300"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            ❮
          </button>
        </div>
        <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className={`rounded-full shadow p-2 transition ${
              isDarkMode
                ? "bg-white text-black hover:bg-gray-300"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            ❯
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
