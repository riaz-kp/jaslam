import { ArrowUp, ArrowUpRight } from "@/components/icons";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-night text-paper">
      <div className="mx-auto max-w-[90rem] px-5 pt-24 pb-10 md:px-10 md:pt-36">
        <p className="eyebrow text-night-soft">Contact</p>
        <div className="mt-6 grid gap-14 lg:grid-cols-12">
          <h2 className="font-serif text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] tracking-[-0.02em] lg:col-span-7">
            Let&rsquo;s shape <br className="hidden sm:block" />
            <em className="text-terracotta">a place</em> together.
          </h2>
          <div className="flex flex-col justify-end gap-8 lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-night-soft">
              Landscapes, homes, venues or a master plan for a piece of land — tell me about the site and
              what you hope it becomes.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-paper px-7 py-4 text-ink transition-colors hover:bg-terracotta hover:text-paper"
            >
              Write to me
              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <dl className="mt-20 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
          <div>
            <dt className="eyebrow text-night-soft">Email</dt>
            <dd className="mt-2 text-lg break-all">
              <a href={`mailto:${profile.email}`} className="hover:text-terracotta">
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-night-soft">Phone</dt>
            <dd className="mt-2 text-lg">
              <a href={profile.phoneHref} className="hover:text-terracotta">
                {profile.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-night-soft">Based in</dt>
            <dd className="mt-2 text-lg">{profile.location}, India</dd>
          </div>
        </dl>

        <div className="mt-20 flex flex-col gap-4 text-sm text-night-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {profile.name}</p>
          <p>Architecture · Landscape · Visualisation</p>
          <a href="#main" className="inline-flex items-center gap-2 hover:text-paper">
            Back to top <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
