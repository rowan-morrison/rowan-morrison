"use client";

import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Footer() {
  const { setTheme, resolvedTheme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const [isClient, setIsClient] = useState(false);
useEffect(() => {
  const id = requestAnimationFrame(() => setIsClient(true));
  return () => cancelAnimationFrame(id);
}, []);

  if (!isClient || !resolvedTheme) return null;

  const initialSrc =
    resolvedTheme === "dark" ? "/images/moon-to-sun.webm" : "/images/sun-to-moon.webm";

  const handleToggle = () => {
    if (isAnimating || !videoRef.current) return;

    const isDark = resolvedTheme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    setIsAnimating(true);
    videoRef.current.src = isDark ? "/images/moon-to-sun.webm" : "/images/sun-to-moon.webm";
    videoRef.current.currentTime = 0;
    videoRef.current.play();

    const onEnd = () => {
      setTheme(nextTheme);
      videoRef.current!.pause();
      videoRef.current!.currentTime = videoRef.current!.duration - 0.05;
      videoRef.current!.removeEventListener("ended", onEnd);
      setIsAnimating(false);
    };

    videoRef.current.addEventListener("ended", onEnd);
  };

  return (
  <footer
  suppressHydrationWarning
  className="w-full z-50 text-current py-4 px-1 flex flex-col items-center"
>
   <section className="footer-container w-full box-border mx-auto p-[var(--container-side-space)]">
    <p className="mb-1 font-bodySmall text-bodySmall italic">
      Send me a message
    </p>
    <p className="mb-4 font-bodySmall text-bodySmall">
      If you would like to get in touch, please do and I’ll be happy to hear from you.
    </p>
  <div className="footer-logo relative w-[80vw] h-auto aspect-[180/110]">
                <Image
                  src={resolvedTheme === "dark" ? "/images/rowan-morrison-logo-white-v2.png" : "/images/rowan-morrison-logo-black-v2.png"}
                  alt="Rowan Morrison Logo"
                    fill
    style={{ objectFit: "contain" }}
    className="w-full h-auto"
    sizes="90vw"
    loading="eager"
                /></div>
      <p className="copyright-notice font-bodySmall text-bodySmall">&copy; 2025 Rowan Morrison. All rights reserved.</p>
      </section>

      <button hidden onClick={handleToggle} className="relative w-20 h-20">
        <video ref={videoRef} muted playsInline preload="auto" className="w-full h-full" src={initialSrc} />
      </button>
    </footer>
  );
}