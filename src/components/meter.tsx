// The alternating-triangle bar from Jaslam's CV, filled to `level` (0–1).
const TRIANGLES = Array.from({ length: 10 }, (_, i) => {
  const x = i * 10;
  return i % 2 === 0
    ? `M${x + 1.4} 0.8H${x + 18.6}L${x + 10} 9.2Z`
    : `M${x + 1.4} 9.2H${x + 18.6}L${x + 10} 0.8Z`;
}).join("");

function Strip({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 110 10" preserveAspectRatio="none" aria-hidden="true" className={className}>
      <path d={TRIANGLES} fill="currentColor" />
    </svg>
  );
}

export function Meter({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <span className="text-[0.95rem]">{name}</span>
      <span
        role="img"
        aria-label={`${name}: ${Math.round(level * 5)} out of 5`}
        className="relative block h-2.5 w-28 shrink-0"
      >
        <Strip className="absolute inset-0 h-full w-28 text-ink/12" />
        <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${level * 100}%` }}>
          <Strip className="h-full w-28 text-ink" />
        </span>
      </span>
    </div>
  );
}
