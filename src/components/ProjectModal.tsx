import { useRef, useState } from 'react'
import { useApp } from '../context/AppContext'
import { useFocusTrap } from '../hooks/useFocusTrap'
import type { Project, ProblemCase } from '../data/types'
import { MetricCard, StackTags, StatusBadge } from './ProjectBits'
import type { UiKey } from '../i18n/ui'

/**
 * @file Accessible project detail modal with 3 tabs:
 * Overview / Responsibilities / Problem Solving.
 * Focus trap, Esc-to-close, body scroll lock and backdrop click are handled.
 * Flat + monospace styling to match the "engineering notebook" language.
 */
type TabId = 'overview' | 'responsibilities' | 'problems'

const TABS: { id: TabId; key: UiKey }[] = [
  { id: 'overview', key: 'tabOverview' },
  { id: 'responsibilities', key: 'tabResponsibilities' },
  { id: 'problems', key: 'tabProblems' },
]

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lang, t } = useApp()
  const [tab, setTab] = useState<TabId>('overview')
  const panelRef = useRef<HTMLDivElement>(null)

  useFocusTrap(panelRef, true, onClose)

  const titleId = `modal-title-${project.id}`

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => {
        // Close only when the backdrop itself is clicked.
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden border border-border-strong bg-surface shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <div>
            <div className="mb-1.5 flex items-center gap-3 font-mono text-[11px] text-text-faint">
              <span>project</span>
              <StatusBadge status={project.status} />
            </div>
            <h2
              id={titleId}
              className="text-lg font-bold leading-snug text-text"
            >
              {project.name[lang]}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('closeModal')}
            className="shrink-0 font-mono text-xs text-text-muted transition-colors hover:text-accent"
          >
            [esc] ✕
          </button>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label={project.name[lang]}
          className="flex gap-6 border-b border-border px-5 font-mono text-xs sm:px-6"
        >
          {TABS.map((item) => (
            <button
              key={item.id}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={tab === item.id}
              aria-controls={`panel-${item.id}`}
              tabIndex={tab === item.id ? 0 : -1}
              onClick={() => setTab(item.id)}
              className={`-mb-px border-b py-3 transition-colors ${
                tab === item.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-text-muted hover:text-text'
              }`}
            >
              {t(item.key)}
            </button>
          ))}
        </div>

        {/* Panels */}
        <div className="overflow-y-auto p-5 sm:p-6">
          {tab === 'overview' && (
            <div
              role="tabpanel"
              id="panel-overview"
              aria-labelledby="tab-overview"
            >
              <OverviewPanel project={project} />
            </div>
          )}
          {tab === 'responsibilities' && (
            <div
              role="tabpanel"
              id="panel-responsibilities"
              aria-labelledby="tab-responsibilities"
            >
              <ResponsibilitiesPanel project={project} />
            </div>
          )}
          {tab === 'problems' && (
            <div
              role="tabpanel"
              id="panel-problems"
              aria-labelledby="tab-problems"
            >
              <ProblemsPanel project={project} />
            </div>
          )}
        </div>

        {/* Footer links */}
        {(project.liveUrl || project.repoUrl) && (
          <div className="flex gap-3 border-t border-border px-5 py-4 sm:px-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent bg-accent px-4 py-2 font-mono text-xs font-semibold text-on-accent transition-colors hover:border-accent-hover hover:bg-accent-hover"
              >
                {t('linkLive')}
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border px-4 py-2 font-mono text-xs font-semibold text-text transition-colors hover:border-accent hover:text-accent"
              >
                {t('linkRepo')}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Shared: small monospace label                                       */
/* ------------------------------------------------------------------ */
function PanelLabel({ children }: { children: string }) {
  return (
    <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-text-faint">
      {children}
    </h3>
  )
}

/* ------------------------------------------------------------------ */
/* Overview tab                                                        */
/* ------------------------------------------------------------------ */
function OverviewPanel({ project }: { project: Project }) {
  const { lang, t } = useApp()

  const facts: { key: UiKey; value: string }[] = [
    { key: 'labelClient', value: project.client[lang] },
    { key: 'labelPeriod', value: project.period[lang] },
    { key: 'labelRole', value: project.role[lang] },
    { key: 'labelTeamSize', value: project.teamSize[lang] },
  ]

  return (
    <div className="flex flex-col gap-7">
      {/* Key facts */}
      <dl className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-4">
        {facts.map((fact) => (
          <div
            key={fact.key}
            className="border-b border-r border-border p-3"
          >
            <dt className="font-mono text-[10px] uppercase tracking-wide text-text-faint">
              {t(fact.key)}
            </dt>
            <dd className="mt-1 text-sm font-medium text-text">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Metrics */}
      {project.metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {project.metrics.map((metric, i) => (
            <MetricCard key={i} metric={metric} />
          ))}
        </div>
      )}

      {/* Background */}
      <div>
        <PanelLabel>{t('labelBackground')}</PanelLabel>
        <p className="text-sm leading-relaxed text-text-muted">
          {project.background[lang]}
        </p>
      </div>

      {/* Stack */}
      <div>
        <PanelLabel>{t('labelStack')}</PanelLabel>
        <StackTags stack={project.stack} />
      </div>

      {/* Gallery */}
      <div>
        <PanelLabel>{t('labelGallery')}</PanelLabel>
        {project.gallery.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {project.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.name[lang]} ${i + 1}`}
                loading="lazy"
                className="aspect-video w-full border border-border object-cover"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex aspect-video items-center justify-center border border-dashed border-border bg-surface-raised font-mono text-[11px] text-text-faint"
              >
                {t('galleryPlaceholder')}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Responsibilities tab                                                */
/* ------------------------------------------------------------------ */
function ResponsibilitiesPanel({ project }: { project: Project }) {
  const { lang, t } = useApp()

  return (
    <div className="flex flex-col gap-7">
      {/* Contribution bar */}
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <PanelLabel>{t('labelContribution')}</PanelLabel>
          <span className="font-mono text-sm font-semibold text-accent">
            {project.contribution}%
          </span>
        </div>
        <div
          className="h-1.5 w-full bg-surface-raised"
          role="progressbar"
          aria-valuenow={project.contribution}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={t('labelContribution')}
        >
          <div
            className="h-full bg-accent"
            style={{ width: `${project.contribution}%` }}
          />
        </div>
      </div>

      {/* Responsibility list */}
      <ul className="border-t border-border">
        {project.responsibilities[lang].map((item, i) => (
          <li
            key={i}
            className="flex gap-4 border-b border-border py-3 text-sm leading-relaxed text-text"
          >
            <span className="shrink-0 pt-px font-mono text-xs text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Problem Solving tab                                                 */
/* ------------------------------------------------------------------ */
function ProblemsPanel({ project }: { project: Project }) {
  const { t } = useApp()

  if (project.problems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-12 text-center">
        <span className="font-mono text-xs text-text-faint" aria-hidden="true">
          {'// empty'}
        </span>
        <p className="text-sm text-text-muted">{t('problemsEmpty')}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      {project.problems.map((problem, i) => (
        <ProblemBlock key={i} problem={problem} index={i + 1} />
      ))}
    </div>
  )
}

function ProblemBlock({
  problem,
  index,
}: {
  problem: ProblemCase
  index: number
}) {
  const { lang, t } = useApp()

  const steps: { key: UiKey; value: string }[] = [
    { key: 'stepSituation', value: problem.situation[lang] },
    { key: 'stepCause', value: problem.cause[lang] },
    { key: 'stepSolution', value: problem.solution[lang] },
    { key: 'stepResult', value: problem.result[lang] },
  ]

  return (
    <article className="border border-border bg-surface-raised">
      <h3 className="flex items-baseline gap-3 border-b border-border px-4 py-3 text-sm font-bold text-text">
        <span className="font-mono text-xs text-accent">
          {String(index).padStart(2, '0')}
        </span>
        {problem.title[lang]}
      </h3>
      <ol className="flex flex-col">
        {steps.map((step, i) => (
          <li
            key={step.key}
            className={`flex flex-col gap-1 px-4 py-3 sm:flex-row sm:gap-4 ${
              i < steps.length - 1 ? 'border-b border-border' : ''
            }`}
          >
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-wide text-accent sm:w-20 sm:pt-0.5">
              {t(step.key)}
            </span>
            <p className="text-sm leading-relaxed text-text-muted">
              {step.value}
            </p>
          </li>
        ))}
      </ol>
      {problem.code && (
        <pre className="overflow-x-auto border-t border-border bg-bg p-4 font-mono text-xs leading-relaxed text-text">
          <code>{problem.code.snippet}</code>
        </pre>
      )}
    </article>
  )
}
