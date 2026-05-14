import { useApp } from '../context/AppContext'
import { profile } from '../data/profile'

/**
 * @file Hero section (#home): name, title, slogan, and two CTA buttons.
 */
export function Hero() {
  const { lang, t } = useApp()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 pt-16 sm:px-8"
    >
      {/* Subtle amber radial glow, kept restrained */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(60% 50% at 20% 30%, color-mix(in srgb, var(--accent) 14%, transparent), transparent)',
        }}
      />
      <div className="mx-auto w-full max-w-6xl py-20">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Portfolio
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
          {profile.name[lang]}
        </h1>
        <p className="mt-4 text-lg font-medium text-text-muted sm:text-xl lg:text-2xl">
          {profile.title[lang]}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
          {profile.slogan[lang]}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {t('ctaViewWork')}
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent"
          >
            {t('ctaContact')}
          </a>
        </div>
      </div>
    </section>
  )
}
