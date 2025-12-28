"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MasonryGridProps } from "@/types/project";
import projects from "@/data/projects";

const siteProjects = projects.filter(
  (p) => p.collection === "professional" || p.collection === "studio"
);

export default function ProjectIndex({ projects, title }: MasonryGridProps & { title?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = projects && projects.length ? projects : siteProjects;

  const GAP = "2vw";
  const scrollRaf = useRef<number | null>(null);
  const [sidePadding, setSidePadding] = useState(0);
  const latestIndexRef = useRef<number>(0);
  const scrollEndTimeout = useRef<number | null>(null);
  const slotWidthRef = useRef<number | null>(null);
  // helper: convert slugs like "print-design" or "my_collection" to "Print Design" / "My Collection"
  const humanize = (slug?: string) =>
    !slug
      ? ""
      : String(slug)
          .replace(/[-_]+/g, " ")
          .split(" ")
          .filter(Boolean)
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
          .join(" ");

// const formatCollectionAndCategories = (p?: { collection?: string; categories?: string[] | string }) => {
//   if (!p) return "";
//   const allowedCollections = ["professional", "studio"];
//     const parts: string[] = [];
// if (p.collection && allowedCollections.includes(p.collection.toLowerCase())) {
//   parts.push(humanize(p.collection));
// }

//   if (p.categories) {
//     const cats = Array.isArray(p.categories) ? p.categories : String(p.categories).split(",").map((s) => s.trim());
//     parts.push(...cats.filter(Boolean).map((c) => humanize(c)));
//   }

//   return parts.join(", ");
// };

const formatCategories = (p?: { categories?: string[] | string }) => {
  if (!p) return "";
  if (!p.categories) return "";
  const cats = Array.isArray(p.categories) ? p.categories : String(p.categories).split(",").map((s) => s.trim());
  return cats.filter(Boolean).map((c) => humanize(c)).join(", ");
};

  const scrollToIndex = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    // compute pixel sizes from container for responsive 60vw / 2vw
      const track = container.firstElementChild as HTMLElement | null;
      if (!track) return;
      const children = Array.from(track.children) as HTMLElement[];
    const cw = container.clientWidth;
    const itemWidthPx = Math.round(cw * 0.6); // 60vw in px
    const gapPx = Math.round(cw * 0.02); // 2vw in px
    const slotWidth = slotWidthRef.current ?? itemWidthPx + gapPx;
    const targetSlot = clamped;
    const centerAdjustment = Math.round(cw / 2 - itemWidthPx / 2);
    if (children[targetSlot]) {
      const childOffset = children[targetSlot].offsetLeft;
      const offset = Math.max(0, childOffset - centerAdjustment);
      const maxScroll = Math.max(0, (track.scrollWidth || 0) - cw);
      const finalOffset = Math.min(offset, maxScroll);
      // if (typeof window !== "undefined") {
      //   // debug: show computed values for centering
      //   // eslint-disable-next-line no-console
      //   console.debug("scrollToIndex", { index: clamped, cw, itemWidthPx, gapPx, childOffset, centerAdjustment, offset, maxScroll, finalOffset });
      // }
      container.scrollTo({ left: finalOffset, behavior: "smooth" });
      return;
    }

    const offset = Math.max(0, targetSlot * slotWidth - centerAdjustment);
    const maxScroll = Math.max(0, (track.scrollWidth || 0) - cw);
    const finalOffset = Math.min(offset, maxScroll);
    container.scrollTo({ left: finalOffset, behavior: "smooth" });
  }, [projects.length]);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cw = container.clientWidth;
    const itemWidthPx = Math.round(cw * 0.6);
    const gapPx = Math.round(cw * 0.02);
    const slotWidth = slotWidthRef.current ?? itemWidthPx + gapPx;
    const idx = Math.round(container.scrollLeft / slotWidth);
    // project index derived directly from slot index
    const projIdx = Math.round(idx);
    const clamped = Math.max(0, Math.min(projIdx, projects.length - 1));
    latestIndexRef.current = clamped;
    setCurrentIndex(clamped);
  }, [projects.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mounted = true;

    const onScroll = () => {
      if (scrollRaf.current) window.cancelAnimationFrame(scrollRaf.current);
      scrollRaf.current = window.requestAnimationFrame(() => {
        if (!mounted) return;
        handleScroll();
      });

      // debounce scroll end snapping
      if (scrollEndTimeout.current) window.clearTimeout(scrollEndTimeout.current);
      scrollEndTimeout.current = window.setTimeout(() => {
        // snap to nearest slot
        scrollToIndex(latestIndexRef.current);
        scrollEndTimeout.current = null;
      }, 120) as unknown as number;
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    // also snap on touchend / pointerup to handle some mobile cases
    const onEnd = () => {
      if (scrollEndTimeout.current) {
        window.clearTimeout(scrollEndTimeout.current);
        scrollEndTimeout.current = null;
      }
      scrollToIndex(latestIndexRef.current);
    };
    container.addEventListener("touchend", onEnd);
    container.addEventListener("pointerup", onEnd);
    container.addEventListener("mouseup", onEnd);

    const measure = () => {
      if (!container) return;
      const cw = container.offsetWidth;

      // compute pixel values for responsive 60vw / 2vw sizing
      const itemWidthPx = Math.round(cw * 0.6);
      const gapPx = Math.round(cw * 0.02);

      // side padding so first/last items can center, minus half the gap so next item peeks
      const basePad = Math.max(0, Math.round((cw - itemWidthPx) / 2));
      const pad = Math.max(0, basePad - Math.round(gapPx / 2));
      setSidePadding(pad);

      // compute actual slot width from DOM (includes gap)
        const track = container.firstElementChild as HTMLElement | null;
        const children = track ? Array.from(track.children) as HTMLElement[] : [];
      if (children.length > 1) {
        const measuredSlot = children[1].offsetLeft - children[0].offsetLeft;
        slotWidthRef.current = measuredSlot;
      } else {
        slotWidthRef.current = itemWidthPx + gapPx;
      }

      // if (typeof window !== "undefined") {
      //   // debug: print measurement info
      //   // eslint-disable-next-line no-console
      //   console.debug("carousel:measure", {
      //     cw,
      //     itemWidthPx,
      //     gapPx,
      //     sidePadding: pad,
      //       firstOffset: children[0]?.offsetLeft,
      //       secondOffset: children[1]?.offsetLeft,
      //     slotWidth: slotWidthRef.current,
      //   });
      // }

      // recenter current slide (use direct scrollLeft assignment for immediate effect)
      const targetIndex = latestIndexRef.current;
      const currentChild = children[targetIndex] ?? children[0];
      if (currentChild) {
        const centerOffset = Math.max(cw - itemWidthPx) / 2;
        const scrollLeft = Math.max(0, currentChild.offsetLeft - centerOffset);
        // set scrollLeft directly to ensure immediate centering of the correct slide
        container.scrollLeft = scrollLeft;
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);

    // initial call (defer to next frame to avoid sync setState in effect)
    window.requestAnimationFrame(() => handleScroll());

    return () => {
      mounted = false;
      container.removeEventListener("scroll", onScroll);
      container.removeEventListener("touchend", onEnd);
      container.removeEventListener("pointerup", onEnd);
      container.removeEventListener("mouseup", onEnd);
      ro.disconnect();
      if (scrollRaf.current) window.cancelAnimationFrame(scrollRaf.current);
      if (scrollEndTimeout.current) window.clearTimeout(scrollEndTimeout.current);
    };
  }, [scrollToIndex, handleScroll]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const idx = latestIndexRef.current;
      if (e.key === "ArrowLeft") {
        scrollToIndex(Math.max(idx - 1, 0));
      } else if (e.key === "ArrowRight") {
        scrollToIndex(Math.min(idx + 1, items.length - 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [scrollToIndex, items.length]);

  return (
    <div className="w-full flex flex-col items-center text-current">
      <h1 className="font-subheading mb-2">{title ?? items[currentIndex]?.title}</h1>

      <div className="relative w-full overflow-x-auto hide-scrollbar" ref={containerRef}>
        <div
          className="flex gap-1 py-3 snap-x snap-mandatory scroll-smooth items-center"
          style={{ paddingLeft: sidePadding, paddingRight: sidePadding, columnGap: GAP }}
        >
           {items.map((item, index) => {
            const isActive = index === currentIndex;
            const scale = isActive ? 1 : 0.9;
            const z = isActive ? 20 : 10;

            return (
              <motion.div
                key={item.id}
                className="flex-shrink-0 snap-center cursor-pointer relative overflow-hidden bg-none"
                  style={{ width: "60vw", aspectRatio: "2 / 3", zIndex: z }}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                onClick={() => scrollToIndex(index)}
              >
                <Link href={`/projects/${item.collection}/${item.id}`} prefetch={false}>
                  {item.isVideo ? (
                    <video
                      src={item.images[0]}
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    />
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={item.images[0]}
                        alt={typeof item.title === "string" ? item.title : "Project image"}
                        width={500}
                        height={750}
                        style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
                        className=""
                      />
                    </div>
                  )}
                </Link>
              </motion.div>
            );
          })}
          {/* trailing blank slot to allow last real slide to center */}
          <div
            aria-hidden
            style={{ width: "60vw", aspectRatio: "2 / 3", flexShrink: 0 }}
            className="snap-center bg-none"
          />
        </div>
      </div>

      {/* Navigation icons + pagination dots */}
      <div className="flex items-center mt-3 gap-4">
        {currentIndex > 0 ? (
          <button
            onClick={() => scrollToIndex(Math.max(currentIndex - 1, 0))}
            className="p-2 rounded-full transition-opacity ease-in-out"
            aria-label="Previous slide"
          >
            <svg width="24px" height="24px" strokeWidth="1.3" viewBox="0 0 24 24" opacity="0.4" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M15 6L9 12L15 18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </button>
        ) : (
          <div className="w-10 h-10" aria-hidden />
        )}

        <div className="flex gap-4">
          {projects.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full ${i === currentIndex ? "bg-gray-800" : "bg-gray-300"}`}
            />
          ))}
        </div>

        {currentIndex < items.length - 1 ? (
          <button
            onClick={() => scrollToIndex(Math.min(currentIndex + 1, items.length - 1))}
            className="p-2 rounded-full transition-opacity ease-in-out"
            aria-label="Next slide"
          >
            <svg width="24px" height="24px" strokeWidth="1.3" viewBox="0 0 24 24" opacity="0.4" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 6L15 12L9 18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </button>
        ) : (
          <div className="w-10 h-10" aria-hidden />
        )}
      </div>

      {/* Title and body */}
      <div className="mt-8 px-8 text-center max-w-3xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
           key={items[currentIndex]?.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-body small-caps mb-2">{formatCategories(items[currentIndex]) || items[currentIndex]?.previewHeading}</h2>
         <p className="text-bodySmall font-body text-left mt-5"> {items[currentIndex]?.previewText} </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}