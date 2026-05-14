import { useApp } from '../context/AppContext'
import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'

/**
 * @file Contact section (#contact) + footer.
 * Footer shows a clean monospace ASCII wordmark of the name.
 */

// Tasteful block ASCII for "JUNG".
const ASCII_NAME = String.raw`
   _ _   _ _   _ _   _  ___
  | | | | | | | \ | | |/ __|
  | | | | | | |  \| | | | (_ |
 _/ |_|_|_|_|_| |_|_|_|\\___|
|__/
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
      <section id="contact" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title={t('sectionContact')}
            description={t('sectionContactDesc')}
          />

          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <a
              href={`mailto:${profile.email}`}
              className="text-lg font-semibold text-text underline-offset-4 hover:text-accent hover:underline sm:text-xl"
            >
              {profile.email}
            </a>

            <div className="mt-6 flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith('mailto:') ? undefined : '_blank'
                  }
                  rel={
                    link.href.startsWith('mailto:')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <pre
            aria-hidden="true"
            className="overflow-x-auto text-[10px] leading-tight text-accent/70 sm:text-xs"
          >
            {ASCII_NAME}
          </pre>
          <p className="mt-4 text-xs text-text-muted">
            © {year} {profile.name[lang]} · {profile.title[lang]}
          </p>
        </div>
      </footer>
    </>
  )
}
