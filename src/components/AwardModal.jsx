import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { formatWordCount } from '../utils/countWords'

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  )
}

export default function AwardModal({
  image,
  title,
  type,
  description,
  placed,
  onClose,
}) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="award-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close award details"
      />

      <div className="relative z-10 flex max-h-[min(94dvh,920px)] min-h-[min(85dvh,640px)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl lg:max-w-7xl dark:border-white/10 dark:bg-slate-800 md:min-h-[min(88dvh,800px)] md:flex-row">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 rounded-full border border-slate-200/80 bg-white/90 p-2 text-slate-600 transition-colors hover:bg-white hover:text-slate-900 dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:text-white"
          aria-label="Close"
        >
          <CloseIcon />
        </button>

        <div className="flex min-h-[240px] items-center justify-center border-b border-slate-200/80 bg-slate-50 p-6 sm:min-h-[280px] md:min-h-0 md:w-1/2 md:border-r md:border-b-0 md:p-8 dark:border-white/10 dark:bg-slate-900/60">
          <img
            src={image}
            alt={title}
            className="max-h-[min(38dvh,480px)] w-auto max-w-full object-contain md:max-h-[min(78dvh,720px)]"
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col p-6 sm:p-8 md:w-1/2">
          {type && (
            <span className="mb-3 inline-block w-fit rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
              {type}
            </span>
          )}

          <h2
            id="award-modal-title"
            className="mb-4 pr-10 text-lg font-semibold leading-snug text-slate-900 dark:text-white sm:text-xl"
          >
            {title}
          </h2>

          <div className="min-h-0 flex-1 overflow-y-auto pr-1">
            <p className="whitespace-pre-line text-justify text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </div>

          <p className="mt-4 shrink-0 border-t border-slate-200/80 pt-3 text-right text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
            {formatWordCount(description)}
            {placed ? ` · Placed ${placed}` : ''}
          </p>
        </div>
      </div>
    </div>,
    document.body,
  )
}
