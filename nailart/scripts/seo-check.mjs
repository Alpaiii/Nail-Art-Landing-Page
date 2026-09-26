import { chromium } from "playwright-core";
import lighthouse from "lighthouse";

const url = "http://localhost:4321";

console.log("\n🔍 Astro SEO Check");
console.log("──────────────────────────────────");
console.log(`URL: ${url}\n`);

const browser = await chromium.launch({
  headless: true,
});

const wsEndpoint = browser.wsEndpoint();

try {
  const result = await lighthouse(url, {
    port: Number(new URL(wsEndpoint).port),
    output: "json",
    logLevel: "error",
    onlyCategories: ["seo"],
  });

  const score = Math.round(
    result.lhr.categories.seo.score * 100
  );

  console.log("SEO RESULT");
  console.log("──────────────────────────────────");

  console.log(`SEO Score : ${score}/100`);

  const audits = result.lhr.audits;

  const checks = [
    ["Document has a <title>", audits["document-title"]],
    ["Meta description", audits["meta-description"]],
    ["HTTP status code", audits["http-status-code"]],
    ["Links are crawlable", audits["crawlable-anchors"]],
    ["Image alt attributes", audits["image-alt"]],
    ["Canonical", audits["canonical"]],
    ["robots.txt", audits["robots-txt"]],
    ["hreflang", audits["hreflang"]],
    ["Mobile friendly", audits["viewport"]],
  ];

  console.log("");

  for (const [name, audit] of checks) {
    if (!audit) continue;

    const status =
      audit.score === 1
        ? "✓"
        : audit.score === 0
          ? "✗"
          : "⚠";

    console.log(`${status} ${name}`);
  }

  console.log("──────────────────────────────────\n");

  if (score >= 90) {
    console.log("SEO sangat baik.");
  } else if (score >= 70) {
    console.log("SEO cukup baik, tetapi masih ada beberapa hal yang perlu diperbaiki.");
  } else {
    console.log("SEO masih perlu diperbaiki.");
  }

  console.log("");
} finally {
  await browser.close();
}