"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "./max-width-wrapper";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12 bg-gradient-to-b from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-bold mb-4">SONANCE MEDIA</h3>
            <p className="text-xs text-muted-foreground max-w-md mb-6">
              We craft digital experiences that resonate with your audience,
              creating meaningful connections that drive growth and engagement.
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Sonance Media. All rights
              reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-xs text-muted-foreground hover:text-[#049CE3]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="text-xs text-muted-foreground hover:text-[#049CE3]"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#channels"
                  className="text-xs text-muted-foreground hover:text-[#049CE3]"
                >
                  Channels
                </Link>
              </li>
              <li>
                <Link
                  href="#placements"
                  className="text-xs text-muted-foreground hover:text-[#049CE3]"
                >
                  Placements
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-xs text-muted-foreground hover:text-[#049CE3]"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-xs text-muted-foreground hover:text-[#049CE3]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:text-[#049CE3]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:text-[#049CE3]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:text-[#049CE3]"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="flex justify-end mt-12">
          <Button
            variant="outline"
            size="icon"
            className="rounded-md border-border shadow-none hover:border-[#049CE3] hover:text-[#049CE3]"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
