import { HeroSlideshow } from "@/components/hero-slideshow";
import { About } from "@/components/sections/about";
import { Intro } from "@/components/sections/intro";
import { Plans } from "@/components/sections/plans";
import { Work } from "@/components/sections/work";
import { profile } from "@/content/profile";
import { heroSlides } from "@/content/projects";
import { siteUrl } from "@/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: siteUrl,
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
      <HeroSlideshow slides={heroSlides} eyebrow={`${profile.role} — ${profile.location}`}>
        <h1 className="mt-5 font-serif text-[clamp(3.6rem,min(12vw,16svh),10rem)] leading-[0.86] tracking-[-0.025em]">
          Mohammed
          <br />
          Jaslam <em>T.H</em>
        </h1>
      </HeroSlideshow>
      <Intro />
      <Work />
      <Plans />
      <About />
    </>
  );
}
