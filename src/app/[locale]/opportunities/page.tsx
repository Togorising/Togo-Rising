import { notFound } from "next/navigation";
import CtaButton from "@/components/CtaButton";
import FormSection from "@/components/FormSection";
import PageHero from "@/components/PageHero";
import SectionGrid from "@/components/SectionGrid";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import type { FieldConfig } from "@/components/IntakeForm";

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
  const fullDict = getDictionary(locale);
  const dict = fullDict.opportunities;
  const { common, opportunity } = fullDict.forms;

  const fields: FieldConfig[] = [
    { kind: "text", name: "name", label: common.nameLabel, required: true },
    { kind: "email", name: "email", label: common.emailLabel, required: true },
    {
      kind: "text",
      name: "opportunityTitle",
      label: opportunity.opportunityTitleLabel,
      required: true,
    },
    {
      kind: "select",
      name: "type",
      label: opportunity.typeLabel,
      options: opportunity.typeOptions,
      required: true,
    },
    { kind: "textarea", name: "details", label: opportunity.detailsLabel, required: true },
    { kind: "text", name: "link", label: opportunity.linkLabel },
  ];

  return (
    <>
      <PageHero eyebrow={dict.eyebrow} title={dict.title} description={dict.description} image="/photos/opportunities.jpg" />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionGrid sections={dict.sections} />
        <div className="mt-10 flex flex-wrap gap-4">
          <CtaButton href={`/${locale}/join`} variant="primary">
            {dict.ctaJoin}
          </CtaButton>
        </div>
        <p className="mt-6 max-w-2xl font-serif text-sm leading-relaxed text-ink/55">
          {dict.disclaimer}
        </p>

        <div className="mt-12 max-w-2xl">
          <FormSection
            title={opportunity.title}
            description={opportunity.description}
            formType="opportunity"
            fields={fields}
            common={common}
          />
        </div>
      </section>
    </>
  );
}
