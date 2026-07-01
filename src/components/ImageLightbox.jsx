import { useEffect } from 'react'
import { createPortal } from 'react-dom'

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  )
}

function ChevronIcon({ direction }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      {direction === 'left' ? (
        <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
      ) : (
        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
      )}
    </svg>
  )
}

export default function ImageLightbox({
  src,
  alt,
  onClose,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
}) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && hasPrev) onPrev()
      if (event.key === 'ArrowRight' && hasNext) onNext()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/92"
        onClick={onClose}
        aria-label="Close image preview"
      />

      <button
        type="button"
        onClick={onClose}
        className="fixed top-4 right-4 z-[210] rounded-full border border-white/20 bg-black/60 p-2.5 text-white transition-colors hover:bg-black/80"
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={onPrev}
          className="fixed top-1/2 left-4 z-[210] -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-3 text-white transition-colors hover:bg-black/80 sm:left-6"
          aria-label="Previous image"
        >
          <ChevronIcon direction="left" />
        </button>
      )}

      <img
        src={src}
        alt={alt}
        className="relative z-[205] h-auto w-auto max-h-[100dvh] max-w-[100dvw] object-contain p-4 sm:p-8"
      />

      {hasNext && (
        <button
          type="button"
          onClick={onNext}
          className="fixed top-1/2 right-4 z-[210] -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-3 text-white transition-colors hover:bg-black/80 sm:right-6"
          aria-label="Next image"
        >
          <ChevronIcon direction="right" />
        </button>
      )}
    </div>,
    document.body,
  )
}
