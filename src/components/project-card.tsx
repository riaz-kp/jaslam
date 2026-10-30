import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "@/components/icons";
import type { Project } from "@/content/projects";
import { pad } from "@/lib/format";

export function ProjectCard({
  project,
  index,
  aspect,
  sizes,
}: {
  project: Project;
  index: number;
  aspect: string;
  sizes: string;
}) {
  return (
    <Link href={`/projects/${project.slug}`} prefetch className="group block">
      <div className={`relative overflow-hidden bg-paper-deep ${aspect}`}>
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes={sizes}
          placeholder="blur"
          className="object-cover transition-transform duration-[1400ms] ease-soft group-hover:scale-[1.04]"
          style={project.coverPosition ? { objectPosition: project.coverPosition } : undefined}
        />
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 scale-75 place-items-center rounded-full bg-paper/90 text-center text-[0.8rem] leading-tight text-ink opacity-0 transition-[opacity,transform] duration-500 ease-soft group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
        >
          View
          <br />
          project
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-6 border-t border-ink/15 pt-4">
        <div className="flex items-baseline gap-4">
          <span className="eyebrow text-ink-soft">{pad(index + 1)}</span>
          <h3 className="font-display text-[1.8rem] leading-[1.02] tracking-[-0.03em] md:text-[2.25rem]">
            {project.title}
          </h3>
        </div>
        <ArrowUpRight className="mt-1 size-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 pl-9">
        <span className="eyebrow text-terracotta-deep">{project.category}</span>
        {project.location && <span className="eyebrow text-ink-soft">{project.location}</span>}
      </p>
      <p className="mt-3 max-w-lg pl-9 text-[0.95rem] leading-relaxed text-ink-soft">{project.summary}</p>
    </Link>
  );
}
