"use server";

import { Resend } from "resend";
import { z } from "zod";
import { ContactFormEmail } from "@/components/emails/contact-form-email";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
  company: z.string().optional(),
  phone: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function sendContactEmail(formData: ContactFormValues) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Sonance Media <onboarding@resend.dev>",
      to: ["lewarends@gmail.com", "pranjal.sharma@diptree.com"],
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      react: ContactFormEmail({
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
        company: validatedData.company || "Not provided",
        phone: validatedData.phone || "Not provided",
      }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error in sendContactEmail:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Invalid form data. Please check your inputs and try again.",
      };
    }

    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
