import FeaturedProjectCard from './FeaturedProjectCard'
import ProjectCard from './ProjectCard'
import ScrollReveal from './ScrollReveal'

export default function ProjectsSection({ title, description, featuredItems, items }) {
  return (
    <section id="projects" className="projects-section-bg scroll-mt-28">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <ScrollReveal className="mb-10 text-left">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Portfolio
          </p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
            {title}
          </h2>
          <div className="section-divider mb-4" />
          <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </ScrollReveal>

        {featuredItems.length > 0 && (
          <div className="mb-12">
            <ScrollReveal delay={80}>
              <p className="mb-5 text-lg font-semibold tracking-tight text-slate-900 dark:text-white md:text-xl">
                Featured Projects
              </p>
            </ScrollReveal>
            <div className="flex flex-col gap-6">
              {featuredItems.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 100}>
                  <FeaturedProjectCard
                    images={item.images}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    repository={item.repository}
                    download={item.download}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {items.length > 0 && (
          <div>
            {featuredItems.length > 0 && (
              <ScrollReveal delay={80}>
                <p className="mb-5 text-lg font-semibold tracking-tight text-slate-900 dark:text-white md:text-xl">
                  More Projects
                </p>
              </ScrollReveal>
            )}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <ScrollReveal key={item.title} className="h-full" delay={index * 80}>
                  <ProjectCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
