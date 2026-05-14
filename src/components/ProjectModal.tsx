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
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
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
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-border bg-surface shadow-2xl sm:rounded-2xl"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="text-3xl" aria-hidden="true">
              {project.thumbnail}
            </span>
            <div>
              <h2
                id={titleId}
                className="text-lg font-bold leading-snug text-text"
              >
                {project.name[lang]}
              </h2>
              <div className="mt-2">
                <StatusBadge status={project.status} />
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('closeModal')}
            className="shrink-0 rounded-md p-1.5 text-text-muted transition-colors hover:bg-surface-raised hover:text-text"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label={project.name[lang]}
          className="flex border-b border-border px-2 sm:px-4"
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
              className={`-mb-px border-b-2 px-3 py-3 text-sm font-medium transition-colors sm:px-4 ${
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
          <div className="flex gap-3 border-t border-border p-5 sm:p-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                {t('linkLive')}
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-accent"
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
    <div className="flex flex-col gap-6">
      {/* Key facts */}
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {facts.map((fact) => (
          <div
            key={fact.key}
            className="rounded-lg border border-border bg-surface-raised p-3"
          >
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">
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
        <h3 className="mb-2 text-sm font-semibold text-text">
          {t('labelBackground')}
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">
          {project.background[lang]}
        </p>
      </div>

      {/* Stack */}
      <div>
        <h3 className="mb-2 text-sm font-semibold text-text">
          {t('labelStack')}
        </h3>
        <StackTags stack={project.stack} />
      </div>

      {/* Gallery */}
      <div>
        <h3 className="mb-2 text-sm font-semibold text-text">
          {t('labelGallery')}
        </h3>
        {project.gallery.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {project.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.name[lang]} ${i + 1}`}
                loading="lazy"
                className="aspect-video w-full rounded-lg border border-border object-cover"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-surface-raised text-xs text-text-muted"
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
    <div className="flex flex-col gap-6">
      {/* Contribution bar */}
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <h3 className="text-sm font-semibold text-text">
            {t('labelContribution')}
          </h3>
          <span className="text-sm font-bold text-accent">
            {project.contribution}%
          </span>
        </div>
        <div
          className="h-2.5 w-full overflow-hidden rounded-full bg-surface-raised"
          role="progressbar"
          aria-valuenow={project.contribution}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={t('labelContribution')}
        >
          <div
            className="h-full rounded-full bg-accent transition-all"
            style={{ width: `${project.contribution}%` }}
          />
        </div>
      </div>

      {/* Responsibility list */}
      <ul className="flex flex-col gap-2.5">
        {project.responsibilities[lang].map((item, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-lg border border-border bg-surface-raised p-3 text-sm leading-relaxed text-text"
          >
            <span className="shrink-0 text-xs font-bold text-accent">
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
      <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
        <span className="text-3xl" aria-hidden="true">
          🗂️
        </span>
        <p className="text-sm text-text-muted">{t('problemsEmpty')}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      {project.problems.map((problem, i) => (
        <ProblemBlock key={i} problem={problem} />
      ))}
    </div>
  )
}

function ProblemBlock({ problem }: { problem: ProblemCase }) {
  const { lang, t } = useApp()

  const steps: { key: UiKey; value: string }[] = [
    { key: 'stepSituation', value: problem.situation[lang] },
    { key: 'stepCause', value: problem.cause[lang] },
    { key: 'stepSolution', value: problem.solution[lang] },
    { key: 'stepResult', value: problem.result[lang] },
  ]

  return (
    <article className="rounded-xl border border-border bg-surface-raised p-5">
      <h3 className="mb-4 text-sm font-bold text-text">
        {problem.title[lang]}
      </h3>
      <ol className="flex flex-col gap-3">
        {steps.map((step) => (
          <li key={step.key} className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-accent">
              {t(step.key)}
            </span>
            <p className="text-sm leading-relaxed text-text-muted">
              {step.value}
            </p>
          </li>
        ))}
      </ol>
      {problem.code && (
        <pre className="mt-4 overflow-x-auto rounded-lg border border-border bg-bg p-4 text-xs leading-relaxed text-text">
          <code>{problem.code.snippet}</code>
        </pre>
      )}
    </article>
  )
}
