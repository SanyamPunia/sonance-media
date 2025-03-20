"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { Users, Lightbulb, Target, Award } from "lucide-react";

export function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Enhanced parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]);
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 1, 1, 0.5, 0]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 0, 1, 1, 0]
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-[#049CE3]/10 dark:border-[#049CE3]/20"></div>
        <div className="absolute bottom-[30%] right-[15%] w-48 h-48 rounded-full border border-[#049CE3]/10 dark:border-[#049CE3]/20"></div>
      </div>

      <MaxWidthWrapper className="relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Meet Our Team
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Passionate experts dedicated to bringing your vision to life
          </p>
        </motion.div>

        {/* Unique staggered layout with enhanced parallax */}
        <div className="relative hidden md:block min-h-[600px] md:min-h-[700px]">
          {/* First media element with parallax */}
          <motion.div
            className="absolute top-0 left-0 md:left-[10%] w-[80%] md:w-[45%] z-20"
            style={{ y: y1, scale: scale1, opacity: opacity1 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-white/20 dark:border-gray-800/50 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/work/sonance-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-white text-lg font-semibold">
                  Collaborative Process
                </h3>
                <p className="text-white/80 text-xs">
                  Our team works together to deliver exceptional results
                </p>
              </div>
            </div>
          </motion.div>

          {/* Second media element with parallax */}
          <motion.div
            className="absolute top-[30%] right-0 md:right-[10%] w-[80%] md:w-[45%] z-10"
            style={{ y: y2, scale: scale2, opacity: opacity2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-white/20 dark:border-gray-800/50 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image
                src="/work/sonance-3.jpg"
                alt="Our team collaborating"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-white text-lg font-semibold">
                  Creative Excellence
                </h3>
                <p className="text-white/80 text-xs">
                  Award-winning creativity drives our approach
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content cards with team values */}
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 z-30">
            {[
              {
                icon: <Users className="h-5 w-5 text-[#049CE3]" />,
                title: "Collaborative",
                description:
                  "We work together to achieve exceptional results for our clients.",
              },
              {
                icon: <Lightbulb className="h-5 w-5 text-[#049CE3]" />,
                title: "Innovative",
                description:
                  "Creative thinking and fresh ideas drive our approach to every project.",
              },
              {
                icon: <Target className="h-5 w-5 text-[#049CE3]" />,
                title: "Results-Driven",
                description:
                  "We focus on delivering measurable outcomes that impact your business.",
              },
              {
                icon: <Award className="h-5 w-5 text-[#049CE3]" />,
                title: "Experienced",
                description:
                  "Our seasoned team brings years of industry expertise to your challenges.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-blue-50 dark:bg-blue-950/50 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="font-medium">{item.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:hidden w-full space-y-6">
          <div
            className="relative w-full"
            style={{ paddingBottom: "56.25%" /* Aspect ratio of 16:9 */ }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
            >
              <source src="/work/sonance-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <Image
            src="/work/sonance-3.jpg"
            alt="Our team collaborating"
            width={1000}
            height={300}
            className="object-cover rounded-3xl"
          />
        </div>

        {/* Team quote */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <blockquote className="text-lg md:text-xl font-medium italic text-muted-foreground">
            &quot;Our team doesn&apos;t just create marketing campaigns; we
            craft experiences that connect brands with people in meaningful
            ways.&quot;
          </blockquote>
          <p className="mt-4 text-sm font-medium">
            — Pranjal Sharma, Founder & CEO
          </p>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
