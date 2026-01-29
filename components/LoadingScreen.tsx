"use client";

import React from "react";

interface LoadingScreenProps {
  visible: boolean;
}

export default function LoadingScreen({ visible }: LoadingScreenProps) {
  const [ready, setReady] = React.useState(false);

  return (
    <div
      style={{
        opacity: visible && ready ? 1 : 0,
        transition: "opacity 1s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        backgroundColor: "white",
        willChange: "opacity",
        transform: "translateZ(0)",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => setReady(true)}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      >
        <source src="/images/cat-animation.mov" />
      </video>
    </div>
  );
}