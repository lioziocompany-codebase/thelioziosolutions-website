import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

interface GalleryTile {
  src: string;
  alt: string;
  colSpan: 1 | 2;
  rowSpan: 1 | 2;
}

// Pinterest-style asymmetric mosaic — grid-flow-dense lets the browser
// pack the varied col/row spans without gaps, without hand-computing a
// perfect tiling. Nine photos were supplied (playpics1-9); playpics8 was
// a byte-identical duplicate of playpics4 (same MD5), so it's excluded
// here rather than shown twice.
const TILES: GalleryTile[] = [
  {
    src: "/images/gallery/culture-1.jpg",
    alt: "LIOZIO team members celebrating together at a festive team event",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    src: "/images/gallery/culture-2.jpg",
    alt: "Two LIOZIO colleagues smiling together outside the office",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: "/images/gallery/culture-3.jpg",
    alt: "Two LIOZIO team members standing together outside the office",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "/images/gallery/culture-4.jpg",
    alt: "A LIOZIO team member smiling in the office doorway",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: "/images/gallery/culture-5.jpg",
    alt: "A LIOZIO team member in a studio portrait",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    // Portrait-composed photo (face high in frame), source aspect ~0.81
    // (730x900). A prior fix tried 2x2, which looked fine at a few sample
    // widths but was never actually safe: colSpan:2 means this tile's pixel
    // width scales with the viewport while auto-rows is a fixed px value,
    // so its rendered aspect ratio balloons as width grows within a given
    // column-count band, peaking right before the next breakpoint adds a
    // column (measured 2.65:1 at 767px, just under the md breakpoint — see
    // the aspect math in the PR notes). At that aspect nearly the whole
    // head was cropped off. colSpan:1 keeps this tile's width pinned to a
    // single column at every breakpoint, which tracks its portrait source
    // far more closely (0.86:1 at lg, 1.33:1 at the worst point below md)
    // — checked across the full 375-1280px range, not just a few samples.
    src: "/images/gallery/culture-6.jpg",
    alt: "A LIOZIO team member working at her desk",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: "/images/gallery/culture-7.jpg",
    alt: "Three LIOZIO colleagues standing together in the office",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "/images/gallery/culture-9.jpg",
    alt: "LIOZIO team members connecting on a video call",
    colSpan: 1,
    rowSpan: 2,
  },
];

const COL_SPAN_CLASSES = { 1: "col-span-1", 2: "col-span-2" };
const ROW_SPAN_CLASSES = { 1: "row-span-1", 2: "row-span-2" };

export default function CultureGallery() {
  return (
    <section className="bg-liozio-charcoal">
      <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
        <FadeIn>
          <h2 className="font-body text-xs font-medium uppercase tracking-wide text-liozio-gold">
            Life at LIOZIO
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/*
            hover:scale-110 (not the subtler group-hover:scale-105 used for
            card avatars elsewhere) so a tile visibly pops forward on cursor
            hover, per this section's spec. Scaling the tile itself (not
            just the inner image) means it can visually extend past its own
            grid cell into neighbouring tiles' space — relative z-0 with
            hover:z-20 keeps the hovered tile painting on top instead of
            getting clipped by whichever sibling comes later in DOM order.
            Tailwind v4 scopes hover: to `@media (hover: hover)` by default,
            so touch devices never trigger (and can't get stuck in) this
            state — verified against this project's own compiled CSS output.
          */}
          <div className="mt-6 grid grid-flow-dense grid-cols-2 auto-rows-[110px] gap-3 sm:auto-rows-[130px] md:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[150px] lg:gap-4">
            {TILES.map((tile) => (
              <div
                key={tile.src}
                className={`relative z-0 overflow-hidden rounded-2xl shadow-md ring-1 ring-white/10 transition-all duration-300 ease-out hover:z-20 hover:scale-110 hover:shadow-2xl ${COL_SPAN_CLASSES[tile.colSpan]} ${ROW_SPAN_CLASSES[tile.rowSpan]}`}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
