"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type NewsItem = {
  title: string;
  link: string;
  source: string;
  publishedAt: string | null;
};

type ApiResponse = {
  items: NewsItem[];
  sources: string[];
  failedSources: string[];
};

function timeAgo(iso: string | null, locale: Locale): string {
  if (!iso) return "";
  const diffMs = Date.now() - new Date(iso).getTime();
  const hours = Math.round(diffMs / 3_600_000);
  if (locale === "fr") {
    if (hours < 1) return "à l'instant";
    if (hours < 24) return `il y a ${hours} h`;
    const days = Math.round(hours / 24);
    return `il y a ${days} j`;
  }
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  return `${days}d ago`;
}

export default function NewsFeed({
  dict,
  locale,
}: {
  dict: Dictionary["news"];
  locale: Locale;
}) {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/togo-news")
      .then((res) => {
        if (!res.ok) throw new Error("bad response");
        return res.json();
      })
      .then((json: ApiResponse) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-sans text-2xl font-bold text-togo-green sm:text-3xl">
            {dict.title}
          </h2>
          <p className="mt-1 max-w-xl font-serif text-sm text-ink/70">
            {dict.disclaimer}
          </p>
        </div>
        {data && data.sources.length > 0 && (
          <p className="font-sans text-xs uppercase tracking-wide text-ink/40">
            {dict.sourcesLabel}: {data.sources.join(" · ")}
          </p>
        )}
      </div>

      {error && (
        <p className="rounded-2xl border border-ink/10 bg-white/60 p-6 font-serif text-sm text-ink/60 dark:bg-ink/10">
          {dict.errorText}
        </p>
      )}

      {!error && !data && (
        <div className="grid gap-3 sm:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-20 animate-pulse rounded-2xl bg-ink/5" />
          ))}
        </div>
      )}

      {data && data.items.length > 0 && (
        <ul className="grid gap-3 sm:grid-cols-2">
          {data.items.map((item) => (
            <li key={item.link}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col justify-between gap-3 rounded-2xl border border-ink/10 bg-white/70 p-4 transition-colors hover:border-togo-green dark:bg-ink/10"
              >
                <p className="font-sans text-sm font-semibold leading-snug text-ink">
                  {item.title}
                </p>
                <p className="font-sans text-xs uppercase tracking-wide text-ink/40">
                  {item.source}
                  {item.publishedAt ? ` · ${timeAgo(item.publishedAt, locale)}` : ""}
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}

      {data && data.items.length === 0 && !error && (
        <p className="rounded-2xl border border-ink/10 bg-white/60 p-6 font-serif text-sm text-ink/60 dark:bg-ink/10">
          {dict.emptyText}
        </p>
      )}
    </div>
  );
}
