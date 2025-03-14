"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { MaxWidthWrapper } from "./max-width-wrapper";

const logos = [
  "/logos/mf.png",
  "/logos/swiggy.png",
  "/logos/vicco.png",
  "/logos/rainbow.png",
  "/logos/emt.png",
  "/logos/sapat.png",
  "/logos/tesa.png",
  "/logos/circle.png",
  "/logos/modicar.jpg",
  "/logos/barista.png",
];

export function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="py-16 bg-muted/30 dark:bg-muted/10">
      <MaxWidthWrapper>
        <motion.div
          className="max-w-2xl mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Trusted By
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            We've partnered with leading brands across industries
          </p>
        </motion.div>

        <div ref={containerRef} className="relative overflow-hidden py-4">
          <motion.div
            className="flex space-x-12"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { x: 0 },
              visible: {
                x: [0, -1000],
                transition: {
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                },
              },
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-16 w-32 flex items-center justify-center"
              >
                <div className="">
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`Client logo ${index + 1}`}
                    width={200}
                    height={80}
                    className=""
                  />
                </div>
              </div>
            ))}

            {/* Duplicate logos for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`dup-${index}`}
                className="flex-shrink-0 h-16 w-32 flex items-center justify-center"
              >
                <div className="">
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`Client logo ${index + 1}`}
                    width={160}
                    height={80}
                    className=""
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
