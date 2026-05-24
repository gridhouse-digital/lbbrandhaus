export type SectionLink = {
  id: string
  label: string
}

export type BrandWord = {
  title: string
  detail: string
}

export type ColorToken = {
  name: string
  hex: string
  role: string
  usage: string
}

export type TypeScale = {
  label: string
  cssClass: string
  spec: string
  sample: string
}

export type ButtonStyle = {
  label: string
  mode: 'primary' | 'secondary' | 'ghost'
}

export const navSections: SectionLink[] = [
  { id: 'cover', label: 'Cover' },
  { id: 'essence', label: 'Brand Essence' },
  { id: 'logos', label: 'Logo System' },
  { id: 'colors', label: 'Color System' },
  { id: 'typography', label: 'Typography' },
  { id: 'components', label: 'UI Components' },
  { id: 'concepts', label: 'Page Concepts' },
  { id: 'homepage', label: 'Homepage Mockup' },
  { id: 'gallery', label: 'Portfolio System' },
  { id: 'guidelines', label: 'Usage Guidelines' },
]

export const brandWords: BrandWord[] = [
  {
    title: 'Editorial',
    detail: 'Framed like a magazine spread with clear hierarchy and calm white space.',
  },
  {
    title: 'Intentional',
    detail: 'Every block has a reason: no decorative noise, only meaningful contrast.',
  },
  {
    title: 'Warm',
    detail: 'Natural light, soft paper neutrals, and tactile photography define the mood.',
  },
  {
    title: 'Confident',
    detail: 'Serif-led headlines with concise copy and decisive CTAs.',
  },
]

export const colorTokens: ColorToken[] = [
  {
    name: 'Onyx',
    hex: '#101014',
    role: 'Primary dark',
    usage: 'Hero, dark surfaces, navigation, primary text on light backgrounds.',
  },
  {
    name: 'Ivory',
    hex: '#FFFCEB',
    role: 'Primary light',
    usage: 'Cards, reverse text, logo foreground, and elevated light surfaces.',
  },
  {
    name: 'Bone',
    hex: '#F2F0E4',
    role: 'Page base',
    usage: 'Main page background and neutral section canvas.',
  },
  {
    name: 'Burnt Orange',
    hex: '#CC5500',
    role: 'Signature accent',
    usage: 'Italic accent words, key CTAs, active states, and emphasis markers.',
  },
  {
    name: 'Teal',
    hex: '#153534',
    role: 'Strategic accent',
    usage: 'Slider section, featured cards, tags, and tonal divider backgrounds.',
  },
  {
    name: 'Slate',
    hex: '#444457',
    role: 'Secondary neutral',
    usage: 'Support copy, metadata, and quiet dividers in dense layouts.',
  },
  {
    name: 'Muted',
    hex: '#6B6760',
    role: 'Caption tone',
    usage: 'Eyebrows, footnotes, and low-priority microcopy.',
  },
]

export const typeScale: TypeScale[] = [
  {
    label: 'Display',
    cssClass: 'type-display',
    spec: 'Fraunces, 320, 72/0.95',
    sample: 'Create. Build. Grow.',
  },
  {
    label: 'Heading',
    cssClass: 'type-h1',
    spec: 'Fraunces, 340, 48/1.0',
    sample: 'A space built for intention.',
  },
  {
    label: 'Subheading',
    cssClass: 'type-h2',
    spec: 'Fraunces, 360, 32/1.1',
    sample: 'Studio and strategy in one house.',
  },
  {
    label: 'Body',
    cssClass: 'type-body',
    spec: 'Geist, 400, 18/1.7',
    sample:
      "We map the story first, then shape visuals and content to carry it with clarity.",
  },
  {
    label: 'Caption',
    cssClass: 'type-caption',
    spec: 'Geist Mono, 11, tracking 0.14em',
    sample: '- Index 04 / Portfolio',
  },
]

export const buttonStyles: ButtonStyle[] = [
  { label: 'Book a session', mode: 'primary' },
  { label: 'View portfolio', mode: 'secondary' },
  { label: 'Read guidelines', mode: 'ghost' },
]

export const studioImages = [
  '/assets/studio/DSC07225.jpg',
  '/assets/studio/DSC07231.jpg',
  '/assets/studio/DSC07234.jpg',
  '/assets/studio/DSC07245.jpg',
  '/assets/studio/DSC07248.jpg',
  '/assets/studio/DSC07252.jpg',
  '/assets/studio/DSC07257.jpg',
  '/assets/studio/DSC07266.jpg',
  '/assets/studio/DSC07275.jpg',
  '/assets/studio/DSC07297.jpg',
]

export const portfolioImages = [
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

export const logos = {
  light: '/assets/logos/logo-light.png',
  dark: '/assets/logos/logo-dark.png',
  one: '/assets/logos/logo-1.png',
  two: '/assets/logos/logo-2.png',
  three: '/assets/logos/logo-3.png',
  four: '/assets/logos/logo-4.png',
}
