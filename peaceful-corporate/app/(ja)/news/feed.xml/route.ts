import { newsData } from "@/lib/news-data";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

function toRfc822Jst(dateStr: string): string {
  // dateStr: "YYYY.MM.DD"
  const [year, month, day] = dateStr.split(".").map(Number);
  // The weekday is that of the calendar date itself (the JST date in news-data).
  // Using UTC midnight of the same date keeps it from shifting to the previous day.
  // The time is written as 00:00:00 with the +0900 offset below.
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = days[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dd = String(day).padStart(2, "0");
  const mon = months[month - 1];
  return `${dayOfWeek}, ${dd} ${mon} ${year} 00:00:00 +0900`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET(): NextResponse {
  const baseUrl = "https://www.peaceful-inc.com";

  const items = newsData
    .map((item) => {
      const link = `${baseUrl}/news/${item.id}`;
      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${toRfc822Jst(item.date)}</pubDate>
      <description>${escapeXml(item.titleEn)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>株式会社peaceful ニュース</title>
    <link>${baseUrl}/news</link>
    <description>株式会社peacefulのニュースの一覧です。</description>
    <language>ja</language>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
