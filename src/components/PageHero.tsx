export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-ink/10 bg-white/50">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-sans text-sm font-bold uppercase tracking-widest text-togo-red">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-sans text-4xl font-bold tracking-tight text-togo-green sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-ink/80">
          {description}
        </p>
      </div>
    </div>
  );
}
