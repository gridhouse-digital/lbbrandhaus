import { promises as fs } from 'node:fs'
import path from 'node:path'
import { Jimp } from 'jimp'

const dir = path.resolve(process.cwd(), 'public/legacy-pages/logos')
const outDir = path.resolve(process.cwd(), 'public/legacy-pages/logos-clean')

const THRESHOLD = 32
const FADE = 26

await fs.mkdir(outDir, { recursive: true })

const files = (await fs.readdir(dir)).filter((f) => f.toLowerCase().endsWith('.png'))

for (const file of files) {
  const img = await Jimp.read(path.join(dir, file))
  const { width, height, data } = img.bitmap

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b

    if (luminance <= THRESHOLD) {
      data[i + 3] = 0
    } else if (luminance <= THRESHOLD + FADE) {
      const t = (luminance - THRESHOLD) / FADE
      data[i + 3] = Math.round(255 * t)
    } else {
      data[i + 3] = 255
    }
  }

  const outPath = path.join(outDir, file)
  await img.write(outPath)
  console.log(`✓ ${file} (${width}×${height})`)
}

console.log(`\nDone. Output: ${outDir}`)
