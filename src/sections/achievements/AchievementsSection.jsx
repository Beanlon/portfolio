import AchievementCard from './section-components/AchievementCard'
import ScrollReveal from '../../components/ScrollReveal'

export default function AchievementsSection({ title, description, items }) {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16 md:px-8 md:py-20"
    >
      <ScrollReveal className="mb-10 text-left">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Recognition
        </p>
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
          {title}
        </h2>
        <div className="section-divider mb-4" />
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {items.map((item, index) => (
          <ScrollReveal key={item.title} className="h-full" delay={index * 60}>
            <AchievementCard
              image={item.image}
              title={item.title}
              type={item.type}
              description={item.description}
              placed={item.placed}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
