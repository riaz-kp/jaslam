/** 1 → "01" */
export function pad(n: number) {
  return String(n).padStart(2, "0");
}
