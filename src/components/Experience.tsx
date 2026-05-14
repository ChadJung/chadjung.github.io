import { useApp } from '../context/AppContext'
import { experiences } from '../data/experience'
import { SectionHeader } from './SectionHeader'

/**
 * @file Experience section (#experience): timeline-style company cards
 * with role, period, location and achievement bullets.
 */
export function Experience() {
  const { lang, t } = useApp()

  return (
    <section id="experience" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t('sectionExperience')} />

        <ol className="relative ml-3 border-l border-border">
          {experiences.map((exp) => (
            <li key={exp.id} className="mb-10 pl-8 last:mb-0">
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent"
              />
              <div className="rounded-xl border border-border bg-surface p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-text">
                    {exp.company[lang]}
                  </h3>
                  <span className="text-sm font-medium text-accent">
                    {exp.period[lang]}
                  </span>
                </div>
                <p className="mt-1 text-sm text-text-muted">
                  {exp.role[lang]} · {exp.location[lang]}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {exp.achievements[lang].map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm leading-relaxed text-text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
