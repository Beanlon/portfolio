import ScrollReveal from '../../components/ScrollReveal'
import TechStackGrid from './section-components/TechStackGrid'
import WhoIAmCard from './section-components/WhoIAmCard'
import EducationCard from './section-components/EducationCard'

const techCardClasses =
  'relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/60 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 lg:min-h-0 lg:h-full'

const collaborationCardClasses =
  'collaboration-card relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 p-6 shadow-sm dark:border-white/10 lg:min-h-0 lg:h-full'

const bentoGridClasses =
  'grid grid-cols-1 gap-4 lg:grid-cols-7 lg:grid-rows-[repeat(12,minmax(0,1fr))] lg:gap-[7px] lg:min-h-[880px]'

function PersonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-slate-400" aria-hidden="true">
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>
  )
}

function AvatarStack() {
  return (
    <div className="flex items-center self-end">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="-ml-2.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#0f0f14] bg-slate-700 first:ml-0"
        >
          <PersonIcon />
        </div>
      ))}
      <img
        src="/profile.webp"
        alt=""
        className="-ml-2.5 h-11 w-11 shrink-0 rounded-full border-2 border-orange-500 object-cover"
      />
      <div className="-ml-2.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#0f0f14] bg-white text-xs font-semibold text-slate-900">
        +3
      </div>
    </div>
  )
}

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16 md:px-8 md:py-20"
    >
      <ScrollReveal className="mb-10 text-left">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Get to know me
        </p>
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
          About Me
        </h2>
        <div className="section-divider mb-4" />
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          A quick look at who I am, what I work with, and what I get up to outside of code.
        </p>
      </ScrollReveal>

      <div className={`${bentoGridClasses} overflow-visible`}>
        <ScrollReveal delay={60} className="min-h-[380px] overflow-visible lg:col-span-3 lg:row-span-12 lg:min-h-0 lg:h-full">
          <WhoIAmCard />
        </ScrollReveal>

        <ScrollReveal delay={120} className={`${techCardClasses} lg:col-span-4 lg:col-start-4 lg:row-span-6`}>
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 p-6">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
              Tech stack
            </h3>
          </div>
          <TechStackGrid />
        </ScrollReveal>

        <ScrollReveal delay={180} className="lg:col-span-4 lg:col-start-4 lg:row-span-3 lg:row-start-7 lg:h-full lg:min-h-0">
          <EducationCard />
        </ScrollReveal>

        <ScrollReveal delay={240} className={`${collaborationCardClasses} lg:col-span-4 lg:col-start-4 lg:row-span-3 lg:row-start-10`}>
          <p className="max-w-sm text-xl font-bold leading-snug tracking-tight text-white md:text-2xl">
            I&apos;m well accustomed to collaborating on team projects.
          </p>
          <AvatarStack />
        </ScrollReveal>
      </div>
    </section>
  )
}
