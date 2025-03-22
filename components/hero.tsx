"use client";

import {
  animate,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { Spotlight } from "./ui/spotlight";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Floating animation values
  const floatY1 = useMotionValue(0);
  const floatY2 = useMotionValue(0);
  const floatY3 = useMotionValue(0);
  const floatY4 = useMotionValue(0);

  // Smooth spring physics for floating elements
  const springFloatY1 = useSpring(floatY1, { stiffness: 100, damping: 30 });
  const springFloatY2 = useSpring(floatY2, { stiffness: 80, damping: 25 });
  const springFloatY3 = useSpring(floatY3, { stiffness: 90, damping: 20 });
  const springFloatY4 = useSpring(floatY4, { stiffness: 70, damping: 15 });

  // Rotation values for subtle image tilting
  const rotateZ1 = useMotionValue(0);
  const rotateZ2 = useMotionValue(-5);
  const rotateZ3 = useMotionValue(3);
  const rotateZ4 = useMotionValue(-3);

  // Spring physics for rotation
  const springRotateZ1 = useSpring(rotateZ1, { stiffness: 200, damping: 40 });
  const springRotateZ2 = useSpring(rotateZ2, { stiffness: 150, damping: 35 });
  const springRotateZ3 = useSpring(rotateZ3, { stiffness: 180, damping: 30 });
  const springRotateZ4 = useSpring(rotateZ4, { stiffness: 160, damping: 25 });

  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  // Pulse animation for decorative elements
  const [pulseScale, setPulseScale] = useState(1);
  const [plusRotate, setPlusRotate] = useState(0);

  // Spotlight movement
  const spotlightX = useMotionValue(60);
  const spotlightY = useMotionValue(-20);
  const springSpotlightX = useSpring(spotlightX, {
    stiffness: 50,
    damping: 30,
  });
  const springSpotlightY = useSpring(spotlightY, {
    stiffness: 50,
    damping: 30,
  });

  useEffect(() => {
    // Continuous floating animations
    const floatAnimation1 = animate(floatY1, [0, -10, 0], {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    });

    const floatAnimation2 = animate(floatY2, [0, -15, 0], {
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    });

    const floatAnimation3 = animate(floatY3, [0, -8, 0], {
      duration: 4.5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    });

    const floatAnimation4 = animate(floatY4, [0, -12, 0], {
      duration: 3.5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    });

    // Subtle rotation animations
    const rotateAnimation1 = animate(rotateZ1, [0, 1, 0], {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    });

    const rotateAnimation2 = animate(rotateZ2, [-5, -4, -5], {
      duration: 7,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    });

    const rotateAnimation3 = animate(rotateZ3, [3, 4, 3], {
      duration: 8,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    });

    const rotateAnimation4 = animate(rotateZ4, [-3, -4, -3], {
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    });

    // Pulse animation for decorative elements
    const pulseInterval = setInterval(() => {
      setPulseScale((prev) => (prev === 1 ? 1.1 : 1));
    }, 2000);

    // Rotate plus icon
    const rotateInterval = setInterval(() => {
      setPlusRotate((prev) => prev + 45);
    }, 5000);

    // Random spotlight movement
    const spotlightInterval = setInterval(() => {
      spotlightX.set(Math.random() * 120);
      spotlightY.set(Math.random() * -40);
    }, 8000);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      floatAnimation1.stop();
      floatAnimation2.stop();
      floatAnimation3.stop();
      floatAnimation4.stop();
      rotateAnimation1.stop();
      rotateAnimation2.stop();
      rotateAnimation3.stop();
      rotateAnimation4.stop();
      clearInterval(pulseInterval);
      clearInterval(rotateInterval);
      clearInterval(spotlightInterval);
    };
  }, [
    floatY1,
    floatY2,
    floatY3,
    floatY4,
    rotateZ1,
    rotateZ2,
    rotateZ3,
    rotateZ4,
    spotlightX,
    spotlightY,
  ]);

  return (
    <section
      ref={containerRef}
      className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-950/10 overflow-hidden"
    >
      <motion.div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_0.05px,transparent_1px)]"
        )}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />
      {/* Radial gradient for the container to give a faded look */}
      <motion.div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:from-background dark:to-blue-950/10" />
      <MaxWidthWrapper className="relative">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60 hidden md:block"
          fill="white"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8 "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
            >
              <motion.span className="inline-block">
                BRINGING BRANDS <br /> TO HEARTS
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-sm md:text-base text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We craft digital experiences that resonate with your audience,
              creating meaningful connections that drive growth and engagement.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                ref={buttonRef}
                className="shine-button rounded-md shadow-none text-xs bg-[#049CE3] hover:bg-[#0380bb] relative overflow-hidden cursor-pointer w-full sm:w-fit"
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10">View Our Work</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                <div className="shine-effect"></div>
              </Button>
              <Button
                variant="outline"
                className="rounded-md border-border shadow-none text-xs hover:text-[#049CE3] hover:border-[#049CE3] w-full sm:w-fit cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <motion.span
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  Get in Touch
                </motion.span>
              </Button>
            </motion.div>
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
                style={{
                  y: y1,
                  translateY: springFloatY1,
                  rotateZ: springRotateZ1,
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-[180px] h-[240px] md:w-[220px] md:h-[300px] bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={galleryImages[0] || "/placeholder.svg"}
                    alt="Featured work"
                    fill
                    className="object-cover select-none"
                    draggable="false"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3"
                    whileHover={{ opacity: 1 }}
                  >
                    <span className="text-white text-xs font-medium">
                      Project
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Secondary images (smaller, staggered) */}
              <motion.div
                className="absolute top-[5%] right-[15%] z-20 rounded-lg overflow-hidden shadow-lg border border-white/20 dark:border-gray-800/50"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{
                  y: y2,
                  translateY: springFloatY2,
                  rotateZ: springRotateZ2,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-[120px] h-[160px] md:w-[160px] md:h-[200px] bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={galleryImages[1] || "/placeholder.svg"}
                    alt="Secondary work"
                    fill
                    className="object-cover select-none"
                    draggable="false"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-[15%] left-[25%] z-10 rounded-lg overflow-hidden shadow-lg border border-white/20 dark:border-gray-800/50"
                initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  y: y3,
                  translateY: springFloatY3,
                  rotateZ: springRotateZ3,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-[140px] h-[100px] md:w-[180px] md:h-[130px] bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={galleryImages[2] || "/placeholder.svg"}
                    alt="Secondary work"
                    fill
                    className="object-cover select-none"
                    draggable="false"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-[25%] right-[5%] z-20 rounded-lg overflow-hidden shadow-lg border border-white/20 dark:border-gray-800/50"
                initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  y: y1,
                  translateY: springFloatY4,
                  rotateZ: springRotateZ4,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-[100px] h-[150px] md:w-[140px] md:h-[200px] bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={galleryImages[3] || "/placeholder.svg"}
                    alt="Secondary work"
                    fill
                    className="object-cover select-none"
                    draggable="false"
                  />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-[40%] right-[30%] w-8 h-8 rounded-full border-2 border-[#049CE3]/30 dark:border-[#049CE3]/50"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: pulseScale,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute bottom-[10%] left-[15%] w-4 h-4 rounded-full bg-[#049CE3]/20 dark:bg-[#049CE3]/30"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: pulseScale === 1 ? 1.1 : 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              <motion.div
                className="absolute top-[20%] left-[40%] text-[#049CE3]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 0.3,
                  rotate: plusRotate,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  rotate: {
                    duration: 2,
                    ease: "linear",
                  },
                }}
              >
                <Plus className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>

      <style jsx global>{`
        .shine-button {
          position: relative;
          overflow: hidden;
        }

        .shine-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: translateX(-100%);
          pointer-events: none;
        }

        .shine-button:hover .shine-effect {
          transform: translateX(100%);
          transition: transform 0.8s ease;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
