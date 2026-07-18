import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-kenburns object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,42,25,0.82) 0%, rgba(0,42,25,0.72) 45%, rgba(0,42,25,0.58) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-sans text-sm font-bold uppercase tracking-widest text-togo-gold">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-white/85">
          {description}
        </p>
      </div>
    </div>
  );
}
