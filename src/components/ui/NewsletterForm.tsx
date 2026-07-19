"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  newsletterFormSchema,
  type NewsletterFormValues,
} from "@/lib/validations";

interface NewsletterFormProps {
  /** Smaller footprint for the Footer's compact signup vs. /newsroom's full-width one. */
  compact?: boolean;
}

// Shared by /newsroom's NewsletterSignup and the Footer's compact signup.
//
// No submit handler wired to a real provider yet (Resend audiences,
// ConvertKit, etc.) — this validates the email client-side only and stops
// there. Flagged for the user to confirm whether footer signups should
// route to the same list as /newsroom's or a separate one before wiring
// either to an actual endpoint.
export default function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
  });

  function onValidSubmit() {
    // Intentionally a no-op — see comment above.
  }

  const inputId = compact ? "newsletter-email-compact" : "newsletter-email";

  return (
    <form
      onSubmit={handleSubmit(onValidSubmit)}
      noValidate
      className={compact ? "w-full" : "mx-auto w-full max-w-md"}
    >
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <div className={`flex ${compact ? "flex-col gap-2" : "flex-col gap-3 sm:flex-row"}`}>
        <input
          id={inputId}
          type="email"
          placeholder="Enter your email address"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? `${inputId}-error` : undefined}
          className={`min-h-11 flex-1 rounded-full border border-white/20 bg-white/5 font-body text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-gold focus-visible:ring-offset-2 focus-visible:ring-offset-liozio-charcoal ${
            compact ? "px-4 text-sm" : "px-5 text-sm"
          }`}
          {...register("email")}
        />
        <button
          type="submit"
          className={`inline-flex min-h-11 items-center justify-center rounded-full bg-liozio-gold font-body font-medium text-liozio-charcoal transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-gold focus-visible:ring-offset-2 focus-visible:ring-offset-liozio-charcoal ${
            compact ? "px-5 text-sm" : "px-8 text-sm"
          }`}
        >
          Subscribe
        </button>
      </div>
      {errors.email && (
        <p
          id={`${inputId}-error`}
          className="mt-2 font-body text-xs text-red-400"
        >
          {errors.email.message}
        </p>
      )}
    </form>
  );
}
