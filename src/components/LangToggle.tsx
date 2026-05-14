import { useApp } from '../context/AppContext'
import type { Lang } from '../data/types'

/**
 * @file KO / EN language toggle (segmented control).
 */
const LANGS: Lang[] = ['ko', 'en']

export function LangToggle() {
  const { lang, setLang, t } = useApp()

  return (
    <div
      role="group"
      aria-label={t('langLabel')}
      className="flex items-center rounded-full border border-border bg-surface p-0.5"
    >
      {LANGS.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
            lang === option
              ? 'bg-accent text-white'
              : 'text-text-muted hover:text-text'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
