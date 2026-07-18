import Image from "next/image";
import KenteStripe from "./KenteStripe";
import { orgEmail } from "@/lib/content";

export default function Footer() {
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
                Empowering Togolese Everywhere
              </p>
            </div>
          </div>

          <div className="font-sans text-sm text-cream/80">
            <a href={`mailto:${orgEmail}`} className="hover:text-togo-gold">
              {orgEmail}
            </a>
          </div>
        </div>

        <p className="mt-8 font-sans text-xs text-cream/50">
          &copy; {year} Togo Rising. Social links coming soon.
        </p>
      </div>
    </footer>
  );
}
