import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const legacyDir = path.join(root, 'public', 'legacy-pages')

const desktopServicesMarkup = `        <div class="scr-svc-detail">

          <div class="row">
            <div>
              <div class="num-display">01.</div>
              <div class="label">&mdash; Standard Photoshoot</div>
            </div>
            <div>
              <h3>Standard <em>Photoshoot</em>.</h3>
              <p class="lede">A full 90-minute studio session for brands, founders, and creatives who need a polished image set with room for range.</p>
              <p class="body">This is the stronger choice when the session needs more than a quick headshot. The pace allows for guided direction, one to two outfit changes, and a clean mix of portraits, lifestyle frames, and brand-ready visuals. It is built for website refreshes, launch content, professional profiles, and social assets that need to feel consistent instead of pieced together.</p>
              <ul class="includes">
                <li>90-minute studio session</li>
                <li>15 edited images</li>
                <li>1-2 outfit changes</li>
                <li>Guided posing and direction</li>
                <li>Studio access included</li>
                <li>Best for brand updates and founder content</li>
              </ul>
              <div class="price-row">
                <div class="price"><em>Session</em> $550<span>&middot; 90 minutes</span></div>
                <a class="btn btn-primary" href="#">Book standard session &rarr;</a>
              </div>
            </div>
          </div>

          <div class="row">
            <div>
              <div class="num-display">02.</div>
              <div class="label">&mdash; Express Photoshoot</div>
            </div>
            <div>
              <h3>Express <em>Photoshoot</em>.</h3>
              <p class="lede">A short, intentional 30-minute session for quick professional visuals without overbuilding the production.</p>
              <p class="body">This session is made for simple needs: a refreshed profile image, a clean announcement photo, a small batch of social content, or a fast visual update before a launch. The setup stays streamlined, the direction is clear, and the result is a tight set of edited images that still feels considered.</p>
              <ul class="includes">
                <li>30-minute studio session</li>
                <li>5 edited images</li>
                <li>Simple clean setup</li>
                <li>Guided posing</li>
                <li>Efficient image selection</li>
                <li>Best for headshots and quick updates</li>
              </ul>
              <div class="price-row">
                <div class="price"><em>Session</em> $150<span>&middot; 30 minutes</span></div>
                <a class="btn btn-primary" href="#">Book express session &rarr;</a>
              </div>
            </div>
          </div>

          <div class="row">
            <div>
              <div class="num-display">03.</div>
              <div class="label">&mdash; Discovery Call</div>
            </div>
            <div>
              <h3>Business <em>Discovery</em>.</h3>
              <p class="lede">A focused call to understand your brand, goals, and the next stage of growth before recommending a creative direction.</p>
              <p class="body">Use this call when you are not sure whether you need strategy, content, photography, or a mix of support. The conversation gives space to clarify what is working, where the brand feels unclear, and what kind of creative work would move the business forward. It is a low-pressure first step before a larger engagement.</p>
              <ul class="includes">
                <li>15-minute business discovery call</li>
                <li>Brand and growth context review</li>
                <li>Goal and priority clarification</li>
                <li>Recommended next step</li>
                <li>Best for new business inquiries</li>
                <li>No-cost starting point</li>
              </ul>
              <div class="price-row">
                <div class="price"><em>Free</em><span>&middot; 15 minutes</span></div>
                <a class="btn btn-primary" href="#">Book discovery call &rarr;</a>
              </div>
            </div>
          </div>

          <div class="row">
            <div>
              <div class="num-display">04.</div>
              <div class="label">&mdash; Studio Rental</div>
            </div>
            <div>
              <h3>Studio <em>Rental</em>.</h3>
              <p class="lede">A clean, versatile studio space for creators, photographers, brands, and entrepreneurs producing high-quality content.</p>
              <p class="body">The Haus is designed to make content days easier: a polished environment, flexible shooting corners, and a professional setting that does not need heavy styling before you start. It works for brand sessions, product content, social shoots, portraits, reels, and small creative productions that need a dependable space.</p>
              <ul class="includes">
                <li>1-hour studio rental</li>
                <li>Clean natural-light environment</li>
                <li>Flexible content space</li>
                <li>Ideal for photo, video, and social content</li>
                <li>Useful for creators and small teams</li>
                <li>Booking path for hourly sessions</li>
              </ul>
              <div class="price-row">
                <div class="price"><em>Rate</em> $70<span>&middot; 1 hour</span></div>
                <a class="btn btn-primary" href="#">Reserve studio time &rarr;</a>
              </div>
            </div>
          </div>

          <div class="row">
            <div>
              <div class="num-display">05.</div>
              <div class="label">&mdash; Content Creation</div>
            </div>
            <div>
              <h3>Content <em>Creation</em>.</h3>
              <p class="lede">Built for brands that want to show up consistently with visuals that feel clear, current, and ready to use.</p>
              <p class="body">This offer supports the businesses that know content matters but do not want every post, image, or campaign asset to become a last-minute scramble. The work can include photo and video content, creative direction, and social-ready visuals shaped around the way the brand needs to be seen.</p>
              <ul class="includes">
                <li>Photo and video content direction</li>
                <li>Social-ready visuals</li>
                <li>Campaign or recurring content support</li>
                <li>Creative concept guidance</li>
                <li>Studio-based production options</li>
                <li>Best for consistent brand presence</li>
              </ul>
              <div class="price-row">
                <div class="price"><em>Custom</em><span>&middot; inquiry based</span></div>
                <a class="btn btn-primary" href="#">Make an inquiry &rarr;</a>
              </div>
            </div>
          </div>

          <div class="row">
            <div>
              <div class="num-display">06.</div>
              <div class="label">&mdash; Brand Strategy</div>
            </div>
            <div>
              <h3>Brand <em>Strategy</em>.</h3>
              <p class="lede">Clarity before content: a strategy-led offer for brands that need sharper messaging, positioning, and direction.</p>
              <p class="body">Before more visuals are made, this work helps define what the brand is trying to say, who it is speaking to, and how it should show up. It is useful for founders, service providers, and growing businesses that feel their content is active but not focused. The outcome is a clearer foundation for creative decisions.</p>
              <ul class="includes">
                <li>Messaging and positioning review</li>
                <li>Brand direction deep dive</li>
                <li>Audience and offer clarity</li>
                <li>Content direction guidance</li>
                <li>Strategic next-step recommendations</li>
                <li>Best before a content or website refresh</li>
              </ul>
              <div class="price-row">
                <div class="price"><em>Custom</em><span>&middot; discovery led</span></div>
                <a class="btn btn-primary" href="#">Book a discovery call &rarr;</a>
              </div>
            </div>
          </div>

        </div>`

const mobileServicesMarkup = `          <div class="scr-svc-detail">
            <div class="row">
              <div>
                <div class="num-display">01.</div>
                <div class="label">&mdash; Standard Photoshoot</div>
              </div>
              <div>
                <h3>Standard <em>Photoshoot</em>.</h3>
                <p class="lede">A 90-minute studio session for a fuller, more flexible brand image set.</p>
                <p class="body">Built for founders, creators, and businesses that need polished images with enough range for websites, profiles, launches, and social content.</p>
                <ul class="includes">
                  <li>15 edited images</li>
                  <li>1-2 outfit changes</li>
                  <li>Guided direction</li>
                  <li>Studio access</li>
                </ul>
                <div class="price-row">
                  <div class="price"><em>$550</em><span>&middot; 90 minutes</span></div>
                  <a class="btn btn-primary" href="#">Book &rarr;</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div>
                <div class="num-display">02.</div>
                <div class="label">&mdash; Express Photoshoot</div>
              </div>
              <div>
                <h3>Express <em>Session</em>.</h3>
                <p class="lede">A quick 30-minute session for clean, professional visuals.</p>
                <p class="body">Best for headshots, profile refreshes, announcements, or a small batch of simple social-ready images.</p>
                <ul class="includes">
                  <li>5 edited images</li>
                  <li>Simple clean setup</li>
                  <li>Guided posing</li>
                  <li>Efficient session flow</li>
                </ul>
                <div class="price-row">
                  <div class="price"><em>$150</em><span>&middot; 30 minutes</span></div>
                  <a class="btn btn-primary" href="#">Book &rarr;</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div>
                <div class="num-display">03.</div>
                <div class="label">&mdash; Discovery</div>
              </div>
              <div>
                <h3>Business <em>Discovery</em>.</h3>
                <p class="lede">A focused call to understand your brand, goals, and growth direction.</p>
                <p class="body">Use this as the first step when you need clarity on whether strategy, content, photography, or studio support is the right move.</p>
                <ul class="includes">
                  <li>15-minute call</li>
                  <li>Goal review</li>
                  <li>Brand context</li>
                  <li>Recommended next step</li>
                </ul>
                <div class="price-row">
                  <div class="price"><em>Free</em><span>&middot; 15 minutes</span></div>
                  <a class="btn btn-primary" href="#">Call &rarr;</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div>
                <div class="num-display">04.</div>
                <div class="label">&mdash; Studio Rental</div>
              </div>
              <div>
                <h3>Studio <em>Rental</em>.</h3>
                <p class="lede">A versatile content space for creators, photographers, brands, and entrepreneurs.</p>
                <p class="body">A clean, flexible studio for photo, video, reels, product content, portraits, and small creative productions.</p>
                <ul class="includes">
                  <li>1-hour rental</li>
                  <li>Natural-light space</li>
                  <li>Flexible setup</li>
                  <li>Creator-friendly booking</li>
                </ul>
                <div class="price-row">
                  <div class="price"><em>$70</em><span>&middot; 1 hour</span></div>
                  <a class="btn btn-primary" href="#">Reserve &rarr;</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div>
                <div class="num-display">05.</div>
                <div class="label">&mdash; Content</div>
              </div>
              <div>
                <h3>Content <em>Creation</em>.</h3>
                <p class="lede">For brands that want to show up consistently.</p>
                <p class="body">Photo and video content, creative direction, and social-ready visuals shaped for the channels your audience actually sees.</p>
                <ul class="includes">
                  <li>Photo and video content</li>
                  <li>Creative direction</li>
                  <li>Social-ready assets</li>
                  <li>Inquiry-based scope</li>
                </ul>
                <div class="price-row">
                  <div class="price"><em>Custom</em><span>&middot; inquiry based</span></div>
                  <a class="btn btn-primary" href="#">Inquire &rarr;</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div>
                <div class="num-display">06.</div>
                <div class="label">&mdash; Strategy</div>
              </div>
              <div>
                <h3>Brand <em>Strategy</em>.</h3>
                <p class="lede">Clarity before content.</p>
                <p class="body">A strategic deep dive into messaging, positioning, and content direction so the brand has a stronger foundation before more visuals are made.</p>
                <ul class="includes">
                  <li>Messaging review</li>
                  <li>Positioning direction</li>
                  <li>Content guidance</li>
                  <li>Discovery-led next steps</li>
                </ul>
                <div class="price-row">
                  <div class="price"><em>Custom</em><span>&middot; discovery led</span></div>
                  <a class="btn btn-primary" href="#">Call &rarr;</a>
                </div>
              </div>
            </div>
          </div>`

function replaceBetween(content, startNeedle, endNeedle, replacement, fromIndex = 0) {
  const start = content.indexOf(startNeedle, fromIndex)
  if (start === -1) throw new Error(`Missing start marker: ${startNeedle}`)
  const end = content.indexOf(endNeedle, start)
  if (end === -1) throw new Error(`Missing end marker: ${endNeedle}`)
  return {
    content: content.slice(0, start) + replacement + content.slice(end),
    nextIndex: start + replacement.length,
  }
}

function polishLegacyFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')

  content = content
    .replaceAll('        <!-- Process strip -->        <!-- Process strip -->', '        <!-- Process strip -->')
    .replaceAll('          <div class="scr-foot">          <div class="scr-foot">', '          <div class="scr-foot">')

  content = content.replaceAll('/assets/portfolio/IMG_0529.JPG', '/assets/portfolio/img-0529.jpg')

  content = content.replace(
    /  \.btn-primary \{ background: var\(--ink\); color: var\(--ivory\); border-color: var\(--ink\); \}\r?\n  \.btn-primary:hover \{ background: var\(--orange\); border-color: var\(--orange\); \}/g,
    '.btn-primary { background: var(--orange); color: var(--ivory); border-color: var(--orange); box-shadow: 0 10px 24px rgba(204,85,0,0.16); }\n  .btn-primary:hover { background: #B04600; border-color: #B04600; }',
  )
  content = content.replace(
    /  \.scr-nav \.nav-book \{ background: var\(--ink\); color: var\(--ivory\); padding: 8px 16px; border-radius: var\(--r-pill\); font-size: 11px; letter-spacing: 0\.04em; \}/g,
    '.scr-nav .nav-book { background: var(--orange); color: var(--ivory); padding: 8px 16px; border-radius: var(--r-pill); font-size: 11px; letter-spacing: 0.04em; box-shadow: 0 8px 20px rgba(204,85,0,0.14); }',
  )
  content = content.replace(
    /  \.scr-contact-body \.form-card button \{ margin-top: 20px; padding: 14px 24px; background: var\(--ink\); color: var\(--ivory\); border: none; border-radius: var\(--r-pill\); font-size: 13px; cursor: pointer; display: inline-flex; gap: 12px; align-items: center; font-family: inherit; \}/g,
    '.scr-contact-body .form-card button { margin-top: 20px; padding: 14px 24px; background: var(--orange); color: var(--ivory); border: none; border-radius: var(--r-pill); font-size: 13px; cursor: pointer; display: inline-flex; gap: 12px; align-items: center; font-family: inherit; box-shadow: 0 10px 24px rgba(204,85,0,0.16); }',
  )

  const serviceMarker = '<!-- ============= SERVICES ============= -->'
  const serviceStart = content.indexOf(serviceMarker)
  if (serviceStart !== -1) {
    const desktopResult = replaceBetween(
      content,
      '        <div class="scr-svc-detail">',
      '        <!-- Process strip -->',
      `${desktopServicesMarkup}\n\n`,
      serviceStart,
    )
    content = desktopResult.content

    const mobileMarker = '<!-- MOBILE: SERVICES -->'
    const mobileStart = content.indexOf(mobileMarker)
    if (mobileStart !== -1) {
      content = replaceBetween(
        content,
        '          <div class="scr-svc-detail">',
        '          <div class="scr-foot">',
        `${mobileServicesMarkup}\n`,
        mobileStart,
      ).content
    }
  }

  content = content
    .replaceAll('Ã¢â€ â€™', '&rarr;')
    .replaceAll('â†’', '&rarr;')
    .replaceAll('Ã¢â€ â€”', '&nearr;')
    .replaceAll('â†—', '&nearr;')
    .replaceAll('â†', '&larr;')
    .replaceAll('â€”', '&mdash;')
    .replaceAll('Â·', '&middot;')
    .replaceAll('Ãƒâ€”', '&times;')
    .replaceAll('Ã—', '&times;')
    .replaceAll('ÃƒÂ©', '&eacute;')
    .replaceAll('BÃ©langer', 'B&eacute;langer')
    .replaceAll('HÃ´tel', 'H&ocirc;tel')
    .replaceAll('Â©', '&copy;')
    .replaceAll('51.1Â°', '51.1&deg;')

  fs.writeFileSync(filePath, content)
}

for (const file of fs.readdirSync(legacyDir)) {
  if (!file.endsWith('.html')) continue
  polishLegacyFile(path.join(legacyDir, file))
}

const legacyIndex = path.join(root, 'public', 'legacy-index.html')
if (fs.existsSync(legacyIndex)) polishLegacyFile(legacyIndex)
