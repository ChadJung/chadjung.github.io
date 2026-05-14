import { useApp } from '../context/AppContext'
import type { Lang } from '../data/types'

/**
 * @file Flat monospace KO / EN language toggle.
 */
const LANGS: Lang[] = ['ko', 'en']

export function LangToggle() {
  const { lang, setLang, t } = useApp()

  return (
    <div
      role="group"
      aria-label={t('langLabel')}
      className="flex items-center gap-1.5 font-mono text-[11px]"
    >
      {LANGS.map((option, i) => (
        <span key={option} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-text-faint">/</span>}
          <button
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={lang === option}
            className={`uppercase transition-colors ${
              lang === option
                ? 'text-accent'
                : 'text-text-faint hover:text-text'
            }`}
          >
            {option}
          </button>
        </span>
      ))}
    </div>
  )
}
