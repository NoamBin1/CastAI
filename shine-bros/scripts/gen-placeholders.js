/**
 * Generates placeholder images for development / demo.
 * Drop real photos into public/images/ to replace them.
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const OUT = path.join(__dirname, "../public/images");
const BRAND = path.join(__dirname, "../public/brand");

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(BRAND, { recursive: true });

/**
 * Build a solid-color JPEG with an SVG overlay label.
 */
async function placeholder({ file, width, height, bg, label, sub }) {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" fill="${bg}"/>
  <!-- subtle grid -->
  <rect width="${width}" height="${height}" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
  <line x1="0" y1="${height/2}" x2="${width}" y2="${height/2}" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
  <line x1="${width/2}" y1="0" x2="${width/2}" y2="${height}" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
  <!-- label -->
  <text x="${width/2}" y="${height/2 - 14}"
        font-family="system-ui, sans-serif" font-size="22" font-weight="600"
        fill="rgba(255,255,255,0.55)" text-anchor="middle" dominant-baseline="middle">
    ${label}
  </text>
  <text x="${width/2}" y="${height/2 + 18}"
        font-family="system-ui, sans-serif" font-size="14"
        fill="rgba(255,255,255,0.3)" text-anchor="middle" dominant-baseline="middle">
    ${sub}
  </text>
  <!-- corner dims -->
  <text x="10" y="${height - 10}"
        font-family="monospace" font-size="11"
        fill="rgba(255,255,255,0.18)" dominant-baseline="auto">
    ${width}×${height}
  </text>
</svg>`;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 85 })
    .toFile(path.join(OUT, file));
  console.log(`  ✓  ${file}`);
}

async function logoPlaceholder() {
  // White circle badge with navy text — approximate the real logo
  const size = 400;
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white"/>
  <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 16}" fill="none" stroke="#0b1726" stroke-width="6"/>
  <text x="${size/2}" y="${size/2 - 28}"
        font-family="Georgia, serif" font-size="52" font-weight="700"
        fill="#0b1726" text-anchor="middle" dominant-baseline="middle" letter-spacing="3">
    SHINE
  </text>
  <text x="${size/2}" y="${size/2 + 32}"
        font-family="Georgia, serif" font-size="52" font-weight="700"
        fill="#0b1726" text-anchor="middle" dominant-baseline="middle" letter-spacing="3">
    BROS
  </text>
</svg>`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(BRAND, "logo.png"));
  console.log(`  ✓  brand/logo.png`);
}

(async () => {
  console.log("Generating placeholder images…");

  await logoPlaceholder();

  await placeholder({
    file: "arched-windows.jpg",
    width: 1920,
    height: 1080,
    bg: "#162038",
    label: "Hero · arched-windows.jpg",
    sub: "Replace with: worker cleaning tall arched black-framed windows on stone facade",
  });

  await placeholder({
    file: "bay-window-pole.jpg",
    width: 900,
    height: 680,
    bg: "#1a2a42",
    label: "Services · bay-window-pole.jpg",
    sub: "Replace with: pole reaching a second-story bay window",
  });

  await placeholder({
    file: "brick-tudor-pole.jpg",
    width: 900,
    height: 1100,
    bg: "#1e3050",
    label: "About · brick-tudor-pole.jpg",
    sub: "Replace with: water-fed pole against brick and stone Tudor house",
  });

  await placeholder({
    file: "crew-townhouse.jpg",
    width: 800,
    height: 1050,
    bg: "#152235",
    label: "Process · crew-townhouse.jpg",
    sub: "Replace with: crew member cleaning upper windows from ground",
  });

  await placeholder({
    file: "before.jpg",
    width: 1200,
    height: 675,
    bg: "#0f1a2e",
    label: "Before · before.jpg",
    sub: "Replace with: dirty window before cleaning",
  });

  await placeholder({
    file: "after.jpg",
    width: 1200,
    height: 675,
    bg: "#1a3555",
    label: "After · after.jpg",
    sub: "Replace with: clean window after cleaning",
  });

  console.log("\nDone. Drop real photos into public/images/ to replace these.");
})();
