import { notFound } from "next/navigation";
import CtaButton from "@/components/CtaButton";
import PageHero from "@/components/PageHero";
import { orgEmail } from "@/lib/constants";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return { title: `${getDictionary(locale).contact.eyebrow} | Togo Rising` };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale).contact;

  return (
    <>
      <PageHero eyebrow={dict.eyebrow} title={dict.title} description={dict.description} image="/photos/contact.jpg" />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-ink/10 bg-white/70 p-8 dark:bg-ink/10">
          <h2 className="font-sans text-xl font-bold text-togo-green">
            {dict.emailHeading}
          </h2>
          <p className="mt-2 font-serif text-base text-ink/75">{dict.emailBody}</p>
          <div className="mt-5">
            <CtaButton href={`mailto:${orgEmail}`} variant="primary">
              {orgEmail}
            </CtaButton>
          </div>

          <div className="mt-10 border-t border-ink/10 pt-6">
            <h2 className="font-sans text-xl font-bold text-togo-green">
              {dict.followHeading}
            </h2>
            <p className="mt-2 font-serif text-base text-ink/60">{dict.followBody}</p>
          </div>
        </div>
      </section>
    </>
  );
}
