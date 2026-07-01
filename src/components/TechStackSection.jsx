import ScrollReveal from './ScrollReveal'
import TechStackMarquee from './TechStack'

export default function TechStackSection() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-28 px-5 pt-16 pb-8 md:px-8 md:pt-20 md:pb-10"
    >
      <ScrollReveal className="mb-10 text-left">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Stack
        </p>
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
          Languages & Technologies
        </h2>
        <div className="section-divider mb-4" />
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          Tools and languages I use for web, mobile, and full-stack development.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <div className="tech-marquee-shell overflow-hidden rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/5 md:px-5 md:py-4">
          <TechStackMarquee />
        </div>
      </ScrollReveal>
    </section>
  )
}
