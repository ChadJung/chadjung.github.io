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
 * Monospace filter tabs + numbered, typographic project cards (no emoji)
 * that open a detail modal.
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
    <section
      id="projects"
      className="border-t border-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          index="04"
          title={t('sectionProjects')}
          en="Projects"
          description={t('sectionProjectsDesc')}
        />

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label={t('sectionProjects')}
          className="mb-8 flex flex-wrap gap-x-6 gap-y-1 border-b border-border font-mono text-xs"
        >
          {FILTERS.map((item) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`-mb-px border-b pb-2.5 pt-1 transition-colors ${
                filter === item.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-text-muted hover:text-text'
              }`}
            >
              {t(item.key)}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 1}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Project card — numbered, typographic, no emoji thumbnail.            */
/* The whole card is the click target; the "view details" line is just  */
/* a visual cue. Exposed as a button for keyboard + screen-reader use.  */
/* ------------------------------------------------------------------ */
function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: () => void
}) {
  const { lang, t } = useApp()

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`${project.name[lang]} — ${t('viewDetails')}`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen()
        }
      }}
      className="ticked group relative flex cursor-pointer flex-col border border-border bg-surface p-5 transition-colors hover:border-accent-hover"
    >
      {/* Index + status */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-text-faint">
          P-{String(index).padStart(2, '0')}
        </span>
        <StatusBadge status={project.status} />
      </div>

      {/* Name + summary */}
      <h3 className="mt-4 text-base font-bold leading-snug text-text">
        {project.name[lang]}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
        {project.summary[lang]}
      </p>

      {/* Stack */}
      <div className="mt-4">
        <StackTags stack={project.stack} limit={4} />
      </div>

      {/* Visual cue — the whole card is already clickable */}
      <span className="mt-5 flex items-center gap-2 self-start font-mono text-xs text-text-muted transition-colors group-hover:text-accent">
        {t('viewDetails')}
        <span className="transition-transform group-hover:translate-x-0.5">
          {'->'}
        </span>
      </span>
    </article>
  )
}
