"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { Award, ChevronLeft, ChevronRight, Lightbulb, Target, Users } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { MaxWidthWrapper } from "./max-width-wrapper"

const teamMedia = [
  {
    type: "video",
    src: "/work/sonance-video.mp4",
    alt: "Collaborative teamwork in action",
    caption: "Collaboration at Work",
    description: "Our team combines effort to achieve outstanding results",
},
  {
    type: "image",
    src: "/work/sonance-1.jpg",
    alt: "Innovative team discussion",
    caption: "Creative Leadership",
    description: "Award-winning ideas define our creative process",
  },
  {
    type: "image",
    src: "/work/sonance-2.jpg",
    alt: "Team brainstorming ideas",
    caption: "Strategic Innovation",
    description: "We craft cutting-edge solutions to tough problems",
  },
  {
    type: "video",
    src: "/work/sonance-video-2.mp4",
    alt: "Team behind the scenes",
    caption: "Behind the Curtain",
    description: "Discover how we transform ideas into reality",
  },
  {
    type: "image",
    src: "/work/sonance-3.jpg",
    alt: "Team celebrating success",
    caption: "Celebrating Achievements",
    description: "We embrace victories and grow from every challenge",
  },
  {
    type: "image",
    src: "/work/sonance-4.jpg",
    alt: "Team celebrating together",
    caption: "Team Spirit",
    description: "Success is sweet, and challenges make us stronger",
  },
  {
    type: "image",
    src: "/work/sonance-5.jpg",
    alt: "Celebrating as a team",
    caption: "Unified Success",
    description: "We celebrate our wins and learn from every experience",
  },
  {
    type: "image",
    src: "/work/sonance-6.jpg",
    alt: "Unique Setup Arrangement",
    caption: "Unique Setup Arrangement",
    description: "Our unique setup allows us to work efficiently and creatively",
  },
]


export function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const totalPages = Math.ceil(teamMedia.length / 2)

  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
    }, 6000)

    return () => clearInterval(interval)
  }, [isHovering, totalPages])

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentPageItems = () => {
    const startIndex = currentPage * 2
    return teamMedia.slice(startIndex, startIndex + 2)
  }

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-[#049CE3]/10 dark:border-[#049CE3]/20"></div>
        <div className="absolute bottom-[30%] right-[15%] w-48 h-48 rounded-full border border-[#049CE3]/10 dark:border-[#049CE3]/20"></div>
      </div>

      <MaxWidthWrapper className="relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Passionate experts dedicated to bringing your vision to life
          </p>
        </motion.div>

        <div
          className="relative mb-12"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <AnimatePresence mode="wait">
              {getCurrentPageItems().map((media, idx) => (
                <motion.div
                  key={`media-${currentPage}-${idx}`}
                  className="relative aspect-video rounded-lg overflow-hidden shadow-lg border border-border"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  {media.type === "video" ? (
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                        <source src={media.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <Image
                        src={media.src || "/placeholder.svg"}
                        alt={media.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                      />
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 z-20 max-w-[90%]">
                    <h3 className="text-white text-lg font-semibold mb-1">{media.caption}</h3>
                    <p className="text-white/80 text-xs">{media.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="absolute -bottom-10 right-0 flex space-x-2 z-30">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border-border"
              onClick={prevPage}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border-border"
              onClick={nextPage}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div className="absolute -bottom-8 left-0 flex space-x-2 z-30">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-8 h-1 rounded-full transition-colors ${index === currentPage
                  ? "bg-[#049CE3]"
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                  }`}
                onClick={() => setCurrentPage(index)}
                aria-label={`View page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-blue-50 dark:bg-blue-950/50 rounded-full">
                  <Users className="h-5 w-5 text-[#049CE3]" />
                </div>
                <h3 className="font-medium">Collaborative</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                We work together to achieve exceptional results for our clients.
              </p>
            </motion.div>

            <motion.div
              className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-blue-50 dark:bg-blue-950/50 rounded-full">
                  <Lightbulb className="h-5 w-5 text-[#049CE3]" />
                </div>
                <h3 className="font-medium">Innovative</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Creative thinking and fresh ideas drive our approach to every project.
              </p>
            </motion.div>

            <motion.div
              className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-blue-50 dark:bg-blue-950/50 rounded-full">
                  <Target className="h-5 w-5 text-[#049CE3]" />
                </div>
                <h3 className="font-medium">Results-Driven</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                We focus on delivering measurable outcomes that impact your business.
              </p>
            </motion.div>

            <motion.div
              className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-blue-50 dark:bg-blue-950/50 rounded-full">
                  <Award className="h-5 w-5 text-[#049CE3]" />
                </div>
                <h3 className="font-medium">Experienced</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Our seasoned team brings years of industry expertise to your challenges.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <blockquote className="text-lg md:text-xl font-medium italic text-muted-foreground">
            &quot;Our team doesn&apos;t just create marketing campaigns; we craft experiences that connect brands with
            people in meaningful ways.&quot;
          </blockquote>
          <p className="mt-4 text-sm font-medium">— Pranjal Sharma, Founder &amp; CEO</p>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  )
}

