const WORDS = ["Space", "Nature", "Perception", "Form", "Material", "Landscape", "Atmosphere", "Belonging"];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {WORDS.map((word, i) => (
        <span key={word} className="flex items-center">
          <span
            className={`px-6 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-none tracking-[-0.035em] md:px-9 ${
              i % 2 ? "text-outline" : ""
            }`}
          >
            {word}
          </span>
          <span className="size-2.5 rotate-45 bg-terracotta md:size-3" />
        </span>
      ))}
    </div>
  );
}

/** A slow band of the words the practice is built on. Decorative, so hidden from assistive tech. */
export function Marquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-ink/15 py-7 select-none md:py-9">
      <div className="marquee flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
