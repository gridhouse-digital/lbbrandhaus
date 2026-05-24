import { promises as fs } from 'node:fs'
import path from 'node:path'

const dir = path.resolve(process.cwd(), 'public/legacy-pages')
const sitePages = ['home.html', 'services.html', 'studio.html', 'portfolio.html', 'contact.html']

// === IMAGE POOL ===
const studio = [
  '/assets/studio/DSC07225.jpg',
  '/assets/studio/DSC07231.jpg',
  '/assets/studio/DSC07234.jpg',
  '/assets/studio/DSC07245.jpg',
  '/assets/studio/DSC07248.jpg',
  '/assets/studio/DSC07252.jpg',
  '/assets/studio/DSC07266.jpg',
  '/assets/studio/DSC07275.jpg',
  '/assets/studio/DSC07297.jpg',
]
const portfolio = [
  '/assets/portfolio/2I1A0562.jpg',
  '/assets/portfolio/IMG_2407.jpg',
  '/assets/portfolio/IMG_3583.jpg',
  '/assets/portfolio/IMG_4940.jpg',
  '/assets/portfolio/hs-3.jpg',
  '/assets/portfolio/img-0365.jpg',
  '/assets/portfolio/img-0529.jpg',
  '/assets/portfolio/img-8729.jpg',
  '/assets/portfolio/img-9877.jpg',
  '/assets/portfolio/IMG_1235.jpg',
]

// Map specific WordPress URLs to deterministic local replacements
const urlMap = {
  'https://lbbrandhaus.com/wp-content/uploads/2026/04/branhaus-calgary-interior-shoot-scaled.jpg':
    '/assets/studio/DSC07225.jpg',
  'https://lbbrandhaus.com/wp-content/uploads/2026/04/lb-brand-haus-guide-scaled.jpg':
    '/assets/studio/DSC07234.jpg',
  'https://lbbrandhaus.com/wp-content/uploads/2026/04/LB-Brand-Content-Creation-.webp':
    '/assets/portfolio/IMG_2407.jpg',
  'https://lbbrandhaus.com/wp-content/uploads/2026/04/studio-lb-brand-haus-session-with-happy-client.jpg':
    '/assets/studio/DSC07257.jpg',
}

// === GLOBAL POLISH CSS — applied to every site page ===
const globalCss = `

/* ============================================================
 * GLOBAL POLISH — applied across home/services/studio/portfolio/contact
 * ============================================================ */

/* Nav logo: transparent bg, larger, hide text label (desktop + mobile) */
.frame-desktop .scr-nav .brand-mark .mark {
  background: transparent !important;
  width: 110px !important;
  height: 88px !important;
  border-radius: 0 !important;
  overflow: visible !important;
}
.frame-desktop .scr-nav .brand-mark .mark img {
  width: 100% !important; height: 100% !important; object-fit: contain !important;
}
.frame-desktop .scr-nav .brand-mark .name { display: none !important; }
.frame-mobile .scr-nav .brand-mark .mark {
  background: transparent !important;
  width: 64px !important; height: 52px !important;
  border-radius: 0 !important;
}
.frame-mobile .scr-nav .brand-mark .mark img {
  width: 100% !important; height: 100% !important; object-fit: contain !important;
}
.frame-mobile .scr-nav .brand-mark .name { display: none !important; }

/* Ticker: teal background, scrolling marquee */
.frame-desktop .scr-ticker,
.frame-mobile .scr-ticker {
  background: #153534 !important;
  color: rgba(255, 252, 235, 0.85) !important;
  border-color: rgba(255, 252, 235, 0.18) !important;
  padding: 14px 0 !important;
  padding-left: 0 !important;
  display: block !important;
  overflow: hidden !important;
}
.frame-mobile .scr-ticker { padding: 10px 0 !important; }
.frame-desktop .scr-ticker .lb-track,
.frame-mobile .scr-ticker .lb-track {
  display: inline-flex;
  gap: 50px;
  padding-left: 50px;
  animation: lb-marquee 30s linear infinite;
  white-space: nowrap;
}
.frame-mobile .scr-ticker .lb-track {
  gap: 28px; padding-left: 16px; animation-duration: 22s;
}
.frame-desktop .scr-ticker .lb-track > span,
.frame-mobile .scr-ticker .lb-track > span {
  display: inline-flex; gap: 50px; align-items: center; flex-shrink: 0;
}
.frame-mobile .scr-ticker .lb-track > span { gap: 28px; }
.frame-desktop .scr-ticker .dot,
.frame-mobile .scr-ticker .dot { background: #CC5500 !important; }

@keyframes lb-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* Footer: flush against the section above (no white gap) */
.frame-desktop .scr-foot,
.frame-mobile .scr-foot { margin-top: 0 !important; }

/* Studio Rental section: teal background + edge image (homepage CTA reused on other pages) */
.frame-desktop .scr-studio-dark {
  background: #153534 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  padding-left: 0 !important;
  align-items: stretch !important;
}
.frame-desktop .scr-studio-dark .img-frame {
  aspect-ratio: auto !important;
  height: 100% !important;
  max-height: 680px !important;
}
.frame-desktop .scr-studio-dark .img-frame img {
  height: 100% !important; width: 100% !important; object-fit: cover !important;
}
.frame-desktop .scr-studio-dark > div:nth-child(2) {
  padding: 88px 32px 88px 0 !important;
}
.frame-mobile .scr-studio-dark {
  background: #153534 !important;
  padding: 0 !important;
  display: grid !important;
  grid-template-columns: 1fr !important;
  gap: 0 !important;
  align-items: stretch !important;
}
.frame-mobile .scr-studio-dark .img-frame {
  aspect-ratio: 16/10 !important;
  max-height: 320px !important;
}
.frame-mobile .scr-studio-dark .img-frame img {
  width: 100% !important; height: 100% !important; object-fit: cover !important;
}
.frame-mobile .scr-studio-dark > div:nth-child(2) { padding: 40px 16px !important; }

/* Buttons: refined hover affordance */
.btn, .nav-book, .cta {
  font-family: 'Montserrat', sans-serif !important;
  letter-spacing: 0.04em;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease !important;
}
.btn:hover, .nav-book:hover, .cta:hover { transform: translateY(-1px); }

/* Section heads: consistent rhythm */
.frame-desktop .scr-services-teaser .head h2,
.frame-desktop .scr-port-hero h1,
.frame-desktop .scr-studio-hero h1,
.frame-desktop .scr-contact-hero h1,
.frame-desktop .scr-svc-detail h3,
.frame-desktop .scr-work .head h2 {
  letter-spacing: -0.02em;
}

/* Filter pills (Portfolio + Services) */
.frame-desktop .pill {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 11px !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  padding: 10px 18px !important;
  border: 0.5px solid rgba(16,16,20,0.14) !important;
  border-radius: 999px !important;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.frame-desktop .pill.active {
  background: #101014 !important; color: #fffceb !important; border-color: #101014 !important;
}
.frame-desktop .pill:hover:not(.active) { border-color: #101014 !important; color: #101014 !important; }

/* Forms: cleaner input rhythm */
input, textarea {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 14px !important;
}
.field label {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 500 !important;
}

/* Mobile section padding tightening for breathing room */
.frame-mobile .scr-hero { padding: 40px 16px 30px !important; }
.frame-mobile .scr-hero .img-frame { border-radius: 18px !important; overflow: hidden !important; }
.frame-mobile .scr-services-teaser { padding: 40px 16px 50px !important; }
.frame-mobile .scr-svc-detail { padding: 40px 16px 50px !important; }
.frame-mobile .scr-port-grid { padding: 0 16px 50px !important; }
.frame-mobile .scr-contact-body { padding: 30px 16px 50px !important; }
`

const marqueeScript = `
// === GLOBAL TICKER MARQUEE ===
document.querySelectorAll('.frame-desktop .scr-ticker, .frame-mobile .scr-ticker').forEach((ticker) => {
  if (ticker.querySelector('.lb-track')) return;
  const track = document.createElement('div');
  track.className = 'lb-track';
  while (ticker.firstChild) track.appendChild(ticker.firstChild);
  ticker.appendChild(track);
  track.innerHTML += track.innerHTML;
});
`

const POLISH_MARKER = '/* GLOBAL POLISH — applied across home/services/studio/portfolio/contact */'
const SCRIPT_MARKER = '// === GLOBAL TICKER MARQUEE ==='

for (const file of sitePages) {
  const fullPath = path.join(dir, file)
  let content = await fs.readFile(fullPath, 'utf8')
  let changed = false
  let imageReplacements = 0

  // Replace mapped WordPress URLs
  for (const [from, to] of Object.entries(urlMap)) {
    const before = content
    content = content.split(from).join(to)
    if (before !== content) {
      const matches = (before.match(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length
      imageReplacements += matches
      changed = true
    }
  }

  // Inject global CSS (only if not already there)
  if (!content.includes(POLISH_MARKER)) {
    content = content.replace('</style>', `${globalCss}\n</style>`)
    changed = true
  }

  // Inject marquee script (only if not already there)
  if (!content.includes(SCRIPT_MARKER)) {
    content = content.replace('</body>', `<script>${marqueeScript}</script>\n</body>`)
    changed = true
  }

  if (changed) {
    await fs.writeFile(fullPath, content, { encoding: 'utf8' })
    console.log(`✓ ${file} (image swaps: ${imageReplacements})`)
  } else {
    console.log(`· ${file} (no changes)`)
  }
}

console.log('\nDone.')
