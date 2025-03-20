"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";

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
  // const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  // Auto-rotate active image
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveImage((prev) => (prev + 1) % galleryImages.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section
      ref={containerRef}
      className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-950/10 overflow-hidden"
    >
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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

          {/* Creative Image Gallery */}
          <div className="relative h-[400px] md:h-[500px] select-none">
            {/* Floating image grid with parallax effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{ opacity }}
            >
              {/* Main featured image (larger) */}
              <motion.div
                className="absolute top-[10%] left-[10%] z-30 rounded-lg overflow-hidden shadow-xl border border-white/20 dark:border-gray-800/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ y: y1 }}
              >
                <div className="relative w-[180px] h-[240px] md:w-[220px] md:h-[300px] bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={galleryImages[0] || "/placeholder.svg"}
                    alt="Featured work"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3">
                    <span className="text-white text-xs font-medium">
                      Project
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Secondary images (smaller, staggered) */}
              <motion.div
                className="absolute top-[5%] right-[15%] z-20 rounded-lg overflow-hidden shadow-lg border border-white/20 dark:border-gray-800/50"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -5 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ y: y2 }}
              >
                <div className="relative w-[120px] h-[160px] md:w-[160px] md:h-[200px] bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={galleryImages[1] || "/placeholder.svg"}
                    alt="Secondary work"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-[15%] left-[25%] z-10 rounded-lg overflow-hidden shadow-lg border border-white/20 dark:border-gray-800/50"
                initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ y: y3 }}
              >
                <div className="relative w-[140px] h-[100px] md:w-[180px] md:h-[130px] bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={galleryImages[2] || "/placeholder.svg"}
                    alt="Secondary work"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-[25%] right-[5%] z-20 rounded-lg overflow-hidden shadow-lg border border-white/20 dark:border-gray-800/50"
                initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ y: y1 }}
              >
                <div className="relative w-[100px] h-[150px] md:w-[140px] md:h-[200px] bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={galleryImages[3] || "/placeholder.svg"}
                    alt="Secondary work"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-[40%] right-[30%] w-8 h-8 rounded-full border-2 border-[#049CE3]/30 dark:border-[#049CE3]/50"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />

              <motion.div
                className="absolute bottom-[10%] left-[15%] w-4 h-4 rounded-full bg-[#049CE3]/20 dark:bg-[#049CE3]/30"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />

              <motion.div
                className="absolute top-[20%] left-[40%] text-[#049CE3]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Plus className="w-6 h-6" />
              </motion.div>

              {/* Image selection dots */}
              {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeImage
                        ? "bg-[#049CE3]"
                        : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div> */}
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
