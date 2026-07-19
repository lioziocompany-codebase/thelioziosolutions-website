"use client";

import { useRef, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import TeamCard from "@/components/cards/TeamCard";
import TeamMemberModal, { type TeamMember } from "@/components/sections/team/TeamMemberModal";

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Steve Zion",
    title: "Chief Executive Officer",
    bio: "A commerce and technology entrepreneur with a clear thesis: that the African consumer market is the most significant commercial opportunity of this generation, and that it requires solutions built from the inside. Founded LIOZIO Solutions with the conviction that lean, data-driven, technology-powered businesses could outcompete legacy retail at every level. Leads the company's strategy, vision, and overall commercial direction.",
    image: "/images/team/steve-zion.jpg",
  },
  {
    name: "Sheila Akpaso",
    title: "Head of Human Resources",
    bio: "Responsible for building and sustaining the LIOZIO culture. Leads talent acquisition, team development, and the operating standards that keep a lean team performing at its best. Believes that culture is not what a company says about itself — it is what happens when no one is watching.",
    image: "/images/team/sheila-akpaso.jpg",
  },
  {
    name: "Fatimat Siyaka",
    title: "Head of Revenue Generation",
    bio: "Drives commercial growth across all LIOZIO solutions. Owns the revenue targets, the partnership strategy, the affiliate programme, and the customer acquisition model. Obsessed with one number: the cost of acquiring a customer who stays.",
    image: "/images/team/fatimat-siyaka.jpg",
  },
  {
    name: "Abdulhamid Akinola",
    title: "Head of Technology",
    bio: "Architects and builds the technology infrastructure that powers every LIOZIO solution. Leads the integration of AI and automation into the company's operational model. Responsible for the web platform, data infrastructure, and the technology roadmap that will support expansion across multiple solutions and markets.",
    image: "/images/team/abdulhamid-akinola.jpg",
  },
  {
    name: "Daniel Owolabi",
    title: "Business Operations",
    bio: "Ensures that what LIOZIO promises, LIOZIO delivers. Owns the end-to-end operational model: procurement, supplier relationships, inventory management, quality standards, and the pickup experience. The person most responsible for ensuring that 'You Deserve It' is a lived reality, not a tagline.",
    image: "/images/team/daniel-owolabi.jpg",
  },
  {
    name: "John Alowosile",
    title: "Warehouse Management",
    bio: "Leads the warehouse and fulfilment operation that sits at the heart of the Drumroll pickup model. Responsible for the physical infrastructure, stock management, and the standards that determine whether a customer's order is ready, accurate, and handed over in under ten minutes.",
    image: "/images/team/john-alowosile.jpg",
  },
  {
    name: "Hannah Zion",
    title: "Customer Support",
    bio: "Leads the customer experience function across all LIOZIO solutions. Responsible for WhatsApp support, complaint resolution, the NPS programme, and the feedback loop that turns customer insights into operational improvements. Believes that how a company handles a problem tells you more about it than how it handles a success.",
  },
  {
    name: "Ayorinde Ponle",
    title: "Head of Farm",
    bio: "Leads LIOZIO's farm operations and sourcing partnerships — the ground-level relationships that make Drumroll's direct-sourcing model possible. Responsible for supplier quality standards, harvest planning, and the farm-to-pickup pipeline that keeps Goodfood's shelves stocked with genuinely fresh product. Believes that a supply chain is only as honest as its weakest link, so every link gets checked personally.",
    image: "/images/team/ayorinde-ponle.jpg",
  },
  {
    name: "Obadiah Omiyode",
    title: "Farm Technician",
    bio: "Manages the day-to-day technical operations across LIOZIO's farm partnerships — yield monitoring, quality control at the point of harvest, and the practical groundwork that turns a sourcing strategy into a working supply chain. The person closest to the product before it ever reaches a customer.",
    image: "/images/team/obadiah-omiyode.jpg",
  },
  {
    name: "Thomas Emokele",
    title: "Protocol Officer",
    bio: "Works alongside the protocol team on institutional relationships and formal engagements, ensuring LIOZIO Solutions represents itself consistently and correctly in every official interaction.",
  },
  {
    name: "Monday Iwegue",
    title: "Protocol Officer",
    bio: "Works alongside the protocol team on institutional relationships and formal engagements, ensuring LIOZIO Solutions represents itself consistently and correctly in every official interaction.",
  },
];

export default function TeamGrid() {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  function handleMeetClick(member: TeamMember, triggerEl: HTMLButtonElement) {
    triggerRef.current = triggerEl;
    setActiveMember(member);
  }

  return (
    <section className="bg-gradient-to-br from-liozio-charcoal via-liozio-purple to-liozio-charcoal">
      <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
        {/*
          Intro (h1/subhead/paragraph) now lives in TeamHero.tsx above this
          section. Not wrapped in FadeIn — Lighthouse measured this page's
          LCP candidate as the first card's bio text (mobile viewport: a
          single-column card can render larger than this heading), with
          ~1.2s of render delay from the opacity animation. Neither this
          heading nor the first card animate in; everything else still does.

          Background is liozio-charcoal/liozio-purple only (CLAUDE.md §4a —
          no new colours). Contrast checked, not assumed: gold text against
          the brightest point of this gradient (the purple via-stop) is
          5.92:1, white is 11.99:1, white/60 (placeholder text) is 5.45:1 —
          all clear 4.5:1 with real margin.
        */}
        <h2 className="font-body text-xs font-medium uppercase tracking-wide text-liozio-gold">
          Founding Team
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, index) =>
            index === 0 ? (
              <TeamCard
                key={member.name}
                name={member.name}
                title={member.title}
                image={member.image}
                placeholder={member.placeholder}
                onMeetClick={(triggerEl) => handleMeetClick(member, triggerEl)}
              />
            ) : (
              <FadeIn key={member.name} delay={Math.min(index * 0.06, 0.36)}>
                <TeamCard
                  name={member.name}
                  title={member.title}
                  image={member.image}
                  placeholder={member.placeholder}
                  onMeetClick={(triggerEl) => handleMeetClick(member, triggerEl)}
                />
              </FadeIn>
            )
          )}
        </div>
      </div>

      <TeamMemberModal
        member={activeMember}
        onClose={() => setActiveMember(null)}
        triggerRef={triggerRef}
      />
    </section>
  );
}
