"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "./max-width-wrapper";

const projects = [
  {
    title: "Revitalizing Traditional Brands",
    category: "Brand Strategy",
    description:
      "A complete brand overhaul for a sustainable product line in a competitive market focusing on a digital audience.",
    image: "/hero/hero-5.jpg",
  },
  {
    title: "Engagement Led Traffic Campaign",
    category: "OTT & Digital",
    description:
      "Successful campaigns across OTT channels and top publishers increasing the overall campaign engagement and the brand's website traffic by 400%.",
    image: "/work/startup.jpg",
  },
  {
    title: "Mix and Match of Traditional and Online Media",
    category: "Integrated Marketing",
    description:
      "Combining channels like OOH media, cinema, and online websites and apps & influencer marketing to drive a 360° marketing narrative.",
    image: "/work/sonance-2.jpg",
  },
];

export function WorkShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance the slider
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play when user interacts
  const handleManualChange = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);

    // Resume auto-play after 10 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);

    return () => clearTimeout(timeout);
  };

  const nextSlide = () => {
    handleManualChange((activeIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    handleManualChange((activeIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="work"
      className="py-20 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-950/10"
    >
      <MaxWidthWrapper>
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Our Work
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Showcasing our creative solutions and successful client partnerships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Image */}
          <div className="relative overflow-hidden rounded-md border border-border aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${activeIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  fill
                  className="object-cover select-none"
                  draggable="false"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border-border"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border-border"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#049CE3]/90 text-white">
                {projects[activeIndex].category}
              </span>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col h-full justify-between">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`flex-1 flex flex-col cursor-pointer transition-all duration-300 ${
                    activeIndex === index
                      ? "border-l-2 border-[#049CE3] pl-4 bg-blue-50/20 dark:bg-blue-950/10 rounded-r-md"
                      : "border-l-2 border-transparent pl-4 opacity-70"
                  }`}
                  onClick={() => handleManualChange(index)}
                  whileHover={{
                    x: activeIndex === index ? 0 : 5,
                    backgroundColor:
                      activeIndex === index ? "" : "rgba(239, 246, 255, 0.1)",
                  }}
                >
                  <div className="py-6">
                    <h3 className="text-lg font-medium mb-2 transition-colors">
                      {project.title}
                    </h3>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-muted-foreground">
                            {project.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress indicators */}
            <div className="flex space-x-2 pt-4 mt-4">
              {projects.map((_, index) => (
                <div
                  key={`indicator-${index}`}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === activeIndex ? "bg-[#049CE3] w-8" : "bg-border w-4"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
