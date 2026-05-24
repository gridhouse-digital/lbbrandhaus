import { useMemo, useState, type SyntheticEvent } from 'react'

type LegacyPage = {
  id: string
  label: string
  title: string
  description: string
  status: string
  src?: string
  showDevicePair?: boolean
}

type DevicePreview = 'desktop' | 'mobile'

function App() {
  const pages: LegacyPage[] = useMemo(
    () => [
      {
        id: 'overview',
        label: 'Overview',
        title: 'LB Brand Haus Client Review',
        description:
          'A guided presentation of the brand direction, design system, and website page flow.',
        status: 'Review Guide',
      },
      {
        id: 'design-system',
        label: 'Design System',
        title: 'Design System',
        description:
          'Logo use, color palette, typography, component direction, and usage guidance.',
        status: 'Client Review',
        src: '/legacy-pages/design-system.html?v=20260507-0125',
      },
      {
        id: 'home',
        label: 'Home',
        title: 'Homepage',
        description: 'Primary first impression, story framing, service preview, and conversion CTA.',
        status: 'Client Review',
        src: '/legacy-pages/home.html?v=20260507-0125',
        showDevicePair: true,
      },
      {
        id: 'services',
        label: 'Services',
        title: 'Services Page',
        description: 'Offer architecture, deliverables, process framing, and inquiry paths.',
        status: 'Client Review',
        src: '/legacy-pages/services.html?v=20260507-0125',
        showDevicePair: true,
      },
      {
        id: 'studio',
        label: 'Studio',
        title: 'Studio Page',
        description: 'Atmosphere-led studio positioning, rental context, and brand story.',
        status: 'Client Review',
        src: '/legacy-pages/studio.html?v=20260507-0125',
        showDevicePair: true,
      },
      {
        id: 'portfolio',
        label: 'Portfolio',
        title: 'Portfolio Page',
        description: 'Curated image rhythm, project storytelling, and visual proof points.',
        status: 'Client Review',
        src: '/legacy-pages/portfolio.html?v=20260507-0125',
        showDevicePair: true,
      },
      {
        id: 'contact',
        label: 'Contact',
        title: 'Contact Page',
        description: 'A focused inquiry and booking path for qualified client conversations.',
        status: 'Client Review',
        src: '/legacy-pages/contact.html?v=20260507-0125',
        showDevicePair: true,
      },
    ],
    [],
  )
  const [activePage, setActivePage] = useState<LegacyPage>(pages[0])
  const [previewDevice, setPreviewDevice] = useState<DevicePreview>('desktop')

  const applyIframePreviewMode = (
    event: SyntheticEvent<HTMLIFrameElement>,
    device: DevicePreview,
  ) => {
    const frame = event.currentTarget

    window.setTimeout(() => {
      const frameWindow = frame.contentWindow
      const frameDocument = frame.contentDocument
      const desktopSection = frameDocument?.querySelector<HTMLElement>(
        '.artboard > section.ab-section:nth-of-type(5)',
      )
      const mobileSection = frameDocument?.querySelector<HTMLElement>(
        '.artboard > section.ab-section:nth-of-type(6)',
      )
      const target = device === 'desktop' ? desktopSection : mobileSection
      if (!frameWindow || !target) return

      if (desktopSection) {
        desktopSection.style.display = device === 'desktop' ? 'block' : 'none'
      }

      if (mobileSection) {
        mobileSection.style.display = device === 'mobile' ? 'block' : 'none'
      }

      frameWindow.scrollTo({
        top: Math.max(target.offsetTop - 18, 0),
        left: 0,
        behavior: 'auto',
      })
    }, 120)
  }

  return (
    <main className='split-legacy-shell'>
      <header className='presentation-header'>
        <div className='presentation-brand'>
          <img src='/logo.png' alt='LB Brand Haus logo' />
          <div>
            <p>LB Brand Haus</p>
            <span>Design System Web Artefact</span>
          </div>
        </div>

        <nav className='split-legacy-menu' aria-label='Presentation sections'>
          {pages.map((page) => (
            <button
              key={page.id}
              type='button'
              className={activePage.id === page.id ? 'active' : ''}
              onClick={() => setActivePage(page)}
            >
              {page.label}
            </button>
          ))}
        </nav>
      </header>

      <section className='presentation-frame' aria-labelledby='presentation-title'>
        <div className='presentation-frame-header'>
          <div>
            <p className='presentation-kicker'>{activePage.status}</p>
            <h1 id='presentation-title'>{activePage.title}</h1>
            <p>{activePage.description}</p>
          </div>
          {activePage.showDevicePair ? (
            <div className='viewport-review-controls' aria-label='Preview device'>
              <button
                type='button'
                className={previewDevice === 'desktop' ? 'active' : ''}
                onClick={() => setPreviewDevice('desktop')}
              >
                Desktop
              </button>
              <button
                type='button'
                className={previewDevice === 'mobile' ? 'active' : ''}
                onClick={() => setPreviewDevice('mobile')}
              >
                Mobile
              </button>
            </div>
          ) : activePage.src ? (
            <span>Desktop Preview</span>
          ) : (
            <span>Presentation Overview</span>
          )}
        </div>

        {activePage.src && activePage.showDevicePair ? (
          <div className={`single-preview-stage ${previewDevice}`}>
            <div className={previewDevice === 'mobile' ? 'mobile-review-shell' : 'desktop-review-shell'}>
              <iframe
                key={`${activePage.id}-${previewDevice}`}
                className='split-legacy-frame single-preview-frame'
                src={activePage.src}
                title={`LB Brand Haus ${activePage.label} ${previewDevice} preview`}
                onLoad={(event) => applyIframePreviewMode(event, previewDevice)}
              />
            </div>
          </div>
        ) : activePage.src ? (
          <iframe
            key={activePage.id}
            className='split-legacy-frame'
            src={activePage.src}
            title={`LB Brand Haus ${activePage.label} page`}
          />
        ) : (
          <div className='overview-panel'>
            <section>
              <p className='presentation-kicker'>Review Scope</p>
              <h2>What this artefact is designed to confirm</h2>
              <p>
                This review focuses on whether the visual system, page flow, and brand tone feel
                right before the site moves into a deeper build pass.
              </p>
            </section>

            <div className='overview-grid'>
              <article>
                <span>01</span>
                <h3>Brand Direction</h3>
                <p>Editorial, warm, intentional, and confident visual language.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Design System</h3>
                <p>Logo handling, palette, typography, interface pieces, and usage rules.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Website Flow</h3>
                <p>Core page previews for home, services, studio, portfolio, and contact.</p>
              </article>
              <article>
                <span>04</span>
                <h3>Next Decisions</h3>
                <p>Confirm content priorities, booking path, imagery selection, and launch scope.</p>
              </article>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
