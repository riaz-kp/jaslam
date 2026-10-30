"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";

import { ArrowLeft, ArrowRight, Close, ZoomIn, ZoomOut } from "@/components/icons";
import type { Shot } from "@/content/projects";
import { pad } from "@/lib/format";

type Variant = "views" | "drawings" | "plans";

const listClass: Record<Variant, string> = {
  views: "columns-1 gap-4 md:columns-2 md:gap-5 [&>li]:mb-4 md:[&>li]:mb-5",
  drawings: "grid gap-x-5 gap-y-10 md:grid-cols-2",
  plans: "grid grid-cols-2 gap-x-3 gap-y-8 md:gap-x-5 lg:grid-cols-6",
};

const sizes: Record<Variant, string> = {
  views: "(min-width: 768px) 50vw, 100vw",
  drawings: "(min-width: 768px) 50vw, 100vw",
  plans: "(min-width: 1024px) 33vw, 50vw",
};

function planSpan(shot: Shot) {
  const landscape = shot.src.width > shot.src.height;
  return landscape ? "col-span-2 lg:col-span-4" : "lg:col-span-2";
}

export function Gallery({ shots, variant }: { shots: Shot[]; variant: Variant }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <ul className={listClass[variant]}>
        {shots.map((shot, i) => (
          <li
            key={shot.src.src}
            className={`break-inside-avoid ${variant === "plans" ? planSpan(shot) : ""}`}
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full cursor-zoom-in text-left"
            >
              <span
                className={`block overflow-hidden ${variant === "views" ? "bg-ink/5" : "bg-paper-deep"} ${
                  variant === "plans" ? "h-full" : ""
                }`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  sizes={sizes[variant]}
                  placeholder="blur"
                  className="h-auto w-full transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.03]"
                />
              </span>
              {(shot.caption || shot.note) && (
                <span className="mt-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-t border-current/15 pt-3">
                  <span className="font-serif text-xl leading-tight md:text-2xl">{shot.caption}</span>
                  {shot.note && <span className="eyebrow opacity-70">{shot.note}</span>}
                </span>
              )}
              <span className="sr-only">Open larger view</span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox shots={shots} index={open} onChange={setOpen} zoomable={variant !== "views"} />
    </>
  );
}

function Lightbox({
  shots,
  index,
  onChange,
  zoomable,
}: {
  shots: Shot[];
  index: number | null;
  onChange: (index: number | null) => void;
  zoomable: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const swipeStart = useRef<number | null>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const shot = index === null ? null : shots[index];
  const many = shots.length > 1;

  const go = (step: number) => {
    if (index === null) return;
    setZoomed(false);
    onChange((index + step + shots.length) % shots.length);
  };

  const onPointerDown = (event: PointerEvent) => {
    if (!zoomed) swipeStart.current = event.clientX;
  };
  const onPointerUp = (event: PointerEvent) => {
    if (swipeStart.current === null) return;
    const dx = event.clientX - swipeStart.current;
    swipeStart.current = null;
    if (many && Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label="Image viewer"
      onClose={() => {
        setZoomed(false);
        onChange(null);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") go(1);
        if (event.key === "ArrowLeft") go(-1);
      }}
      className="fixed inset-0 m-0 h-svh max-h-none w-screen max-w-none bg-night p-0 text-paper backdrop:bg-black/80"
    >
      {shot && index !== null && (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <p className="eyebrow text-night-soft">
              {pad(index + 1)} / {pad(shots.length)}
            </p>
            <div className="flex items-center gap-2">
              {zoomable && (
                <button
                  type="button"
                  onClick={() => setZoomed((z) => !z)}
                  aria-pressed={zoomed}
                  aria-label={zoomed ? "Fit to screen" : "Zoom to full size"}
                  className="grid size-11 place-items-center rounded-full transition-colors hover:bg-white/10"
                >
                  {zoomed ? <ZoomOut className="size-5" /> : <ZoomIn className="size-5" />}
                </button>
              )}
              <button
                type="button"
                onClick={() => onChange(null)}
                aria-label="Close"
                autoFocus
                className="grid size-11 place-items-center rounded-full transition-colors hover:bg-white/10"
              >
                <Close className="size-6" />
              </button>
            </div>
          </div>

          <div
            className={`relative min-h-0 flex-1 ${zoomed ? "overflow-auto" : "flex items-center justify-center px-2 md:px-20"}`}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <Image
              key={shot.src.src}
              src={shot.src}
              alt={shot.alt}
              placeholder="blur"
              sizes={zoomed ? `${shot.src.width}px` : "100vw"}
              onClick={zoomable ? () => setZoomed((z) => !z) : undefined}
              className={
                zoomed
                  ? "h-auto max-w-none cursor-zoom-out"
                  : `size-full select-none ${zoomable ? "cursor-zoom-in" : ""}`
              }
              // Fill the stage and letterbox, rather than trusting the srcset-derived natural size.
              style={zoomed ? { width: shot.src.width } : { objectFit: "contain" }}
              draggable={false}
            />
            {many && !zoomed && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous image"
                  className="absolute top-1/2 left-3 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-black/40 transition-colors hover:bg-white hover:text-ink md:grid"
                >
                  <ArrowLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next image"
                  className="absolute top-1/2 right-3 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-black/40 transition-colors hover:bg-white hover:text-ink md:grid"
                >
                  <ArrowRight className="size-5" />
                </button>
              </>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-6">
            <p className="max-w-3xl text-sm text-night-soft">
              {shot.caption && <span className="mr-2 font-serif text-lg text-paper">{shot.caption}</span>}
              {shot.alt}
            </p>
            {many && (
              <div className="flex shrink-0 gap-2 md:hidden">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous image"
                  className="grid size-11 place-items-center rounded-full border border-white/20"
                >
                  <ArrowLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next image"
                  className="grid size-11 place-items-center rounded-full border border-white/20"
                >
                  <ArrowRight className="size-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
