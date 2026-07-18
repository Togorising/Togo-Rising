import { XMLParser } from "fast-xml-parser";
import { NextResponse } from "next/server";

export const revalidate = 3600; // refresh at most once an hour

type NewsItem = {
  title: string;
  link: string;
  source: string;
  publishedAt: string | null;
};

type Feed = {
  url: string;
  source: string;
};

const FEEDS: Feed[] = [
  {
    url: "https://news.google.com/rss/search?q=Togo&hl=en-US&gl=US&ceid=US:en",
    source: "Google News",
  },
  {
    url: "https://www.rfi.fr/en/tag/togo/rss",
    source: "RFI",
  },
  {
    url: "https://allafrica.com/tools/headlines/rdf/togo/headlines.rdf",
    source: "AllAfrica",
  },
];

const parser = new XMLParser({ ignoreAttributes: false });

function toArray<T>(value: T | T[] | undefined): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function stripSourceSuffix(title: string): string {
  // Google News titles are formatted "Headline - Source"
  const idx = title.lastIndexOf(" - ");
  return idx > 0 ? title.slice(0, idx) : title;
}

async function fetchFeed(feed: Feed): Promise<NewsItem[]> {
  const res = await fetch(feed.url, {
    headers: { "User-Agent": "TogoRisingBot/1.0 (+https://togorising.org)" },
    next: { revalidate },
  });
  if (!res.ok) throw new Error(`${feed.source} responded ${res.status}`);

  const xml = await res.text();
  const parsed = parser.parse(xml);
  const items = toArray(parsed?.rss?.channel?.item);

  return items.slice(0, 10).map((item): NewsItem => {
    const rawTitle = String(item.title ?? "").trim();
    return {
      title: feed.source === "Google News" ? stripSourceSuffix(rawTitle) : rawTitle,
      link: String(item.link ?? "").trim(),
      source: feed.source,
      publishedAt: item.pubDate ? new Date(item.pubDate).toISOString() : null,
    };
  });
}

export async function GET() {
  const results = await Promise.allSettled(FEEDS.map(fetchFeed));

  const items = results
    .filter((r): r is PromiseFulfilledResult<NewsItem[]> => r.status === "fulfilled")
    .flatMap((r) => r.value)
    .filter((item) => item.title && item.link)
    .sort((a, b) => {
      if (!a.publishedAt) return 1;
      if (!b.publishedAt) return -1;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, 12);

  const failedSources = results
    .map((r, i) => (r.status === "rejected" ? FEEDS[i].source : null))
    .filter((s): s is string => Boolean(s));

  return NextResponse.json(
    { items, sources: FEEDS.map((f) => f.source), failedSources },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } }
  );
}
