import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { skillCategories } from '../data/skills'
import { SectionHeader } from './SectionHeader'

/**
 * Skill icon from the simple-icons CDN. Some slugs (e.g. trademark-removed
 * "oracle") 404 — on error we fall back to a lettered badge so the row
 * never shows a broken image.
 */
function SkillIcon({ icon, name }: { icon: string; name: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        aria-hidden="true"
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/15 text-[11px] font-bold text-accent"
      >
        {name.charAt(0)}
      </span>
    )
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${icon}`}
      alt=""
      width={20}
      height={20}
      loading="lazy"
      className="h-5 w-5 shrink-0"
      onError={() => setFailed(true)}
    />
  )
}

/**
 * @file Skills section (#skills): skills grouped by category.
 * Icons come from simple-icons CDN; `learning` skills get a small badge.
 */
export function Skills() {
  const { lang, t } = useApp()

  return (
    <section id="skills" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title={t('sectionSkills')}
          description={t('sectionSkillsDesc')}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-accent">
                {category.label[lang]}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3 rounded-lg border border-transparent bg-surface-raised px-3 py-2 transition-colors hover:border-border"
                  >
                    <SkillIcon icon={skill.icon} name={skill.name} />
                    <span className="text-sm font-medium text-text">
                      {skill.name}
                    </span>
                    {skill.learning && (
                      <span className="ml-auto rounded-full border border-accent/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                        {t('badgeLearning')}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
