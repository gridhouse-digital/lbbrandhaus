import type { SectionLink } from '../data/designSystem'

type StickyNavProps = {
  sections: SectionLink[]
  activeSection: string
}

function StickyNav({ sections, activeSection }: StickyNavProps) {
  return (
    <aside className='sticky-nav'>
      <p className='eyebrow'>- Contents</p>
      <nav>
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={activeSection === section.id ? 'active' : ''}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default StickyNav
