import { ProjectCard } from "@/components/project-card";
import { SectionLabel } from "@/components/section-label";
import { projects } from "@/content/projects";
import { pad } from "@/lib/format";

// An editorial rhythm: one wide card, then alternating 7/5 and 5/7 pairs.
const layout = [
  { span: "lg:col-span-12", aspect: "aspect-[4/3] md:aspect-[21/9]", sizes: "100vw" },
  { span: "lg:col-span-7", aspect: "aspect-[4/3]", sizes: "(min-width: 1024px) 58vw, 100vw" },
  { span: "lg:col-span-5 lg:mt-32", aspect: "aspect-[4/5]", sizes: "(min-width: 1024px) 42vw, 100vw" },
  { span: "lg:col-span-5", aspect: "aspect-[4/5]", sizes: "(min-width: 1024px) 42vw, 100vw" },
  { span: "lg:col-span-7 lg:mt-32", aspect: "aspect-[4/3]", sizes: "(min-width: 1024px) 58vw, 100vw" },
  { span: "lg:col-span-7", aspect: "aspect-[4/3]", sizes: "(min-width: 1024px) 58vw, 100vw" },
  { span: "lg:col-span-5 lg:mt-32", aspect: "aspect-[4/5]", sizes: "(min-width: 1024px) 42vw, 100vw" },
];

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-36">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/15 pb-4">
        <SectionLabel index={3}>Work</SectionLabel>
        <p className="eyebrow text-ink-soft">{pad(projects.length)} projects</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:items-end">
        <h2
          id="work-title"
          className="condensed font-display text-[clamp(3.25rem,9vw,8.5rem)] leading-[0.86] tracking-[-0.045em] lg:col-span-8"
        >
          <em>Selected</em> work
        </h2>
        <p className="max-w-sm text-lg leading-relaxed text-ink-soft lg:col-span-4">
          Halls, venues, homes and gardens across Kerala — each one an idea made tangible.
        </p>
      </div>

      <ul className="mt-14 grid gap-x-10 gap-y-16 md:mt-20 lg:grid-cols-12 lg:gap-y-24">
        {projects.map((project, i) => {
          const slot = layout[i % layout.length];
          return (
            <li key={project.slug} className={`reveal ${slot.span}`}>
              <ProjectCard project={project} index={i} aspect={slot.aspect} sizes={slot.sizes} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
