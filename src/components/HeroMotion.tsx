"use client";

import { useState } from "react";

/**
 * Vibrant animated placeholder for the hero video. Drop a real clip at
 * /public/hero.mp4 (and optionally /public/hero-poster.jpg) and it fades
 * in on top automatically once it proves it can play.
 */
export default function HeroMotion({ overlayText }: { overlayText: string }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl">
      <div className="kente-motion absolute inset-0" aria-hidden="true">
        <div className="kente-motion__layer kente-motion__layer--a" />
        <div className="kente-motion__layer kente-motion__layer--b" />
        <div className="kente-motion__layer kente-motion__layer--c" />
        <div className="kente-motion__glow" />
      </div>

      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        onCanPlay={() => setVideoLoaded(true)}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/40 via-transparent to-transparent p-6">
        <p className="font-sans text-sm font-semibold uppercase tracking-widest text-white/90">
          {overlayText}
        </p>
      </div>
    </div>
  );
}
