"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 border-b border-border transition-colors ${
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/sonance-logo.png"
              className="select-none"
              draggable="false"
              width={35}
              height={35}
              alt="sonance-logo"
            />

            <span className="text-lg font-bold tracking-tight">
              SONANCE MEDIA
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#services"
              className="text-xs font-medium hover:text-[#049CE3]"
            >
              SERVICES
            </Link>
            <Link
              href="#work"
              className="text-xs font-medium hover:text-[#049CE3]"
            >
              WORK
            </Link>
            <Link
              href="#channels"
              className="text-xs font-medium hover:text-[#049CE3]"
            >
              CHANNELS
            </Link>
            <Link
              href="#placements"
              className="text-xs font-medium hover:text-[#049CE3]"
            >
              PLACEMENTS
            </Link>
            <Link
              href="#testimonials"
              className="text-xs font-medium hover:text-[#049CE3]"
            >
              TESTIMONIALS
            </Link>
            <Link
              href="#contact"
              className="text-xs font-medium hover:text-[#049CE3]"
            >
              CONTACT
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              size="sm"
              className="hidden md:flex text-xs rounded-md border-border shadow-none bg-[#049CE3] hover:bg-[#0380bb]"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              GET IN TOUCH
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden rounded-md border-border shadow-none"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="p-6">
                <div className="mt-6 mb-8 flex items-center justify-between">
                  <span className="text-lg font-bold tracking-tight">
                    SONANCE MEDIA
                  </span>
                  <ThemeToggle />
                </div>
                <nav className="flex flex-col space-y-6">
                  <Link
                    href="#services"
                    className="text-xs font-medium hover:text-[#049CE3]"
                  >
                    SERVICES
                  </Link>
                  <Link
                    href="#work"
                    className="text-xs font-medium hover:text-[#049CE3]"
                  >
                    WORK
                  </Link>
                  <Link
                    href="#channels"
                    className="text-xs font-medium hover:text-[#049CE3]"
                  >
                    CHANNELS
                  </Link>
                  <Link
                    href="#placements"
                    className="text-xs font-medium hover:text-[#049CE3]"
                  >
                    PLACEMENTS
                  </Link>
                  <Link
                    href="#testimonials"
                    className="text-xs font-medium hover:text-[#049CE3]"
                  >
                    TESTIMONIALS
                  </Link>
                  <Link
                    href="#contact"
                    className="text-xs font-medium hover:text-[#049CE3]"
                  >
                    CONTACT
                  </Link>
                  <Button
                    size="sm"
                    className="w-full text-xs rounded-md border-border shadow-none mt-4 bg-[#049CE3] hover:bg-[#0380bb]"
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });

                      const sheet = document.querySelector(
                        '[data-state="open"]'
                      );
                      if (sheet) {
                        const closeButton = sheet.querySelector(
                          "button[data-radix-collection-item]"
                        );

                        (closeButton as HTMLButtonElement)?.click();
                      }
                    }}
                  >
                    GET IN TOUCH
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </MaxWidthWrapper>
    </motion.header>
  );
}
