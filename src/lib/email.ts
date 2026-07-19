import { Resend } from "resend";
import type { ContactFormValues } from "@/lib/validations";

// CLAUDE.md §8 — every reason except Careers routes to the general inbox.
// Destination addresses are resolved here, server-side, and never returned
// to the client.
function resolveDestinationEmail(reason: ContactFormValues["reason"]): string {
  if (reason === "Careers") {
    return process.env.CONTACT_EMAIL_CAREERS as string;
  }
  return process.env.CONTACT_EMAIL_GENERAL as string;
}

const DRUMROLL_KEYWORDS = [
  "drumroll",
  "goodfood",
  "bountiful",
  "joombow",
  "my order",
  "pickup",
  "refund",
  "buyatdrumroll",
];

// CLAUDE.md §8 — Drumroll customer support isn't handled by this form. This
// is a plain keyword heuristic on the message text, not a hard reroute: the
// email still sends normally, but the API response flags it so the client
// can add a gentle WhatsApp note to the success message.
export function looksLikeDrumrollSupportIssue(values: ContactFormValues): boolean {
  const haystack = values.message.toLowerCase();
  return DRUMROLL_KEYWORDS.some((keyword) => haystack.includes(keyword));
}

export async function sendContactEmail(values: ContactFormValues) {
  // Instantiated lazily (not at module load) so a missing RESEND_API_KEY
  // throws inside the caller's try/catch instead of crashing the module.
  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = resolveDestinationEmail(values.reason);

  await resend.emails.send({
    // Resend's shared sandbox sender — swap for a verified sending domain
    // (e.g. notifications@thelioziosolutions.com) once one is set up in Resend.
    from: "The LIOZIO Solutions Website <onboarding@resend.dev>",
    to,
    replyTo: values.email,
    subject: `New contact form submission — ${values.reason}`,
    text: [
      `Reason: ${values.reason}`,
      `Name: ${values.fullName}`,
      `Email: ${values.email}`,
      values.company ? `Company: ${values.company}` : null,
      "",
      values.message,
    ]
      .filter((line): line is string => line !== null)
      .join("\n"),
  });
}
