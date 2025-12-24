"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  targetRef: React.RefObject<HTMLElement>;
  maskId: string;
  // either provide an SVG path (scaled to maskWidth/maskHeight) or an image href
  path?: string;
  maskImageHref?: string;
  maskWidth?: number;
  maskHeight?: number;
  strokeWidth?: number;
  invert?: boolean;
};

export default function InvertMaskPortal({
  targetRef,
  maskId,
  path,
  maskImageHref,
  maskWidth = 24,
  maskHeight = 24,
  strokeWidth = 1.5,
  invert = true,
}: Props) {
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!targetRef?.current) return;
    const node = targetRef.current;
    function update() {
      const r = node.getBoundingClientRect();
      setRect(r);
    }
    update();

    const onScroll = () => update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(update);
      try { ro.observe(node); } catch (e) {}
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (ro) ro.disconnect();
    };
  }, [targetRef]);

  if (!rect || !document?.body) return null;

  const left = rect.left + window.scrollX;
  const top = rect.top + window.scrollY;

  const portal = (
    <div aria-hidden>
      <svg width="0" height="0" aria-hidden>
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={maskWidth} height={maskHeight}>
            <rect x="0" y="0" width={maskWidth} height={maskHeight} fill="black" />
            {path && (
              <path
                d={path}
                stroke="white"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            )}
            {maskImageHref && (
              <image
                href={maskImageHref}
                x="0"
                y="0"
                width={maskWidth}
                height={maskHeight}
                preserveAspectRatio="xMidYMid meet"
              />
            )}
          </mask>
        </defs>
      </svg>

      <div
        style={{
          position: "absolute",
          left: left,
          top: top,
          width: rect.width,
          height: rect.height,
          pointerEvents: "none",
          WebkitBackdropFilter: invert ? "invert(1)" : undefined,
          backdropFilter: invert ? "invert(1)" : undefined,
          WebkitMask: `url(#${maskId}) no-repeat center / 100% 100%`,
          mask: `url(#${maskId}) no-repeat center / 100% 100%`,
        }}
      />
    </div>
  );

  return createPortal(portal, document.body);
}
