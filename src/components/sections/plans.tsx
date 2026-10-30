import { Gallery } from "@/components/gallery";
import { SectionLabel } from "@/components/section-label";
import { plans } from "@/content/projects";
import { pad } from "@/lib/format";

export function Plans() {
  return (
    <section id="plans" aria-labelledby="plans-title" className="bg-moss text-paper">
      <div className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-36">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper/15 pb-4 text-paper/70">
          <SectionLabel index={4}>Master plans</SectionLabel>
          <p className="eyebrow">{pad(plans.length)} sites</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2
            id="plans-title"
            className="condensed font-display text-[clamp(3.25rem,9vw,8.5rem)] leading-[0.86] tracking-[-0.045em] lg:col-span-8"
          >
            Gardens <em>on paper</em>
          </h2>
          <p className="max-w-sm text-lg leading-relaxed text-moss-soft lg:col-span-4">
            Rendered landscape plans for private homes and a farm village across Kerala — every tree,
            path and paving joint placed before the first one is planted.
          </p>
        </div>
        <div className="mt-14 md:mt-20">
          <Gallery shots={plans} variant="plans" />
        </div>
      </div>
    </section>
  );
}
