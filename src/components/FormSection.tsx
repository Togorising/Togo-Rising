import IntakeForm, { type FieldConfig } from "./IntakeForm";
import type { Dictionary } from "@/lib/dictionaries";

export default function FormSection({
  title,
  description,
  formType,
  fields,
  common,
}: {
  title?: string;
  description?: string;
  formType: string;
  fields: FieldConfig[];
  common: Dictionary["forms"]["common"];
}) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white/70 p-6 sm:p-8 dark:bg-ink/10">
      {title && (
        <h2 className="font-sans text-2xl font-bold text-togo-green">{title}</h2>
      )}
      {description && (
        <p className="mt-2 font-serif text-base text-ink/75">{description}</p>
      )}
      <div className={title || description ? "mt-6" : undefined}>
        <IntakeForm formType={formType} fields={fields} common={common} />
      </div>
    </div>
  );
}
