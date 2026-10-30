import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { Gallery } from "@/components/gallery";
import { ArrowRight } from "@/components/icons";
import { getNextProject, getProject, projects } from "@/content/projects";
import { pad } from "@/lib/format";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const { cover } = project;
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: cover.src.src, width: cover.src.width, height: cover.src.height, alt: cover.alt }],
    },
  };
}

// The slug-dependent page streams into a hero-shaped fallback, so client
// navigations can paint the shell instantly. Known slugs are still fully prerendered.
export default function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <Suspense fallback={<div data-hero aria-busy="true" className="h-[88svh] min-h-[32rem] bg-night" />}>
      <Project params={params} />
    </Suspense>
  );
}

async function Project({ params }: Pick<PageProps<"/projects/[slug]">, "params">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = getNextProject(slug);
  const [lead, ...rest] = project.overview;

  return (
    <article>
      <header data-hero className="relative isolate flex h-[88svh] min-h-[32rem] items-end overflow-hidden bg-night text-white">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="100vw"
          placeholder="blur"
          preload
          className="hero-settle -z-20 object-cover"
          style={project.coverPosition ? { objectPosition: project.coverPosition } : undefined}
        />
        <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-black/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="mx-auto w-full max-w-[90rem] px-5 pb-10 md:px-10 md:pb-14">
          <p className="eyebrow text-white/75">
            Project {pad(index + 1)} / {pad(projects.length)} — {project.category}
          </p>
          <h1 className="mt-5 max-w-5xl font-serif text-[clamp(3.25rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.02em] text-balance">
            {project.title}
          </h1>
          {project.location && <p className="mt-5 text-lg text-white/80">{project.location}</p>}
        </div>
      </header>

      <section aria-label="Overview" className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <dl className="h-fit border-t border-ink/15 lg:col-span-4">
            {project.facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-ink/15 py-4">
                <dt className="eyebrow pt-0.5 text-ink-soft">{fact.label}</dt>
                <dd className="leading-snug">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-[clamp(1.75rem,3vw,2.6rem)] leading-[1.15] text-balance">{lead}</p>
            {rest.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-lg leading-relaxed text-ink-soft">
                {paragraph}
              </p>
            ))}

            {project.highlights && (
              <div className="mt-12">
                <h2 className="eyebrow border-b border-ink/15 pb-3 text-ink-soft">{project.highlights.title}</h2>
                <ul>
                  {project.highlights.items.map((item) => (
                    <li key={item} className="flex gap-4 border-b border-ink/10 py-3.5">
                      <span aria-hidden="true" className="text-terracotta">
                        ▲
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {project.journey && (
        <section aria-labelledby="journey-title" className="bg-paper-deep">
          <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 id="journey-title" className="font-serif text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[0.95]">
                {project.journey.title}
              </h2>
              <p className="max-w-sm text-ink-soft">{project.journey.intro}</p>
            </div>
            <ol className="mt-12 grid gap-px overflow-hidden border-y border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
              {project.journey.steps.map((step, i) => (
                <li key={step.title} className="bg-paper-deep py-7 sm:pr-6 lg:px-6 lg:[&:nth-child(4n+1)]:pl-0">
                  <span className="eyebrow text-terracotta-deep">{pad(i + 1)}</span>
                  <h3 className="mt-5 font-serif text-2xl">{step.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {project.gallery.length > 0 && (
        <section aria-labelledby="views-title" className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
          <div className="mb-10 flex items-end justify-between border-b border-ink/15 pb-5">
            <h2 id="views-title" className="font-serif text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[0.95]">
              Views
            </h2>
            <p className="eyebrow pb-1 text-ink-soft">{pad(project.gallery.length)} images</p>
          </div>
          <Gallery shots={project.gallery} variant="views" />
        </section>
      )}

      {project.drawings.length > 0 && (
        <section
          aria-labelledby="drawings-title"
          className={`mx-auto max-w-[90rem] px-5 pb-20 md:px-10 md:pb-28 ${project.gallery.length ? "" : "pt-4"}`}
        >
          <div className="mb-10 flex items-end justify-between border-b border-ink/15 pb-5">
            <h2 id="drawings-title" className="font-serif text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[0.95]">
              Drawings
            </h2>
            <p className="eyebrow pb-1 text-ink-soft">Open a sheet to zoom</p>
          </div>
          <Gallery shots={project.drawings} variant="drawings" />
        </section>
      )}

      <Link
        href={`/projects/${next.slug}`}
        prefetch
        className="group relative isolate block overflow-hidden bg-night text-white"
      >
        <Image
          src={next.cover.src}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          className="-z-10 object-cover opacity-60 transition-[opacity,transform] duration-[1400ms] ease-soft group-hover:scale-[1.03] group-hover:opacity-75"
          style={next.coverPosition ? { objectPosition: next.coverPosition } : undefined}
        />
        <div className="mx-auto flex min-h-[60svh] max-w-[90rem] flex-col justify-end px-5 py-14 md:px-10">
          <p className="eyebrow text-white/75">Next project</p>
          <p className="mt-4 flex items-center gap-4 font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95]">
            {next.title}
            <ArrowRight className="size-[0.6em] shrink-0 transition-transform duration-500 group-hover:translate-x-2" />
          </p>
          <p className="eyebrow mt-4 text-white/75">{next.category}</p>
        </div>
      </Link>
    </article>
  );
}
