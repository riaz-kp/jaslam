import Image from "next/image";

import { SectionLabel } from "@/components/section-label";
import { profile } from "@/content/profile";
import { statementImages, type Shot } from "@/content/projects";

const disciplines = [
  {
    title: "Architecture",
    text: "Homes, halls and hospitality buildings — from the first concept plan to the detailed layout.",
  },
  {
    title: "Landscape design",
    text: "Master plans, planting, paving, water and light for homes, venues and farms.",
  },
  {
    title: "Visualization",
    text: "Photoreal renders and rendered plans that make an idea tangible before it is built.",
  },
];

/** A small image set into the line of text, right after the word it illustrates. */
function InlineImage({ shot }: { shot: Shot }) {
  return (
    <span
      aria-hidden="true"
      className="relative mr-[0.03em] ml-[0.12em] inline-block h-[0.74em] w-[1.5em] translate-y-[0.04em] overflow-hidden rounded-full align-baseline"
    >
      <Image src={shot.src} alt="" fill sizes="10rem" className="object-cover" />
    </span>
  );
}

export function Philosophy() {
  const { lead, keywords, practice } = profile.philosophy;
  const [space, nature, perception] = keywords;

  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-title"
      className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-36"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/15 pb-4">
        <SectionLabel index={1}>Philosophy</SectionLabel>
        <p className="eyebrow text-ink-soft">{profile.persona}</p>
      </div>

      <h2
        id="philosophy-title"
        className="reveal mt-12 font-display text-[clamp(2.1rem,5vw,4.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-balance md:mt-16"
      >
        {lead}{" "}
        <span className="whitespace-nowrap">
          {space}
          <InlineImage shot={statementImages.space} />,
        </span>{" "}
        <span className="whitespace-nowrap">
          {nature}
          <InlineImage shot={statementImages.nature} />,
        </span>{" "}
        and{" "}
        <span className="whitespace-nowrap">
          {perception}
          <InlineImage shot={statementImages.perception} />.
        </span>
      </h2>

      <div className="mt-10 flex flex-wrap items-center gap-2.5">
        {profile.traits.map((trait) => (
          <span key={trait} className="rounded-full border border-ink/25 px-4 py-1.5 text-sm">
            {trait}
          </span>
        ))}
        <span className="ml-1 text-sm text-ink-soft">{profile.ideology}</span>
      </div>

      <div className="mt-20 grid gap-10 border-t border-ink/15 pt-10 lg:mt-28 lg:grid-cols-12">
        <p className="text-lg leading-relaxed lg:col-span-4">{practice}</p>
        <ol className="grid gap-8 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
          {disciplines.map((item, i) => (
            <li key={item.title} className="reveal">
              <span className="eyebrow text-terracotta-deep">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl leading-tight">{item.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
