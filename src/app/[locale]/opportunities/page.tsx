import CtaButton from "@/components/CtaButton";
import PageHero from "@/components/PageHero";
import SectionGrid from "@/components/SectionGrid";
import { opportunitiesSections } from "@/lib/content";
import { tallyUrls } from "@/lib/tally";

export const metadata = { title: "Opportunities — Togo Rising" };

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        title="Opportunities shouldn't depend on who you know."
        description="Jobs, scholarships, contracts, and grants — shared inside the community first. New opportunities go out to members as they come in."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionGrid sections={opportunitiesSections} />
        <div className="mt-10 flex flex-wrap gap-4">
          <CtaButton href={tallyUrls.join} variant="primary">
            Join to Get Opportunities
          </CtaButton>
          <CtaButton href={tallyUrls.opportunitySubmit} variant="ghost">
            Submit an Opportunity
          </CtaButton>
        </div>
      </section>
    </>
  );
}
