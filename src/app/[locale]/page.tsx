import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import HeroMotion from "@/components/HeroMotion";
import KenteStripe from "@/components/KenteStripe";
import NewsFeed from "@/components/NewsFeed";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);
  const withLocale = (href: string) => `/${locale}${href}`;

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="font-sans text-sm font-bold uppercase tracking-widest text-togo-red">
              {dict.home.eyebrow}
            </p>
            <h1 className="mt-3 font-sans text-4xl font-bold leading-tight tracking-tight text-togo-green sm:text-5xl lg:text-6xl">
              {dict.home.title}
            </h1>
            <p className="mt-6 font-serif text-lg leading-relaxed text-ink/80">
              {dict.mission}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href={withLocale("/join")} variant="primary">
                {dict.home.joinCommunity}
              </CtaButton>
              <CtaButton href={withLocale("/opportunities")} variant="ghost">
                {dict.home.exploreOpportunities}
              </CtaButton>
            </div>
          </div>

          <HeroMotion overlayText={dict.heroOverlay} />
        </div>
      </section>

      <KenteStripe />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-sans text-2xl font-bold text-togo-green sm:text-3xl">
          {dict.home.whereToStart}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={withLocale(pillar.href)}
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
                {locale === "fr" ? "En savoir plus →" : "Learn more →"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <NewsFeed dict={dict.news} locale={locale} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-sans text-3xl font-bold text-togo-green sm:text-4xl">
          {dict.home.readyTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-serif text-lg text-ink/75">
          {dict.home.readyBody}
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton href={withLocale("/join")} variant="secondary">
            {dict.home.joinCommunity}
          </CtaButton>
        </div>
      </section>
    </>
  );
}
