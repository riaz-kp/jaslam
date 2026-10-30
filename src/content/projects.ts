import type { StaticImageData } from "next/image";

import theeramRiver from "@/assets/projects/theeram/render-i.jpg";
import theeramStorm from "@/assets/projects/theeram/render-h.jpg";
import theeramVilla from "@/assets/projects/theeram/render-e.jpg";
import theeramPool from "@/assets/projects/theeram/render-f.jpg";
import theeramPavilion from "@/assets/projects/theeram/render-g.jpg";
import theeramBalcony from "@/assets/projects/theeram/render-b.jpg";
import theeramCourt from "@/assets/projects/theeram/render-a.jpg";
import theeramArcade from "@/assets/projects/theeram/render-c.jpg";
import theeramGate from "@/assets/projects/theeram/render-d.jpg";
import theeramSiteData from "@/assets/projects/theeram/sheet-1.jpg";
import theeramZoning from "@/assets/projects/theeram/sheet-2.jpg";
import theeramZones1 from "@/assets/projects/theeram/zones-1.jpg";
import theeramZones2 from "@/assets/projects/theeram/zones-2.jpg";
import theeramZones3 from "@/assets/projects/theeram/zones-3.jpg";
import theeramZones4 from "@/assets/projects/theeram/zones-4.jpg";
import theeramHall from "@/assets/projects/theeram/event-hall-plan.jpg";
import theeramReception from "@/assets/projects/theeram/reception-plan.jpg";

import auditorium01 from "@/assets/projects/auditorium/view-01.jpg";
import auditorium02 from "@/assets/projects/auditorium/view-02.jpg";
import auditorium03 from "@/assets/projects/auditorium/view-03.jpg";
import auditorium04 from "@/assets/projects/auditorium/view-04.jpg";
import auditorium05 from "@/assets/projects/auditorium/view-05.jpg";
import auditorium06 from "@/assets/projects/auditorium/view-06.jpg";
import auditorium07 from "@/assets/projects/auditorium/view-07.jpg";
import auditorium08 from "@/assets/projects/auditorium/view-08.jpg";
import auditorium09 from "@/assets/projects/auditorium/view-09.jpg";
import auditorium10 from "@/assets/projects/auditorium/view-10.jpg";
import auditorium11 from "@/assets/projects/auditorium/view-11.jpg";
import auditorium12 from "@/assets/projects/auditorium/view-12.jpg";
import auditoriumCover from "@/assets/projects/auditorium/cover.jpg";
import auditoriumSitePlan from "@/assets/projects/auditorium/site-plan.jpg";
import auditoriumGroundFloor from "@/assets/projects/auditorium/ground-floor.jpg";
import auditoriumElevation from "@/assets/projects/auditorium/front-elevation.jpg";
import auditoriumSiteData from "@/assets/projects/auditorium/site-data.jpg";

import afsal01 from "@/assets/projects/afsal/view-01.jpg";
import afsal02 from "@/assets/projects/afsal/view-02.jpg";
import afsal03 from "@/assets/projects/afsal/view-03.jpg";
import afsal04 from "@/assets/projects/afsal/view-04.jpg";
import afsal05 from "@/assets/projects/afsal/view-05.jpg";
import afsal06 from "@/assets/projects/afsal/view-06.jpg";
import afsal07 from "@/assets/projects/afsal/view-07.jpg";
import afsal08 from "@/assets/projects/afsal/view-08.jpg";
import afsal09 from "@/assets/projects/afsal/view-09.jpg";
import afsal10 from "@/assets/projects/afsal/view-10.jpg";
import afsal11 from "@/assets/projects/afsal/view-11.jpg";
import afsal12 from "@/assets/projects/afsal/view-12.jpg";
import afsal13 from "@/assets/projects/afsal/view-13.jpg";
import afsalJourney from "@/assets/projects/afsal/spatial-journey.jpg";

import aman02 from "@/assets/projects/aman/view-02.jpg";
import aman03 from "@/assets/projects/aman/view-03.jpg";
import aman07 from "@/assets/projects/aman/view-07.jpg";
import aman09 from "@/assets/projects/aman/view-09.jpg";
import aman11 from "@/assets/projects/aman/view-11.jpg";
import aman14 from "@/assets/projects/aman/view-14.jpg";
import aman16 from "@/assets/projects/aman/view-16.jpg";
import aman17 from "@/assets/projects/aman/view-17.jpg";
import aman20 from "@/assets/projects/aman/view-20.jpg";
import aman22 from "@/assets/projects/aman/view-22.jpg";
import aman23 from "@/assets/projects/aman/view-23.jpg";
import aman25 from "@/assets/projects/aman/view-25.jpg";
import amanSitePlan from "@/assets/projects/aman/site-plan.jpg";
import amanSiteData from "@/assets/projects/aman/sheet-1.jpg";
import amanAnalysis from "@/assets/projects/aman/sheet-2.jpg";
import amanLayout from "@/assets/projects/aman/sheet-3.jpg";

import dhaneshRender from "@/assets/projects/dhanesh/render.jpg";
import dhaneshPlan from "@/assets/projects/dhanesh/concept-plan.jpg";

import residence01 from "@/assets/projects/residence/view-01.jpg";
import residence02 from "@/assets/projects/residence/view-02.jpg";
import residence03 from "@/assets/projects/residence/view-03.jpg";
import residence04 from "@/assets/projects/residence/view-04.jpg";

import unaisPlan from "@/assets/projects/unais/floor-plan.jpg";

import planVythiri from "@/assets/plans/vythiri.jpg";
import planMoorkkanad from "@/assets/plans/moorkkanad.jpg";
import planVallappuzha from "@/assets/plans/vallappuzha.jpg";
import planCheekilode from "@/assets/plans/cheekilode.jpg";
import planEdavanna from "@/assets/plans/edavanna.jpg";

export type Shot = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  note?: string;
};

export type Fact = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  location?: string;
  summary: string;
  overview: string[];
  facts: Fact[];
  highlights?: { title: string; items: string[] };
  journey?: { title: string; intro: string; steps: { title: string; text: string }[] };
  cover: Shot;
  /** CSS object-position for cropped covers, e.g. "50% 30%". */
  coverPosition?: string;
  gallery: Shot[];
  drawings: Shot[];
};

const theeram = {
  river: {
    src: theeramRiver,
    alt: "Terracotta-roofed pavilions and villas along the river at golden hour, under coconut palms",
  },
  storm: {
    src: theeramStorm,
    alt: "The venue seen across the river under a stormy sky, verandah pavilions and gazebos at the water's edge",
  },
  court: { src: theeramCourt, alt: "Arched entrance court with a stone path, potted plants and balconies above" },
};

const auditorium = {
  front: {
    src: auditorium03,
    alt: "Front of the auditorium at sunset — an A-frame of timber and glass above a lit stone forecourt",
  },
  roof: {
    src: auditorium04,
    alt: "The roof plane slicing down into the ground beside a lit garden path under a flowering tree",
  },
  amphitheatre: {
    src: auditorium10,
    alt: "Sunken open-air amphitheatre at dusk, its curved steps lit from below around a circular stage",
  },
};

const afsal = {
  forecourt: {
    src: afsal03,
    alt: "Aerial view of the stone forecourt with planted islands in front of the white colonial-style house",
  },
  garden: { src: afsal10, alt: "Garden court of slate pavers set in grass among lush tropical planting" },
  courtyard: {
    src: afsal13,
    alt: "Arched courtyard with a flowering tree in a terracotta pot and built-in seating",
  },
};

const aman = {
  sitePlan: {
    src: amanSitePlan,
    alt: "Rendered landscape site plan of the one-acre garden around the house",
    caption: "Landscape site plan",
  },
};

const dhanesh = {
  house: {
    src: dhaneshRender,
    alt: "Two-storey concrete house with full-height glazing and cascading planters over a long pool, in a tropical forest",
  },
};

const residence = {
  front: {
    src: residence01,
    alt: "Front of the home: white plaster frame, exposed brick, stone porch and a roof terrace",
  },
  dusk: {
    src: residence03,
    alt: "Single-storey home at dusk, warm cove lighting around its white frame and stone porch",
  },
};

export const projects: Project[] = [
  {
    slug: "theeram-event-venue",
    title: "Theeram Event Venue",
    category: "Landscape · Hospitality",
    location: "Chembra, Tirur, Kerala",
    summary:
      "A 1.3-acre riverside venue for weddings, celebrations and overnight stays, shaped around the slope, the river and the monsoon.",
    overview: [
      "Theeram — “shore” in Malayalam — is a boutique, eco-conscious event venue on a 1.3-acre plot at Chembra, near Tirur. The brief asked one site to host weddings and birthdays for 300–400 guests, intimate ceremonies for under a hundred, and resort-style staycations, while staying accessible, sustainable and easy to maintain.",
      "The concept blends rustic-modern architecture with the landscape: a main event lawn with a stage, dance floor and a floral arch over water; a wedding pavilion and amphitheatre with tiered seating for smaller events; villa huts for overnight guests; and a recreation zone with a pool, gazebos and a wellness deck along the river.",
      "Planning began with the site itself — laterite soil, a slope falling 7 m towards the river, a high water table, around 3,000 mm of rain a year and breezes off the water from the west. Eco-friendly pathways, native planting, solar lighting and permeable pavers keep the venue light on the land.",
    ],
    facts: [
      { label: "Location", value: "Chembra, Tirur, Kerala" },
      { label: "Site", value: "1.3 acres · 57,300 sq ft" },
      { label: "Capacity", value: "300–400 guests" },
      { label: "Terrain", value: "7 m fall, south to north (≈8°)" },
      { label: "Scope", value: "Master plan, landscape & visualization" },
    ],
    highlights: {
      title: "Programme",
      items: [
        "Main event zone — 4,300 sq ft for 300–400 guests",
        "Intimate zone — tiered amphitheatre for up to 100 (3,500 sq ft)",
        "Staycation — two villa huts for overnight guests",
        "Recreation — pool, gazebos and a wellness deck",
        "Support — reception, administration and 30 parking spaces",
        "Landscaped buffers with native plants and eco-friendly paths",
      ],
    },
    cover: theeram.storm,
    gallery: [
      theeram.river,
      theeram.storm,
      {
        src: theeramVilla,
        alt: "Two-storey villa with arched verandahs, timber balconies and bougainvillea in late-afternoon light",
      },
      { src: theeramPool, alt: "Timber-slatted pavilion beside a reflecting pool with steps down to the water" },
      {
        src: theeramPavilion,
        alt: "Modern pavilion with a timber screen wall and terracotta roof meeting an arched villa",
      },
      { src: theeramBalcony, alt: "Villa wing with an arched window, wrought-iron balcony and climbing flowers" },
      theeram.court,
      { src: theeramArcade, alt: "Arcaded courtyard around a reflecting pool with potted trees" },
      { src: theeramGate, alt: "Garden gate under a flowering arch, with a wooden door and a tiered fountain" },
    ],
    drawings: [
      {
        src: theeramSiteData,
        alt: "Site data board with the project overview, client goals, climate, sun-path analysis and survey plan",
        caption: "Site data & analysis",
      },
      {
        src: theeramZoning,
        alt: "Zoning board showing the event, intimate, staycation, recreational and support zones on the site plan",
        caption: "Zoning",
      },
      {
        src: theeramZones1,
        alt: "Zone data for parking and the arrival ramp, with colour-coded site zoning",
        caption: "Zones 01–02 · Parking & ramp",
      },
      {
        src: theeramZones2,
        alt: "Zone data for the administration block with ground and first floor plans",
        caption: "Zone 03 · Administration",
      },
      {
        src: theeramZones3,
        alt: "Zone data for the recreational and interactive zones with pool, decks and river-view seating",
        caption: "Zones 04, 05 & 07 · Recreation",
      },
      {
        src: theeramZones4,
        alt: "Zone data for the main event zone, the villa and the intimate event zone",
        caption: "Zones 06 & 08 · Events & villa",
      },
      {
        src: theeramHall,
        alt: "Rendered layout of the 5,040 sq ft event hall with banquet seating among lawns",
        caption: "Event hall · 5,040 sq ft",
      },
      {
        src: theeramReception,
        alt: "Rendered first-floor plan of the 1,662 sq ft reception block",
        caption: "Reception · first floor",
      },
    ],
  },
  {
    slug: "vazhayur-auditorium",
    title: "Vazhayur Auditorium",
    category: "Architecture · Landscape",
    location: "Vazhayur, Malappuram, Kerala",
    summary:
      "A wedding and conference hall set into a former laterite quarry — two terraces, one dramatic roof, and gardens lit for dusk.",
    overview: [
      "A contemporary, multi-functional auditorium at Vazhayur, designed mainly for weddings, with room for conferences and cultural events. The brief balanced grand aesthetics with practical needs: robust acoustics, clear sightlines, seamless circulation and an efficient flow for event management and catering.",
      "The site is a former laterite quarry — two man-made plateaus carved into a hillside, 6–8 m apart. Rather than hide the quarry face, the design uses it as a dramatic backdrop: the main event hall, grand entrance foyer and executive lounge sit on the upper level, with dining, the kitchen and utilities below.",
      "A clear spatial hierarchy leads guests from arrival to the main hall, the stage and the dining area. Outside, terraced lawns, gazebos and an open-air amphitheatre are held by rubble-stone walls and traced in low, warm light for evening events.",
    ],
    facts: [
      { label: "Location", value: "Vazhayur, Malappuram, Kerala" },
      { label: "Site", value: "≈95 cents · 41,400 sq ft" },
      { label: "Terrain", value: "Former laterite quarry, 6–8 m level change" },
      { label: "Use", value: "Weddings, conferences, cultural events" },
      { label: "Scope", value: "Architecture, landscape & visualization" },
    ],
    highlights: {
      title: "Key features",
      items: [
        "Main event hall, entrance foyer and lounge on the upper plateau",
        "Dining, kitchen and utilities on the lower level",
        "Acoustic design, and daylight with glare and heat kept in check",
        "Open-air amphitheatre, gazebos and shaded seating",
        "Back-of-house with prayer rooms, green rooms and a service stair",
      ],
    },
    cover: auditorium.front,
    gallery: [
      auditorium.front,
      {
        src: auditorium01,
        alt: "The auditorium at dusk, its long sloping roof and lit stone walls rising beside the entrance drive",
      },
      {
        src: auditorium02,
        alt: "Corner view of the hall: a steep timber-lined roof plane sweeping down to a lit forecourt",
      },
      auditorium.roof,
      {
        src: auditorium05,
        alt: "Side elevation at sunset — a long dark roof over a glazed upper level and a lit boundary wall",
      },
      auditorium.amphitheatre,
      {
        src: auditorium07,
        alt: "Gabled hall above a lit rubble-stone retaining wall and driveway at sunset",
      },
      { src: auditorium11, alt: "Circular stage on a lawn, backed by a planted wall with hanging lanterns" },
      { src: auditorium09, alt: "Vine-covered arch over a garden path lined with ground lights" },
      { src: auditorium08, alt: "Curving footpath beside a stone wall and lawn, traced in low lighting" },
      { src: auditorium12, alt: "Terraced lawns and stone retaining walls with lit steps under a large tree" },
      { src: auditorium06, alt: "Front of the hall with rooftop planters and a lit landscaped edge" },
    ],
    drawings: [
      {
        src: auditoriumCover,
        alt: "Presentation cover — Conference Hall Design, Vazhayur — with the A-frame hall in a misty garden",
        caption: "Presentation cover",
      },
      {
        src: auditoriumSitePlan,
        alt: "Rendered site plan with the hall, a paved arrival court, gardens and planting across the terraced site",
        caption: "Site plan",
      },
      {
        src: auditoriumGroundFloor,
        alt: "Rendered ground floor plan with rows of seating facing the stage and service rooms around the hall",
        caption: "Ground floor plan",
      },
      {
        src: auditoriumElevation,
        alt: "Front elevation of the A-frame hall with a timber soffit, full-height glazing and a terrace",
        caption: "Front elevation",
      },
      {
        src: auditoriumSiteData,
        alt: "Site data board with the project overview, client goal, quarry topography, climate and survey plan",
        caption: "Site data & analysis",
      },
    ],
  },
  {
    slug: "afsal-residence",
    title: "Afsal Residence",
    category: "Landscape · Residential",
    summary:
      "A choreographed landscape for a colonial-style home — from a ceremonial entrance ramp to quiet garden rooms.",
    overview: [
      "The landscape for this colonial-style home unfolds as a sequence — from a formal arrival to intimate garden spaces. A central axis ties the entrance, the central lawn and the social spaces together, and the zones step down in formality from a public forecourt to semi-public courtyards to quiet leisure gardens.",
      "Planting does the softening. Island pavilions and courtyard patches break up an 8,000 sq ft frontage, steer cars without stopping the flow, and frame every porch and threshold in green.",
    ],
    facts: [
      { label: "Type", value: "Residential landscape" },
      { label: "Frontage hardscape", value: "8,000 sq ft" },
      { label: "Entrance ramp", value: "6.2 m wide" },
      { label: "Scope", value: "Landscape design & visualization" },
    ],
    journey: {
      title: "Spatial experience journey",
      intro: "Eight moments, from the gate to the front door.",
      steps: [
        {
          title: "Arrival",
          text: "Vehicle and pedestrian entries are formally aligned; the entrance ramp acts as a ceremonial threshold.",
        },
        {
          title: "Approach",
          text: "A 6.2 m ramp runs between formal lawns, with island pavilions placed as pauses along the axis.",
        },
        {
          title: "Pavilion nodes",
          text: "One pavilion offers shade beneath a central tree; the other, a vine-covered pergola with filtered light.",
        },
        {
          title: "Frontyard",
          text: "The ramp opens into a funnel-shaped stone forecourt — a moment of arrival and release.",
        },
        {
          title: "Island courtyard",
          text: "A planted island at the heart of the forecourt splits the path and anchors circulation.",
        },
        {
          title: "Directional choice",
          text: "Curved paths branch off to a frontage porch for visitors and to the main porch of the house.",
        },
        {
          title: "Frontage hardscape",
          text: "8,000 sq ft of paving, softened by planted islands that guide vehicles without breaking the flow.",
        },
        {
          title: "Porches",
          text: "Softscape islands on both sides frame each entry, adding enclosure and comfort at the threshold.",
        },
      ],
    },
    cover: afsal.forecourt,
    gallery: [
      afsal.forecourt,
      {
        src: afsal01,
        alt: "Entrance gate in a curved white wall with bougainvillea, opening onto the drive and the house beyond",
      },
      { src: afsal02, alt: "Stone-paved entrance ramp between planted walls leading up to the house" },
      { src: afsal04, alt: "Timber pergola lounge with outdoor sofas and dining beside a bed of orange flowers" },
      { src: afsal06, alt: "Vine-covered pergola with wicker seating looking back towards the house" },
      { src: afsal05, alt: "Garden pavilion beside a fountain pool, with terracotta urns and stepping stones" },
      { src: afsal07, alt: "Side garden path of stone pavers set in grass along the house" },
      { src: afsal08, alt: "Chevron-paved walkway with a frangipani tree and stone seating beside the house" },
      { src: afsal09, alt: "Rain-washed stone patio with a curving stepping-stone path into the garden" },
      afsal.garden,
      { src: afsal11, alt: "Light well inside the house with a potted tree, ferns and a timber deck" },
      { src: afsal12, alt: "Top view of an internal courtyard with a timber deck, planters and urns" },
      afsal.courtyard,
    ],
    drawings: [
      {
        src: afsalJourney,
        alt: "Landscape plan with numbered zones describing the journey from arrival to the porches",
        caption: "Landscape plan · spatial journey",
      },
    ],
  },
  {
    slug: "aman-retreat",
    title: "Aman Retreat",
    category: "Landscape · Residential",
    location: "Kannamangalam, Kerala",
    summary: "A one-acre tropical oasis around a family home — terraced, shaded and cooled by water.",
    overview: [
      "The client wanted a serene retreat to nature: a pool and garden in the backyard and a lush tropical landscape around the house. The answer is a shaded oasis that leans on Kerala's natural assets — terraced zones, water elements and dense evergreens for sun protection and humidity control.",
      "Solstice sun-path studies mapped where light falls, from the high northern entrance to the low western backyard. They decided where shade trees, pergolas and water features go — blocking the harsh afternoon sun, lowering temperatures and taking the edge off the humidity.",
      "The layout strings together an entrance gate and bamboo grove, a patio and pergola, steps down to the backyard, a climbers' shelter, a gazebo, and a pool framed by a feature wall and thick planting.",
    ],
    facts: [
      { label: "Location", value: "Kannamangalam, Kerala" },
      { label: "Site", value: "≈1 acre · 43,870 sq ft" },
      { label: "Residence", value: "6,850 sq ft, east-facing" },
      { label: "Terrain", value: "7 m fall, north to west (13–15%)" },
      { label: "Scope", value: "Site analysis, landscape & 3D views" },
    ],
    cover: aman.sitePlan,
    coverPosition: "50% 45%",
    gallery: [
      { src: aman22, alt: "Backyard pool with a timber deck, pergola lounge and flowering borders" },
      {
        src: aman16,
        alt: "Water pavilion: a raised platform with seating and planters ringed by a shallow pool",
      },
      { src: aman03, alt: "A-frame house with a round window above a green-roofed carport" },
      {
        src: aman23,
        alt: "Poolside lounge under a pergola with a sculptural water feature and tropical planting",
      },
      { src: aman20, alt: "Rubble-stone wall draped in creepers, with an arched opening to the pool garden" },
      { src: aman17, alt: "Water pavilion framed by a timber portal and a screen of slender plants" },
      { src: aman07, alt: "A-frame house with full-height glazing and a deck, set among trees" },
      { src: aman25, alt: "Broad terrace steps rising to the pool garden" },
      { src: aman14, alt: "Courtyard patio with terracotta paving, planters and lounge chairs" },
      { src: aman09, alt: "Stone-paved path through dense planting towards the house" },
      { src: aman11, alt: "Paved courtyard with a curved planter wall beneath a jackfruit tree" },
      { src: aman02, alt: "Approach through the trees to the A-frame house" },
    ],
    drawings: [
      aman.sitePlan,
      {
        src: amanLayout,
        alt: "Site layout labelling the entrance gate, patio, pergola, bamboo grove, gazebo, pool and climbers' shelter",
        caption: "Site layout",
      },
      {
        src: amanSiteData,
        alt: "Site data board with the project overview, climate data, solstice sun-path studies and survey plan",
        caption: "Site data & sun path",
      },
      {
        src: amanAnalysis,
        alt: "Site analysis board covering radiation and shade, microclimate strategies and the planting palette",
        caption: "Site analysis & microclimate",
      },
    ],
  },
  {
    slug: "dhanesh-farm-house",
    title: "Dhanesh Farm House",
    category: "Architecture · Concept",
    summary:
      "A riverside farm house — raw concrete, deep terraces and planters spilling green over every edge.",
    overview: [
      "A concept for a farm house on a riverside plot. The site plan threads a driveway past parking and lawns to a garden that runs down to the water, with a gazebo, a deck and a landing for boats.",
      "The house is a pair of raw concrete trays stacked over full-height glazing, edged with planters so that green spills from every level, and set over a long, still pool.",
    ],
    facts: [
      { label: "Type", value: "Farm house" },
      { label: "Setting", value: "Riverside" },
      { label: "Scope", value: "Concept design & visualization" },
    ],
    cover: dhanesh.house,
    gallery: [dhanesh.house],
    drawings: [
      {
        src: dhaneshPlan,
        alt: "Concept site plan with the driveway and parking, lawns, a gazebo and a deck at the river with a boat landing",
        caption: "Concept site plan",
      },
    ],
  },
  {
    slug: "residence",
    title: "Residence",
    category: "Architecture · Residential",
    summary:
      "A compact single-storey home in white plaster, exposed brick and rubble stone, with a terrace on the roof.",
    overview: [
      "A compact single-storey home built from simple volumes, each with its own material: a white plastered frame around the main window, exposed brick to one side and rubble stone at the entrance porch.",
      "A roof terrace sits above the living spaces, and stone pavers set in grass lead to the door. Day and dusk views test how the façade reads under warm cove lighting.",
    ],
    facts: [
      { label: "Type", value: "Single-storey home" },
      { label: "Materials", value: "Plaster, exposed brick, rubble stone" },
      { label: "Scope", value: "Architecture & visualization" },
    ],
    cover: residence.dusk,
    gallery: [
      residence.front,
      residence.dusk,
      { src: residence02, alt: "Corner view of the stone-clad porch, roof terrace railing and grass-set pavers" },
      { src: residence04, alt: "Close view of the stone-clad porch with a chair beneath a slim canopy" },
    ],
    drawings: [],
  },
  {
    slug: "unais-residence",
    title: "Unais Residence",
    category: "Architecture · Planning",
    location: "Akkode, Kerala",
    summary: "A 2,650 sq ft family home on a long, narrow plot, planned around a pool and two courtyards.",
    overview: [
      "A 2,650 sq ft family home at Akkode, laid out along a long, narrow plot. A car porch and sit-out lead into the formal living room; past the stair, the dining hall opens onto a 3 × 6 m pool and verandah, with family living, the kitchen and work area beyond.",
      "Two small courtyards — one beside the old well — bring light and air into the middle of the house, alongside a prayer room and a lift. At the back, the bedroom wing has walk-in closets and an open-air shower.",
    ],
    facts: [
      { label: "Location", value: "Akkode, Kerala" },
      { label: "Built area", value: "2,650 sq ft" },
      { label: "Programme", value: "3 bedrooms, pool, 2 courtyards" },
      { label: "Scope", value: "Planning & rendered plan" },
    ],
    cover: {
      src: unaisPlan,
      alt: "Rendered floor plan of the Unais Residence with a pool, courtyards, living spaces and three bedrooms",
    },
    coverPosition: "50% 38%",
    gallery: [],
    drawings: [
      {
        src: unaisPlan,
        alt: "Rendered floor plan of the 2,650 sq ft Unais Residence: car porch, formal and family living, dining beside a pool, courtyards, prayer room and three bedrooms",
        caption: "Floor plan · 2,650 sq ft",
      },
    ],
  },
];

export const plans: Shot[] = [
  {
    src: planVythiri,
    alt: "Rendered landscape master plan for a home at Vythiri, with open lawns, winding paths and a pond",
    caption: "Vythiri",
    note: "Residential landscape",
  },
  {
    src: planMoorkkanad,
    alt: "Rendered landscape plan wrapping a house at Moorkkanad, with paved courts and garden beds",
    caption: "Moorkkanad",
    note: "Residential landscape",
  },
  {
    src: planVallappuzha,
    alt: "Rendered landscape plan for a house at Vallappuzha with a paved drive, lawns and dense planting",
    caption: "Vallappuzha",
    note: "Residential landscape",
  },
  {
    src: planCheekilode,
    alt: "Farm village master plan at Cheekilode with huts, a water body and thick vegetation along a long site",
    caption: "Cheekilode",
    note: "Farm village",
  },
  {
    src: planEdavanna,
    alt: "Rendered landscape plan for a large home at Edavanna with lawns, a paved forecourt and terraced planting",
    caption: "Edavanna",
    note: "Residential landscape",
  },
];

/** Shown inside the arched frame on the home page, so portrait-friendly crops matter. */
export type HeroSlide = Shot & { title: string; place: string; href: string; position?: string };

export const heroSlides: HeroSlide[] = [
  {
    ...auditorium.front,
    title: "Vazhayur Auditorium",
    place: "Malappuram",
    href: "/projects/vazhayur-auditorium",
  },
  { ...theeram.court, title: "Theeram Event Venue", place: "Tirur", href: "/projects/theeram-event-venue" },
  {
    ...afsal.forecourt,
    title: "Afsal Residence",
    place: "Landscape",
    href: "/projects/afsal-residence",
    position: "45% 50%",
  },
  {
    ...dhanesh.house,
    title: "Dhanesh Farm House",
    place: "Riverside concept",
    href: "/projects/dhanesh-farm-house",
    position: "40% 50%",
  },
];

/** Images that sit inline with the words of the philosophy statement. */
export const statementImages = {
  space: auditorium.front,
  nature: afsal.garden,
  perception: theeram.river,
};

/** “How form emerges…” — each exploration illustrated by a project. */
export const explorations = [
  { title: "How form emerges", project: "Vazhayur Auditorium", href: "/projects/vazhayur-auditorium", shot: auditorium.roof },
  { title: "How materials communicate", project: "Residence", href: "/projects/residence", shot: residence.front },
  {
    title: "How landscapes influence architecture",
    project: "Theeram Event Venue",
    href: "/projects/theeram-event-venue",
    shot: theeram.river,
  },
  { title: "How spaces evoke emotion", project: "Afsal Residence", href: "/projects/afsal-residence", shot: afsal.courtyard },
];

/** Full-bleed image behind the closing statement. */
export const statementBackdrop = auditorium.amphitheatre;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
