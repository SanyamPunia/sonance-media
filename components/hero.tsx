"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "./max-width-wrapper";

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-950/10">
      <MaxWidthWrapper>
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
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
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            We craft digital experiences that resonate with your audience,
            creating meaningful connections that drive growth and engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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
      </MaxWidthWrapper>
    </section>
  );
}
