"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MaxWidthWrapper } from "./max-width-wrapper";

const testimonials = [
  {
    quote:
      "Sonance Media transformed our brand identity and digital presence. Their strategic approach and creative execution exceeded our expectations.",
    name: "Sarah Johnson",
    title: "Marketing Director, TechVision",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with Sonance Media was a game-changer for our startup. Their team delivered a website that perfectly captures our vision and values.",
    name: "Michael Chen",
    title: "CEO, Innovate Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The digital marketing campaign developed by Sonance Media increased our conversion rate by 45%. Their data-driven approach delivers real results.",
    name: "Emma Rodriguez",
    title: "Growth Lead, EcoLife",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
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
            Client Testimonials
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Hear what our clients have to say about working with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-border rounded-md shadow-none h-full hover:border-[#049CE3]/20 transition-colors bg-gradient-to-br from-card to-blue-50/20 dark:from-card dark:to-blue-950/20">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 dark:text-white text-[#049CE3]/20 mb-4" />
                  <p className="text-xs leading-relaxed">{testimonial.quote}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10 border border-border">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xs font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
