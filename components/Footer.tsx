"use client";

import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";

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
      className="fixed bottom-0 left-0 -translate-x-5 translate-y-2 w-full z-50 text-current py-4 px-6 flex items-center"
    >
      <button hidden onClick={handleToggle} className="relative w-20 h-20">
        <video ref={videoRef} muted playsInline preload="auto" className="w-full h-full" src={initialSrc} />
      </button>
    </footer>
  );
}