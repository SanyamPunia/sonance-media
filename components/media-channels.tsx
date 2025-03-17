"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MaxWidthWrapper } from "./max-width-wrapper";

const channels = [
  {
    name: "Google Ads",
    icon: "/channels/google-ads.png",
    description: "Search & Display",
  },
  {
    name: "Google DV360",
    icon: "/channels/google-dv360.svg",
    description: "Programmatic Ads",
  },
  {
    name: "YouTube",
    icon: "/channels/youtube.png",
    description: "Video Ads",
  },
  {
    name: "Facebook",
    icon: "/channels/facebook.png",
    description: "Social Ads",
  },
  {
    name: "Instagram",
    icon: "/channels/instagram.png",
    description: "Social Ads",
  },
  {
    name: "LinkedIn",
    icon: "/channels/linkedin.png",
    description: "B2B Marketing",
  },
  {
    name: "Amazon Ads",
    icon: "/channels/amazon.jpg",
    description: "E-commerce Ads",
  },
  {
    name: "Ecommerce & Web Development",
    icon: "/channels/react.png",
    description: "Shopify & Custom Stores",
  }
];

export function MediaChannels() {
  return (
    <section
      id="channels"
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
            Paid Media Channel Expertise
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            We specialize in optimizing campaigns across all major advertising
            platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 mb-4 rounded-md border border-border p-4 bg-gradient-to-br from-card to-blue-50/20 dark:from-card dark:to-blue-950/20 group-hover:border-[#049CE3]/30 transition-colors">
                <Image
                  src={channel.icon || "/placeholder.svg"}
                  alt={channel.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain select-none"
                  draggable="false"
                />
              </div>
              <h3 className="text-sm font-medium">{channel.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {channel.description}
              </p>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
