import Image from "next/image";
import { Fragment } from "react";

import { profile } from "@/content/profile";
import { statementBackdrop } from "@/content/projects";

const EMPHASIS = ["atmosphere", "belonging", "impression"];

/** Sets the key nouns of the closing sentence in a heavier weight. */
function emphasize(text: string) {
  return text.split(new RegExp(`(${EMPHASIS.join("|")})`)).map((part, i) =>
    EMPHASIS.includes(part) ? (
      <strong key={i} className="font-medium text-paper">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export function Statement() {
  return (
    <section aria-label="Closing statement" className="relative isolate overflow-hidden bg-night text-paper/80">
      <Image
        src={statementBackdrop.src}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        className="-z-20 object-cover opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/55 to-night/20" />
      <div className="mx-auto max-w-[90rem] px-5 py-32 md:px-10 md:py-48">
        <p className="eyebrow text-paper/70">Ultimately</p>
        <blockquote className="mt-8 max-w-5xl">
          <p className="font-display text-[clamp(2rem,4.4vw,4.4rem)] font-light leading-[1.06] tracking-[-0.03em] text-balance">
            {emphasize(profile.philosophy.closing)}
          </p>
          <footer className="eyebrow mt-10 text-paper/70">— {profile.name}</footer>
        </blockquote>
      </div>
    </section>
  );
}
