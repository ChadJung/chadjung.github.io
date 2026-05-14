import { useApp } from '../context/AppContext'
import type { MetricCard as MetricCardType, ProjectStatus } from '../data/types'

/**
 * @file Small shared building blocks for project cards and the detail modal.
 * All flat + monospace to match the "engineering notebook" language.
 */

/** Ongoing/Done status marker — a dot + monospace label. */
export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { t } = useApp()
  const ongoing = status === 'ongoing'
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] ${
        ongoing ? 'text-accent' : 'text-text-faint'
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${
          ongoing ? 'bg-accent' : 'bg-text-faint'
        }`}
      />
      {ongoing ? t('statusOngoing') : t('statusDone')}
    </span>
  )
}

/** Stack tag list. When `limit` is set, extra tags collapse into "+N". */
export function StackTags({
  stack,
  limit,
}: {
  stack: string[]
  limit?: number
}) {
  const visible = limit ? stack.slice(0, limit) : stack
  const hidden = limit ? stack.length - visible.length : 0
  return (
    <ul className="flex flex-wrap gap-1.5">
      {visible.map((tag) => (
        <li
          key={tag}
          className="border border-border px-1.5 py-0.5 font-mono text-[10px] text-text-muted"
        >
          {tag}
        </li>
      ))}
      {hidden > 0 && (
        <li className="border border-border px-1.5 py-0.5 font-mono text-[10px] text-accent">
          +{hidden}
        </li>
      )}
    </ul>
  )
}

/** Metric highlight: large monospace value + small label. */
export function MetricCard({ metric }: { metric: MetricCardType }) {
  const { lang } = useApp()
  return (
    <div className="border border-border bg-surface-raised p-4">
      <div className="font-mono text-2xl font-semibold tracking-tight text-accent">
        {metric.value}
      </div>
      <div className="mt-1.5 text-xs leading-snug text-text-muted">
        {metric.label[lang]}
      </div>
    </div>
  )
}
