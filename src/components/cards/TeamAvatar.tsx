import Image from "next/image";
import { UserRound } from "lucide-react";

interface TeamAvatarProps {
  name: string;
  image?: string;
  placeholder?: boolean;
  /**
   * "circle" — small ring-framed circle, used in TeamMemberModal (sits on
   * a white background there, unchanged by the grid restyle).
   * "rect" — large portrait photo, used in TeamGrid's cards. Sits on the
   * grid section's dark gradient, so its placeholder/dashed treatment uses
   * light-on-dark colours instead of the circle variant's dark-on-light.
   */
  variant?: "circle" | "rect";
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

// Shared by TeamCard and TeamMemberModal so the photo/initials/placeholder
// logic stays identical in both places even though the two variants look
// very different (small ring circle vs. large framed portrait).
export default function TeamAvatar({
  name,
  image,
  placeholder = false,
  variant = "circle",
}: TeamAvatarProps) {
  if (variant === "rect") {
    if (image) {
      return (
        <div className="relative aspect-[1/1.15] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/15">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      );
    }

    if (placeholder) {
      return (
        <div className="flex aspect-[1/1.15] w-full items-center justify-center rounded-2xl border-2 border-dashed border-white/25 bg-white/5">
          <UserRound className="h-14 w-14 text-white/30" aria-hidden="true" />
        </div>
      );
    }

    return (
      <div className="flex aspect-[1/1.15] w-full items-center justify-center rounded-2xl bg-liozio-purple/60 shadow-lg ring-1 ring-white/15">
        <span className="font-heading text-4xl font-semibold text-white">
          {getInitials(name)}
        </span>
      </div>
    );
  }

  // circle variant (modal)
  if (image) {
    return (
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full shadow-md ring-2 ring-white">
        <Image src={image} alt={name} fill sizes="96px" className="object-cover" />
      </div>
    );
  }

  if (placeholder) {
    return (
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-liozio-charcoal/30 bg-white shadow-sm">
        <UserRound className="h-10 w-10 text-liozio-charcoal/30" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-liozio-purple shadow-md ring-2 ring-white">
      <span className="font-heading text-xl font-semibold text-white">
        {getInitials(name)}
      </span>
    </div>
  );
}
