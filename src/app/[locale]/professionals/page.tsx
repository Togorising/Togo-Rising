import { notFound } from "next/navigation";
import CtaButton from "@/components/CtaButton";
import PageHero from "@/components/PageHero";
import SectionGrid from "@/components/SectionGrid";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return { title: `${getDictionary(locale).professionals.eyebrow} | Togo Rising` };
}

export default async function ProfessionalsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale).professionals;

  return (
    <>
      <PageHero eyebrow={dict.eyebrow} title={dict.title} description={dict.description} image="/photos/professionals.jpg" />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionGrid sections={dict.sections} />
        <div className="mt-10 flex justify-start">
          <CtaButton href={`/${locale}/mentor`} variant="primary">
            {dict.cta}
          </CtaButton>
        </div>
      </section>
    </>
  );
}
