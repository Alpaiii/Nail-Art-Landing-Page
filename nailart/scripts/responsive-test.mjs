/**
 * Responsive overflow + interaction smoke test (PRD §28.1–28.2).
 * Run: node scripts/responsive-test.mjs  (preview server must run on :4322)
 */
import { chromium } from "playwright-core";

const BASE = process.env.BASE_URL ?? "http://localhost:4322/";
const VIEWPORTS = [360, 390, 768, 1024, 1440];
let failures = 0;

const browser = await chromium.launch({ channel: "chrome", headless: true });

for (const width of VIEWPORTS) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(BASE, { waitUntil: "networkidle" });

  const result = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const winWidth = window.innerWidth;
    const offenders = [];
    if (docWidth > winWidth + 1) {
      document.querySelectorAll("body *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.right > winWidth + 1 || r.left < -1)) {
          const cls = typeof el.className === "string" ? el.className.slice(0, 70) : "";
          offenders.push(`${el.tagName}.${cls} [${Math.round(r.left)}→${Math.round(r.right)}]`);
        }
      });
    }
    return { docWidth, winWidth, offenders: offenders.slice(0, 8) };
  });

  const ok = result.docWidth <= result.winWidth + 1;
  if (!ok) failures++;
  console.log(`${ok ? "PASS" : "FAIL"} ${width}px — scrollWidth=${result.docWidth} inner=${result.winWidth}`);
  result.offenders.forEach((o) => console.log(`     overflow: ${o}`));
  await page.close();
}

/* ---- Interaction smoke tests (at 390px mobile + desktop) ---- */
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto(BASE, { waitUntil: "networkidle" });

const check = (label, cond) => {
  if (!cond) failures++;
  console.log(`${cond ? "PASS" : "FAIL"} ${label}`);
};

// Mobile menu
await page.click("#menu-toggle");
check("mobile menu opens (aria-expanded=true)", (await page.getAttribute("#menu-toggle", "aria-expanded")) === "true");
await page.keyboard.press("Escape");
check("mobile menu closes on Escape", (await page.getAttribute("#menu-toggle", "aria-expanded")) === "false");

// FAQ accordion — single-open + keyboard (Enter)
await page.locator(".faq-button").first().focus();
await page.keyboard.press("Enter");
check("FAQ opens via keyboard", (await page.getAttribute(".faq-button", "aria-expanded")) === "true");
await page.locator(".faq-button").nth(1).click();
check("FAQ single-open (first closes)", (await page.getAttribute(".faq-button", "aria-expanded")) === "false");

// Gallery filter
await page.click('.filter-btn[data-filter="French"]');
const visible = await page.locator(".gallery-item:not(.hidden)").count();
check(`gallery filter French → ${visible} item(s) visible`, visible === 2 && visible > 0);
const hidden = await page.locator(".gallery-item.hidden").count();
check("gallery filter hides others", hidden === 10);
await page.click('.filter-btn[data-filter="All"]');

// Lightbox: open, Escape close, focus return
await page.locator(".gallery-item").first().click();
check("lightbox opens", await page.isVisible("#lightbox"));
const bookHref = await page.getAttribute("#lightbox-book", "href");
check("lightbox CTA is wa.me link", bookHref?.startsWith("https://wa.me/") ?? false);
await page.keyboard.press("Escape");
check("lightbox closes on Escape", !(await page.isVisible("#lightbox")));

// Booking form validation
await page.locator("#booking-form button[type=submit]").click();
check("booking form blocks empty submit", await page.isVisible("#bf-name-error"));

// All internal anchors resolve
const brokenAnchors = await page.evaluate(() =>
  Array.from(document.querySelectorAll('a[href^="#"]'))
    .map((a) => a.getAttribute("href"))
    .filter((h) => h !== "#" && !document.querySelector(h))
);
check(`internal anchors all resolve (broken: ${brokenAnchors.join(", ") || "none"})`, brokenAnchors.length === 0);

await page.close();
await browser.close();

console.log(failures === 0 ? "\nALL TESTS PASSED" : `\n${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
