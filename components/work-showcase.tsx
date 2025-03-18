"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    image: "/work/ecom.jpg",
  },
];

export function WorkShowcase() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden rounded-md border border-border mb-4 aspect-[4/3]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                  draggable="false"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-[#049CE3] font-medium">
                  {project.category}
                </p>
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
