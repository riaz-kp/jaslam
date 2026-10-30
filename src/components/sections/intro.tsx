import { profile } from "@/content/profile";

const disciplines = [
  {
    title: "Landscape design",
    text: "Master plans, planting, paving, water and light for homes, venues and farms.",
  },
  {
    title: "Site analysis",
    text: "Sun-path, slope, drainage and climate studies that decide where everything goes.",
  },
  {
    title: "Architecture",
    text: "Homes and hospitality buildings, from the first concept plan to the detailed layout.",
  },
  {
    title: "Visualisation",
    text: "Photoreal renders and rendered plans that let clients walk through a design before it is built.",
  },
];

export function Intro() {
  return (
    <section aria-labelledby="practice" className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-10 lg:grid-cols-12">
        <p id="practice" className="eyebrow text-ink-soft lg:col-span-3 lg:pt-4">
          The practice
        </p>
        <p className="reveal font-serif text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.08] tracking-[-0.01em] text-balance lg:col-span-9">
          {profile.statement}
        </p>
      </div>

      <ol className="mt-20 grid gap-px overflow-hidden border-y border-ink/15 bg-ink/15 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
        {disciplines.map((item, i) => (
          <li key={item.title} className="reveal bg-paper py-8 sm:pr-8 lg:px-6 lg:first:pl-0">
            <span className="eyebrow text-terracotta-deep">0{i + 1}</span>
            <h3 className="mt-6 font-serif text-3xl">{item.title}</h3>
            <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-ink-soft">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
