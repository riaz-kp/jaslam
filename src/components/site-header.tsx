"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";

import { profile } from "@/content/profile";
import { nav } from "@/content/site";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

// Solid once the page's hero (if any) has scrolled up under the header.
function isPastHero() {
  const hero = document.querySelector("[data-hero]");
  return !hero || hero.getBoundingClientRect().bottom <= 80;
}

export function SiteHeader() {
  // Re-render on navigation so the hero check runs against the new page.
  usePathname();
  const pastHero = useSyncExternalStore(subscribe, isPastHero, () => false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header
      className="site-header fixed inset-x-0 top-0 z-50 transition-[background-color,color,box-shadow] duration-500"
      data-solid={pastHero || menuOpen}
      data-menu-open={menuOpen}
    >
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 md:h-20 md:px-10">
        <Link href="/" onClick={close} className="font-serif text-[1.65rem] leading-none tracking-tight">
          Jaslam <span className="italic">T.H</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9 text-[0.92rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-2 after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="eyebrow -mr-2 px-2 py-3 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto overscroll-contain bg-paper px-5 pt-8 pb-10 text-ink md:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="border-t border-ink/15">
            {nav.map((item, i) => (
              <li key={item.href} className="border-b border-ink/15">
                <Link
                  href={item.href}
                  onClick={close}
                  className="flex items-baseline justify-between py-5 font-serif text-5xl"
                >
                  {item.label}
                  <span className="eyebrow text-ink-soft">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-10 space-y-2 text-sm text-ink-soft">
          <p>{profile.location}</p>
          <p>
            <a href={`mailto:${profile.email}`} className="text-ink underline underline-offset-4">
              {profile.email}
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}
