import { notFound } from "next/navigation";
import CtaButton from "@/components/CtaButton";
import PageHero from "@/components/PageHero";
import SectionGrid from "@/components/SectionGrid";
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
  return { title: `${getDictionary(locale).opportunities.eyebrow} | Togo Rising` };
}

export default async function OpportunitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale).opportunities;

  return (
    <>
      <PageHero eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionGrid sections={dict.sections} />
        <div className="mt-10 flex flex-wrap gap-4">
          <CtaButton href={tallyUrls.join} variant="primary">
            {dict.ctaJoin}
          </CtaButton>
          <CtaButton href={tallyUrls.opportunitySubmit} variant="ghost">
            {dict.ctaSubmit}
          </CtaButton>
        </div>
      </section>
    </>
  );
}
