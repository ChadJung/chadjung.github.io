import { useApp } from '../context/AppContext'
import { skillCategories } from '../data/skills'
import { SectionHeader } from './SectionHeader'

/**
 * @file Skills section (#skills) — typographic, hairline-separated lists
 * grouped by category. No logos: just clean type, with a quiet monospace
 * marker on skills that are still in the learning stage.
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
                    className="flex items-baseline justify-between border-b border-border py-2.5"
                  >
                    <span className="text-sm text-text">{skill.name}</span>
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
