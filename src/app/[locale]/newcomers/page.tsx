import Link from "next/link";
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
  return { title: `${getDictionary(locale).newcomers.eyebrow} | Togo Rising` };
}

export default async function NewcomersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale).newcomers;

  return (
    <>
      <PageHero eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionGrid sections={dict.sections} />
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <CtaButton href={tallyUrls.newcomerIntake} variant="primary">
            {dict.ctaStart}
          </CtaButton>
          <CtaButton href={tallyUrls.mentorSignup} variant="ghost">
            {dict.ctaMentor}
          </CtaButton>
          <Link
            href={`/${locale}/newcomers/usa`}
            className="font-sans text-sm font-semibold text-togo-green hover:text-togo-red"
          >
            {dict.usaLink}
          </Link>
        </div>
      </section>
    </>
  );
}
