import { useEffect, useState } from 'react'

const NAME = 'Jeric B. Mata'
const TYPING_MS = 95
const DELETING_MS = 55
const PAUSE_TYPED_MS = 2200
const PAUSE_DELETED_MS = 600

export default function TypewriterName() {
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
      setDisplayed(NAME)
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
        setDisplayed(NAME.slice(0, index))

        if (index >= NAME.length) {
          schedule(() => {
            deleting = true
            tick()
          }, PAUSE_TYPED_MS)
        } else {
          schedule(tick, TYPING_MS)
        }
        return
      }

      index -= 1
      setDisplayed(NAME.slice(0, index))

      if (index <= 0) {
        schedule(() => {
          deleting = false
          tick()
        }, PAUSE_DELETED_MS)
      } else {
        schedule(tick, DELETING_MS)
      }
    }

    schedule(tick, 300)

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [reducedMotion])

  if (reducedMotion) {
    return <span className="gradient-text">{NAME}</span>
  }

  return (
    <span className="relative inline-block">
      <span aria-hidden="true" className="invisible">
        {NAME}
      </span>
      <span className="absolute left-0 top-0 whitespace-nowrap">
        <span className="gradient-text">{displayed}</span>
        <span className="typewriter-cursor" aria-hidden="true">
          |
        </span>
      </span>
    </span>
  )
}
