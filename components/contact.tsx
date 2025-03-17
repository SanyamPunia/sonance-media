"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-950/10 relative"
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
            Get In Touch
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Ready to elevate your brand? Let's start a conversation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border rounded-md shadow-none hover:border-[#049CE3]/20 transition-colors bg-gradient-to-br from-card to-blue-50/10 dark:from-card dark:to-blue-950/10">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription className="text-xs">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 text-green-700 dark:text-green-400 rounded-md p-4 text-center">
                    <p className="text-sm font-medium">
                      Thank you for your message!
                    </p>
                    <p className="text-xs mt-1">
                      We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs">
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="text-xs rounded-md border-border shadow-none"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="text-xs rounded-md border-border shadow-none"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-xs">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Subject"
                        className="text-xs rounded-md border-border shadow-none"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="min-h-32 text-xs rounded-md border-border shadow-none"
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-md shadow-none text-xs bg-[#049CE3] hover:bg-[#0380bb]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-border rounded-md shadow-none h-full hover:border-[#049CE3]/20 transition-colors bg-gradient-to-br from-card to-blue-50/10 dark:from-card dark:to-blue-950/10">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription className="text-xs">
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h4 className="text-sm font-semibold mb-3">
                    Chandigarh Office
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-[#049CE3] mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          2987, Sector 42C, Chandigarh, 160036
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-[#049CE3] mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Business@sonancemedia.in
                        </p>
                        <p className="text-xs text-muted-foreground">
                          pranjal.sharma@diptree.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-[#049CE3] mt-0.5" />
                      <div>
                        <p className="text-xs font-medium">Pranjal Sharma</p>
                        <p className="text-xs text-muted-foreground">
                          9653656626
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3">Mumbai Office</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-[#049CE3] mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Oshiwara, Andheri West, Mumbai, 400102
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-[#049CE3] mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Business@sonancemedia.in
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
