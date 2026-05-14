import { useApp } from '../context/AppContext'
import { profile } from '../data/profile'
import { experiences } from '../data/experience'

/**
 * @file Hero section (#home): a calm, terminal-flavored intro —
 * a `$ whoami` line, the name set large, monospace metadata, slogan, CTAs.
 * The block reveals on load with a short staggered animation.
 */
export function Hero() {
  const { lang, t } = useApp()
  const job = experiences[0]

  return (
    <section id="home" className="relative px-5 sm:px-8">
      <div className="mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center py-32">
        {/* terminal-flavored opening line */}
        <p
          className="reveal mb-7 font-mono text-xs text-text-faint"
          style={{ animationDelay: '0ms' }}
        >
          <span className="text-accent">$</span> whoami
        </p>

        {/* name — typographically dominant */}
        <h1
          className="reveal text-5xl font-bold leading-[1.05] tracking-tight text-text sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '70ms' }}
        >
          {profile.name[lang]}
        </h1>

        {/* monospace metadata, like log output */}
        <div
          className="reveal mt-6 flex flex-col gap-1 font-mono text-sm text-text-muted"
          style={{ animationDelay: '140ms' }}
        >
          <p>
            <span className="text-text-faint">{'> '}</span>
            {profile.title[lang]}
          </p>
          <p>
            <span className="text-text-faint">{'> '}</span>
            {job.period[lang]}
            <span className="text-text-faint"> · </span>
            {job.company[lang]}
            <span className="text-text-faint"> · </span>
            {job.location[lang]}
          </p>
        </div>

        {/* slogan */}
        <p
          className="reveal mt-8 max-w-xl text-base leading-relaxed text-text-muted"
          style={{ animationDelay: '210ms' }}
        >
          {profile.slogan[lang]}
        </p>

        {/* CTAs */}
        <div
          className="reveal mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: '280ms' }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 font-mono text-xs font-semibold text-on-accent transition-colors hover:border-accent-hover hover:bg-accent-hover"
          >
            {t('ctaViewWork')}
            <span className="transition-transform group-hover:translate-x-0.5">
              {'->'}
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border px-5 py-2.5 font-mono text-xs font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            {t('ctaContact')}
          </a>
        </div>
      </div>
    </section>
  )
}
