import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import type { Lang, Theme } from '../data/types'
import { ui, type UiKey } from '../i18n/ui'

/**
 * @file Combined theme + language context.
 * Both preferences persist to localStorage. Defaults: theme 'dark', lang 'ko'.
 */

const THEME_KEY = 'portfolio-theme'
const LANG_KEY = 'portfolio-lang'
const THEMES: Theme[] = ['dark', 'light', 'navy']

interface AppContextValue {
  theme: Theme
  setTheme: (t: Theme) => void
  cycleTheme: () => void
  lang: Lang
  setLang: (l: Lang) => void
  /** Translate a static UI label key into the current language. */
  t: (key: UiKey) => string
}

const AppContext = createContext<AppContextValue | null>(null)

/** Read initial theme from storage, falling back to the default. */
function readTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(THEME_KEY)
  return stored === 'light' || stored === 'navy' || stored === 'dark'
    ? stored
    : 'dark'
}

/** Read initial language from storage, falling back to the default. */
function readLang(): Lang {
  if (typeof window === 'undefined') return 'ko'
  const stored = window.localStorage.getItem(LANG_KEY)
  return stored === 'en' || stored === 'ko' ? stored : 'ko'
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readTheme)
  const [lang, setLangState] = useState<Lang>(readLang)

  // Reflect theme onto <html data-theme> and persist it.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  // Reflect language onto <html lang> and persist it.
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    window.localStorage.setItem(LANG_KEY, lang)
  }, [lang])

  const setTheme = (t: Theme) => setThemeState(t)
  const cycleTheme = () =>
    setThemeState((prev) => THEMES[(THEMES.indexOf(prev) + 1) % THEMES.length])
  const setLang = (l: Lang) => setLangState(l)
  const t = (key: UiKey) => ui[key][lang]

  return (
    <AppContext.Provider
      value={{ theme, setTheme, cycleTheme, lang, setLang, t }}
    >
      {children}
    </AppContext.Provider>
  )
}

/** Access theme + language state. Must be used within <AppProvider>. */
export function useApp(): AppContextValue {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

export { THEMES }
