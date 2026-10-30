import { ProjectCard } from "@/components/project-card";
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
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-[90rem] px-5 pb-24 md:px-10 md:pb-36">
      <div className="flex items-end justify-between gap-6 border-b border-ink/15 pb-6">
        <h2 id="work-title" className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.02em]">
          Selected <em>work</em>
        </h2>
        <p className="eyebrow pb-2 text-ink-soft">{pad(projects.length)} projects</p>
      </div>

      <ul className="mt-12 grid gap-x-10 gap-y-16 md:mt-16 lg:grid-cols-12 lg:gap-y-24">
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
