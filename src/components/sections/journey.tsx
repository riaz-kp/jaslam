import Link from "next/link";
import { Fragment } from "react";

import { ArrowUpRight } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import { profile } from "@/content/profile";
import { pad } from "@/lib/format";

export function Journey() {
  const { title, intro, stages } = profile.journey;

  return (
    <section id="journey" aria-labelledby="journey-title" className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-36">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/15 pb-4">
        <SectionLabel index={5}>Journey</SectionLabel>
        <p className="eyebrow text-ink-soft">{pad(stages.length)} chapters</p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2
          id="journey-title"
          className="condensed font-display text-[clamp(3.25rem,8.5vw,8rem)] leading-[0.86] tracking-[-0.045em] lg:col-span-7"
        >
          {title.split(/(Through)/).map((part, i) =>
            part === "Through" ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>,
          )}
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-ink-soft lg:col-span-5">{intro}</p>
      </div>

      <ol className="mt-16 md:mt-24">
        {stages.map((stage, i) => (
          <li
            key={stage.firm}
            className="reveal grid gap-6 border-t border-ink/15 py-10 last:border-b md:py-14 lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-5">
              <p className="eyebrow flex flex-wrap items-center gap-3 text-ink-soft">
                <span className={stage.period ? "text-terracotta-deep" : undefined}>{pad(i + 1)}</span>
                {stage.period && (
                  <span className="rounded-full bg-terracotta-deep px-2.5 py-1 text-paper">{stage.period}</span>
                )}
              </p>
              <h3 className="condensed mt-4 font-display text-[clamp(2.25rem,4.4vw,4rem)] leading-[0.9] tracking-[-0.03em] uppercase">
                {stage.firm}
              </h3>
              {/* The scope keeps widening, chapter by chapter. */}
              <span aria-hidden="true" className="mt-6 block h-0.5 max-w-sm bg-ink/10">
                <span
                  className="block h-full bg-terracotta"
                  style={{ width: `${((i + 1) / stages.length) * 100}%` }}
                />
              </span>
            </div>

            <div className="lg:col-span-7">
              <p className="font-display text-2xl leading-tight tracking-[-0.02em] md:text-[2rem]">{stage.role}</p>
              {stage.text.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
              <p className="eyebrow mt-8 text-ink-soft">Focus areas</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {stage.focus.map((area) => (
                  <li key={area} className="rounded-full border border-ink/20 px-3.5 py-1.5 text-sm">
                    {area}
                  </li>
                ))}
              </ul>
              {stage.related && (
                <Link
                  href={stage.related.href}
                  prefetch
                  className="group mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-0.5 transition-colors hover:border-ink"
                >
                  See the {stage.related.label}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
