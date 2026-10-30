import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/content/profile";
import { siteUrl } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

const description =
  "Between Nature & Architecture — the portfolio of Mohammed Jaslam T.H, architect and landscape designer in Calicut, Kerala. Architecture, landscape design and visualization.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.tagline}`,
    template: `%s — ${profile.name}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: profile.name,
    locale: "en_IN",
    title: `${profile.name} — ${profile.tagline}`,
    description,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#efede8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} motion-safe:scroll-smooth`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {/* Drafting-sheet column lines behind the light sections. */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
          <div className="mx-auto grid h-full max-w-[90rem] grid-cols-4 px-5 md:px-10 lg:grid-cols-6">
            {Array.from({ length: 6 }, (_, i) => (
              <span
                key={i}
                className={`border-l border-ink/[0.07] last:border-r ${i >= 4 ? "hidden lg:block" : ""} ${
                  i === 3 ? "max-lg:border-r" : ""
                }`}
              />
            ))}
          </div>
        </div>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
