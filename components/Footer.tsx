"use client";

import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Footer() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
  className="w-full text-current py-6 px-1 flex flex-col items-center bg-white dark:bg-black transition-colors duration-300"
>
   <section className="footer-container w-full box-border mx-auto px-[var(--container-side-space)]">
    <p className="mb-1 font-subheading">
      Send me a message
    </p>
    <p className="mb-4 font-bodySmall text-bodySmall">
      If you’d like to get in touch, please do and I’ll be happy to hear from you.
    </p>
    <form
     action="https://formspree.io/f/meogokpw"
    method="POST"
    className="flex flex-col gap-3 w-full max-w-md mx-auto text-formSmall">
      <div className="relative w-full border-b border-slate-250">
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        autoComplete="email"
        className="w-full py-4 outline-none bg-transparent"
        required
      />
      <button
      type="submit"
      className="absolute right-0 top-1/2 transform -translate-y-1/2"
      aria-label="Send email"
    >
      <svg 
      width="16px" 
      height="16px" 
      strokeWidth="1.5" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      color="#000000">
        <path d="M9 6L15 12L9 18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"
        strokeLinejoin="round"></path>
        </svg>
    </button>
      </div>
      <textarea
        name="message"
        placeholder="Your message"
        className="w-100 py-4 border-b border-slate-250 outline-none bg-transparent resize-none"
        rows={3}
        value={formData.message}
        onChange={handleChange}
        autoComplete="off"
        required
      ></textarea>
      
    </form>
  <div className="footer-logo relative w-full h-40 mb-0">
 <Image
    src={resolvedTheme === "dark" ? "/images/rowan-morrison-logo-white-v2.png" : "/images/rowan-morrison-logo-black-v2.png"}
    alt="Rowan Morrison Logo"
    fill
    style={{ objectFit: "contain" }}
    className="w-full h-auto"
    sizes="90vw"
                /></div>
      <p className="copyright-notice font-bodySmall text-bodySmall">&copy; 2025 Rowan Morrison. All rights reserved.</p>
      </section>

      <button hidden onClick={handleToggle} className="relative w-20 h-20">
        <video ref={videoRef} muted playsInline preload="auto" className="w-full h-full" src={initialSrc} />
      </button>
    </footer>
  );
}