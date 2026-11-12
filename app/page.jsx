import { site } from "../content/site";
import Reveal from "../components/Reveal";
import Gallery from "../components/Gallery";

const wrap = "mx-auto w-full max-w-5xl px-6 sm:px-10";
const h2 = "font-serif text-2xl text-ink sm:text-3xl";

export default function Page() {
  const { hero, message, photos, letter, closing } = site;
  return (
    <main>
      <section className={`${wrap} grid min-h-[100svh] items-center gap-10 py-16 md:grid-cols-2 md:gap-16`}>
        <div className="order-2 md:order-1">
          <p className="mb-6 text-xs tracking-[0.2em] text-brown">{site.date.toUpperCase()}</p>
          <h1 className="font-serif text-5xl leading-tight sm:text-6xl">{hero.heading}</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-gray">{hero.subheading}</p>
          <a href="#pesan" className="mt-10 inline-block border border-brown px-7 py-3 text-sm text-brown transition-colors duration-300 hover:bg-brown hover:text-ivory">
            {hero.button}
          </a>
        </div>
        <div className="order-1 md:order-2">
          {hero.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={hero.photo} alt={hero.photoAlt} className="aspect-[4/5] w-full max-h-[70svh] object-cover md:max-h-none" />
          ) : (
            <div className="flex aspect-[4/5] max-h-[50svh] w-full items-center justify-center bg-beige text-sm text-gray md:max-h-none">
              {hero.photoAlt}
            </div>
          )}
        </div>
      </section>

      <section id="pesan" className="scroll-mt-4 border-t border-beige py-24">
        <Reveal className={`${wrap} max-w-2xl`}>
          <h2 className={h2}>{message.heading}</h2>
          {message.paragraphs.map((t, i) => (
            <p key={i} className="mt-6 text-lg leading-8 text-ink/90">{t}</p>
          ))}
        </Reveal>
      </section>

      <section className="border-t border-beige py-24">
        <Reveal className={wrap}>
          <h2 className={`${h2} mb-10`}>{photos.heading}</h2>
          <Gallery items={photos.items} />
        </Reveal>
      </section>

      <section className="bg-beige/60 py-24">
        <Reveal className={`${wrap} max-w-2xl`}>
          <div className="border border-brown/30 bg-ivory px-6 py-12 sm:px-14 sm:py-16">
            <h2 className="mb-10 text-xs tracking-[0.2em] text-brown">{letter.heading.toUpperCase()}</h2>
            <p className="font-serif text-xl">{letter.greeting}</p>
            {letter.paragraphs.map((t, i) => (
              <p key={i} className="mt-6 font-serif text-lg leading-9 text-ink/90">{t}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-28 text-center">
        <Reveal className={`${wrap} max-w-2xl`}>
          {closing.lines.map((t, i) => (
            <p key={i} className={`font-serif ${i === 0 ? "text-3xl sm:text-4xl" : "mt-4 text-xl text-gray"}`}>{t}</p>
          ))}
          <p className="mt-12 font-serif italic text-brown">{closing.signature}</p>
        </Reveal>
      </section>
    </main>
  );
}
