/**
 * @file Reusable section heading — numbered like a spec document:
 * `[ 01 ]  TITLE   english` sitting on a hairline rule.
 */
interface SectionHeaderProps {
  /** Two-digit section index, e.g. "01". */
  index: string
  title: string
  /** Monospace english sub-label shown after the title. */
  en: string
  description?: string
}

export function SectionHeader({
  index,
  title,
  en,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-border pb-4">
        <span className="font-mono text-xs text-accent">[ {index} ]</span>
        <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
          {title}
        </h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-faint">
          {en}
        </span>
      </div>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted">
          {description}
        </p>
      )}
    </div>
  )
}
