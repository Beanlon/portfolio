function CardHeading({ children }) {
  return (
    <div className="mb-3">
      <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white md:text-3xl">
        {children}
      </h3>
    </div>
  )
}

export default function EducationCard() {
  return (
    <div className="flex h-full min-h-0 flex-col rounded-2xl border border-slate-200/80 bg-white/60 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
      <CardHeading>Education</CardHeading>

      <div className="flex flex-1 items-center gap-4 md:gap-5">
        <img
          src="/mmcm-logo.png"
          alt="Mapúa Malayan Colleges Mindanao logo"
          className="h-20 w-20 shrink-0 object-contain md:h-20 md:w-20"
        />
        <div className="min-w-0">
          <p className="text-lg font-semibold leading-snug text-slate-800 dark:text-slate-100 md:text-md ">
            Mapúa Malayan Colleges Mindanao
          </p>
          <p className="mt-1 text-md font-medium text-slate-700 dark:text-slate-200 md:text-md">
            BS Computer Science
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">2024 – Present</p>
        </div>
      </div>
    </div>
  )
}
