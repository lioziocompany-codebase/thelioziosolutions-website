"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LogoLoader from "@/components/ui/LogoLoader";
import {
  CONTACT_REASONS,
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations";

type SubmitState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; isDrumrollRelated: boolean }
  | { status: "error"; message: string };

const FIELD_CLASS =
  "mt-2 w-full rounded-xl border border-liozio-charcoal/15 bg-white px-4 py-3 font-body text-base text-liozio-charcoal placeholder:text-liozio-charcoal/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-purple focus-visible:ring-offset-2";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitState({ status: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setSubmitState({
          status: "error",
          message:
            data.message ?? "Something went wrong. Please try again.",
        });
        return;
      }

      setSubmitState({
        status: "success",
        isDrumrollRelated: Boolean(data.isDrumrollRelated),
      });
    } catch {
      // Input is untouched here — we never call reset(), so a network
      // failure leaves every field exactly as the user typed it.
      setSubmitState({
        status: "error",
        message:
          "Something went wrong sending your message. Please check your connection and try again.",
      });
    }
  }

  if (submitState.status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl bg-liozio-silver p-card lg:p-card-lg"
      >
        <p className="font-body text-base leading-body text-liozio-charcoal">
          Thanks — we read every message and respond within 2 business days.
        </p>
        {submitState.isDrumrollRelated && (
          <p className="mt-3 font-body text-sm leading-body text-liozio-charcoal/70">
            Looking for Drumroll order support? It&rsquo;s faster via
            WhatsApp on{" "}
            <a
              href="https://buyatdrumroll.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-liozio-purple underline underline-offset-2"
            >
              buyatdrumroll.com
            </a>
            .
          </p>
        )}
      </div>
    );
  }

  const isLoading = submitState.status === "loading";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="fullName"
          className="block font-body text-sm font-medium text-liozio-charcoal"
        >
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          aria-invalid={errors.fullName ? "true" : "false"}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className={`min-h-11 ${FIELD_CLASS}`}
          {...register("fullName")}
        />
        {errors.fullName && (
          <p
            id="fullName-error"
            className="mt-1 font-body text-sm text-red-600"
          >
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-body text-sm font-medium text-liozio-charcoal"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`min-h-11 ${FIELD_CLASS}`}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 font-body text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="company"
          className="block font-body text-sm font-medium text-liozio-charcoal"
        >
          Company / Organisation{" "}
          <span className="text-liozio-charcoal/70">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          className={`min-h-11 ${FIELD_CLASS}`}
          {...register("company")}
        />
      </div>

      <div>
        <label
          htmlFor="reason"
          className="block font-body text-sm font-medium text-liozio-charcoal"
        >
          Reason
        </label>
        <select
          id="reason"
          defaultValue=""
          aria-invalid={errors.reason ? "true" : "false"}
          aria-describedby={errors.reason ? "reason-error" : undefined}
          className={`min-h-11 ${FIELD_CLASS}`}
          {...register("reason")}
        >
          <option value="" disabled>
            Select a reason
          </option>
          {CONTACT_REASONS.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        {errors.reason && (
          <p
            id="reason-error"
            className="mt-1 font-body text-sm text-red-600"
          >
            {errors.reason.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-body text-sm font-medium text-liozio-charcoal"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={FIELD_CLASS}
          {...register("message")}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-1 font-body text-sm text-red-600"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      {submitState.status === "error" && (
        <p role="alert" className="font-body text-sm text-red-600">
          {submitState.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-liozio-gold px-8 font-body text-sm font-medium text-liozio-charcoal transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
      >
        {isLoading && <LogoLoader size="small" decorative />}
        {isLoading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
