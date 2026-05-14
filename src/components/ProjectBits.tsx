import { useApp } from '../context/AppContext'
import type { MetricCard as MetricCardType, ProjectStatus } from '../data/types'

/**
 * @file Small shared building blocks for project cards and the detail modal.
 */

/** Ongoing/Done status pill. */
export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { t } = useApp()
  const ongoing = status === 'ongoing'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
        ongoing
          ? 'bg-accent/15 text-accent'
          : 'bg-surface-raised text-text-muted'
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${
          ongoing ? 'bg-accent' : 'bg-text-muted'
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
          className="rounded-md border border-border bg-surface-raised px-2 py-0.5 text-[11px] font-medium text-text-muted"
        >
          {tag}
        </li>
      ))}
      {hidden > 0 && (
        <li className="rounded-md border border-border bg-surface-raised px-2 py-0.5 text-[11px] font-medium text-accent">
          +{hidden}
        </li>
      )}
    </ul>
  )
}

/** Metric highlight card: large value + small label. */
export function MetricCard({ metric }: { metric: MetricCardType }) {
  const { lang } = useApp()
  return (
    <div className="rounded-lg border border-border bg-surface-raised p-4">
      <div className="text-xl font-bold text-accent">{metric.value}</div>
      <div className="mt-1 text-xs text-text-muted">{metric.label[lang]}</div>
    </div>
  )
}
