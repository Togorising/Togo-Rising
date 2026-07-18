import Image from "next/image";
import KenteStripe from "./KenteStripe";
import { orgEmail } from "@/lib/constants";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-togo-green text-cream">
      <KenteStripe />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-mark-dark.png"
              alt="Togo Rising"
              width={49}
              height={40}
              className="h-10 w-auto"
            />
            <div>
              <p className="font-sans text-base font-bold">Togo Rising</p>
              <p className="font-sans text-xs uppercase tracking-wide text-cream/70">
                {dict.footer.tagline}
              </p>
            </div>
          </div>

          <div className="font-sans text-sm text-cream/80">
            <a href={`mailto:${orgEmail}`} className="hover:text-togo-gold">
              {orgEmail}
            </a>
          </div>
        </div>

        <p className="mt-8 max-w-2xl font-sans text-xs leading-relaxed text-cream/60">
          {dict.footer.disclaimer}
        </p>
        <p className="mt-3 font-sans text-xs text-cream/50">
          &copy; {year} Togo Rising. {dict.footer.socialComingSoon}
        </p>
      </div>
    </footer>
  );
}
