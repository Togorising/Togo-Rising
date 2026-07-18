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
  return { title: `${getDictionary(locale).shopTogo.eyebrow} | Togo Rising` };
}

export default async function ShopTogoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const fullDict = getDictionary(locale);
  const dict = fullDict.shopTogo;
  const { common, businessListing } = fullDict.forms;

  const fields: FieldConfig[] = [
    {
      kind: "text",
      name: "businessName",
      label: businessListing.businessNameLabel,
      required: true,
    },
    {
      kind: "text",
      name: "ownerName",
      label: businessListing.ownerNameLabel,
      required: true,
    },
    { kind: "email", name: "email", label: common.emailLabel, required: true },
    {
      kind: "select",
      name: "category",
      label: businessListing.categoryLabel,
      options: dict.categories,
      required: true,
    },
    { kind: "text", name: "website", label: businessListing.websiteLabel },
    {
      kind: "textarea",
      name: "description",
      label: businessListing.descriptionLabel,
      required: true,
    },
  ];

  return (
    <>
      <PageHero eyebrow={dict.eyebrow} title={dict.title} description={dict.description} image="/photos/shop-togo.jpg" />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border-2 border-dashed border-togo-green/30 bg-white/60 p-10 text-center dark:bg-ink/10">
          <h2 className="font-sans text-2xl font-bold text-togo-green">
            {dict.listedTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-serif text-base leading-relaxed text-ink/75">
            {dict.listedBody}
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-sans text-lg font-bold text-togo-green">
            {dict.categoriesLabel}
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {dict.categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 font-sans text-sm font-semibold text-ink/70 dark:bg-ink/10"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 max-w-2xl">
          <FormSection
            title={dict.cta}
            description={businessListing.description}
            formType="businessListing"
            fields={fields}
            common={common}
          />
        </div>
      </section>
    </>
  );
}
