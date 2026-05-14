import { AppProvider } from './context/AppContext'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Certifications } from './components/Certifications'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

/**
 * @file Root application: single-page developer portfolio.
 * Wraps everything in AppProvider (theme + i18n) and lays out the sections.
 */
function App() {
  return (
    <AppProvider>
      <div className="min-h-screen text-text">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-semibold focus:text-on-accent"
        >
          Skip to content
        </a>
        <Nav />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Certifications />
          <Projects />
          <Contact />
        </main>
      </div>
    </AppProvider>
  )
}

export default App
