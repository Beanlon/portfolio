import { Link } from 'react-router-dom'
import ScrollReveal from '../../components/ScrollReveal'
import Typewriter from './section-components/Typewriter'
import { github } from '../../data/contact'

const sidebarWidth = 'w-[220px] md:w-[280px]'

const roles = ['UI Designer', 'Full-Stack Developer', 'App Developer', 'Web Developer']

export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16 md:px-8 md:py-24"
    >
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-10">
        <ScrollReveal
          as="aside"
          variant="left"
          className={`flex shrink-0 flex-col items-center ${sidebarWidth}`}
        >
          <div className={`profile-ring ${sidebarWidth}`}>
            <img
              src="/profile.webp"
              alt="Jeric B. Mata"
              className="aspect-square w-full rounded-full object-cover shadow-xl"
            />
          </div>
        </ScrollReveal>

        <div className="flex-1 text-center lg:text-left">
          <ScrollReveal delay={80}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500 dark:text-orange-400">
              Hello, I&apos;m
            </p>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="gradient-text">Jeric B. Mata</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mb-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {roles.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/60 px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
                  {role}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={260}>
            <h2
              aria-label="Building Interactive Web and Mobile Apps"
              className="mb-8 text-xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 md:text-2xl"
            >
              <Typewriter
                text="Building Interactive Web and Mobile Apps"
                textClassName="text-orange-600 dark:text-orange-400"
              />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <div className="mt-2 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white no-underline shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-orange-500/40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub
              </a>
              <Link
                to={{ pathname: '/', hash: '#contact' }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 no-underline shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-500/30 hover:text-orange-400"
              >
                Contact Me
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
