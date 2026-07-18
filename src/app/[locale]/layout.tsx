import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { locales, isValidLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isValidLocale(locale) ? locale : "en");

  return {
    title: `Togo Rising — ${dict.footer.tagline}`,
    description: dict.meta.homeDescription,
    icons: {
      icon: [
        { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${archivo.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          // Applies saved accessibility/theme settings before paint to avoid a flash.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=JSON.parse(localStorage.getItem('togoRisingA11y')||'{}');var r=document.documentElement;if(s.dark)r.classList.add('dark');if(s.fontScale)r.style.setProperty('--a11y-font-scale',s.fontScale);if(s.lineHeight)r.style.setProperty('--a11y-line-height',s.lineHeight);if(s.letterSpacing!=null)r.style.setProperty('--a11y-letter-spacing',s.letterSpacing+'px');if(s.bold)r.classList.add('a11y-bold');if(s.readable)r.classList.add('a11y-readable');if(s.monochrome)r.classList.add('a11y-monochrome');if(s.bigCursor)r.classList.add('a11y-big-cursor');r.classList.add('a11y-align-'+(s.align||'left'));}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
