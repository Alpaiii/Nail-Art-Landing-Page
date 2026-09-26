/**
 * Navbar audit vs PRD §8.1 — desktop (1440px) & mobile (390px).
 * Run: node scripts/navbar-audit.mjs   (preview server must run on :4322)
 */
import { chromium } from "playwright-core";

const BASE = process.env.BASE_URL ?? "http://localhost:4322/";
const SHOTS = process.env.SHOT_DIR ?? process.env.TEMP + "/opencode";
let failures = 0;

const check = (label, cond, extra = "") => {
  if (!cond) failures++;
  console.log(`${cond ? "PASS" : "FAIL"} ${label}${extra ? ` — ${extra}` : ""}`);
};

const browser = await chromium.launch({ channel: "chrome", headless: true });

/* ============================ DESKTOP 1440px ============================ */
{
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(BASE, { waitUntil: "networkidle" });

  // 1. CTA & menu visible, hamburger hidden
  const menuItems = await p.locator('nav ul li a').allTextContents();
  check("desktop: menu utama tampil", ["Home", "Services", "Gallery", "About", "Pricing", "FAQ"].every((m) => menuItems.includes(m)), menuItems.join(","));
  check("desktop: hamburger tersembunyi", !(await p.isVisible("#menu-toggle")));
  const cta = p.locator('nav a[href="#booking"]').first();
  check("desktop: CTA 'Book Appointment' tampil", await cta.isVisible());
  check("desktop: label CTA benar", (await cta.innerText()).includes("Book Appointment"));

  // 2. Keyboard test — MUST run first on a fresh load (focus order from document start)
  await p.keyboard.press("Tab");
  const tabs = [];
  let ctaOutline = false;
  for (let i = 0; i < 10; i++) {
    tabs.push(
      await p.evaluate(() => {
        const a = document.activeElement;
        const label = a.getAttribute("aria-label") || "";
        const text = (a.textContent || "").trim().replace(/\s+/g, " ").slice(0, 30);
        return `${a.tagName}${a.id ? "#" + a.id : ""}[${text || label}]`;
      })
    );
    if (i === 8) {
      ctaOutline = await p.evaluate(() => {
        const s = getComputedStyle(document.activeElement);
        return s.outlineStyle !== "none" && parseFloat(s.outlineWidth) > 0;
      });
    }
    await p.keyboard.press("Tab");
  }
  console.log(`       tab order: ${tabs.join(" → ")}`);
  check("desktop: tab pertama = skip link", tabs[0].includes("Skip to content"), tabs[0]);
  check("desktop: tab kedua = logo", tabs[1].includes("Signature"), tabs[1]);
  check("desktop: urutan menu Home→FAQ sesuai", ["Home", "Services", "Gallery", "About", "Pricing", "FAQ"].every((m, i) => tabs[i + 2]?.includes(m)), tabs.slice(2, 8).join(","));
  const ctaTabIndex = tabs.findIndex((t) => t.includes("Book Appointment"));
  check("desktop: CTA terjangkau via keyboard (setelah menu)", ctaTabIndex === 8, `index=${ctaTabIndex} [${tabs[8]}]`);
  check("desktop: focus ring terlihat pada CTA", ctaOutline);

  // 3. Navbar top state (transparent)
  const bgTop = await p.evaluate(() => getComputedStyle(document.getElementById("navbar")).backgroundColor);
  check("desktop: state atas transparan", bgTop === "rgba(0, 0, 0, 0)" || bgTop === "transparent", bgTop);
  await p.screenshot({ path: `${SHOTS}/nav-desktop-top.png`, clip: { x: 0, y: 0, width: 1440, height: 110 } });

  // 3. Sticky after scroll + style change > 50px
  await p.evaluate(() => window.scrollTo(0, 600));
  await p.waitForTimeout(500);
  const box = await p.locator("#navbar").boundingBox();
  check("desktop: sticky saat scroll", !!box && box.y === 0, `y=${box?.y}`);
  const bgScrolled = await p.evaluate(() => getComputedStyle(document.getElementById("navbar")).backgroundColor);
  const hasShadow = await p.evaluate(() => getComputedStyle(document.getElementById("navbar")).boxShadow !== "none");
  check("desktop: gaya solid + shadow setelah scroll>50px", bgScrolled !== "rgba(0, 0, 0, 0)" && hasShadow, `bg=${bgScrolled}`);
  await p.screenshot({ path: `${SHOTS}/nav-desktop-scrolled.png`, clip: { x: 0, y: 0, width: 1440, height: 110 } });

  // 4. CLS saat transisi navbar (PRD AC: tidak menyebabkan layout shift)
  const cls = await p.evaluate(
    () =>
      new Promise((res) => {
        let v = 0;
        new PerformanceObserver((l) => l.getEntries().forEach((e) => !e.hadRecentInput && (v += e.value))).observe({
          type: "layout-shift",
          buffered: true,
        });
        setTimeout(() => res(v), 150);
      })
  );
  check("desktop: CLS navbar ≈ 0", cls < 0.02, `cls=${cls.toFixed(4)}`);

  // 5. Smooth scroll ke section — target tidak tertutup navbar
  await p.click('nav ul a[href="#gallery"]');
  await p.waitForTimeout(1200);
  const galTop = await p.evaluate(() => document.getElementById("gallery").getBoundingClientRect().top);
  check("desktop: smooth scroll ke Gallery, target di bawah navbar", galTop >= 70 && galTop <= 110, `top=${Math.round(galTop)}`);

  await p.close();
}

/* ============================ MOBILE 390px ============================= */
{
  const p = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await p.goto(BASE, { waitUntil: "networkidle" });

  // 1. Menu tersembunyi di balik hamburger (<768px)
  check("mobile: menu utama tersembunyi", !(await p.isVisible("nav ul li a")));
  check("mobile: hamburger tampil", await p.isVisible("#menu-toggle"));
  const labels = await p.locator("nav ul").first().evaluate(() => "hidden-ok");
  check("mobile: drawer tersembunyi (inert + off-screen)", await p.locator("#mobile-menu").evaluate((el) => el.hasAttribute("inert")));

  // 2. CTA tetap terlihat di navbar collapsed (PRD §8.1 requirement)
  const cta = p.locator('nav a[href="#booking"]').first();
  check("mobile: CTA collapsed navbar tampil", await cta.isVisible());
  check("mobile: label CTA 'Book Now' (ringkas)", (await cta.innerText()).trim() === "Book Now", await cta.innerText());
  const ctaBox = await cta.boundingBox();
  check("mobile: CTA ≥44px touch target", ctaBox && ctaBox.height >= 44 && ctaBox.width >= 44, `${Math.round(ctaBox?.width)}x${Math.round(ctaBox?.height)}`);
  await p.screenshot({ path: `${SHOTS}/nav-mobile-top.png`, clip: { x: 0, y: 0, width: 390, height: 90 } });

  // 3. Drawer buka: aria-expanded, transisi, fokus pindah ke dalam, main inert
  await p.click("#menu-toggle");
  await p.waitForTimeout(400);
  check("mobile: aria-expanded=true saat buka", (await p.getAttribute("#menu-toggle", "aria-expanded")) === "true");
  const drawerX = await p.locator("#mobile-menu").evaluate((el) => el.getBoundingClientRect().left);
  check("mobile: drawer masuk layar (x < viewport)", drawerX < 390 && drawerX >= 0, `x=${Math.round(drawerX)}`);
  check("mobile: drawer punya CTA 'Book Appointment'", await p.locator('#mobile-menu a[href="#booking"]').isVisible());
  check("mobile: main inert saat drawer terbuka", await p.locator("main").evaluate((el) => el.hasAttribute("inert")));
  const focusIn = await p.evaluate(() => !!document.activeElement?.closest("#mobile-menu"));
  check("mobile: fokus pindah ke dalam drawer", focusIn);
  await p.screenshot({ path: `${SHOTS}/nav-mobile-drawer.png` });

  // 4. Toggle X di atas drawer — bisa diklik untuk menutup
  const xBox = await p.locator("#menu-toggle").boundingBox();
  const topEl = await p.evaluate(
    ([x, y]) => {
      const el = document.elementFromPoint(x, y);
      return el?.closest("#menu-toggle") ? "toggle" : el?.id || el?.tagName;
    },
    [xBox.x + xBox.width / 2, xBox.y + xBox.height / 2]
  );
  check("mobile: tombol X di atas drawer (dapat diklik)", topEl === "toggle", `elemen atas=${topEl}`);
  await p.click("#menu-toggle");
  await p.waitForTimeout(400);
  check("mobile: tap X menutup drawer", (await p.getAttribute("#menu-toggle", "aria-expanded")) === "false");

  // 5. Klik link di drawer → drawer nutup + scroll ke section (target tak tertutup navbar)
  await p.click("#menu-toggle");
  await p.waitForTimeout(400);
  await p.click('#mobile-menu a[href="#gallery"]');
  await p.waitForTimeout(1300);
  check("mobile: drawer tertutup setelah pilih link", (await p.getAttribute("#menu-toggle", "aria-expanded")) === "false");
  check("mobile: main tidak inert lagi", !(await p.locator("main").evaluate((el) => el.hasAttribute("inert"))));
  const galTop = await p.evaluate(() => document.getElementById("gallery").getBoundingClientRect().top);
  check("mobile: scroll ke Gallery, target di bawah navbar", galTop >= 60 && galTop <= 100, `top=${Math.round(galTop)}`);

  // 6. Esc menutup drawer + kembalikan fokus ke toggle
  await p.click("#menu-toggle");
  await p.waitForTimeout(350);
  await p.keyboard.press("Escape");
  await p.waitForTimeout(200);
  check("mobile: Esc menutup drawer", (await p.getAttribute("#menu-toggle", "aria-expanded")) === "false");
  check("mobile: fokus kembali ke hamburger", await p.evaluate(() => document.activeElement?.id === "menu-toggle"));

  await p.close();
}

await browser.close();
console.log(failures === 0 ? "\nAUDIT SELESAI — SEMUA AC §8.1 LULUS" : `\n${failures} AC GAGAL`);
process.exit(failures === 0 ? 0 : 1);
