import { promises as fs } from 'node:fs'
import path from 'node:path'

const file = path.resolve(process.cwd(), 'public/legacy-pages/design-system.html')

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

let content = await fs.readFile(file, 'utf8')
let total = 0
for (const [from, to] of Object.entries(urlMap)) {
  const before = content
  content = content.split(from).join(to)
  if (before !== content) {
    total += (before.match(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length
  }
}
await fs.writeFile(file, content, { encoding: 'utf8' })
console.log(`✓ design-system.html — replaced ${total} broken image URLs`)
