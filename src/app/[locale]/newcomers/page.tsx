import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import PageHero from "@/components/PageHero";
import SectionGrid from "@/components/SectionGrid";
import { newcomerSections } from "@/lib/content";
import { tallyUrls } from "@/lib/tally";

export const metadata = { title: "Newcomer Hub — Togo Rising" };

export default function NewcomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Newcomer Hub"
        title="Landing somewhere new? Start here."
        description="Mentor matching, language learning, school navigation, and career paths — from people who've already been where you are."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionGrid sections={newcomerSections} />
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <CtaButton href={tallyUrls.newcomerIntake} variant="primary">
            Get Started
          </CtaButton>
          <CtaButton href={tallyUrls.mentorSignup} variant="ghost">
            Request a Mentor
          </CtaButton>
          <Link
            href="/newcomers/usa"
            className="font-sans text-sm font-semibold text-togo-green hover:text-togo-red"
          >
            Building a life in the U.S.? See USA Pathways &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
