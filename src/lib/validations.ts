import { z } from "zod";

// CLAUDE.md §8 — dropdown reason values double as the exact keys used to
// resolve the server-side inbox mapping in api/contact/route.ts.
export const CONTACT_REASONS = [
  "General Enquiry",
  "Partnership / B2B",
  "Investment / Investor Relations",
  "Press / Media",
  "Careers",
] as const;

export type ContactReason = (typeof CONTACT_REASONS)[number];

// Shared by ContactForm.tsx (client) and api/contact/route.ts (server) so
// the two never drift out of sync.
export const contactFormSchema = z.object({
  fullName: z
    .string({ error: "Full name is required." })
    .trim()
    .min(1, "Full name is required."),
  email: z
    .string({ error: "Email is required." })
    .trim()
    .min(1, "Email is required.")
    .pipe(z.email("Enter a valid email address.")),
  company: z.string().trim().optional(),
  reason: z.enum(CONTACT_REASONS, "Select a reason for contacting us."),
  message: z
    .string({ error: "Message is required." })
    .trim()
    .min(20, "Message must be at least 20 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Shared by NewsletterForm.tsx, used from both /newsroom's NewsletterSignup
// and the Footer's compact signup — one schema so the two never drift.
export const newsletterFormSchema = z.object({
  email: z
    .string({ error: "Email is required." })
    .trim()
    .min(1, "Email is required.")
    .pipe(z.email("Enter a valid email address.")),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
