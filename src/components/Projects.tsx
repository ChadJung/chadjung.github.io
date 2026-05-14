import { useMemo, useState } from 'react'
import { useApp } from '../context/AppContext'
import { projects } from '../data/projects'
import type { Project, ProjectCategory } from '../data/types'
import { SectionHeader } from './SectionHeader'
import { StatusBadge, StackTags } from './ProjectBits'
import { ProjectModal } from './ProjectModal'
import type { UiKey } from '../i18n/ui'

/**
 * @file Projects section (#projects) — the portfolio centerpiece.
 * Multi-tag-aware filter tabs + project cards that open a detail modal.
 */
type Filter = ProjectCategory | 'all'

const FILTERS: { id: Filter; key: UiKey }[] = [
  { id: 'all', key: 'filterAll' },
  { id: 'backend', key: 'filterBackend' },
  { id: 'frontend', key: 'filterFrontend' },
  { id: 'personal', key: 'filterPersonal' },
  { id: 'responsive', key: 'filterResponsive' },
]

export function Projects() {
  const { t } = useApp()
  const [filter, setFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<Project | null>(null)

  // A project shows if "all" is active or it carries the selected tag.
  const visible = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((p) => p.categories.includes(filter)),
    [filter],
  )

  return (
    <section id="projects" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title={t('sectionProjects')}
          description={t('sectionProjectsDesc')}
        />

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label={t('sectionProjects')}
          className="mb-8 flex flex-wrap gap-2"
        >
          {FILTERS.map((item) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === item.id
                  ? 'border-accent bg-accent text-white'
                  : 'border-border bg-surface text-text-muted hover:border-accent hover:text-text'
              }`}
            >
              {t(item.key)}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Project card                                                        */
/* ------------------------------------------------------------------ */
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: () => void
}) {
  const { lang, t } = useApp()

  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent">
      {/* Thumbnail + status */}
      <div className="flex items-start justify-between">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-lg bg-surface-raised text-3xl"
          aria-hidden="true"
        >
          {project.thumbnail}
        </div>
        <StatusBadge status={project.status} />
      </div>

      {/* Name + summary */}
      <h3 className="mt-4 text-base font-semibold leading-snug text-text">
        {project.name[lang]}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
        {project.summary[lang]}
      </p>

      {/* Stack */}
      <div className="mt-4">
        <StackTags stack={project.stack} limit={4} />
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={onOpen}
        className="mt-5 w-full rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
      >
        {t('viewDetails')}
      </button>
    </article>
  )
}
