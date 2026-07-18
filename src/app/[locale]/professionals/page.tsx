import CtaButton from "@/components/CtaButton";
import PageHero from "@/components/PageHero";
import SectionGrid from "@/components/SectionGrid";
import { professionalsSections } from "@/lib/content";
import { tallyUrls } from "@/lib/tally";

export const metadata = { title: "Rising Professionals — Togo Rising" };

export default function ProfessionalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rising Professionals"
        title="Keep climbing — with people who've got your back."
        description="Career mentorship, business start-up support, home buying, and FAFSA help as you build your future."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionGrid sections={professionalsSections} />
        <div className="mt-10 flex justify-start">
          <CtaButton href={tallyUrls.mentorSignup} variant="primary">
            Get Matched with a Mentor
          </CtaButton>
        </div>
      </section>
    </>
  );
}
