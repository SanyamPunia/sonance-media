"use client";

import { motion } from "framer-motion";
import {
  Brush,
  Code,
  Megaphone,
  Pencil,
  Smartphone,
  SquarePlay
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MaxWidthWrapper } from "./max-width-wrapper";

const services = [
  {
    icon: <Brush className="h-8 w-8 text-[#049CE3]" />,
    title: "Brand Strategy & Brand Building",
    description:
      "We develop comprehensive brand strategies that position your business for success in competitive markets.",
  },
  {
    icon: <SquarePlay className="h-8 w-8 text-[#049CE3]" />,
    title: "Media Planning",
    description:
      "Media planning involves strategizing, reporting, and optimizing media activities",
  },
  {
    icon: <Megaphone className="h-8 w-8 text-[#049CE3]" />,
    title: "Social Media & Influencer Marketing",
    description:
      "Utilizing various paid social platforms for an impactful brand performance campaign.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-[#049CE3]" />,
    title: "Paid Digital Amplification",
    description:
      "Run paid ads on Google, Facebook, YouTube, Top Apps and Websites",
  },
  {
    icon: <Code className="h-8 w-8 text-[#049CE3]" />,
    title: "Web Development & E-Commerce",
    description:
      "Building responsive, user-friendly websites and e-commerce platforms that enhance your brand and drive seamless online experiences.",
  },
  {
    icon: <Pencil className="h-8 w-8 text-[#049CE3]" />,
    title: "Content Creation",
    description:
      "Engaging, strategic content that tells your brand story and connects with your target audience.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background"
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
            Our Services
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Comprehensive solutions to elevate your brand in the digital
            landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-border rounded-md shadow-none h-full hover:border-[#049CE3]/20 transition-colors bg-gradient-to-br from-card to-blue-50/20 dark:from-card dark:to-blue-950/20">
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
