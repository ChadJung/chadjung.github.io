import { useApp } from '../context/AppContext'
import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'

/**
 * @file Contact section (#contact) + footer.
 * The footer carries a restrained monospace wordmark band — a quiet
 * developer touch that stays on the calm/formal side.
 */

// Monospace wordmark band for the footer (Latin only — keeps alignment).
const FOOTER_ART = String.raw`
·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·
   J U N G   S A N G J U N   /   F U L L - S T A C K
·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·
`

export function Contact() {
  const { lang, t } = useApp()

  const links = [
    { label: t('linkEmail'), href: `mailto:${profile.email}`, show: true },
    { label: t('linkGithub'), href: profile.github, show: !!profile.github },
    { label: t('linkBlog'), href: profile.blog, show: !!profile.blog },
  ].filter((l) => l.show)

  const year = new Date().getFullYear()

  return (
    <>
      <section
        id="contact"
        className="border-t border-border px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            index="05"
            title={t('sectionContact')}
            en="Contact"
            description={t('sectionContactDesc')}
          />

          <div className="ticked relative border border-border bg-surface p-6 sm:p-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-faint">
              {t('linkEmail')}
            </span>
            <div className="mt-2">
              <a
                href={`mailto:${profile.email}`}
                className="font-mono text-xl font-medium text-text underline-offset-4 transition-colors hover:text-accent hover:underline sm:text-2xl"
              >
                {profile.email}
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {links.map((link) => {
                const external = !link.href.startsWith('mailto:')
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs font-semibold text-text transition-colors hover:border-accent hover:text-accent"
                  >
                    {link.label}
                    {external && (
                      <span className="text-text-faint">{'->'}</span>
                    )}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <pre
            aria-hidden="true"
            className="overflow-x-auto text-[9px] leading-tight text-accent/70 sm:text-[11px]"
          >
            {FOOTER_ART}
          </pre>
          <p className="mt-4 font-mono text-xs text-text-faint">
            © {year} {profile.name[lang]} · {profile.title[lang]}
          </p>
        </div>
      </footer>
    </>
  )
}
