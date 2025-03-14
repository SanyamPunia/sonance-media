"use client";

import { motion } from "framer-motion";
import {
  Brush,
  Code,
  LineChart,
  Megaphone,
  Smartphone,
  Globe,
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
    title: "Brand Strategy",
    description:
      "We develop comprehensive brand strategies that position your business for success in competitive markets.",
  },
  {
    icon: <Code className="h-8 w-8 text-[#049CE3]" />,
    title: "Web Development",
    description:
      "Custom websites and applications built with cutting-edge technology for optimal performance and user experience.",
  },
  {
    icon: <Megaphone className="h-8 w-8 text-[#049CE3]" />,
    title: "Digital Marketing",
    description:
      "Data-driven marketing campaigns that increase visibility, engagement, and conversion across digital channels.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-[#049CE3]" />,
    title: "Mobile Solutions",
    description:
      "Native and cross-platform mobile applications designed for seamless user experiences across all devices.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-[#049CE3]" />,
    title: "Analytics & Insights",
    description:
      "Comprehensive data analysis to understand user behavior and optimize your digital presence for better results.",
  },
  {
    icon: <Globe className="h-8 w-8 text-[#049CE3]" />,
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
