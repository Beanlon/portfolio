import { useEffect, useState } from 'react'

export default function Typewriter({
  text,
  textClassName = '',
  cursorClassName = 'typewriter-cursor',
  typingMs = 95,
  deletingMs = 55,
  pauseTypedMs = 2200,
  pauseDeletedMs = 700,
}) {
  const [displayed, setDisplayed] = useState('')
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(text)
      return
    }

    let index = 0
    let deleting = false
    let cancelled = false
    let timeoutId

    const schedule = (fn, delay) => {
      timeoutId = setTimeout(fn, delay)
    }

    const tick = () => {
      if (cancelled) return

      if (!deleting) {
        index += 1
        setDisplayed(text.slice(0, index))

        if (index >= text.length) {
          schedule(() => {
            deleting = true
            tick()
          }, pauseTypedMs)
        } else {
          schedule(tick, typingMs)
        }
        return
      }

      index -= 1
      setDisplayed(text.slice(0, index))

      if (index <= 0) {
        schedule(() => {
          deleting = false
          tick()
        }, pauseDeletedMs)
      } else {
        schedule(tick, deletingMs)
      }
    }

    schedule(tick, 300)

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [reducedMotion, text, typingMs, deletingMs, pauseTypedMs, pauseDeletedMs])

  if (reducedMotion) {
    return <span className={textClassName}>{text}</span>
  }

  return (
    <span className="inline">
      <span className={textClassName}>{displayed}</span>
      <span className={cursorClassName} aria-hidden="true">
        |
      </span>
    </span>
  )
}
