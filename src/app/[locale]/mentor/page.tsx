import { notFound } from "next/navigation";
import FormSection from "@/components/FormSection";
import PageHero from "@/components/PageHero";
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
  return { title: `${getDictionary(locale).forms.mentor.title} | Togo Rising` };
}

export default async function MentorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const { common, mentor } = dict.forms;

  const fields: FieldConfig[] = [
    { kind: "text", name: "name", label: common.nameLabel, required: true },
    { kind: "email", name: "email", label: common.emailLabel, required: true },
    {
      kind: "text",
      name: "field",
      label: mentor.fieldLabel,
      placeholder: mentor.fieldPlaceholder,
    },
    {
      kind: "textarea",
      name: "lookingFor",
      label: mentor.lookingForLabel,
      placeholder: mentor.lookingForPlaceholder,
      required: true,
    },
  ];

  return (
    <>
      <PageHero eyebrow={mentor.title} title={mentor.title} description={mentor.description} />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <FormSection formType="mentor" fields={fields} common={common} />
      </section>
    </>
  );
}
