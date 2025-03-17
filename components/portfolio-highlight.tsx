"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MaxWidthWrapper } from "./max-width-wrapper";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media.query";

export function PortfolioHighlight() {
  const logos = [
    "/logos/swiggy.png",
    "/logos/modicare.png",
    "/logos/rainbow.png",
    "/logos/emt.png",
    "/logos/mf.png",
    "/logos/circle.png",
    "/logos/tesa.png",
    "/logos/sapat.png",
    "/logos/vicco.png",
    "/logos/barista.png",
    "/logos/ewara.png",
    "/logos/nafasat.png",
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isMobile && carouselRef.current) {
      controls.start({
        x: [0, -1500],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, isMobile]);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <MaxWidthWrapper>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            PORTFOLIO
          </h2>

          <div className="relative">
            <div className="absolute -left-2 top-0 text-6xl md:text-8xl font-bold text-[#049CE3]/5 dark:text-[#049CE3]/10">
              100+
            </div>
            <p className="text-sm md:text-base leading-relaxed relative z-10">
              &quot;Since our establishment in 2020, we have collaborated with
              over{" "}
              <span className="font-semibold text-[#049CE3]">100 brands</span>{" "}
              spanning diverse industries, offering a comprehensive range of
              digital, creative, and DOOH marketing services as full-service
              digital providers.&quot;
            </p>
          </div>

          {/* Desktop Grid View */}
          <div className="mt-12 hidden md:grid grid-cols-6 gap-8">
            {logos.map((logo, i) => (
              <motion.div
                key={`grid-${i}`}
                className="aspect-square rounded-md bg-gradient-to-br from-card to-blue-50/50 dark:from-card dark:to-blue-950/50 border border-border flex items-center justify-center p-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-full h-full bg-gray-200/50 dark:bg-gray-800/50 rounded flex items-center justify-center p-3">
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`Brand Logo ${i + 1}`}
                    width={120}
                    height={80}
                    className="w-auto object-contain select-none"
                    draggable="false"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="mt-12 md:hidden relative overflow-hidden">
            <div ref={carouselRef} className="w-full">
              <motion.div className="flex space-x-4" animate={controls}>
                {/* First set of logos */}
                {logos.map((logo, i) => (
                  <div
                    key={`carousel-${i}`}
                    className="flex-shrink-0 w-32 h-32 rounded-md bg-gradient-to-br from-card to-blue-50/50 dark:from-card dark:to-blue-950/50 border border-border flex items-center justify-center p-2"
                  >
                    <div className="w-full h-full bg-gray-200/50 dark:bg-gray-800/50 rounded flex items-center justify-center p-3">
                      <Image
                        src={logo || "/placeholder.svg"}
                        alt={`Brand Logo ${i + 1}`}
                        width={120}
                        height={80}
                        className="w-auto object-contain select-none"
                        draggable="false"
                      />
                    </div>
                  </div>
                ))}

                {/* Duplicate logos for seamless loop */}
                {logos.map((logo, i) => (
                  <div
                    key={`carousel-dup-${i}`}
                    className="flex-shrink-0 w-32 h-32 rounded-md bg-gradient-to-br from-card to-blue-50/50 dark:from-card dark:to-blue-950/50 border border-border flex items-center justify-center p-2"
                  >
                    <div className="w-full h-full bg-gray-200/50 dark:bg-gray-800/50 rounded flex items-center justify-center p-3">
                      <Image
                        src={logo || "/placeholder.svg"}
                        alt={`Brand Logo ${i + 1}`}
                        width={120}
                        height={80}
                        className="w-auto object-contain select-none"
                        draggable="false"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-xs text-muted-foreground">
              ...and many more success stories across various industries
            </p>
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
