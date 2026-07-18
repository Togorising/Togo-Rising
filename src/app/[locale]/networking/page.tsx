import CtaButton from "@/components/CtaButton";
import PageHero from "@/components/PageHero";
import SectionGrid from "@/components/SectionGrid";
import { networkingSections } from "@/lib/content";
import { tallyUrls } from "@/lib/tally";

export const metadata = { title: "Networking — Togo Rising" };

export default function NetworkingPage() {
  return (
    <>
      <PageHero
        eyebrow="Networking"
        title="Find your people, wherever you are."
        description="A member directory, events, and warm introductions — built so Togolese diaspora can find each other without starting from zero."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionGrid sections={networkingSections} />
        <div className="mt-10 flex justify-start">
          <CtaButton href={tallyUrls.join} variant="primary">
            Join the Directory
          </CtaButton>
        </div>
      </section>
    </>
  );
}
