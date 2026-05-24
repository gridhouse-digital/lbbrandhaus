import { promises as fs } from 'node:fs'
import path from 'node:path'

const dir = path.resolve(process.cwd(), 'public/legacy-pages')
const files = (await fs.readdir(dir)).filter((f) => f.toLowerCase().endsWith('.html'))

const replacements = [
  ['â€”', '—'],
  ['â€“', '–'],
  ['â€˜', '‘'],
  ['â€™', '’'],
  ['â€œ', '“'],
  ['â€\u009d', '”'],
  ['â€¦', '…'],
  ['Â·', '·'],
  ['Â°', '°'],
  ['Â', ''],
]

for (const file of files) {
  const fullPath = path.join(dir, file)
  let content = await fs.readFile(fullPath, 'utf8')
  let changed = false
  for (const [bad, good] of replacements) {
    if (content.includes(bad)) {
      content = content.split(bad).join(good)
      changed = true
    }
  }
  // Strip UTF-8 BOM if present
  if (content.charCodeAt(0) === 0xfeff) {
    content = content.slice(1)
    changed = true
  }
  if (changed) {
    await fs.writeFile(fullPath, content, { encoding: 'utf8' })
    console.log(`✓ fixed ${file}`)
  } else {
    console.log(`· clean ${file}`)
  }
}
