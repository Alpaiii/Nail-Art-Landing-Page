/**
 * Generates placeholder SVG artwork referenced by src/data/*.
 * Run: node scripts/generate-placeholders.mjs
 * Replace any file in public/images/ with real photos to customize a tenant.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const IMG = join(process.cwd(), "public", "images");
let clipSeq = 0;

function put(rel, content) {
  const path = join(IMG, rel);
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, content.trim() + "\n", "utf8");
  console.log("wrote", rel);
}

const wrap = (w, h, defs, body) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">
  <defs>${defs}</defs>
  ${body}
</svg>`;

function grad(id, c1, c2, x1 = 0, y1 = 0, x2 = 1, y2 = 1) {
  return `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">
    <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
  </linearGradient>`;
}

function sparkle(cx, cy, r, fill = "#C9A46C", opacity = 1) {
  const p = `M ${cx} ${cy - r} Q ${cx + r * 0.12} ${cy - r * 0.12} ${cx + r} ${cy}
    Q ${cx + r * 0.12} ${cy + r * 0.12} ${cx} ${cy + r}
    Q ${cx - r * 0.12} ${cy + r * 0.12} ${cx - r} ${cy}
    Q ${cx - r * 0.12} ${cy - r * 0.12} ${cx} ${cy - r} Z`;
  return `<path d="${p}" fill="${fill}" opacity="${opacity}"/>`;
}

function flower(cx, cy, r, petal = "#FFFFFF", center = "#C9A46C") {
  let s = "";
  for (let i = 0; i < 5; i++) {
    const a = ((i * 72 - 90) * Math.PI) / 180;
    s += `<circle cx="${(cx + Math.cos(a) * r).toFixed(1)}" cy="${(cy + Math.sin(a) * r).toFixed(1)}" r="${(r * 0.72).toFixed(1)}" fill="${petal}"/>`;
  }
  s += `<circle cx="${cx}" cy="${cy}" r="${(r * 0.5).toFixed(1)}" fill="${center}"/>`;
  return s;
}

function decoMarkup(kind, x, y, w, h) {
  switch (kind) {
    case "french":
      return `<path d="M ${x} ${y + h * 0.66} Q ${x + w / 2} ${y + h * 0.6} ${x + w} ${y + h * 0.66} L ${x + w} ${y + h * 1.2} L ${x} ${y + h * 1.2} Z" fill="#FFFFFF"/>`;
    case "micro":
      return `<path d="M ${x + w * 0.06} ${y + h * 0.8} Q ${x + w / 2} ${y + h * 0.74} ${x + w * 0.94} ${y + h * 0.8}" stroke="#FFFFFF" stroke-width="7" fill="none"/>`;
    case "gilded":
      return `<path d="M ${x} ${y + h * 0.66} Q ${x + w / 2} ${y + h * 0.6} ${x + w} ${y + h * 0.66} L ${x + w} ${y + h * 1.2} L ${x} ${y + h * 1.2} Z" fill="#FFFFFF"/>
        <path d="M ${x + w * 0.04} ${y + h * 0.65} Q ${x + w / 2} ${y + h * 0.585} ${x + w * 0.96} ${y + h * 0.65}" stroke="#C9A46C" stroke-width="8" fill="none"/>`;
    case "line":
      return `<path d="M ${x + w * 0.08} ${y + h * 0.58} Q ${x + w / 2} ${y + h * 0.7} ${x + w * 0.92} ${y + h * 0.55}" stroke="#C9A46C" stroke-width="6" fill="none"/>`;
    case "negative":
      return `<rect x="${x}" y="${y}" width="${w}" height="${h * 0.34}" fill="#B78B8B" opacity="0.45"/>
        <rect x="${x}" y="${y + h * 0.52}" width="${w}" height="${h * 0.6}" fill="#B78B8B" opacity="0.45"/>`;
    case "flower":
      return flower(x + w / 2, y + h * 0.42, w * 0.2);
    case "doodle":
      return `<path d="M ${x + w * 0.3} ${y + h * 0.45} c -6 -12 -24 -6 -20 6 c 3 10 20 18 20 18 s 17 -8 20 -18 c 4 -12 -14 -18 -20 -6 z" fill="#B78B8B"/>
        ${sparkle(x + w * 0.68, y + h * 0.28, 14, "#C9A46C", 0.9)}`;
    case "marble":
      return `<path d="M ${x + w * 0.1} ${y + h * 0.25} Q ${x + w * 0.5} ${y + h * 0.35} ${x + w * 0.9} ${y + h * 0.2}" stroke="#C9A46C" stroke-width="7" fill="none"/>
        <path d="M ${x + w * 0.15} ${y + h * 0.55} Q ${x + w * 0.55} ${y + h * 0.48} ${x + w * 0.85} ${y + h * 0.62}" stroke="#C9A46C" stroke-width="5" fill="none" opacity="0.85"/>
        <path d="M ${x + w * 0.25} ${y + h * 0.8} Q ${x + w * 0.5} ${y + h * 0.74} ${x + w * 0.8} ${y + h * 0.84}" stroke="#FFF9F7" stroke-width="4" fill="none" opacity="0.6"/>`;
    case "onyx":
      return `<path d="M ${x + w * 0.15} ${y + h * 0.2} Q ${x + w * 0.45} ${y + h * 0.4} ${x + w * 0.35} ${y + h * 0.65}" stroke="#C9A46C" stroke-width="6" fill="none"/>
        <path d="M ${x + w * 0.7} ${y + h * 0.3} Q ${x + w * 0.55} ${y + h * 0.55} ${x + w * 0.78} ${y + h * 0.78}" stroke="#C9A46C" stroke-width="5" fill="none"/>
        <path d="M ${x + w * 0.3} ${y + h * 0.85} Q ${x + w * 0.55} ${y + h * 0.78} ${x + w * 0.6} ${y + h * 0.92}" stroke="#FFF9F7" stroke-width="3" fill="none" opacity="0.5"/>`;
    case "gloss":
      return `<ellipse cx="${x + w * 0.36}" cy="${y + h * 0.3}" rx="${w * 0.1}" ry="${h * 0.14}" fill="#FFFFFF" opacity="0.5" transform="rotate(-18 ${x + w * 0.36} ${y + h * 0.3})"/>`;
    default:
      return "";
  }
}

function nail(x, y, w, h, { base, gloss = "#FFFFFF", deco = "none" }) {
  const id = `nailclip${clipSeq++}`;
  const path = [
    `M ${x} ${y + h * 0.36}`,
    `C ${x} ${y + h * 0.12} ${x + w * 0.16} ${y} ${x + w * 0.5} ${y}`,
    `C ${x + w * 0.84} ${y} ${x + w} ${y + h * 0.12} ${x + w} ${y + h * 0.36}`,
    `L ${x + w * 0.86} ${y + h * 0.94}`,
    `Q ${x + w * 0.5} ${y + h * 1.03} ${x + w * 0.14} ${y + h * 0.94}`,
    "Z",
  ].join(" ");
  return `<clipPath id="${id}"><path d="${path}"/></clipPath>
  <g>
    <path d="${path}" fill="${base}"/>
    <g clip-path="url(#${id})">
      ${decoMarkup(deco, x, y, w, h)}
      <ellipse cx="${x + w * 0.32}" cy="${y + h * 0.26}" rx="${w * 0.09}" ry="${h * 0.13}" fill="${gloss}" opacity="0.45" transform="rotate(-16 ${x + w * 0.32} ${y + h * 0.26})"/>
      <rect x="${x}" y="${y + h * 0.72}" width="${w}" height="${h * 0.4}" fill="#2B2525" opacity="0.05"/>
    </g>
    <path d="${path}" fill="none" stroke="#2B2525" stroke-opacity="0.12" stroke-width="2"/>
  </g>`;
}

/* ---------------------------------- HERO ---------------------------------- */
put(
  "hero/hero.svg",
  wrap(
    900,
    1100,
    grad("heroBg", "#FFF9F7", "#E8D5D5") +
      `<radialGradient id="heroGlow" cx="0.5" cy="0.42" r="0.55">
        <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.85"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
      </radialGradient>`,
    `
    <rect width="900" height="1100" fill="url(#heroBg)"/>
    <circle cx="450" cy="470" r="330" fill="url(#heroGlow)"/>
    <circle cx="450" cy="470" r="330" fill="none" stroke="#C9A46C" stroke-opacity="0.35" stroke-width="2"/>
    <g transform="rotate(-26 450 880)">${nail(210, 330, 150, 360, { base: "#F3E1D8", deco: "line" })}</g>
    <g transform="rotate(-13 450 880)">${nail(305, 300, 155, 385, { base: "#F5E6DF", deco: "french" })}</g>
    ${nail(375, 280, 160, 410, { base: "#EFD9D2", deco: "flower" })}
    <g transform="rotate(13 450 880)">${nail(445, 300, 155, 385, { base: "#E9C9C2", deco: "gilded" })}</g>
    <g transform="rotate(26 450 880)">${nail(545, 330, 150, 360, { base: "#DCC3BC", deco: "marble" })}</g>
    ${sparkle(180, 260, 26)}${sparkle(730, 350, 20)}${sparkle(660, 180, 14, "#B78B8B", 0.8)}
    ${sparkle(230, 620, 16, "#B78B8B", 0.7)}${sparkle(720, 640, 24)}${sparkle(450, 960, 18, "#B78B8B", 0.6)}`
  )
);

put(
  "hero/about.svg",
  wrap(
    800,
    900,
    grad("aboutBg", "#F7ECE8", "#E8D5D5"),
    `
    <rect width="800" height="900" fill="url(#aboutBg)"/>
    <circle cx="400" cy="410" r="270" fill="#FFF9F7" opacity="0.75"/>
    <circle cx="400" cy="410" r="270" fill="none" stroke="#C9A46C" stroke-opacity="0.4" stroke-width="2"/>
    <g transform="rotate(-18 400 760)">${nail(240, 300, 130, 300, { base: "#F3E1D8", deco: "micro" })}</g>
    ${nail(330, 270, 140, 330, { base: "#EFD9D2", deco: "flower" })}
    <g transform="rotate(18 400 760)">${nail(430, 300, 130, 300, { base: "#E4C4BD", deco: "marble" })}</g>
    ${sparkle(620, 240, 22)}${sparkle(180, 330, 16, "#B78B8B", 0.8)}${sparkle(590, 620, 18)}`
  )
);

/* -------------------------------- SERVICES -------------------------------- */
const servicePalette = {
  "classic-manicure": "#F3E1D8",
  "gel-polish": "#EBC7C4",
  "simple-nail-art": "#F5E6DF",
  "custom-nail-art": "#EFD9D2",
  "nail-extensions": "#E4C4BD",
  "nail-repair": "#F0E4DE",
  "nail-art-removal": "#EDE3DD",
};

for (const [id, color] of Object.entries(servicePalette)) {
  put(
    `services/${id}.svg`,
    wrap(
      800,
      600,
      grad(`svcBg-${id}`, "#FFF9F7", "#F1E2DC"),
      `
      <rect width="800" height="600" fill="url(#svcBg-${id})"/>
      <circle cx="400" cy="300" r="215" fill="#E8D5D5" opacity="0.55"/>
      <g>
        <rect x="345" y="175" width="110" height="60" rx="12" fill="#2B2525"/>
        <rect x="378" y="225" width="44" height="40" fill="#2B2525" opacity="0.85"/>
        <rect x="310" y="258" width="180" height="180" rx="26" fill="${color}" stroke="#2B2525" stroke-opacity="0.15" stroke-width="2"/>
        <rect x="330" y="310" width="140" height="70" rx="10" fill="#FFF9F7" opacity="0.85"/>
        <circle cx="400" cy="345" r="20" fill="none" stroke="#C9A46C" stroke-width="4"/>
      </g>
      <g transform="rotate(-24 220 460)">${nail(160, 300, 100, 240, { base: color, deco: "gloss" })}</g>
      <g transform="rotate(24 580 460)">${nail(540, 300, 100, 240, { base: color, deco: "french" })}</g>
      ${sparkle(630, 170, 20)}${sparkle(175, 190, 16, "#B78B8B", 0.8)}`
    )
  );
}

/* -------------------------------- GALLERY --------------------------------- */
const gallerySpec = [
  ["bare-glow", "Minimalist", "#F6EFEA", "#EDE0D8", "#F3E3DA", "line"],
  ["single-line-nude", "Minimalist", "#F7F1EC", "#EFE3DC", "#F5E7DE", "micro"],
  ["negative-space", "Minimalist", "#F4EDE8", "#E9DCD5", "#F1E0D7", "negative"],
  ["classic-french", "French", "#F9EEED", "#EBDBDA", "#F5DDD8", "french"],
  ["micro-french", "French", "#F8F0EF", "#E9DAD9", "#F4DFDA", "micro"],
  ["glass-gel", "Gel", "#F3EAEA", "#E5D5D8", "#EFCFCF", "gloss"],
  ["jelly-pink", "Gel", "#F6E9EA", "#E7D2D6", "#F0CFD4", "gloss"],
  ["cherry-blossom", "Korean", "#FBEEE9", "#F3DCD6", "#F6E2DB", "flower"],
  ["daily-doodle", "Korean", "#FAF0EA", "#F1DDD4", "#F4E4DB", "doodle"],
  ["golden-marble", "Luxury", "#EFE3D0", "#DEC9A6", "#E9D8C2", "marble"],
  ["gilded-french", "Luxury", "#EFE5D6", "#DCCBAE", "#EBDCC8", "gilded"],
  ["onyx-gold", "Luxury", "#E8DFD4", "#CDBBA4", "#2F2A2A", "onyx"],
];

for (const [id, category, bg1, bg2, base, deco] of gallerySpec) {
  put(
    `gallery/${id}.svg`,
    wrap(
      800,
      800,
      grad(`gBg-${id}`, bg1, bg2) + grad(`gNail-${id}`, base, bg1, 0, 0, 0, 1),
      `
      <rect width="800" height="800" fill="url(#gBg-${id})"/>
      <circle cx="400" cy="370" r="265" fill="#FFF9F7" opacity="0.6"/>
      <circle cx="400" cy="370" r="265" fill="none" stroke="#C9A46C" stroke-opacity="0.3" stroke-width="2"/>
      <g transform="rotate(-8 400 640)">${nail(255, 165, 150, 380, { base: `url(#gNail-${id})`, deco })}</g>
      ${sparkle(645, 205, 24)}${sparkle(160, 265, 18, "#B78B8B", 0.75)}${sparkle(620, 640, 18)}${sparkle(185, 600, 14, "#B78B8B", 0.6)}
      <text x="400" y="748" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="30" letter-spacing="4" fill="#2B2525" opacity="0.55">${category.toUpperCase()}</text>`
    )
  );
}

/* ---------------------------------- MISC ---------------------------------- */
put(
  "fallback.svg",
  wrap(
    800,
    600,
    grad("fbBg", "#F5EAE6", "#E8D5D5"),
    `
    <rect width="800" height="600" fill="url(#fbBg)"/>
    <circle cx="400" cy="270" r="90" fill="#FFF9F7" stroke="#C9A46C" stroke-width="3"/>
    <text x="400" y="292" text-anchor="middle" font-family="Georgia, serif" font-size="56" fill="#B78B8B">SN</text>
    <text x="400" y="430" text-anchor="middle" font-family="Georgia, serif" font-size="36" fill="#2B2525">Signature Nails</text>
    ${sparkle(560, 170, 18)}${sparkle(235, 350, 14, "#B78B8B", 0.8)}`
  )
);

put(
  "logo.svg",
  wrap(
    300,
    80,
    "",
    `
    <circle cx="36" cy="40" r="30" fill="#FFF9F7" stroke="#C9A46C" stroke-width="2.5"/>
    <text x="36" y="50" text-anchor="middle" font-family="Georgia, serif" font-size="26" fill="#B78B8B">SN</text>
    <text x="80" y="38" font-family="Georgia, 'Times New Roman', serif" font-size="24" fill="#2B2525">Signature</text>
    <text x="80" y="64" font-family="Georgia, 'Times New Roman', serif" font-size="24" letter-spacing="5" fill="#B78B8B">NAILS</text>`
  )
);

console.log("done");
