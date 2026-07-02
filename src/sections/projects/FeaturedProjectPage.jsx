import { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageLightbox from './section-components/ImageLightbox'
import ProjectActionButtons from './section-components/ProjectActionButtons'
import { getFeaturedProjectBySlug } from '../../data/portfolio'

function FeaturedProjectImage({ src, alt, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group/thumb shrink-0 cursor-zoom-in border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block h-auto w-auto max-h-[min(420px,60vh)] rounded-xl border border-white/10 object-contain shadow-sm transition-transform duration-300 group-hover/thumb:scale-[1.02]"
      />
    </button>
  )
}

function TechStackSection({ techStack = [] }) {
  if (!techStack.length) return null

  return (
    <section className="mt-12">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">Tech stack</h2>
      <div className="section-divider mb-6" />
      <div className="grid gap-4 md:grid-cols-2">
        {techStack.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-orange-300">{group.category}</h3>
              {group.repo && <span className="font-mono text-xs text-slate-500">{group.repo}</span>}
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200 sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function FeaturedProjectPage({ slug }) {
  const project = getFeaturedProjectBySlug(slug)
  const [activeIndex, setActiveIndex] = useState(null)

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-2xl font-bold text-white">Project not found</h1>
        <Link to={{ pathname: '/', hash: '#projects' }} className="mt-4 inline-flex text-orange-400 no-underline hover:text-orange-300">
          ← Back to projects
        </Link>
      </div>
    )
  }

  const images = project.images ?? []
  const description = project.description ?? project.shortDescription ?? ''

  const openLightbox = (previewIndex) => setActiveIndex(previewIndex)
  const closeLightbox = () => setActiveIndex(null)
  const showPrev = () => setActiveIndex((current) => (current > 0 ? current - 1 : current))
  const showNext = () =>
    setActiveIndex((current) => (current < images.length - 1 ? current + 1 : current))

  return (
    <article className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
      <Link
        to={{ pathname: '/', hash: '#projects' }}
        className="inline-flex text-sm font-medium text-slate-400 no-underline transition-colors hover:text-orange-400"
      >
        ← Back to projects
      </Link>

      <header className="mt-6 max-w-3xl">
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            Featured Project
          </p>
          {project.placed && (
            <>
              <span className="text-slate-600 dark:text-slate-600" aria-hidden="true">
                ·
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                {project.placed}
              </p>
            </>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{project.title}</h1>
        {project.subtitle && (
          <p className="mt-3 text-base font-medium text-orange-500 md:text-lg dark:text-orange-400">{project.subtitle}</p>
        )}
      </header>

      <div className="mt-8 max-w-3xl">
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>

        <ProjectActionButtons
          className="mt-6"
          variant="showcase"
          href={project.href}
          repository={project.repository}
          backendRepository={project.backendRepository}
          download={project.download}
          figma={project.figma}
        />
      </div>

      {images.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-semibold text-white">Screenshots</h2>
          <div className="featured-gallery flex flex-nowrap items-end gap-4 overflow-x-auto overscroll-x-contain py-2">
            {images.map((src, previewIndex) => (
              <FeaturedProjectImage
                key={`${src}-${previewIndex}`}
                src={src}
                alt={`${project.title} screenshot ${previewIndex + 1}`}
                onClick={() => openLightbox(previewIndex)}
              />
            ))}
          </div>
        </section>
      )}

      <TechStackSection techStack={project.techStack} />

      {activeIndex !== null && (
        <ImageLightbox
          src={images[activeIndex]}
          alt={`${project.title} screenshot ${activeIndex + 1}`}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < images.length - 1}
        />
      )}
    </article>
  )
}
