import { useEffect, useMemo, useState } from 'react'
import ImageCarousel from '../components/ImageCarousel'
import SectionHeader from '../components/SectionHeader'
import ThemeToggle from '../components/ThemeToggle'
import {
  brandWords,
  buttonStyles,
  colorTokens,
  logos,
  portfolioImages,
  studioImages,
  typeScale,
} from '../data/designSystem'

type Theme = 'light' | 'dark'
type MainPage =
  | 'brief'
  | 'sitemap'
  | 'wireframes'
  | 'polished'
  | 'website-pages'
  | 'design-system'
type DesignSystemPageKey = 'logos' | 'colors' | 'typography' | 'components' | 'guidelines'
type WebsiteArtboard = {
  id: string
  title: string
  summary: string
  desktopImage: string
  mobileImage: string
}

function DesignSystemPage() {
  const [theme, setTheme] = useState<Theme>('light')
  const [activePage, setActivePage] = useState<MainPage>('polished')
  const [activeDesignSystemPage, setActiveDesignSystemPage] =
    useState<DesignSystemPageKey>('logos')
  const [selectedArtboard, setSelectedArtboard] = useState<WebsiteArtboard | null>(null)

  const activeLogo = useMemo(
    () => (theme === 'light' ? logos.dark : logos.light),
    [theme],
  )

  const designSystemMenu = [
    { key: 'logos', label: 'Logo System' },
    { key: 'colors', label: 'Color System' },
    { key: 'typography', label: 'Typography' },
    { key: 'components', label: 'UI Components' },
    { key: 'guidelines', label: 'Usage' },
  ] as const

  const mainMenu = [
    { key: 'brief', label: 'Brief' },
    { key: 'sitemap', label: 'Sitemap' },
    { key: 'wireframes', label: 'Wireframes' },
    { key: 'polished', label: 'Polished' },
    { key: 'website-pages', label: 'Website Pages' },
    { key: 'design-system', label: 'Design System' },
  ] as const

  const websiteArtboards: WebsiteArtboard[] = [
    {
      id: 'home',
      title: 'Homepage',
      summary: 'Hero, teal slider, services preview, story block, and primary conversion CTA.',
      desktopImage: studioImages[0],
      mobileImage: studioImages[1],
    },
    {
      id: 'about',
      title: 'About / Studio',
      summary: 'Atmosphere-led editorial narrative, founder positioning, and studio identity.',
      desktopImage: studioImages[6],
      mobileImage: studioImages[7],
    },
    {
      id: 'services',
      title: 'Services',
      summary: 'Offer architecture, process timeline, deliverables, and value framing.',
      desktopImage: portfolioImages[0],
      mobileImage: portfolioImages[1],
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      summary: 'Curated gallery rhythm with category-led storytelling and project highlights.',
      desktopImage: portfolioImages[4],
      mobileImage: portfolioImages[5],
    },
    {
      id: 'contact',
      title: 'Contact / Booking',
      summary: 'Short conversion-first intake flow with location and booking context.',
      desktopImage: studioImages[3],
      mobileImage: studioImages[4],
    },
  ]

  useEffect(() => {
    if (!selectedArtboard) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedArtboard(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedArtboard])

  return (
    <div className='artefact-shell' data-theme={theme}>
      <header className='topbar'>
        <a className='brand-chip' href='#'>
          <img src={activeLogo} alt='LB Brand Haus logo' />
          <span>LB Brand Haus Design System</span>
        </a>
        <ThemeToggle
          theme={theme}
          onToggle={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
        />
      </header>

      <main className='page-shell'>
        <nav className='page-menu'>
          {mainMenu.map((menu) => (
            <button
              key={menu.key}
              type='button'
              className={activePage === menu.key ? 'active' : ''}
              onClick={() => setActivePage(menu.key)}
            >
              {menu.label}
            </button>
          ))}
        </nav>

        {activePage === 'brief' ? (
          <section className='panel cover'>
            <p className='eyebrow'>- LB Brand Haus / Client Presentation Artefact</p>
            <h1>
              Create. Build. <em>Grow.</em>
            </h1>
            <p>
              A premium digital design system for LB Brand Haus, crafted as a practical
              foundation for website, social, and studio brand communications.
            </p>
            <div className='cover-grid'>
              <img src={studioImages[0]} alt='Studio interior' />
              <img src={studioImages[1]} alt='Studio visual' />
              <img src={studioImages[2]} alt='Studio mood' />
            </div>
          </section>
        ) : null}

        {activePage === 'brief' ? (
          <section className='panel'>
            <SectionHeader
              index='01'
              title='Brand'
              accent='essence.'
              summary='Voice, personality, and visual direction distilled for consistent execution.'
            />
            <div className='essence-grid'>
              {brandWords.map((word) => (
                <article key={word.title} className='essence-card'>
                  <h3>{word.title}</h3>
                  <p>{word.detail}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {activePage === 'sitemap' ? (
          <section className='panel'>
            <SectionHeader
              index='02'
              title='Site'
              accent='map.'
              summary='A shallow, conversion-led structure inspired by the AsherTouch artefact flow.'
            />
            <div className='sitemap-grid'>
              <article>
                <p className='eyebrow'>- Tier 0</p>
                <h3>lbbrandhaus.com</h3>
                <p>Entry point with direct CTA to book, inquire, or view portfolio.</p>
              </article>
              <article>
                <p className='eyebrow'>- Tier 1 Pages</p>
                <ul>
                  <li>Home</li>
                  <li>Studio</li>
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>Contact / Booking</li>
                </ul>
              </article>
              <article>
                <p className='eyebrow'>- Tier 2 Anchors</p>
                <ul>
                  <li>Hero + Story</li>
                  <li>Service categories</li>
                  <li>Process and deliverables</li>
                  <li>Gallery / case highlights</li>
                  <li>Inquiry and scheduling flow</li>
                </ul>
              </article>
            </div>
          </section>
        ) : null}

        {activePage === 'wireframes' ? (
          <section className='panel'>
            <SectionHeader
              index='03'
              title='Wireframe'
              accent='set.'
              summary='Low-fidelity page blueprints to lock hierarchy before polish.'
            />
            <div className='wireframe-grid'>
              {['Home Desktop', 'Services Desktop', 'Home Mobile', 'Contact Mobile'].map(
                (wireframe) => (
                  <article key={wireframe} className='wireframe-card'>
                    <p className='eyebrow'>- {wireframe}</p>
                    <div className='wf-block hero' />
                    <div className='wf-row'>
                      <div className='wf-block' />
                      <div className='wf-block' />
                    </div>
                    <div className='wf-block' />
                    <div className='wf-row'>
                      <div className='wf-block small' />
                      <div className='wf-block small' />
                      <div className='wf-block small' />
                    </div>
                  </article>
                ),
              )}
            </div>
          </section>
        ) : null}

        {activePage === 'polished' ? (
          <section className='panel homepage-mockup'>
            <SectionHeader
              index='04'
              title='Polished'
              accent='artboards.'
              summary='High-fidelity homepage direction, teal slider treatment, and premium visual rhythm.'
            />
            <div className='mockup-hero'>
              <img src={studioImages[3]} alt='Homepage hero studio scene' />
              <div>
                <p className='eyebrow'>- Hero direction</p>
                <h3>Calgary studio built for intentional storytelling.</h3>
                <p>
                  Use cinematic studio imagery, a short editorial headline, and one clear primary
                  action to anchor conversions fast.
                </p>
              </div>
            </div>

            <ImageCarousel images={studioImages.slice(4, 9)} />

            <div className='mockup-grid'>
              <article>
                <img src={studioImages[9]} alt='Brand story visual' />
                <h4>Brand story</h4>
              </article>
              <article>
                <img src={portfolioImages[0]} alt='Service showcase visual' />
                <h4>Services preview</h4>
              </article>
              <article>
                <img src={portfolioImages[4]} alt='Portfolio showcase visual' />
                <h4>Portfolio preview</h4>
              </article>
            </div>
          </section>
        ) : null}

        {activePage === 'polished' ? (
          <section className='panel'>
            <SectionHeader
              index='05'
              title='Portfolio'
              accent='gallery system.'
              summary='Editorial masonry structure using curated project imagery and consistent ratios.'
            />
            <div className='gallery-grid'>
              {portfolioImages.map((image, index) => (
                <figure key={image} className={index % 4 === 0 ? 'large' : ''}>
                  <img src={image} alt='LB Brand Haus portfolio sample' />
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {activePage === 'website-pages' ? (
          <section className='panel'>
            <SectionHeader
              index='06'
              title='Website'
              accent='page artboards.'
              summary='Visual page concepts for the full LB Brand Haus website flow, matching the legacy artefact intent.'
            />

            <div className='website-pages-grid'>
              {websiteArtboards.map((artboard, index) => (
                <button
                  key={artboard.id}
                  type='button'
                  className='website-page-card'
                  onClick={() => setSelectedArtboard(artboard)}
                >
                  <div className='website-page-frame'>
                    <img src={artboard.desktopImage} alt={`${artboard.title} concept preview`} />
                  </div>
                  <div className='website-page-meta'>
                    <p className='eyebrow'>- Page 0{index + 1}</p>
                    <h3>{artboard.title}</h3>
                    <p>{artboard.summary}</p>
                    <span className='website-page-link'>Open full-screen artboard</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ) : null}

        {activePage === 'design-system' ? (
          <section className='panel'>
            <SectionHeader
              index='07'
              title='Design'
              accent='system pages.'
              summary='Each system section is now a dedicated page panel with focused references.'
            />

            <nav className='sub-page-menu'>
              {designSystemMenu.map((menu) => (
                <button
                  key={menu.key}
                  type='button'
                  className={activeDesignSystemPage === menu.key ? 'active' : ''}
                  onClick={() => setActiveDesignSystemPage(menu.key)}
                >
                  {menu.label}
                </button>
              ))}
            </nav>

            {activeDesignSystemPage === 'logos' ? (
              <div className='logo-grid'>
                <article className='logo-card onyx'>
                  <img src={logos.light} alt='Light logo on dark background' />
                  <p>Light mode on Onyx</p>
                </article>
                <article className='logo-card ivory'>
                  <img src={logos.dark} alt='Dark logo on light background' />
                  <p>Dark mode on Ivory</p>
                </article>
                <article className='logo-card teal'>
                  <img src={logos.one} alt='Alternate logo on teal' />
                  <p>Alternate mark on Teal</p>
                </article>
                <article className='logo-card bone'>
                  <img src={logos.two} alt='Alternate logo variant' />
                  <p>Secondary variation</p>
                </article>
                <article className='logo-card onyx'>
                  <img src={logos.three} alt='Logo variation on dark surface' />
                  <p>Expanded composition</p>
                </article>
                <article className='logo-card ivory'>
                  <img src={logos.four} alt='Logo variation on light surface' />
                  <p>Compact composition</p>
                </article>
              </div>
            ) : null}

            {activeDesignSystemPage === 'colors' ? (
              <div className='swatch-grid'>
                {colorTokens.map((token) => (
                  <article key={token.name} className='swatch-card'>
                    <div className='swatch' style={{ background: token.hex }} />
                    <div>
                      <h3>{token.name}</h3>
                      <p className='hex'>{token.hex}</p>
                      <p>{token.role}</p>
                      <p className='usage'>{token.usage}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}

            {activeDesignSystemPage === 'typography' ? (
              <div className='type-stack'>
                {typeScale.map((item) => (
                  <article key={item.label} className='type-row'>
                    <div>
                      <p className='eyebrow'>{item.label}</p>
                      <p className='type-spec'>{item.spec}</p>
                    </div>
                    <p className={item.cssClass}>{item.sample}</p>
                  </article>
                ))}
              </div>
            ) : null}

            {activeDesignSystemPage === 'components' ? (
              <div className='component-showcase'>
                <div className='button-row'>
                  {buttonStyles.map((button) => (
                    <button key={button.label} type='button' className={`btn ${button.mode}`}>
                      {button.label}
                    </button>
                  ))}
                </div>
                <div className='component-grid'>
                  <article className='ui-card'>
                    <p className='eyebrow'>- Service card</p>
                    <h3>Editorial Photography</h3>
                    <p>Story-driven shoots composed for premium brand storytelling.</p>
                    <span className='tag'>Studio + Location</span>
                  </article>
                  <article className='ui-card teal-card'>
                    <p className='eyebrow'>- Highlight CTA</p>
                    <h3>Book the Haus</h3>
                    <p>Natural light studio rental from $70/hr with styling-ready zones.</p>
                    <span className='tag'>Mon - Sun / By appointment</span>
                  </article>
                  <article className='ui-card'>
                    <p className='eyebrow'>- Contact form preview</p>
                    <form>
                      <input type='text' placeholder='Name' />
                      <input type='email' placeholder='Email' />
                      <textarea rows={3} placeholder='Tell us your vision' />
                    </form>
                  </article>
                </div>
              </div>
            ) : null}

            {activeDesignSystemPage === 'guidelines' ? (
              <ul className='guidelines-list'>
                <li>Use teal intentionally as support, not as the dominant page color.</li>
                <li>Keep one accent move per section: orange italic, CTA, or key divider.</li>
                <li>Lead every screen with one high-quality image and one clear message.</li>
                <li>Maintain serif hierarchy and mono eyebrows for editorial rhythm.</li>
                <li>Preserve generous spacing and thin rules to protect premium feel.</li>
              </ul>
            ) : null}
          </section>
        ) : null}
      </main>

      {selectedArtboard ? (
        <div
          className='artboard-modal-backdrop'
          onClick={() => setSelectedArtboard(null)}
          role='presentation'
        >
          <section
            className='artboard-modal'
            role='dialog'
            aria-modal='true'
            aria-label={`${selectedArtboard.title} artboard`}
            onClick={(event) => event.stopPropagation()}
          >
            <header className='artboard-modal-header'>
              <div>
                <p className='eyebrow'>- Website page artboard</p>
                <h3>{selectedArtboard.title}</h3>
              </div>
              <button
                type='button'
                className='artboard-close'
                onClick={() => setSelectedArtboard(null)}
              >
                Close
              </button>
            </header>

            <div className='artboard-stage'>
              <article className='artboard-desktop'>
                <p className='eyebrow'>- Desktop variant</p>
                <div className='artboard-frame desktop'>
                  <img src={selectedArtboard.desktopImage} alt={`${selectedArtboard.title} desktop`} />
                </div>
              </article>

              <article className='artboard-mobile'>
                <p className='eyebrow'>- Mobile variant</p>
                <div className='artboard-frame mobile'>
                  <img src={selectedArtboard.mobileImage} alt={`${selectedArtboard.title} mobile`} />
                </div>
              </article>
            </div>

            <p className='artboard-caption'>{selectedArtboard.summary}</p>
          </section>
        </div>
      ) : null}
    </div>
  )
}

export default DesignSystemPage
