const WHATSAPP_URL = "https://wa.me/2348122969820";

// WhatsApp's official brand green (#25D366) — the one deliberate exception
// to CLAUDE.md §4's two-palette rule: this is a recognizable third-party
// action (chat with us on WhatsApp), not a LIOZIO/Drumroll UI element.
//
// z-[55] — above the sticky Navbar (z-50), below InitialLoadSplash (z-[60])
// so the splash still correctly covers it during initial load. It's
// explicitly hidden while the mobile menu overlay is open (see the
// `.whatsapp-fab` rule in globals.css, toggled by Navbar) — floating on
// top of the full-screen nav visually collided with its own CTA button.
//
// No client JS needed — the hover/scale animation is plain CSS, so this
// stays a Server Component.
export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp (opens in a new tab)"
      className="whatsapp-fab fixed bottom-6 right-6 z-[55] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <svg
        viewBox="0 0 24 24"
        fill="white"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.746-.87-2.885-1.539-4.03-3.489-.298-.523.298-.487.858-1.62.096-.19.048-.352-.05-.548-.093-.19-.42-1.012-.573-1.34-.152-.325-.312-.34-.512-.34-.198 0-.42.05-.622.29-.31.373-.917 1.157-.917 2.68 0 1.522 1.037 2.996 1.19 3.194.154.198 2.026 3.096 4.907 4.213 2.883 1.117 2.883.746 3.406.694.523-.049 1.694-.688 1.937-1.352.24-.664.24-1.234.166-1.352-.074-.117-.27-.187-.567-.335z" />
        <path d="M12.05 21.785h-.005c-1.723 0-3.417-.462-4.9-1.335l-.351-.208-3.645.955.972-3.554-.229-.363a9.86 9.86 0 0 1-1.51-5.253c0-5.45 4.436-9.884 9.885-9.884 2.64 0 5.126 1.03 6.99 2.898a9.808 9.808 0 0 1 2.892 6.977c0 5.45-4.437 9.884-9.885 9.884zm8.421-18.302A11.815 11.815 0 0 0 12.05 0C5.463 0 .102 5.36.099 11.947a11.906 11.906 0 0 0 1.588 5.98L0 24l6.253-1.639a11.926 11.926 0 0 0 5.796 1.469h.005c6.585 0 11.947-5.36 11.949-11.947a11.858 11.858 0 0 0-3.532-8.42Z" />
      </svg>
    </a>
  );
}
