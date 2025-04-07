"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MaxWidthWrapper } from "./max-width-wrapper";

const testimonials = [
  {
    quote:
      "We've seen significant business growth since partnering with Sonance media. Their team's knowledge of the advertising landscape and ability to optimize our media business strategy has been impressive.",
    name: "Sumit Bajpai",
    title: "Regional head - India, Lokal App",
    avatar: "/testimonials/sumit.jpg",
  },
  {
    quote:
      "Sonance Media has helped us expand our brand's reach and engagement through their innovative podcasting strategies and exceptional production quality. Their team's knowledge of IP production along with their ability to craft compelling stories and bring our brand's message to life through audio has been truly remarkable.",
    name: "Harpreet Singh",
    title: "Aann Arts Productions",
    avatar: "/testimonials/harpreet.jpg",
  },
  {
    quote:
      "We were impressed by Sonance Media's ability to understand our business needs and develop targeted advertising strategies that drove real results. Their team's passion and dedication to delivering exceptional service have made them a valuable partner and we look forward to continuing our partnership.",
    name: "Atul Pupneja",
    title: "CEO, Pupneja Advertising",
    avatar: "/testimonials/atul.jpg",
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
              <Card className="justify-between border-border rounded-md shadow-none h-full hover:border-[#049CE3]/20 transition-colors bg-gradient-to-br from-card to-blue-50/20 dark:from-card dark:to-blue-950/20">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 dark:text-white text-[#049CE3]/20 mb-4" />
                  <p className="text-xs leading-relaxed">{testimonial.quote}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center space-x-4">
                    <Avatar className="size-10 border border-border rounded-full">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="aspect-square object-cover rounded-full select-none"
                        draggable="false"
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
