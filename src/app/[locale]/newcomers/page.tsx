import Link from "next/link";
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
  return { title: `${getDictionary(locale).newcomers.eyebrow} | Togo Rising` };
}

export default async function NewcomersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const fullDict = getDictionary(locale);
  const dict = fullDict.newcomers;
  const { common, newcomerIntake } = fullDict.forms;

  const fields: FieldConfig[] = [
    { kind: "text", name: "name", label: common.nameLabel, required: true },
    { kind: "email", name: "email", label: common.emailLabel, required: true },
    { kind: "text", name: "city", label: common.cityLabel },
    {
      kind: "textarea",
      name: "needHelp",
      label: newcomerIntake.needHelpLabel,
      placeholder: newcomerIntake.needHelpPlaceholder,
      required: true,
    },
  ];

  return (
    <>
      <PageHero eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionGrid sections={dict.sections} />
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <CtaButton href={`/${locale}/mentor`} variant="ghost">
            {dict.ctaMentor}
          </CtaButton>
          <Link
            href={`/${locale}/newcomers/usa`}
            className="font-sans text-sm font-semibold text-togo-green hover:text-togo-red"
          >
            {dict.usaLink}
          </Link>
        </div>

        <div className="mt-12 max-w-2xl">
          <FormSection
            title={newcomerIntake.title}
            description={newcomerIntake.description}
            formType="newcomerIntake"
            fields={fields}
            common={common}
          />
        </div>
      </section>
    </>
  );
}
