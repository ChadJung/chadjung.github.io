import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { ThemeSwitcher } from './ThemeSwitcher'
import { LangToggle } from './LangToggle'
import type { UiKey } from '../i18n/ui'

/**
 * @file Fixed top navigation — monospace links, active-section highlight,
 * flat theme/language controls, and a collapsible mobile menu.
 */
const NAV_ITEMS: { id: string; key: UiKey }[] = [
  { id: 'home', key: 'navHome' },
  { id: 'skills', key: 'navSkills' },
  { id: 'experience', key: 'navExperience' },
  { id: 'certifications', key: 'navCertifications' },
  { id: 'projects', key: 'navProjects' },
  { id: 'contact', key: 'navContact' },
]

export function Nav() {
  const { t } = useApp()
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id))

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8"
      >
        {/* Brand — monospace wordmark */}
        <a
          href="#home"
          className="font-mono text-sm font-medium text-text"
        >
          jung<span className="text-accent">.</span>sj
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 font-mono text-xs md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={`transition-colors ${
                  active === item.id
                    ? 'text-accent'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {t(item.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop controls */}
        <div className="hidden items-center gap-3 md:flex">
          <LangToggle />
          <span aria-hidden="true" className="h-3 w-px bg-border-strong" />
          <ThemeSwitcher />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-text md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-transform ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-5 bg-current transition-opacity ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-transform ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-bg px-5 py-3 md:hidden"
        >
          <ul className="flex flex-col font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`flex items-center gap-2 border-b border-border py-3 transition-colors ${
                    active === item.id
                      ? 'text-accent'
                      : 'text-text-muted hover:text-text'
                  }`}
                >
                  <span className="text-text-faint">
                    {active === item.id ? '>' : ' '}
                  </span>
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 py-4">
            <LangToggle />
            <span aria-hidden="true" className="h-3 w-px bg-border-strong" />
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}
