import type { Section } from "@/lib/dictionaries";

export default function SectionGrid({ sections }: { sections: Section[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {sections.map((section) => (
        <div
          key={section.title}
          className="rounded-3xl border border-ink/10 bg-white/70 p-6"
        >
          <h3 className="font-sans text-xl font-bold text-togo-green">
            {section.title}
          </h3>
          <p className="mt-2 font-serif text-base leading-relaxed text-ink/75">
            {section.description}
          </p>
        </div>
      ))}
    </div>
  );
}
