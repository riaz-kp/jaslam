import { Explorations } from "@/components/explorations";
import { ArrowRight } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import { profile } from "@/content/profile";
import { explorations } from "@/content/projects";

export function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="mx-auto max-w-[90rem] px-5 pb-24 md:px-10 md:pb-36"
    >
      <div className="border-b border-ink/15 pb-4">
        <SectionLabel index={2}>Approach</SectionLabel>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2
          id="approach-title"
          className="font-display text-[clamp(2.75rem,6.4vw,6rem)] leading-[0.9] tracking-[-0.04em] lg:col-span-6"
        >
          Guided by <em>curiosity</em>
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft lg:col-span-5 lg:col-start-8">
          {profile.philosophy.approach}
        </p>
      </div>

      <Explorations items={explorations} />

      <div className="mt-20 grid gap-10 border-t border-ink/15 pt-10 lg:mt-28 lg:grid-cols-12">
        <p className="text-lg leading-relaxed lg:col-span-4">{profile.philosophy.inspiration}</p>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-8 lg:col-span-7 lg:col-start-6">
          <div>
            <p className="eyebrow text-ink-soft">Drawn from</p>
            <ul className="mt-4 space-y-2">
              {profile.sources.map((source) => (
                <li key={source} className="font-display text-xl leading-tight md:text-2xl">
                  {source}
                </li>
              ))}
            </ul>
          </div>
          <ArrowRight className="size-7 text-terracotta md:size-9" />
          <div>
            <p className="eyebrow text-ink-soft">Towards</p>
            <ul className="mt-4 space-y-2">
              {profile.qualities.map((quality) => (
                <li key={quality} className="font-display text-xl leading-tight md:text-2xl">
                  {quality}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
