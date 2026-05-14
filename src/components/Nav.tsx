import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { ThemeSwitcher } from './ThemeSwitcher'
import { LangToggle } from './LangToggle'
import type { UiKey } from '../i18n/ui'

/**
 * @file Fixed top navigation with anchor links, active-section highlight,
 * theme/language controls, and a collapsible mobile menu.
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
  const { t, lang } = useApp()
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id))

  const initials = lang === 'ko' ? '정상준' : 'SJ'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        {/* Brand */}
        <a
          href="#home"
          className="text-base font-semibold tracking-tight text-text"
        >
          {initials}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
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
        <div className="hidden items-center gap-2 md:flex">
          <LangToggle />
          <ThemeSwitcher />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-text md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-transform ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-opacity ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-transform ${
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
          className="border-t border-border bg-bg px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    active === item.id
                      ? 'bg-surface text-accent'
                      : 'text-text-muted hover:bg-surface hover:text-text'
                  }`}
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
            <LangToggle />
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}
