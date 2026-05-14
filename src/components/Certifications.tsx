import { useApp } from '../context/AppContext'
import { certifications } from '../data/certifications'
import { SectionHeader } from './SectionHeader'

/**
 * @file Certifications section (#certifications) — newest-first, rendered
 * as plain hairline-separated index rows: date · name · issuer.
 */
export function Certifications() {
  const { lang, t } = useApp()

  // Sort newest-first by the YYYY.MM date string.
  const sorted = [...certifications].sort((a, b) =>
    b.date.localeCompare(a.date),
  )

  return (
    <section
      id="certifications"
      className="border-t border-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          index="03"
          title={t('sectionCertifications')}
          en="Certifications"
        />

        <ul className="border-t border-border">
          {sorted.map((cert) => (
            <li
              key={cert.id}
              className="flex flex-col gap-1 border-b border-border py-5 sm:flex-row sm:items-baseline sm:gap-10"
            >
              <span className="shrink-0 font-mono text-xs text-accent sm:w-24">
                {cert.date}
              </span>
              <div>
                <h3 className="text-base font-semibold text-text">
                  {cert.name[lang]}
                </h3>
                <p className="mt-0.5 text-sm text-text-muted">
                  {cert.issuer[lang]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
