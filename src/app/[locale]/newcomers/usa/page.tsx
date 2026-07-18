import CtaButton from "@/components/CtaButton";
import PageHero from "@/components/PageHero";
import SectionGrid from "@/components/SectionGrid";
import { usaPathwaysSections } from "@/lib/content";
import { tallyUrls } from "@/lib/tally";

export const metadata = { title: "USA Pathways — Togo Rising" };

export default function UsaPathwaysPage() {
  return (
    <>
      <PageHero
        eyebrow="Newcomer Hub / USA Pathways"
        title="Building a life in the United States."
        description="Military service, citizenship, and career pipelines — guidance from people who've navigated these systems themselves."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionGrid sections={usaPathwaysSections} />
        <div className="mt-10 flex justify-start">
          <CtaButton href={tallyUrls.mentorSignup} variant="primary">
            Talk to Someone Who's Done It
          </CtaButton>
        </div>
      </section>
    </>
  );
}
