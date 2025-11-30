"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const main = document.querySelector("main");
    if (main) {
      main.scrollTo({
        top: 0,
        left: 0,
        behavior: isFirstLoad.current ? "auto" : "smooth",
      });
    }
    isFirstLoad.current = false;
  }, [pathname]);

  return null;
}