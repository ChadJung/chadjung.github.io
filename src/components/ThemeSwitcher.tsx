import { useApp, THEMES } from '../context/AppContext'
import type { Theme } from '../data/types'

/**
 * @file Segmented control for picking one of the 3 formal themes.
 */
const THEME_LABEL: Record<Theme, string> = {
  dark: 'Dark',
  light: 'Light',
  navy: 'Navy',
}

export function ThemeSwitcher() {
  const { theme, setTheme, t } = useApp()

  return (
    <div
      role="group"
      aria-label={t('themeLabel')}
      className="flex items-center rounded-full border border-border bg-surface p-0.5"
    >
      {THEMES.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setTheme(option)}
          aria-pressed={theme === option}
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
            theme === option
              ? 'bg-accent text-white'
              : 'text-text-muted hover:text-text'
          }`}
        >
          {THEME_LABEL[option]}
        </button>
      ))}
    </div>
  )
}
