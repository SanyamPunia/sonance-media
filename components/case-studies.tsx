"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "Revitalizing a Legacy Brand for the Digital Age",
    description:
      "How we helped a 50-year-old company modernize their brand while honoring their heritage.",
    image: "/placeholder.svg?height=400&width=600",
    categories: ["Brand Strategy", "Web Development", "Digital Marketing"],
    results:
      "150% increase in online engagement, 75% increase in qualified leads",
  },
  {
    title: "E-commerce Transformation for Retail Chain",
    description:
      "Creating a seamless online shopping experience that complemented their physical stores.",
    image: "/placeholder.svg?height=400&width=600",
    categories: ["UX/UI Design", "E-commerce", "Analytics"],
    results: "200% increase in online sales, 45% reduction in cart abandonment",
  },
  {
    title: "Content Strategy for Global Tech Startup",
    description:
      "Developing a content ecosystem that established thought leadership in a competitive market.",
    image: "/placeholder.svg?height=400&width=600",
    categories: ["Content Creation", "SEO", "Social Media"],
    results:
      "320% increase in organic traffic, 5x growth in newsletter subscribers",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Case Studies
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Detailed explorations of our most impactful client success stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-border rounded-md shadow-none h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.categories.map((category, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-[10px] rounded-md border-border shadow-none"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <CardDescription className="text-xs">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="bg-muted/30 p-3 rounded-md">
                    <p className="text-xs font-medium mb-1">Results:</p>
                    <p className="text-xs">{study.results}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-xs p-0 h-auto shadow-none hover:bg-transparent hover:text-primary"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
