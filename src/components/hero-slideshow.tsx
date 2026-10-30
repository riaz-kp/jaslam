"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";

import { ArrowUpRight, Pause, Play } from "@/components/icons";
import type { HeroSlide } from "@/content/projects";
import { pad } from "@/lib/format";

const SLIDE_MS = 7000;

export function HeroSlideshow({
  slides,
  eyebrow,
  children,
}: {
  slides: HeroSlide[];
  eyebrow: string;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused, slides.length]);

  const current = slides[active];

  return (
    <section
      data-hero
      aria-label="Featured projects"
      className="relative isolate flex h-svh min-h-[36rem] w-full items-end overflow-hidden bg-night text-white"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.href}
          aria-hidden={i !== active}
          className={`absolute inset-0 -z-20 transition-opacity duration-[1600ms] ease-soft ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            placeholder="blur"
            preload={i === 0}
            className={`object-cover ${i === active ? "hero-settle" : ""}`}
          />
        </div>
      ))}
      <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-black/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[85%] bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

      <div className="mx-auto w-full max-w-[90rem] px-5 pb-8 [text-shadow:0_1px_28px_rgb(0_0_0/0.3)] md:px-10 md:pb-12">
        <p className="eyebrow text-white/80">{eyebrow}</p>
        {children}

        <div className="mt-10 flex flex-col gap-6 border-t border-white/25 pt-5 md:mt-14 md:flex-row md:items-end md:justify-between">
          <Link href={current.href} prefetch className="group block" aria-live={paused ? "polite" : "off"}>
            <span className="eyebrow block text-white/60">
              Now showing · {pad(active + 1)} / {pad(slides.length)}
            </span>
            <span className="mt-2 block font-serif text-2xl md:text-3xl">
              {current.title}{" "}
              <span className="whitespace-nowrap text-white/60">
                — {current.place}
                <ArrowUpRight className="ml-2 inline-block size-5 align-[-0.1em] text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <ol className="flex gap-2">
              {slides.map((slide, i) => (
                <li key={slide.href}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show ${slide.title}`}
                    aria-current={i === active}
                    className="group/dot flex h-8 items-center"
                  >
                    <span className="relative block h-px w-10 overflow-hidden bg-white/30 md:w-14">
                      {i === active && (
                        <span
                          key={`${active}-${paused}`}
                          className={`absolute inset-0 origin-left bg-white ${paused ? "" : "hero-progress"}`}
                          style={{ "--slide-duration": `${SLIDE_MS}ms` } as CSSProperties}
                        />
                      )}
                      <span className="absolute inset-0 bg-white/0 transition-colors group-hover/dot:bg-white/50" />
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="grid size-9 place-items-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-ink"
            >
              {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
