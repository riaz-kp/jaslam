import Link from "next/link";

import { HeroArch } from "@/components/hero-arch";
import { ArrowDown, ArrowRight } from "@/components/icons";
import { profile } from "@/content/profile";
import { heroSlides } from "@/content/projects";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto flex max-w-[90rem] flex-col px-5 pt-20 pb-8 md:px-10 md:pt-24 lg:min-h-svh"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-ink/15 py-4">
        <p className="eyebrow">{profile.persona}</p>
        <p className="eyebrow text-ink-soft">
          {profile.coordinates} — {profile.location}
        </p>
      </div>

      <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-12 lg:gap-10 lg:py-8">
        <div className="lg:col-span-7">
          <h1
            id="hero-title"
            className="condensed font-display text-[clamp(3.25rem,min(24vw,18svh),11rem)] leading-[0.86] tracking-[-0.045em]"
          >
            <span className="block font-extralight">Between</span>
            <span className="block">
              Nature <span className="text-terracotta">&amp;</span>
            </span>
            <span className="block">Architecture</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
            {profile.traits.join(", ")} — and driven by a distinctive design ideology.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-paper transition-colors hover:bg-terracotta"
            >
              Explore the work
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="#philosophy" className="border-b border-ink/30 pb-0.5 transition-colors hover:border-ink">
              Read the philosophy
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroArch slides={heroSlides} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 border-t border-ink/15 pt-4">
        <p className="font-display text-lg leading-tight md:text-xl">{profile.name}</p>
        <p className="eyebrow hidden text-ink-soft sm:block">{profile.role}</p>
        <a href="#philosophy" className="eyebrow inline-flex items-center gap-2 text-ink-soft hover:text-ink">
          Scroll <ArrowDown className="size-3.5" />
        </a>
      </div>
    </section>
  );
}
