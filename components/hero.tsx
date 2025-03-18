"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "./max-width-wrapper";

const galleryImages = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
  "/hero/hero-4.jpg",
  "/hero/hero-5.jpg",
  "/hero/hero-6.jpg",
  "/hero/hero-7.jpg",
];

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>(null);

  // Auto-rotate active image
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-950/10">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              SONANCE MEDIA
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground tracking-widest">
              BRINGING BRANDS TO HEARTS
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              We craft digital experiences that resonate with your audience,
              creating meaningful connections that drive growth and engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button
                className="rounded-md shadow-none text-xs bg-[#049CE3] hover:bg-[#0380bb]"
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-md border-border shadow-none text-xs hover:text-[#049CE3] hover:border-[#049CE3]"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <div className="relative h-[400px] md:h-[500px] order-1 lg:order-2">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={galleryImages[activeImage] || "/placeholder.svg"}
                    alt={`Featured image ${activeImage + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </AnimatePresence>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveImage(index);
                      // Reset the interval when manually changing images
                      if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                      }
                      intervalRef.current = setInterval(() => {
                        setActiveImage(
                          (prev) => (prev + 1) % galleryImages.length
                        );
                      }, 4000);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeImage
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail preview */}
            <div className="absolute -bottom-10 -right-5 hidden md:block">
              <div className="relative w-[100px] h-[140px] rounded-md overflow-hidden border-2 border-white dark:border-gray-800 shadow-md">
                <Image
                  src={
                    galleryImages[(activeImage + 1) % galleryImages.length] ||
                    "/placeholder.svg"
                  }
                  alt="Next image preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
