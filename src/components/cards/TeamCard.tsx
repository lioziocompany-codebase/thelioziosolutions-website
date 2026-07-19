import TeamAvatar from "@/components/cards/TeamAvatar";

interface TeamCardProps {
  name: string;
  title: string;
  image?: string;
  placeholder?: boolean;
  onMeetClick: (triggerEl: HTMLButtonElement) => void;
}

function getFirstName(name: string) {
  return name.split(" ")[0];
}

// CLAUDE.md §7 — placeholder photography until real photos are supplied.
// Swapping in a real photo later is a one-line change: pass the `image` prop.
// Bio is no longer shown in the card itself — it lives in TeamMemberModal,
// opened by the "Meet [Name]" button below.
//
// No boxed card background here on purpose — this sits directly on
// TeamGrid's dark gradient, and the large photo itself is the dominant
// visual element (per the reference layout), not a silver card container.
export default function TeamCard({
  name,
  title,
  image,
  placeholder = false,
  onMeetClick,
}: TeamCardProps) {
  return (
    <div className="group flex h-full flex-col transition-transform duration-200 hover:-translate-y-1">
      <TeamAvatar name={name} image={image} placeholder={placeholder} variant="rect" />

      <h3
        className={`mt-4 font-heading text-lg font-semibold ${
          placeholder ? "text-white/50" : "text-liozio-gold"
        }`}
      >
        {name}
      </h3>
      <p
        className={`mt-1 font-body text-sm font-medium ${
          placeholder ? "text-white/50" : "text-white/85"
        }`}
      >
        {title}
      </p>

      <button
        type="button"
        onClick={(event) => onMeetClick(event.currentTarget)}
        className={`mt-4 inline-flex min-h-11 w-fit items-center justify-center self-start rounded-full border px-6 font-body text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-liozio-charcoal md:mt-auto ${
          placeholder
            ? "border-white/30 text-white/60 hover:bg-white/10 focus-visible:ring-white/50"
            : "border-liozio-gold text-liozio-gold hover:bg-liozio-gold hover:text-liozio-charcoal focus-visible:ring-liozio-gold"
        }`}
      >
        {placeholder ? "Bio coming soon" : `Meet ${getFirstName(name)}`}
      </button>
    </div>
  );
}
