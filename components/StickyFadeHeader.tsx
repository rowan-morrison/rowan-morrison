"use client";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
};

export default function StickyFadeHeader({ children, threshold = 5, className = "" }: Props) {
  const [faded, setFaded] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      setFaded(scrollTop + windowHeight >= docHeight - threshold);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [threshold]);

  return (
    <>
    <div
      className={`sticky top-0 z-[985] ${className}`}
      style={{ transition: "opacity 300ms ease-in-out", opacity: faded ? 0 : 1, backgroundColor: "white" }}
    >
      {children}
    </div>
    </>
  );
}
