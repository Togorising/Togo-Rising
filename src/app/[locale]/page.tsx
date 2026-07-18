import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import HeroMotion from "@/components/HeroMotion";
import KenteStripe from "@/components/KenteStripe";
import NewsFeed from "@/components/NewsFeed";
import { mission, pillars } from "@/lib/content";
import { tallyUrls } from "@/lib/tally";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="font-sans text-sm font-bold uppercase tracking-widest text-togo-red">
              Togo Rising
            </p>
            <h1 className="mt-3 font-sans text-4xl font-bold leading-tight tracking-tight text-togo-green sm:text-5xl lg:text-6xl">
              No one has to figure it out alone.
            </h1>
            <p className="mt-6 font-serif text-lg leading-relaxed text-ink/80">
              {mission}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href={tallyUrls.join} variant="primary">
                Join the Community
              </CtaButton>
              <CtaButton href="/opportunities" variant="ghost">
                Explore Opportunities
              </CtaButton>
            </div>
          </div>

          <HeroMotion />
        </div>
      </section>

      <KenteStripe />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-sans text-2xl font-bold text-togo-green sm:text-3xl">
          Where to start
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="group flex flex-col justify-between rounded-3xl border border-ink/10 bg-white/70 p-6 transition-colors hover:border-togo-green"
            >
              <div>
                <h3 className="font-sans text-xl font-bold text-togo-green">
                  {pillar.title}
                </h3>
                <p className="mt-2 font-serif text-base leading-relaxed text-ink/75">
                  {pillar.description}
                </p>
              </div>
              <span className="mt-4 font-sans text-sm font-semibold text-togo-red opacity-0 transition-opacity group-hover:opacity-100">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <NewsFeed />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-sans text-3xl font-bold text-togo-green sm:text-4xl">
          Ready to connect?
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-serif text-lg text-ink/75">
          Join Togo Rising and get access to the directory, opportunities, and
          mentors already inside the community.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton href={tallyUrls.join} variant="secondary">
            Join the Community
          </CtaButton>
        </div>
      </section>
    </>
  );
}
