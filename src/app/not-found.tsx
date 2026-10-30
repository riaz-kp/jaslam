import Link from "next/link";

import { ArrowLeft } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80svh] max-w-[90rem] flex-col justify-center px-5 pt-28 pb-20 md:px-10">
      <p className="eyebrow text-ink-soft">404</p>
      <h1 className="condensed mt-6 font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.88] tracking-[-0.045em]">
        Off the <em>site plan.</em>
      </h1>
      <p className="mt-6 max-w-md text-lg text-ink-soft">
        This page isn&rsquo;t part of the drawings. The projects are a step away.
      </p>
      <Link
        href="/#work"
        className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-ink px-7 py-4 text-paper transition-colors hover:bg-terracotta"
      >
        <ArrowLeft className="size-5" /> Back to the work
      </Link>
    </section>
  );
}
