"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { sendContactEmail } from "@/actions/contact"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  company: z.string().optional(),
  phone: z.string().optional(),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function Contact() {
  const [formState, setFormState] = useState<ContactFormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
    phone: "",
  })

  const [formStatus, setFormStatus] = useState<{
    status: "idle" | "loading" | "success" | "error"
    message?: string
  }>({
    status: "idle",
  })

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormState((prev) => ({ ...prev, [id]: value }))

    // Clear error for this field when user starts typing
    if (formErrors[id]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[id]
        return newErrors
      })
    }
  }

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formState)
      setFormErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message
          }
        })
        setFormErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setFormStatus({ status: "loading" })

    try {
      const result = await sendContactEmail(formState)

      if (result.success) {
        setFormStatus({
          status: "success",
          message: "Thank you for your message! We'll get back to you shortly.",
        })

        // Reset form
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
          company: "",
          phone: "",
        })
      } else {
        setFormStatus({
          status: "error",
          message: result.error || "Something went wrong. Please try again later.",
        })
      }
    } catch (error) {
      setFormStatus({
        status: "error",
        message: "An unexpected error occurred. Please try again later.",
      })
      console.error("Contact form error:", error)
    }
  }

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
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
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
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formStatus.status === "success" ? (
                  <Alert className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 text-green-700 dark:text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>{formStatus.message}</AlertDescription>
                  </Alert>
                ) : formStatus.status === "error" ? (
                  <Alert className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{formStatus.message}</AlertDescription>
                  </Alert>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className={`text-xs rounded-md border-border shadow-none ${formErrors.name ? "border-red-500 focus-visible:ring-red-500" : ""
                            }`}
                          value={formState.name}
                          onChange={handleChange}
                        />
                        {formErrors.name && <p className="text-xs text-red-500">{formErrors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className={`text-xs rounded-md border-border shadow-none ${formErrors.email ? "border-red-500 focus-visible:ring-red-500" : ""
                            }`}
                          value={formState.email}
                          onChange={handleChange}
                        />
                        {formErrors.email && <p className="text-xs text-red-500">{formErrors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-xs">
                          Company
                        </Label>
                        <Input
                          id="company"
                          placeholder="Your company"
                          className="text-xs rounded-md border-border shadow-none"
                          value={formState.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          placeholder="Your phone number"
                          className="text-xs rounded-md border-border shadow-none"
                          value={formState.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-xs">
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Subject"
                        className={`text-xs rounded-md border-border shadow-none ${formErrors.subject ? "border-red-500 focus-visible:ring-red-500" : ""
                          }`}
                        value={formState.subject}
                        onChange={handleChange}
                      />
                      {formErrors.subject && <p className="text-xs text-red-500">{formErrors.subject}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className={`min-h-32 text-xs rounded-md border-border shadow-none ${formErrors.message ? "border-red-500 focus-visible:ring-red-500" : ""
                          }`}
                        value={formState.message}
                        onChange={handleChange}
                      />
                      {formErrors.message && <p className="text-xs text-red-500">{formErrors.message}</p>}
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-md shadow-none text-xs bg-[#049CE3] hover:bg-[#0380bb]"
                      disabled={formStatus.status === "loading"}
                    >
                      {formStatus.status === "loading" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
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
                <CardDescription className="text-xs">Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h4 className="text-sm font-semibold mb-3">Chandigarh Office</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-[#049CE3] mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">2987, Sector 42C, Chandigarh, 160036</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-[#049CE3] mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Business@sonancemedia.in</p>
                        <p className="text-xs text-muted-foreground">pranjal.sharma@diptree.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-[#049CE3] mt-0.5" />
                      <div>
                        <p className="text-xs font-medium">Pranjal Sharma</p>
                        <p className="text-xs text-muted-foreground">9653656626</p>
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
                        <p className="text-xs text-muted-foreground">Oshiwara, Andheri West, Mumbai, 400102</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-[#049CE3] mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Business@sonancemedia.in</p>
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
  )
}

