import Image from "next/image";

import { Meter } from "@/components/meter";
import { SectionLabel } from "@/components/section-label";
import { profile, type Entry } from "@/content/profile";

function Timeline({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <div>
      <h3 className="eyebrow border-b border-ink/15 pb-3 text-ink-soft">{title}</h3>
      <ul>
        {entries.map((entry) => (
          <li key={entry.title} className="grid grid-cols-[3.5rem_1fr] gap-3 border-b border-ink/10 py-4">
            <span className="eyebrow pt-1 text-terracotta-deep">{entry.year ?? "—"}</span>
            <span>
              <span className="block leading-snug">{entry.title}</span>
              {entry.detail && <span className="mt-1 block text-sm text-ink-soft">{entry.detail}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-36">
      <div className="mb-12 border-b border-ink/15 pb-4 md:mb-16">
        <SectionLabel index={5}>About</SectionLabel>
      </div>

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-[3/4] max-w-sm overflow-hidden rounded-t-full bg-paper-deep">
              <Image
                src={profile.portrait}
                alt={`Portrait of ${profile.name}, smiling, leaning on a railing with green hills behind him`}
                fill
                sizes="(min-width: 1024px) 24rem, 90vw"
                placeholder="blur"
                className="object-cover object-[50%_58%]"
              />
            </div>
            <p className="eyebrow mt-4 flex max-w-sm justify-between border-t border-ink/15 pt-3 text-ink-soft">
              <span>{profile.name}</span>
              <span>{profile.coordinates}</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="eyebrow text-terracotta-deep">{profile.role}</p>
          <h2
            id="about-title"
            className="mt-6 font-display text-[clamp(2.25rem,4.4vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-balance"
          >
            {profile.intro}
          </h2>

          <dl className="mt-14 grid gap-6 border-y border-ink/15 py-6 sm:grid-cols-3">
            <div>
              <dt className="eyebrow text-ink-soft">Studied</dt>
              <dd className="mt-2 leading-snug">
                {profile.education.school}, {profile.education.place}
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-ink-soft">Graduated</dt>
              <dd className="mt-2">{profile.education.year}</dd>
            </div>
            <div>
              <dt className="eyebrow text-ink-soft">Based in</dt>
              <dd className="mt-2">{profile.location}</dd>
            </div>
          </dl>

          <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-10">
            <Timeline title="Recognition" entries={profile.recognition} />
            <Timeline title="Experience & workshops" entries={profile.experience} />
          </div>

          <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-10">
            <div>
              <h3 className="eyebrow border-b border-ink/15 pb-3 text-ink-soft">Toolkit</h3>
              <div className="divide-y divide-ink/10">
                {profile.software.map((skill) => (
                  <Meter key={skill.name} {...skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="eyebrow border-b border-ink/15 pb-3 text-ink-soft">Languages</h3>
              <div className="divide-y divide-ink/10">
                {profile.languages.map((skill) => (
                  <Meter key={skill.name} {...skill} />
                ))}
              </div>
              <h3 className="eyebrow mt-12 border-b border-ink/15 pb-3 text-ink-soft">Off the drawing board</h3>
              <p className="mt-4 leading-relaxed">{profile.interests.join(" · ")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
