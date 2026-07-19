import FadeIn from "@/components/ui/FadeIn";

const CONTACT_ROWS = [
  {
    purpose: "General Enquiries",
    contact: "partners@thelioziosolutions.com",
    type: "email",
  },
  {
    purpose: "Partnership and B2B",
    contact: "partners@thelioziosolutions.com",
    type: "email",
  },
  {
    purpose: "Investor Relations",
    contact: "partners@thelioziosolutions.com",
    type: "email",
  },
  {
    purpose: "Press and Media",
    contact: "partners@thelioziosolutions.com",
    type: "email",
  },
  { purpose: "Careers", contact: "PRO@thelioziosolutions.com", type: "email" },
  {
    purpose: "Privacy and Data",
    contact: "PRO@thelioziosolutions.com",
    type: "email",
  },
  {
    purpose: "Drumroll Customer Support",
    contact: "Via WhatsApp on the Drumroll platform",
    type: "external",
    href: "https://buyatdrumroll.com",
    linkLabel: "buyatdrumroll.com",
  },
] as const;

// Not a literal <table> — same reasoning as GlobalFootprint: avoids
// horizontal scroll on mobile, per CLAUDE.md §11's "no horizontal scroll ever."
export default function ContactDetails() {
  return (
    <div>
      <FadeIn>
        <h2 className="font-heading text-2xl font-semibold text-liozio-charcoal">
          Direct Contact
        </h2>
      </FadeIn>

      <dl className="mt-6 divide-y divide-liozio-charcoal/10 border-t border-liozio-charcoal/10">
        {CONTACT_ROWS.map((row, index) => (
          <FadeIn
            key={row.purpose}
            delay={Math.min(index * 0.05, 0.3)}
            className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <dt className="font-body text-sm font-medium text-liozio-charcoal/70">
              {row.purpose}
            </dt>
            <dd className="font-body text-base text-liozio-charcoal">
              {row.type === "email" ? (
                <a
                  href={`mailto:${row.contact}`}
                  className="font-medium text-liozio-purple underline underline-offset-2 hover:text-liozio-purple/80"
                >
                  {row.contact}
                </a>
              ) : (
                <>
                  {row.contact}{" "}
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-liozio-purple underline underline-offset-2 hover:text-liozio-purple/80"
                  >
                    {row.linkLabel}
                  </a>
                </>
              )}
            </dd>
          </FadeIn>
        ))}
      </dl>
    </div>
  );
}
