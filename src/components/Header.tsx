"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "@/lib/content";
import { locales } from "@/lib/i18n";

function useLocale() {
  const pathname = usePathname();
  const first = pathname.split("/")[1];
  return (locales as readonly string[]).includes(first) ? first : "en";
}

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const withLocale = (href: string) =>
    href === "/" ? `/${locale}` : `/${locale}${href}`;

  const otherLocale = locale === "en" ? "fr" : "en";
  const restOfPath = pathname.split("/").slice(2).join("/");
  const switchHref = `/${otherLocale}${restOfPath ? `/${restOfPath}` : ""}`;

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href={withLocale("/")} className="flex items-center gap-3">
          <Image
            src="/logo-mark.png"
            alt="Togo Rising"
            width={54}
            height={44}
            className="h-11 w-auto"
            priority
          />
          <span className="hidden font-sans text-lg font-bold tracking-tight text-togo-green sm:block">
            Togo Rising
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={withLocale(item.href)}
              className="font-sans text-sm font-semibold text-ink/80 transition-colors hover:text-togo-red"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={switchHref}
            className="hidden font-sans text-sm font-semibold text-ink/60 hover:text-togo-red sm:block"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className="h-0.5 w-5 bg-ink" />
              <span className="h-0.5 w-5 bg-ink" />
              <span className="h-0.5 w-5 bg-ink" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-cream px-4 py-3 lg:hidden">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={withLocale(item.href)}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 font-sans text-sm font-semibold text-ink/80 hover:bg-ink/5"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={switchHref}
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2 font-sans text-sm font-semibold text-ink/60 hover:bg-ink/5"
          >
            {otherLocale === "fr" ? "Français" : "English"}
          </Link>
        </nav>
      )}
    </header>
  );
}
