import ScrollReveal from './ScrollReveal'

export default function EducationSection() {
  return (
    <section id="education" className="projects-section-bg scroll-mt-28">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <ScrollReveal className="mb-10 text-left">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Background
          </p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
            Education
          </h2>
          <div className="section-divider mb-4" />
          <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Where I&apos;m building my foundation in computer science.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="flex w-full items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:gap-5 sm:p-6">
            <img
              src="/mmcm-logo.png"
              alt="Mapúa Malayan Colleges Mindanao logo"
              className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
            />
            <div className="min-w-0 flex-1 text-left">
              <p className="text-base font-semibold leading-snug text-slate-800 dark:text-slate-100 sm:text-lg">
                Mapúa Malayan Colleges Mindanao
              </p>
              <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200 sm:text-base">
                Bachelor of Science in Computer Science
              </p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                2024 – Present
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
