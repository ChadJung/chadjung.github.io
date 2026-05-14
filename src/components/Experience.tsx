import { useApp } from '../context/AppContext'
import { experiences } from '../data/experience'
import { SectionHeader } from './SectionHeader'

/**
 * @file Experience section (#experience) — each role rendered as a
 * log-style entry: a hairline-bordered card with a metadata header and
 * numbered achievement rows.
 */
export function Experience() {
  const { lang, t } = useApp()

  return (
    <section
      id="experience"
      className="border-t border-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          index="02"
          title={t('sectionExperience')}
          en="Experience"
        />

        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="ticked relative border border-border bg-surface"
            >
              {/* Metadata header */}
              <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-border px-5 py-4 sm:px-6">
                <div>
                  <h3 className="text-lg font-bold text-text">
                    {exp.company[lang]}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-text-muted">
                    {exp.role[lang]}
                  </p>
                </div>
                <div className="font-mono text-xs sm:text-right">
                  <div className="text-accent">{exp.period[lang]}</div>
                  <div className="mt-0.5 text-text-faint">
                    {exp.location[lang]}
                  </div>
                </div>
              </header>

              {/* Numbered achievement rows */}
              <ol>
                {exp.achievements[lang].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 border-b border-border px-5 py-3 last:border-b-0 sm:px-6"
                  >
                    <span className="shrink-0 pt-px font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm leading-relaxed text-text-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
