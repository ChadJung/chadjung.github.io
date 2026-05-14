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
        className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-sm bg-accent/15 text-[10px] font-bold text-accent"
      >
        {name.charAt(0)}
      </span>
    )
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${icon}`}
      alt=""
      width={18}
      height={18}
      loading="lazy"
      className="h-[18px] w-[18px] shrink-0"
      onError={() => setFailed(true)}
    />
  )
}

/**
 * @file Skills section (#skills) — hairline-separated lists grouped by
 * category. Each row pairs a simple-icons logo with the name; skills still
 * in the learning stage carry a quiet monospace marker.
 */
export function Skills() {
  const { lang, t } = useApp()

  return (
    <section
      id="skills"
      className="border-t border-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          index="01"
          title={t('sectionSkills')}
          en="Skills"
          description={t('sectionSkillsDesc')}
        />

        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {category.label[lang]}
              </h3>
              <ul>
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between border-b border-border py-2.5"
                  >
                    <span className="flex items-center gap-2.5">
                      <SkillIcon icon={skill.icon} name={skill.name} />
                      <span className="text-sm text-text">{skill.name}</span>
                    </span>
                    {skill.learning && (
                      <span className="font-mono text-[10px] uppercase tracking-wide text-text-faint">
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
