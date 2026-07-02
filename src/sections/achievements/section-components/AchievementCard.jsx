import { useState } from 'react'
import AwardModal from './AwardModal'

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 15h-8.5A2.25 2.25 0 012 12.75v-8.5A2.25 2.25 0 014.25 2h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
    </svg>
  )
}

export default function AchievementCard({
  image,
  title,
  type,
  description,
  placed,
}) {
  const [open, setOpen] = useState(false)

  const cardClasses = [
    'group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white text-left shadow-sm',
    'transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200/60 hover:shadow-md hover:shadow-orange-500/10',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500',
    'dark:border-white/10 dark:bg-slate-800/80 dark:hover:border-orange-500/30',
  ].join(' ')

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cardClasses}
        aria-label={`View details for ${title}`}
      >
        <div className="relative h-48 w-full shrink-0 overflow-hidden bg-slate-100 sm:h-52 md:h-56 dark:bg-slate-900">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="block h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col p-4">
          {type && (
            <span className="mb-2 inline-block w-fit rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
              {type}
            </span>
          )}
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="line-clamp-2 text-base font-semibold leading-snug text-slate-900 dark:text-white">
              {title}
            </h3>
            <span className="mt-0.5 shrink-0 text-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-orange-400">
              <ExternalIcon />
            </span>
          </div>
          <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-orange-600 dark:text-orange-400">
            View certificate
            <ExternalIcon />
          </span>
        </div>
      </button>

      {open && (
        <AwardModal
          image={image}
          title={title}
          type={type}
          description={description}
          placed={placed}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
