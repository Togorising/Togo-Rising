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
  return { title: `${getDictionary(locale).forms.join.title} | Togo Rising` };
}

export default async function JoinPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const { common, join } = dict.forms;

  const fields: FieldConfig[] = [
    { kind: "text", name: "name", label: common.nameLabel, required: true },
    { kind: "email", name: "email", label: common.emailLabel, required: true },
    { kind: "text", name: "city", label: common.cityLabel },
    {
      kind: "textarea",
      name: "lookingFor",
      label: join.lookingForLabel,
      placeholder: join.lookingForPlaceholder,
    },
  ];

  return (
    <>
      <PageHero eyebrow={dict.home.joinCommunity} title={join.title} description={join.description} />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <FormSection formType="join" fields={fields} common={common} />
      </section>
    </>
  );
}
