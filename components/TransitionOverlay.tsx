"use client";

import { motion } from "framer-motion";
interface TransitionOverlayProps {
  visible: boolean;
}

export default function TransitionOverlay({ visible }: TransitionOverlayProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[9998] bg-[#fafafa] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{
        duration: 0.45,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    />
  );
}