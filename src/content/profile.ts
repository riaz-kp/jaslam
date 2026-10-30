import portrait from "@/assets/profile/portrait.jpg";

// Levels are read off the triangle bars on Jaslam's CV (0–1).
export type Skill = { name: string; level: number };
export type Entry = { year?: string; title: string; detail?: string };

export const profile = {
  name: "Mohammed Jaslam T.H",
  role: "Architect & Landscape Designer",
  location: "Calicut, Kerala",
  email: "mr.jaslam14@gmail.com",
  phone: "+91 81118 24508",
  phoneHref: "tel:+918111824508",
  portrait,
  statement:
    "I design landscapes and buildings that begin with the site — its slope, its sun, its monsoon — and end as places you can already picture yourself in.",
  bio: [
    "I'm Jaslam, an architect and landscape designer from Calicut, Kerala, trained at the Amity School of Architecture and Planning, Lucknow.",
    "My work moves between scales: master plans for event venues and farm villages, gardens wrapped around family homes, and the homes themselves. Every project starts by reading the land — where the sun is harshest, which way the slope falls, where the monsoon water wants to go — and ends in drawings and renders detailed enough to walk through.",
  ],
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
    { name: "Photoshop", level: 0.6 },
    { name: "Illustrator", level: 0.72 },
    { name: "Revit", level: 0.42 },
    { name: "MS Office", level: 0.72 },
  ] satisfies Skill[],
  languages: [
    { name: "Malayalam", level: 1 },
    { name: "Hindi", level: 0.89 },
    { name: "English", level: 0.72 },
    { name: "Arabic", level: 0.42 },
    { name: "Tamil", level: 0.3 },
    { name: "French", level: 0.3 },
  ] satisfies Skill[],
  interests: ["Reading", "Football", "Photography", "Movies", "Cosmology", "Science", "Technology"],
};
