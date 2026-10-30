import { Gallery } from "@/components/gallery";
import { plans } from "@/content/projects";

export function Plans() {
  return (
    <section id="plans" aria-labelledby="plans-title" className="bg-moss text-paper">
      <div className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-paper/60">Master plans</p>
            <h2
              id="plans-title"
              className="mt-6 font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.02em]"
            >
              Gardens <em>on paper</em>
            </h2>
          </div>
          <p className="max-w-md self-end text-lg leading-relaxed text-paper/75 lg:col-span-5">
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
