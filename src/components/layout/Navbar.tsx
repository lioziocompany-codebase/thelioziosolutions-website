"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// CLAUDE.md §3 — exact nav structure.
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Solutions", href: "/solutions" },
  { label: "Our Team", href: "/team" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-purple focus-visible:ring-offset-2";

function isActiveLink(pathname: string, href: string) {
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Plain scroll listener instead of framer-motion's useScroll — Navbar
  // renders on every page and hydrates immediately, so it shouldn't need
  // framer-motion's animation engine just to flip a boolean past 8px.
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const menuButton = menuButtonRef.current;

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";
    // Hides WhatsAppButton via a plain CSS rule in globals.css — it's a
    // sibling under <body>, not a descendant, so this can't be done with a
    // Tailwind group-* variant (those require the toggled class on an
    // ancestor of the target). Full-screen overlay shouldn't have a
    // floating action button competing with its own CTA underneath it.
    document.body.classList.add("mobile-menu-open");

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
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
      document.body.classList.remove("mobile-menu-open");
      menuButton?.focus();
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur-sm" : "bg-white/0"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-container items-center justify-between gap-4 px-gutter py-3 lg:px-8"
      >
        <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/The_LIOZIO_Solutions_Logo.png"
            alt="The LIOZIO Solutions"
            width={200}
            height={174}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = isActiveLink(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-sm font-body text-sm font-medium underline-offset-4 transition-colors hover:text-liozio-purple ${
                    isActive
                      ? "text-liozio-purple underline"
                      : "text-liozio-charcoal"
                  } ${FOCUS_RING}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={`inline-flex min-h-11 items-center justify-center rounded-full bg-liozio-gold px-8 font-body text-sm font-medium text-liozio-charcoal transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] ${FOCUS_RING}`}
          >
            Partner With Us
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          className={`flex h-11 w-11 items-center justify-center rounded-md text-liozio-charcoal transition-colors hover:bg-liozio-charcoal/5 lg:hidden ${FOCUS_RING}`}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col bg-liozio-charcoal px-gutter py-3 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="shrink-0"
                onClick={() => setMenuOpen(false)}
              >
                <Image
                  src="/images/The_LIOZIO_Solutions_Logo.png"
                  alt="The LIOZIO Solutions"
                  width={200}
                  height={174}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className={`flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 ${FOCUS_RING} focus-visible:ring-liozio-gold`}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <ul className="mt-12 flex flex-1 flex-col items-start gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = isActiveLink(pathname, link.href);
                return (
                  <li key={link.href} className="w-full">
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`font-heading text-2xl font-semibold underline-offset-4 transition-colors hover:text-liozio-gold ${
                        isActive ? "text-liozio-gold underline" : "text-white"
                      } ${FOCUS_RING} focus-visible:ring-liozio-gold`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`mb-4 inline-flex min-h-11 items-center justify-center rounded-full bg-liozio-gold px-8 font-body text-sm font-medium text-liozio-charcoal transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${FOCUS_RING} focus-visible:ring-white`}
            >
              Partner With Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
