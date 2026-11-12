"use client";
import { useEffect, useState } from "react";

export default function Gallery({ items }) {
  const [open, setOpen] = useState(null);
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
        {items.slice(0, 5).map((p, i) => (
          <figure key={i} className={i === 0 && items.length > 3 ? "col-span-2 md:col-span-1" : ""}>
            {p.src ? (
              <button onClick={() => setOpen(i)} className="group block w-full overflow-hidden bg-beige" aria-label={`Perbesar: ${p.alt}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </button>
            ) : (
              <div className="flex aspect-[4/5] w-full items-center justify-center bg-beige px-4 text-center text-sm text-gray">
                Foto belum ditambahkan
              </div>
            )}
            {p.caption && <figcaption className="mt-2 text-sm text-gray">{p.caption}</figcaption>}
          </figure>
        ))}
      </div>

      {open !== null && items[open]?.src && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <button className="absolute right-4 top-4 px-3 py-2 text-sm text-ivory" onClick={() => setOpen(null)}>Tutup</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={items[open].src} alt={items[open].alt} className="max-h-[88vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
