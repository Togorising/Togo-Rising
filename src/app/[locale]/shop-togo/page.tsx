import CtaButton from "@/components/CtaButton";
import PageHero from "@/components/PageHero";
import { businessCategories } from "@/lib/content";
import { tallyUrls } from "@/lib/tally";

export const metadata = { title: "Shop Togo — Togo Rising" };

export default function ShopTogoPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop Togo"
        title="Support Togolese-owned businesses, wherever they are."
        description="A directory of Togolese entrepreneurs across the diaspora — food, fashion, services, and more. Shop Togo is just getting started."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border-2 border-dashed border-togo-green/30 bg-white/60 p-10 text-center">
          <h2 className="font-sans text-2xl font-bold text-togo-green">
            Be one of the first businesses listed.
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-serif text-base leading-relaxed text-ink/75">
            Shop Togo is a new directory of Togolese-owned businesses across
            the diaspora. List yours now and be featured as soon as the
            directory launches.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaButton href={tallyUrls.businessListing} variant="primary">
              List Your Business
            </CtaButton>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-sans text-lg font-bold text-togo-green">
            Categories
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {businessCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 font-sans text-sm font-semibold text-ink/70"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
