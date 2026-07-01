import { useState } from 'react'
import AwardModal from './AwardModal'

export default function AchievementCard({
  image,
  title,
  type,
  description,
  placed,
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200/60 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/10 dark:bg-slate-800/80 dark:hover:border-indigo-500/30"
        aria-label={`View details for ${title}`}
      >
        <div className="flex h-48 items-center justify-center bg-slate-50 p-4 sm:h-52 md:h-56 dark:bg-slate-900/60">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        <div className="border-t border-slate-100 p-4 dark:border-white/5">
          {type && (
            <span className="mb-2 inline-block rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
              {type}
            </span>
          )}
          <h3 className="line-clamp-2 text-base font-semibold leading-snug text-slate-900 dark:text-white">
            {title}
          </h3>
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
