import { promises as fs } from 'node:fs'
import path from 'node:path'

const dir = path.resolve(process.cwd(), 'public/legacy-pages')
const files = (await fs.readdir(dir)).filter((f) => f.toLowerCase().endsWith('.html'))

// === FINAL HIERARCHY ===
// Headings / display / italic accents → Playfair Display
// Body / paragraphs / UI / small text → Montserrat
// Eyebrows / labels / mono / caps → Montserrat (uppercase, tracked)
// DM Serif Display → reserved for the lede/intro paragraph only (editorial accent)

const replacements = [
  // Reset any old swaps back to their semantic roles
  // 1) Display contexts that were Fraunces -> swapped to Montserrat -> need to be Playfair Display
  [/'Montserrat',\s*sans-serif/g, "__DISPLAY_FONT__"],
  // 2) Geist Mono / mono captions previously swapped to Playfair -> need to be Montserrat with mono treatment
  [/'Playfair Display',\s*serif/g, "__BODY_FONT__"],
  // 3) DM Serif Display previously body -> need to be Montserrat
  [/'DM Serif Display',\s*serif/g, "__BODY_FONT__"],
  // Now substitute placeholders with final fonts
  [/__DISPLAY_FONT__/g, "'Playfair Display', serif"],
  [/__BODY_FONT__/g, "'Montserrat', sans-serif"],
  // Fix font-weight values that came from Fraunces variation axis
  [/font-weight:\s*320\b/g, 'font-weight: 300'],
  [/font-weight:\s*340\b/g, 'font-weight: 400'],
  [/font-weight:\s*360\b/g, 'font-weight: 400'],
]

// Append targeted overrides to fine-tune lede + type-mono
const overrideBlock = `

/* === REFINED TYPOGRAPHY HIERARCHY === */
/* Display headings retain Playfair italic accents */
.display, .display-italic, h1, h2, h3, h4, .ab-cover h1, .ab-section-head h2,
.scr-hero h1, .scr-port-hero h1, .scr-studio-hero h1, .scr-contact-hero h1,
.type-display, .type-h1, .type-h2, .type-h3 {
  font-family: 'Playfair Display', serif !important;
  letter-spacing: -0.015em;
}
.display-italic, em, .ab-cover h1 em, h1 em, h2 em, .scr-hero h1 em {
  font-style: italic;
}

/* Lede gets one DM Serif Display italic moment */
.type-lede {
  font-family: 'DM Serif Display', serif !important;
  font-style: italic;
  letter-spacing: 0;
}

/* Mono eyebrows: Montserrat uppercase tracked */
.mono, .type-mono, .ab-section-head .num, .ab-cover .meta,
.ab-cover .specs .k, .swatch .hex, .swatch .role,
.scr-nav .scr-meta, .scr-ticker, .scr-services-teaser .head .mono,
.scr-svc-card .num, .ds-label, .rule-card .h, .field label {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* Body, lists, controls */
body, p, li, label, input, textarea, button, a,
.type-body, .type-small, .scr-hero p, .scr-manifesto .body,
.scr-svc-card p, .scr-foot, .scr-foot ul, .scr-foot address,
.btn, .pill, .nav-book {
  font-family: 'Montserrat', sans-serif !important;
}
`

for (const file of files) {
  const fullPath = path.join(dir, file)
  let content = await fs.readFile(fullPath, 'utf8')

  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement)
  }

  // Inject override block once
  if (!content.includes('REFINED TYPOGRAPHY HIERARCHY')) {
    content = content.replace('</style>', `${overrideBlock}\n</style>`)
  }

  await fs.writeFile(fullPath, content, { encoding: 'utf8' })
  console.log(`✓ ${file}`)
}
