"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "./max-width-wrapper";

const projects = [
  {
    title: "Revitalizing Eco Brands",
    category: "Brand Strategy",
    description:
      "A complete brand overhaul for a sustainable product line, resulting in 45% increased market recognition.",
    image: "/work/eco.jpg",
  },
  {
    title: "Tech Startup Website",
    category: "Web Development",
    description:
      "Modern, responsive website design with custom animations and seamless user experience for a growing tech startup.",
    image: "/work/startup.jpg",
  },
  {
    title: "E-commerce Redesign",
    category: "UX/UI Design",
    description:
      "Streamlined shopping experience with intuitive navigation, resulting in 60% increase in conversion rate.",
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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[102%] select-none"
                  draggable="false"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#049CE3] font-medium">
                    {project.category}
                  </p>
                  <Link href="#" className="text-[#049CE3]">
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="rounded-md border-border shadow-none text-xs hover:text-[#049CE3] hover:border-[#049CE3]"
            onClick={() => window.open("#", "_blank")}
          >
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
