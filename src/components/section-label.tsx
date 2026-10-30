import { pad } from "@/lib/format";

/** “(02) —— Approach”: the numbered sheet label that opens each section. */
export function SectionLabel({
  index,
  children,
  className = "",
}: {
  index: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      <span>({pad(index)})</span>
      <span aria-hidden="true" className="h-px w-10 bg-current opacity-40" />
      <span>{children}</span>
    </p>
  );
}
