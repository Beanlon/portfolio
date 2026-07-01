import ScrollReveal from './ScrollReveal'
import TypewriterName from './TypewriterName'
import { github } from '../data/contact'

const sidebarWidth = 'w-[220px] md:w-[280px]'

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
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
              Hello, I&apos;m
            </p>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <h1
              aria-label="Jeric B. Mata"
              className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              <TypewriterName />
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mb-2 text-lg font-medium text-slate-700 dark:text-slate-200 md:text-lg">
              Front-end Full-stack Developer
            </p>
          </ScrollReveal>

          <ScrollReveal delay={260}>
            <p className="mx-auto mb-6 w-full text-base leading-relaxed text-slate-600 dark:text-slate-400 lg:mx-0 md:text-md">
              I am a second year Computer Science student at Mapúa Malayan Colleges Mindanao with experience on web development and mobile development. Leaning towards front-end full-stack development with a passion for creating user-friendly and efficient web applications.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <div className="mt-2 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white no-underline shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-500/40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 no-underline shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-indigo-500/30 dark:hover:text-indigo-400"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 no-underline shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-indigo-500/30 dark:hover:text-indigo-400"
              >
                Contact Me
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
