/**
 * @file Reusable section heading: small accent eyebrow + large title + desc.
 */
interface SectionHeaderProps {
  title: string
  description?: string
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-2xl text-sm text-text-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
