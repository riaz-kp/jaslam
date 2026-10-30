"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ArrowUpRight } from "@/components/icons";
import type { explorations } from "@/content/projects";
import { pad } from "@/lib/format";

type Exploration = (typeof explorations)[number];

/** The four “how…” questions; hovering or focusing one swaps the image in the arch. */
export function Explorations({ items }: { items: readonly Exploration[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-12">
      <ol className="border-t border-ink/15 lg:col-span-7">
        {items.map((item, i) => (
          <li key={item.title} className="border-b border-ink/15">
            <Link
              href={item.href}
              prefetch
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-3 py-6 md:grid-cols-[3rem_1fr_auto] md:py-8"
            >
              <span
                className={`eyebrow transition-colors ${active === i ? "text-terracotta-deep" : "text-ink-soft"}`}
              >
                {pad(i + 1)}
              </span>
              <span>
                <span
                  className={`block font-display text-[clamp(1.65rem,3.3vw,3.1rem)] leading-[1.02] tracking-[-0.03em] transition-colors duration-300 ${
                    active === i ? "text-ink" : "text-ink lg:text-ink/55"
                  }`}
                >
                  {item.title}
                </span>
                <span className="eyebrow mt-2 block text-ink-soft">{item.project}</span>
              </span>
              <ArrowUpRight className="size-6 self-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <div className="relative mb-6 aspect-[16/10] overflow-hidden bg-paper-deep lg:hidden">
              <Image
                src={item.shot.src}
                alt={item.shot.alt}
                fill
                sizes="100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </li>
        ))}
      </ol>

      <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-paper-deep">
            {items.map((item, i) => (
              <Image
                key={item.title}
                src={item.shot.src}
                alt={i === active ? item.shot.alt : ""}
                aria-hidden={i !== active}
                fill
                sizes="30vw"
                placeholder="blur"
                className={`object-cover transition-opacity duration-700 ease-soft ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <p className="eyebrow mt-4 flex justify-between border-t border-ink/15 pt-3 text-ink-soft">
            <span>{current.project}</span>
            <span>
              {pad(active + 1)} / {pad(items.length)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
