import { Marquee } from "@/components/marquee";
import { About } from "@/components/sections/about";
import { Approach } from "@/components/sections/approach";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Philosophy } from "@/components/sections/philosophy";
import { Plans } from "@/components/sections/plans";
import { Statement } from "@/components/sections/statement";
import { Work } from "@/components/sections/work";
import { profile } from "@/content/profile";
import { siteUrl } from "@/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.tagline,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  sameAs: [profile.instagram.url],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calicut",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: `${profile.education.school}, ${profile.education.place}`,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Philosophy />
      <Approach />
      <Marquee />
      <Work />
      <Statement />
      <Plans />
      <Journey />
      <About />
    </>
  );
}
