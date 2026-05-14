import { useApp } from '../context/AppContext'
import { certifications } from '../data/certifications'
import { SectionHeader } from './SectionHeader'

/**
 * @file Certifications section (#certifications): newest-first timeline.
 */
export function Certifications() {
  const { lang, t } = useApp()

  // Sort newest-first by the YYYY.MM date string.
  const sorted = [...certifications].sort((a, b) =>
    b.date.localeCompare(a.date),
  )

  return (
    <section id="certifications" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t('sectionCertifications')} />

        <ol className="relative ml-3 border-l border-border">
          {sorted.map((cert) => (
            <li key={cert.id} className="mb-8 pl-8 last:mb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent"
              />
              <div className="rounded-xl border border-border bg-surface p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {cert.date}
                </span>
                <h3 className="mt-1 text-base font-semibold text-text">
                  {cert.name[lang]}
                </h3>
                <p className="mt-0.5 text-sm text-text-muted">
                  {cert.issuer[lang]}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
