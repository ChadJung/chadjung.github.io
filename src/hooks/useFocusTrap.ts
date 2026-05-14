import { useEffect, type RefObject } from 'react'

/**
 * @file Accessible modal helpers: focus trap, Esc-to-close, body scroll lock.
 * Attach the returned ref to the modal container element.
 */
const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  active: boolean,
  onClose: () => void,
) {
  useEffect(() => {
    if (!active) return

    const container = containerRef.current
    const previouslyFocused = document.activeElement as HTMLElement | null

    // Lock body scroll while the modal is open.
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Move focus into the modal.
    const focusables = container?.querySelectorAll<HTMLElement>(FOCUSABLE)
    focusables?.[0]?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return

      const items = container?.querySelectorAll<HTMLElement>(FOCUSABLE)
      if (!items || items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]

      // Wrap focus at the boundaries of the modal.
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
      previouslyFocused?.focus()
    }
  }, [active, containerRef, onClose])
}
