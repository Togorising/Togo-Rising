"use client";

import { useEffect, useState } from "react";

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

function timeAgo(iso: string | null): string {
  if (!iso) return "";
  const diffMs = Date.now() - new Date(iso).getTime();
  const hours = Math.round(diffMs / 3_600_000);
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  return `${days}d ago`;
}

export default function NewsFeed() {
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
            Togo News
          </h2>
          <p className="mt-1 max-w-xl font-serif text-sm text-ink/70">
            Headlines aggregated automatically from multiple independent outlets.
            Togo Rising doesn&apos;t write, select, or endorse this coverage.
          </p>
        </div>
        {data && data.sources.length > 0 && (
          <p className="font-sans text-xs uppercase tracking-wide text-ink/40">
            Sources: {data.sources.join(" · ")}
          </p>
        )}
      </div>

      {error && (
        <p className="rounded-2xl border border-ink/10 bg-white/60 p-6 font-serif text-sm text-ink/60">
          News couldn&apos;t be loaded right now. Try again later.
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
                className="flex h-full flex-col justify-between gap-3 rounded-2xl border border-ink/10 bg-white/70 p-4 transition-colors hover:border-togo-green"
              >
                <p className="font-sans text-sm font-semibold leading-snug text-ink">
                  {item.title}
                </p>
                <p className="font-sans text-xs uppercase tracking-wide text-ink/40">
                  {item.source}
                  {item.publishedAt ? ` · ${timeAgo(item.publishedAt)}` : ""}
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}

      {data && data.items.length === 0 && !error && (
        <p className="rounded-2xl border border-ink/10 bg-white/60 p-6 font-serif text-sm text-ink/60">
          No headlines available right now. Check back soon.
        </p>
      )}
    </div>
  );
}
