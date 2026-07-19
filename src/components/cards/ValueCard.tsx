import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="h-full rounded-2xl bg-liozio-silver p-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg lg:p-card-lg">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-liozio-purple">
        <Icon className="h-5 w-5 text-white" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-heading text-lg font-semibold text-liozio-charcoal">
        {title}
      </h3>
      <p className="mt-2 font-body text-base leading-body text-liozio-charcoal/75">
        {description}
      </p>
    </div>
  );
}
