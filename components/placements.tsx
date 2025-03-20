"use client";

import { motion } from "framer-motion";
import { Tv, Smartphone, Globe, Headphones, MapPin } from "lucide-react";
import { MaxWidthWrapper } from "./max-width-wrapper";

const placementCategories = [
  {
    name: "OTT & Entertainment",
    icon: <Tv className="h-10 w-10 text-[#049CE3]" />,
    description:
      "High Awareness platforms with full screen content viewership.",
    placements: [
      "Connected TV",
      "Streaming Services",
      "Video on Demand",
      "Gaming Platforms",
    ],
  },
  {
    name: "Daily Apps & Online",
    icon: <Smartphone className="h-10 w-10 text-[#049CE3]" />,
    description:
      "Daily use apps are the highest consumed genre after social media. Supports Video, Display, & innovations.",
    placements: [
      "Mobile Applications & Utility Apps",
      "Social Media",
      "News Apps",
      "Display Network & Native Advertising",
    ],
  },
  {
    name: "Cinema",
    icon: <Globe className="h-10 w-10 text-[#049CE3]" />,
    description:
      "Premium viewing experience with captive audience and high engagement in distraction-free environment.",
    placements: [
      "Premium Multiplexes",
      "Mid-tier Theaters",
      "Local Cinemas",
      "Pre-movie Ads",
      "Interval Promotions",
    ],
  },
  {
    name: "Audio Ads",
    icon: <Headphones className="h-10 w-10 text-[#049CE3]" />,
    description: "Use of audio on music, news and podcasts on top platforms.",
    placements: [
      "Podcasts",
      "Music Streaming",
      "Digital Radio",
      "Audio Content",
    ],
  },
  {
    name: "PDOOH",
    icon: <MapPin className="h-10 w-10 text-[#049CE3]" />,
    description:
      "Run ads when and where you want with precision targeting and measurement across screens.",
    placements: [
      "Digital Billboards",
      "Transit Displays",
      "Retail Screens",
      "Event Venues",
    ],
  },
];

export function Placements() {
  return (
    <section
      id="placements"
      className="py-20 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-950/10 relative"
    >
      {/* Subtle diagonal pattern overlay */}
      <div className="absolute inset-0 bg-diagonal-pattern pointer-events-none"></div>

      <MaxWidthWrapper>
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Available Placements
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Strategic ad placements to reach your audience wherever they are
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting lines in background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <div className="w-[80%] h-[80%] border-2 border-dashed border-[#049CE3] rounded-full"></div>
            <div className="absolute w-[60%] h-[60%] border-2 border-dashed border-[#049CE3] rounded-full"></div>
            <div className="absolute w-[40%] h-[40%] border-2 border-dashed border-[#049CE3] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {placementCategories.map((category, index) => {
              // Position the cards in a specific layout
              let gridClass = "";
              if (index === 0)
                gridClass = "md:col-span-1 md:col-start-2 md:row-start-1";
              if (index === 1)
                gridClass = "md:col-span-1 md:col-start-3 md:row-start-2";
              if (index === 2)
                gridClass = "md:col-span-1 md:col-start-2 md:row-start-3";
              if (index === 3)
                gridClass = "md:col-span-1 md:col-start-1 md:row-start-2";
              if (index === 4)
                gridClass = "md:col-span-1 md:col-start-2 md:row-start-2";

              return (
                <motion.div
                  key={index}
                  className={`${gridClass}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="border border-border rounded-lg p-6 bg-gradient-to-br from-card to-blue-50/20 dark:from-card dark:to-blue-950/20 hover:border-[#049CE3]/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(4,156,227,0.1)] group">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="mb-4 p-3 rounded-full bg-blue-50/50 dark:bg-blue-950/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/70 transition-colors">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-medium">{category.name}</h3>
                    </div>

                    <p className="text-xs text-muted-foreground mb-4 text-center">
                      {category.description}
                    </p>

                    <ul className="space-y-3">
                      {category.placements.map((placement, idx) => (
                        <li key={idx} className="text-xs flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#049CE3]/70 mr-2"></span>
                          <span className="group-hover:text-[#049CE3] transition-colors">
                            {placement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xs text-muted-foreground max-w-lg mx-auto">
            Our strategic placement network ensures your message reaches the
            right audience at the right time, maximizing engagement and
            conversion opportunities.
          </p>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
