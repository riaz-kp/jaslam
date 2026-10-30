export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const nav = [
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Work", href: "/#work" },
  { label: "Plans", href: "/#plans" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
