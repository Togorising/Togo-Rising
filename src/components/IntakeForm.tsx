"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import { orgEmail } from "@/lib/constants";

export type FieldConfig =
  | { kind: "text"; name: string; label: string; required?: boolean; placeholder?: string }
  | { kind: "email"; name: string; label: string; required?: boolean }
  | { kind: "textarea"; name: string; label: string; required?: boolean; placeholder?: string }
  | { kind: "select"; name: string; label: string; options: string[]; required?: boolean };

type Status = "idle" | "submitting" | "success" | "error" | "configMissing";

export default function IntakeForm({
  formType,
  fields,
  common,
}: {
  formType: string;
  fields: FieldConfig[];
  common: Dictionary["forms"]["common"];
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const values: Record<string, string> = {};
    const labels: Record<string, string> = {};
    for (const field of fields) {
      values[field.name] = String(formData.get(field.name) ?? "");
      labels[field.name] = field.label;
    }
    const honeypot = String(formData.get("company_website") ?? "");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, fields: values, labels, honeypot }),
      });

      if (res.ok) {
        setStatus("success");
        return;
      }

      const body = await res.json().catch(() => ({}));
      if (body.error === "email_not_configured") {
        setStatus("configMissing");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-togo-green/30 bg-togo-green/5 p-6">
        <p className="font-sans text-lg font-bold text-togo-green">{common.successTitle}</p>
        <p className="mt-1 font-serif text-sm text-ink/75">{common.successBody}</p>
      </div>
    );
  }

  if (status === "configMissing") {
    return (
      <div className="rounded-2xl border border-togo-red/30 bg-togo-red/5 p-6">
        <p className="font-sans text-lg font-bold text-togo-red">{common.errorTitle}</p>
        <p className="mt-1 font-serif text-sm text-ink/75">
          {common.configMissingBody}{" "}
          <a href={`mailto:${orgEmail}`} className="underline">
            {orgEmail}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {/* honeypot field, hidden from real users */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {fields.map((field) => (
        <label key={field.name} className="grid gap-1.5">
          <span className="font-sans text-sm font-semibold text-ink/80">
            {field.label}
            {field.required && <span className="text-togo-red"> *</span>}
          </span>

          {field.kind === "textarea" ? (
            <textarea
              name={field.name}
              required={field.required}
              placeholder={"placeholder" in field ? field.placeholder : undefined}
              rows={4}
              className="rounded-xl border border-ink/15 bg-white px-4 py-2.5 font-serif text-base text-ink outline-none focus:border-togo-green dark:bg-ink/10"
            />
          ) : field.kind === "select" ? (
            <select
              name={field.name}
              required={field.required}
              defaultValue=""
              className="rounded-xl border border-ink/15 bg-white px-4 py-2.5 font-serif text-base text-ink outline-none focus:border-togo-green dark:bg-ink/10"
            >
              <option value="" disabled>
                {" "}
              </option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.kind === "email" ? "email" : "text"}
              name={field.name}
              required={field.required}
              placeholder={"placeholder" in field ? field.placeholder : undefined}
              className="rounded-xl border border-ink/15 bg-white px-4 py-2.5 font-serif text-base text-ink outline-none focus:border-togo-green dark:bg-ink/10"
            />
          )}
        </label>
      ))}

      {status === "error" && (
        <p className="font-serif text-sm text-togo-red">
          {common.errorBody}{" "}
          <a href={`mailto:${orgEmail}`} className="underline">
            {orgEmail}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-togo-red px-6 py-3 font-sans font-semibold text-white transition-colors hover:bg-togo-red/90 disabled:opacity-60"
      >
        {status === "submitting" ? common.sendingLabel : common.submitLabel}
      </button>
    </form>
  );
}
