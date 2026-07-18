import { notFound } from "next/navigation";
import CtaButton from "@/components/CtaButton";
import PageHero from "@/components/PageHero";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { tallyUrls } from "@/lib/tally";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return { title: `${getDictionary(locale).shopTogo.eyebrow} | Togo Rising` };
}

export default async function ShopTogoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale).shopTogo;

  return (
    <>
      <PageHero eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border-2 border-dashed border-togo-green/30 bg-white/60 p-10 text-center">
          <h2 className="font-sans text-2xl font-bold text-togo-green">
            {dict.listedTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-serif text-base leading-relaxed text-ink/75">
            {dict.listedBody}
          </p>
          <div className="mt-6 flex justify-center">
            <CtaButton href={tallyUrls.businessListing} variant="primary">
              {dict.cta}
            </CtaButton>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-sans text-lg font-bold text-togo-green">
            {dict.categoriesLabel}
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {dict.categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 font-sans text-sm font-semibold text-ink/70"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
