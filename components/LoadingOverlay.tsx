"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(false), 4000);

    const handleLoad = () => {
      clearTimeout(timeoutId);
      setIsVisible(false);
    };

    window.addEventListener("load", handleLoad);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex items-center justify-center backdrop-blur-md">

    <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at center, rgba(0,0,0,0.10) 60%, rgba(255,255,255,0) 100%)",
      mixBlendMode: "soft-light",
    }}
  ></div>

          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(100px)",
              backgroundColor: "rgba(255,255,255,0.15)",
              backgroundImage: "url('/images/paper-texture.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              mixBlendMode: "overlay",
              filter: "brightness(1) contrast(1.05) saturate(0.6)",
              opacity: 0.7,
            }}
          ></div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full w-full">
            <Image
              src="/images/rowan-morrison-logo-black-v2.png"
              alt="Logo"
              width={180}
              height={110}
              priority
              style={{
                height: "auto",
                width: "auto",
                objectFit: "contain",
                opacity: 0.95,
              }}
            />
            <p className="fixed bottom-0 text-current font-label text-labelMedium small-caps mt-auto pb-[10vh]">
              Creative Portfolio
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}