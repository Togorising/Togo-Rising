import CtaButton from "@/components/CtaButton";
import PageHero from "@/components/PageHero";
import { orgEmail } from "@/lib/content";

export const metadata = { title: "Contact — Togo Rising" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        description="Questions, partnership ideas, or just want to say hello — reach out anytime."
      />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-ink/10 bg-white/70 p-8">
          <h2 className="font-sans text-xl font-bold text-togo-green">
            Email us
          </h2>
          <p className="mt-2 font-serif text-base text-ink/75">
            For general inquiries, partnerships, or press.
          </p>
          <div className="mt-5">
            <CtaButton href={`mailto:${orgEmail}`} variant="primary">
              {orgEmail}
            </CtaButton>
          </div>

          <div className="mt-10 border-t border-ink/10 pt-6">
            <h2 className="font-sans text-xl font-bold text-togo-green">
              Follow along
            </h2>
            <p className="mt-2 font-serif text-base text-ink/60">
              Social links coming soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
