"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";

import { ArrowUpRight, Pause, Play } from "@/components/icons";
import type { HeroSlide } from "@/content/projects";
import { pad } from "@/lib/format";

const SLIDE_MS = 6500;

/** Project slideshow framed by an arch — the “window” of the home hero. */
export function HeroArch({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused, slides.length]);

  const current = slides[active];

  return (
    <figure aria-label="Featured projects" className="mx-auto w-full max-w-md lg:mr-0 lg:ml-auto lg:w-fit lg:max-w-none">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-full bg-paper-deep lg:h-[min(58svh,38rem)] lg:w-auto">
        {slides.map((slide, i) => (
          <div
            key={slide.href}
            aria-hidden={i !== active}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-soft ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(min-width: 1024px) 32rem, 92vw"
              placeholder="blur"
              preload={i === 0}
              className={`object-cover ${i === active ? "hero-settle" : ""}`}
              style={slide.position ? { objectPosition: slide.position } : undefined}
            />
          </div>
        ))}
      </div>

      {/* w-0 min-w-full: the caption takes the arch's width instead of widening it. */}
      <figcaption className="mt-4 flex w-0 min-w-full items-end justify-between gap-4 border-t border-ink/15 pt-3">
        <Link href={current.href} prefetch className="group min-w-0" aria-live={paused ? "polite" : "off"}>
          <span className="eyebrow block whitespace-nowrap text-ink-soft">
            <span className="hidden sm:inline">Now showing · </span>
            {pad(active + 1)} / {pad(slides.length)}
          </span>
          <span className="mt-1 flex items-center gap-1.5 font-display text-lg leading-tight md:text-xl">
            <span className="truncate">{current.title}</span>
            <ArrowUpRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2.5">
          <ol className="flex gap-1.5">
            {slides.map((slide, i) => (
              <li key={slide.href}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${slide.title}`}
                  aria-current={i === active}
                  className="group/dot flex h-8 items-center"
                >
                  <span className="relative block h-px w-6 overflow-hidden bg-ink/20 md:w-8">
                    {i === active && (
                      <span
                        key={`${active}-${paused}`}
                        className={`absolute inset-0 origin-left bg-ink ${paused ? "" : "hero-progress"}`}
                        style={{ "--slide-duration": `${SLIDE_MS}ms` } as CSSProperties}
                      />
                    )}
                    <span className="absolute inset-0 transition-colors group-hover/dot:bg-ink/40" />
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="grid size-8 place-items-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-paper"
          >
            {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
