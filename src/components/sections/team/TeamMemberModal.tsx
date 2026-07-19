"use client";

import { useEffect, useRef, type RefObject } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import TeamAvatar from "@/components/cards/TeamAvatar";

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
  placeholder?: boolean;
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-purple focus-visible:ring-offset-2";

// Same accessible-dialog pattern as Navbar's mobile menu: Escape closes,
// Tab is trapped within the panel, focus moves to the close button on
// open and back to whichever "Meet [Name]" button opened it on close.
export default function TeamMemberModal({
  member,
  onClose,
  triggerRef,
}: TeamMemberModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!member) return;

    const triggerEl = triggerRef.current;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])"
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      triggerEl?.focus();
    };
  }, [member, onClose, triggerRef]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-liozio-charcoal/60 px-gutter backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-member-modal-name"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg rounded-2xl bg-white p-card shadow-xl lg:p-card-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className={`absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-liozio-charcoal/70 transition-colors hover:bg-liozio-silver ${FOCUS_RING}`}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <TeamAvatar
              name={member.name}
              image={member.image}
              placeholder={member.placeholder}
              variant="circle"
            />

            <h3
              id="team-member-modal-name"
              className="mt-4 pr-12 font-heading text-2xl font-semibold text-liozio-charcoal"
            >
              {member.name}
            </h3>
            <p className="mt-1 font-body text-sm font-medium text-liozio-purple">
              {member.title}
            </p>
            <p
              className={`mt-4 font-body text-base leading-body ${
                member.placeholder
                  ? "italic text-liozio-charcoal/70"
                  : "text-liozio-charcoal/85"
              }`}
            >
              {member.placeholder ? "Bio coming soon." : member.bio}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
