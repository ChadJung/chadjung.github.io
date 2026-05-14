import { useApp, THEMES } from '../context/AppContext'
import type { Theme } from '../data/types'

/**
 * @file Flat monospace theme picker — one of 3 formal themes.
 */
const THEME_LABEL: Record<Theme, string> = {
  dark: 'dark',
  light: 'light',
  navy: 'navy',
}

export function ThemeSwitcher() {
  const { theme, setTheme, t } = useApp()

  return (
    <div
      role="group"
      aria-label={t('themeLabel')}
      className="flex items-center gap-2 font-mono text-[11px]"
    >
      {THEMES.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setTheme(option)}
          aria-pressed={theme === option}
          className={`transition-colors ${
            theme === option
              ? 'text-accent'
              : 'text-text-faint hover:text-text'
          }`}
        >
          {theme === option ? `[${THEME_LABEL[option]}]` : THEME_LABEL[option]}
        </button>
      ))}
    </div>
  )
}
