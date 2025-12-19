"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MasonryGridProps } from "@/types/project";

export default function ProjectIndex({ projects, title }: MasonryGridProps & { title?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [itemWidth, setItemWidth] = useState(420);
  const [itemHeight, setItemHeight] = useState(560);
  const GAP = 24; // px, should match tailwind gap-6
  const PEEK = 56; // how much of the next slide peeks onto the screen
  const scrollRaf = useRef<number | null>(null);
  const [sidePadding, setSidePadding] = useState(0);
  const latestIndexRef = useRef<number>(0);
  const scrollEndTimeout = useRef<number | null>(null);
  const slotWidthRef = useRef<number | null>(null);
  // no leading/trailing blanks in the restored behavior

  const scrollToIndex = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    const slotWidth = slotWidthRef.current ?? itemWidth + GAP;
    const offset = clamped * slotWidth; // centering equals i * slotWidth
    container.scrollTo({ left: offset, behavior: "smooth" });
  }, [itemWidth, projects.length]);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const slotWidth = slotWidthRef.current ?? itemWidth + GAP;
    const idx = Math.round(container.scrollLeft / slotWidth);
    const clamped = Math.max(0, Math.min(idx, projects.length - 1));
    latestIndexRef.current = clamped;
    setCurrentIndex(clamped);
  }, [itemWidth, projects.length]);

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
      const w = cw < 640 ? Math.round(cw * 0.8) : Math.min(520, Math.round(cw * 0.6));
      const h = Math.round(w * 1.33);
      setItemWidth(w);
      setItemHeight(h);

      // compute side padding so first and last items can center, then subtract PEEK so next item peeks in
      const basePad = Math.max(0, Math.round((cw - w) / 2));
      const pad = Math.max(0, basePad - Math.round(PEEK / 2));
      setSidePadding(pad);

      // determine actual slot width from DOM (accounts for gap/columnGap)
      const children = Array.from(container.children) as HTMLElement[];
      if (children.length > 1) {
        const measuredSlot = children[1].offsetLeft - children[0].offsetLeft;
        slotWidthRef.current = measuredSlot;
      } else {
        slotWidthRef.current = w + GAP;
      }

      // recenter latest index after layout changes
      requestAnimationFrame(() => scrollToIndex(latestIndexRef.current));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);

    // initial call
    handleScroll();

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
        scrollToIndex(Math.min(idx + 1, projects.length - 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [scrollToIndex, projects.length]);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-subheading mb-2">{title ?? projects[currentIndex]?.title}</h1>

      <div className="relative w-full overflow-x-auto hide-scrollbar" ref={containerRef}>
        <div
          className="flex gap-1 py-3 snap-x snap-mandatory scroll-smooth items-center"
          style={{ paddingLeft: sidePadding, paddingRight: sidePadding, columnGap: GAP }}
        >
          {/* leading blank slot to allow first real slide to center */}
          <div
            aria-hidden
            style={{ width: itemWidth, height: itemHeight, flexShrink: 0 }}
            className="snap-center"
          />
          {projects.map((item, index) => {
            const isActive = index === currentIndex;
            const scale = isActive ? 1 : 0.75;
            const z = isActive ? 20 : 10;

            return (
              <motion.div
                key={item.id}
                className="flex-shrink-0 snap-center cursor-pointer relative overflow-hidden"
                style={{ width: itemWidth, height: itemHeight, zIndex: z }}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                onClick={() => scrollToIndex(index)}
              >
                <Link href={`/projects/${item.collection}/${item.id}`}>
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
                        fill
                        sizes={isActive ? "(max-width: 500px) 100vw, 50vw" : "(max-width: 400px) 100vw, 33vw"}
                        className="object-contain"
                        style={{ objectPosition: "center" }}
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
            style={{ width: itemWidth, height: itemHeight, flexShrink: 0 }}
            className="snap-center"
          />
        </div>
      </div>

      {/* Navigation icons + pagination dots */}
      <div className="flex items-center mt-6 gap-4">
        <button
          onClick={() => scrollToIndex(Math.max(currentIndex - 1, 0))}
          className="p-2 rounded-full"
        >
          <svg width="24px" height="24px" strokeWidth="1.3" viewBox="0 0 24 24" opacity="0.4" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M15 6L9 12L15 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </button>
        <div className="flex gap-4">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full ${i === currentIndex ? "bg-gray-800" : "bg-gray-300"}`}
            />
          ))}
        </div>
        <button
          onClick={() => scrollToIndex(Math.min(currentIndex + 1, projects.length - 1))}
          className="p-2 rounded-full"
        >
          <svg width="24px" height="24px" strokeWidth="1.3" viewBox="0 0 24 24" opacity="0.4" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 6L15 12L9 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </button>
      </div>

      {/* Title and body */}
      <div className="mt-8 px-8 text-center max-w-3xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-subheading mb-2">{projects[currentIndex]?.title}</h2>
         <p className="text-bodySmall font-body text-gray-700"> {projects[currentIndex]?.previewText} </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}