import { promises as fs } from 'node:fs'
import path from 'node:path'

const dir = path.resolve(process.cwd(), 'public/legacy-pages')
const targets = ['home.html', 'services.html', 'studio.html', 'portfolio.html', 'contact.html']

const fromPattern = /src="\/assets\/logos\/logo-3\.png"|src="\/assets\/logos\/logo-light\.png"|src="logo\.png"/g
const toPath = 'src="/assets/logos/logo-light.png"'

for (const file of targets) {
  const fullPath = path.join(dir, file)
  let content = await fs.readFile(fullPath, 'utf8')
  const matches = content.match(fromPattern)
  if (!matches) {
    console.log(`· no matches in ${file}`)
    continue
  }
  content = content.replace(fromPattern, toPath)
  await fs.writeFile(fullPath, content, { encoding: 'utf8' })
  console.log(`✓ ${file} — replaced ${matches.length} instances`)
}
