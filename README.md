# Mohammed Jaslam T.H — Portfolio

*Between Nature & Architecture* — portfolio site for Mohammed Jaslam T.H, architect and
landscape designer in Calicut, Kerala. Built with Next.js 16 (App Router, Cache Components),
React 19 and Tailwind CSS v4. Headlines are set in Bricolage Grotesque (its width axis gives
the condensed display cut), body text in Geist.

The content comes from the shared Google Drive “Portfolio” folder: the CV sheet, the profile
photo, eight project folders and the landscape master plans. The philosophy text is Jaslam's own.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build && npm start` serves the production build.

If an edit to `src/app/globals.css` doesn't show up in the dev server, stop it, delete `.next`
and run `npm run dev` again — the Tailwind Turbopack loader can hold on to a cached stylesheet.

## Where things live

| What | File |
| --- | --- |
| Tagline, philosophy text, contact, CV details, skills | `src/content/profile.ts` |
| Projects, master plans, hero slides, “How…” explorations | `src/content/projects.ts` |
| Images (optimised from Drive, max 2400 px) | `src/assets/` |
| Home page sections | `src/components/sections/` |
| Project case-study page | `src/app/projects/[slug]/page.tsx` |
| Colours, fonts, animations | `src/app/globals.css` |

### Add a project

1. Put its images in `src/assets/projects/<name>/` (JPEG, ~2400 px on the long side is plenty).
2. Import them at the top of `src/content/projects.ts` and add an entry to `projects`:
   `title`, `category`, `summary`, `overview` paragraphs, `facts`, a `cover`, plus `gallery`
   (renders) and `drawings` (sheets and plans — these open with zoom in the viewer).
3. It shows up on the home page and gets its own page at `/projects/<slug>` automatically.

Every image needs `alt` text describing what it shows.

## Deploy

Works as-is on Vercel. Elsewhere, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://jaslam.in`) so
social cards, `sitemap.xml` and `robots.txt` use the real domain.

## Not included yet

- The three AI-generated videos in the Dhanesh Farm House folder, the concept PDF, and the
  root-level `2.png` in Afsal Landscape could not be pulled from Drive. Drop the `.mp4` files
  into `public/videos/` if you want them on the site.
- Aman Retreat shows 12 of its 29 renders; the rest are near-duplicates.
