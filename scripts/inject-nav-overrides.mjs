import { promises as fs } from 'node:fs'
import path from 'node:path'

const dir = path.resolve(process.cwd(), 'public/legacy-pages')
const targets = ['services.html', 'studio.html', 'portfolio.html', 'contact.html']

const navOverride = `
/* Nav logo: transparent bg, larger, no text label */
.frame-desktop .scr-nav .brand-mark .mark { background: transparent !important; width: 110px !important; height: 88px !important; border-radius: 0 !important; overflow: visible !important; }
.frame-desktop .scr-nav .brand-mark .mark img { width: 100% !important; height: 100% !important; object-fit: contain !important; }
.frame-desktop .scr-nav .brand-mark .name { display: none !important; }
.frame-mobile .scr-nav .brand-mark .mark { background: transparent !important; width: 64px !important; height: 52px !important; border-radius: 0 !important; }
.frame-mobile .scr-nav .brand-mark .mark img { width: 100% !important; height: 100% !important; object-fit: contain !important; }
.frame-mobile .scr-nav .brand-mark .name { display: none !important; }
`

for (const file of targets) {
  const fullPath = path.join(dir, file)
  let content = await fs.readFile(fullPath, 'utf8')
  if (content.includes('/* Nav logo: transparent bg')) {
    console.log(`· already injected in ${file}`)
    continue
  }
  content = content.replace('</style>', `${navOverride}\n</style>`)
  await fs.writeFile(fullPath, content, { encoding: 'utf8' })
  console.log(`✓ injected nav overrides into ${file}`)
}
