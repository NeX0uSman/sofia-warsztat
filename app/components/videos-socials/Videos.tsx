"use client";

import { useState } from "react";
import { MotionLink } from "../MotionInteractive";

export interface SocialVideoPost {
  id: string;
  platform: "Facebook" | "Instagram";
  tag: string;
  title: string;
  views: string;
  duration: string;
  coverUrl: string;
  /** Paste direct Facebook / Instagram video or reel URL here */
  postUrl: string;
}

const SOCIAL_VIDEOS: SocialVideoPost[] = [
  {
    id: "reel-1",
    platform: "Facebook",
    tag: "Z podnośnika",
    title: "Zobacz, jak wygląda raport SMS ze zdjęciami przed wymianą rozrządu",
    views: "4.2 tys. wyświetleń",
    duration: "0:52",
    coverUrl:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=650&q=80",
    postUrl: "https://www.facebook.com/",
  },
  {
    id: "reel-2",
    platform: "Facebook",
    tag: "Diagnostyka",
    title: "Check Engine po deszczu? Sprawdzamy wiązkę i parametry na żywo",
    views: "6.8 tys. wyświetleń",
    duration: "1:14",
    coverUrl:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=650&q=80",
    postUrl: "https://www.facebook.com/",
  },
  {
    id: "reel-3",
    platform: "Instagram",
    tag: "Hamulce",
    title: "Dlaczego nowe tarcze biją po 2 tys. km? Mierzymy piastę zegarem",
    views: "9.1 tys. wyświetleń",
    duration: "0:44",
    coverUrl:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=650&q=80",
    postUrl: "https://www.instagram.com/",
  },
  {
    id: "reel-4",
    platform: "Facebook",
    tag: "Klimatyzacja",
    title: "Test szczelności azotem i pełne odgrzybianie parownika w 45 minut",
    views: "3.5 tys. wyświetleń",
    duration: "0:38",
    coverUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=650&q=80",
    postUrl: "https://www.facebook.com/",
  },
];

export default function SocialVideosSection() {
  const [brokenCovers, setBrokenCovers] = useState<Record<string, boolean>>({});

  return (
    <section id="wideo" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-card text-xs font-bold uppercase tracking-wider text-terracotta mb-4">
              Warsztat od kulis • Nasze social media
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-ink tracking-tight leading-[1.1]">
              Prawdziwe naprawy prosto z hali.
            </h2>
            <p className="mt-3 text-slatebody text-base sm:text-lg leading-relaxed">
              Regularnie wrzucamy na Facebooka i Instagrama krótkie nagrania z codziennej pracy —
              bez upiększania i stockowych ujęć.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <MotionLink
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white hover:bg-oat text-ink font-semibold text-sm shadow-card border border-zinc-200/80 transition-colors"
            >
              <span className="w-6 h-6 rounded-lg bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.5H7.5v3.2h2.7V22h3.3Z" />
                </svg>
              </span>
              <span>Facebook SOFIA</span>
            </MotionLink>

            <MotionLink
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white hover:bg-oat text-ink font-semibold text-sm shadow-card border border-zinc-200/80 transition-colors"
            >
              <span className="w-6 h-6 rounded-lg bg-pink-500/10 text-pink-600 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span>Instagram</span>
            </MotionLink>
          </div>
        </div>

        {/* 4-Column Vertical Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_VIDEOS.map((video) => {
            const cover = brokenCovers[video.id]
              ? "https://placehold.co/650x860/18181B/F8F7F4?text=SOFIA+Wideo"
              : video.coverUrl;

            return (
              <MotionLink
                key={video.id}
                href={video.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-[28px] p-3.5 shadow-card border border-zinc-200/80 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* 3:4 Vertical Video Poster */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-ink">
                  <img
                    src={cover}
                    onError={() =>
                      setBrokenCovers((prev) => ({ ...prev, [video.id]: true }))
                    }
                    alt={video.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/30" />

                  {/* Top Metadata */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-ink text-[11px] font-bold">
                      {video.platform}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-ink/75 backdrop-blur-md text-white text-[11px] font-semibold">
                      {video.duration}
                    </span>
                  </div>

                  {/* Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-terracotta group-hover:scale-110 transition-transform shadow-xl flex items-center justify-center ring-4 ring-white/25">
                      <svg
                        className="w-6 h-6 text-white translate-x-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5.5v13l11-6.5L8 5.5Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Title */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 space-y-1.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur-md text-white text-[11px] font-semibold">
                      {video.tag}
                    </span>
                    <h3 className="font-display font-bold text-base text-white leading-snug line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </div>

                {/* Card Bottom Action */}
                <div className="pt-3.5 px-2 pb-1 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slatebody">{video.views}</span>
                  <span className="text-ink group-hover:text-terracotta transition-colors flex items-center gap-1">
                    Obejrzyj
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M8 7h9v9" />
                    </svg>
                  </span>
                </div>
              </MotionLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}