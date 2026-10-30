import portrait from "@/assets/profile/jaslam.jpg";

// Levels are read off the triangle bars on Jaslam's CV (0–1).
export type Skill = { name: string; level: number };
export type Entry = { year?: string; title: string; detail?: string };
export type JourneyStage = {
  firm: string;
  period?: string;
  role: string;
  text: string[];
  focus: string[];
  related?: { label: string; href: string };
};

export const profile = {
  name: "Mohammed Jaslam T.H",
  role: "Architect & Landscape Designer",
  tagline: "Between Nature & Architecture",
  persona: "The Design Thinker",
  traits: ["Conceptual", "Philosophical", "Experimental"],
  ideology: "Driven by a distinctive design ideology.",
  location: "Calicut, Kerala",
  coordinates: "11°15′N 75°46′E",
  email: "mr.jaslam14@gmail.com",
  phone: "+91 81118 24508",
  phoneHref: "tel:+918111824508",
  instagram: {
    handle: "@nothing_but__stardust",
    url: "https://www.instagram.com/nothing_but__stardust",
  },
  portrait,
  // Jaslam's own words, as supplied.
  philosophy: {
    // “…between space, nature, and perception.” — the keywords get inline images.
    lead: "I am an architect and landscape designer fascinated by the relationship between",
    keywords: ["space", "nature", "perception"] as const,
    approach:
      "My design approach is guided by curiosity—an exploration of how form emerges, how materials communicate, how landscapes influence architecture, and how spaces evoke emotion.",
    inspiration:
      "I draw inspiration from natural systems, regional contexts, and contemporary design thinking to develop ideas that are distinctive, contextual, and experiential.",
    practice:
      "Across architecture, landscape design, and visualization, I see every project as an opportunity to translate abstract ideas into tangible experiences.",
    closing:
      "Ultimately, I am interested in design that goes beyond appearance—design that creates atmosphere, establishes a sense of belonging, and leaves a lasting impression.",
  },
  sources: ["Natural systems", "Regional contexts", "Contemporary design thinking"],
  qualities: ["Distinctive", "Contextual", "Experiential"],
  intro:
    "I'm Jaslam — from Calicut, Kerala, trained at the Amity School of Architecture and Planning, Lucknow.",
  education: {
    school: "Amity School of Architecture and Planning",
    place: "Lucknow",
    year: "2020",
  },
  recognition: [
    {
      title: "Winner, Mural Art Design Competition",
      detail: "Lucknow Metro Rail Corporation — “Lucknow: the past, present & future”",
    },
    { year: "2018", title: "Cash award for artwork", detail: "Contribution to LMRC design" },
    {
      year: "2017",
      title: "Top 8, Main Design 2 — ZONASA Alphiesta",
      detail: "Royal School of Architecture, Guwahati",
    },
    { year: "2017", title: "Tensile Structure Model Making Competition", detail: "Amity University" },
  ] satisfies Entry[],
  experience: [
    { year: "2019", title: "Six-month internship", detail: "BCA, Calicut" },
    {
      year: "2017",
      title: "National Conference on Urban Futures of Lucknow",
      detail: "With the Indian Institute of Architects",
    },
    {
      year: "2016",
      title: "Architecture & product photography",
      detail: "CEASID, under Rachit Sharma (Auroville)",
    },
    { year: "2016", title: "Best Out of Waste workshop", detail: "Amity University, Lucknow" },
    { year: "2016", title: "ZONASA — Anantikarsha convention trophy", detail: "Participant" },
  ] satisfies Entry[],
  software: [
    { name: "AutoCAD", level: 0.72 },
    { name: "SketchUp", level: 0.78 },
    { name: "Lumion", level: 0.8 },
    { name: "V-Ray", level: 0.72 },
    { name: "Photoshop", level: 0.86 },
    { name: "Illustrator", level: 0.5 },
    { name: "Revit", level: 0.72 },
    { name: "MS Office", level: 0.72 },
  ] satisfies Skill[],
  languages: [
    { name: "Malayalam", level: 1 },
    { name: "Hindi", level: 0.89 },
    { name: "English", level: 0.72 },
    { name: "Arabic", level: 0.42 },
  ] satisfies Skill[],
  // Jaslam's own words, as supplied.
  journey: {
    title: "A Journey Through Design",
    intro:
      "From shaping architectural forms to designing landscapes and coordinating multidisciplinary projects, my journey has continually expanded across the built and natural environments.",
    stages: [
      {
        firm: "X Arch",
        role: "Architectural Planning & Exterior Visualization",
        text: [
          "My professional journey began at X Arch, where I focused primarily on architectural planning and exterior 3D visualization. This experience helped me develop a strong foundation in spatial composition, architectural detailing, design development, and visual communication.",
        ],
        focus: [
          "Architectural Planning",
          "Exterior 3D Visualization",
          "Design Development",
          "Architectural Presentation",
        ],
      },
      {
        firm: "Limar",
        role: "Expanding Across Architecture & Execution",
        text: [
          "At Limar, my role expanded beyond planning and visualization into a more comprehensive architectural practice. I became involved in multiple stages of projects, including interior design, design coordination, and site-related activities, gaining a broader understanding of how design concepts translate into built environments.",
        ],
        focus: [
          "Architectural Design",
          "Interior Design",
          "3D Visualization",
          "Project Coordination",
          "Site Supervision & Execution",
        ],
      },
      {
        firm: "Landschaft",
        role: "Landscape Architecture & Environmental Design",
        text: [
          "At Landschaft, my work shifted towards the relationship between built environments, landscapes, and human experience. I worked across a diverse range of landscape projects, developing design solutions for residential and commercial properties, farms, event venues, and resorts.",
          "This experience broadened my understanding of landscape as an integral part of architecture, connecting spatial planning, natural systems, aesthetics, and functionality.",
        ],
        focus: [
          "Residential Landscape Design",
          "Commercial Landscapes",
          "Farm & Agricultural Landscapes",
          "Event Venues & Resorts",
          "Landscape Planning & Visualization",
        ],
      },
      {
        firm: "Ranthal Architects & Design Community",
        period: "2026 — Present",
        role: "Design Coordination & Creative Collaboration",
        text: [
          "Joining Ranthal Architects & Design Community marked a new chapter in my professional journey, bringing together my experience in architecture, landscape design, visualization, and project coordination.",
          "My current role involves coordinating multidisciplinary design projects across residences, resorts, landscapes, and agro-tourism developments. Alongside project coordination, I contribute to collaborative design initiatives and the organization and facilitation of workshops that encourage creative exploration and knowledge sharing.",
        ],
        focus: [
          "Residential Architecture & Design",
          "Resort & Hospitality Projects",
          "Landscape Architecture",
          "Agro-Tourism & Farm Planning",
          "Multidisciplinary Project Coordination",
          "Workshops & Creative Collaboration",
        ],
        related: { label: "Ranthal Heritage Walk", href: "/projects/ranthal-heritage-walk" },
      },
    ] satisfies JourneyStage[],
  },
  interests: ["Reading", "Football", "Photography", "Movies", "Cosmology", "Science", "Technology"],
};
