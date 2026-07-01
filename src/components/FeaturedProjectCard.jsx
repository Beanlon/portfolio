import { useState } from 'react'
import ImageLightbox from './ImageLightbox'

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 15h-8.5A2.25 2.25 0 012 12.75v-8.5A2.25 2.25 0 014.25 2h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
    </svg>
  )
}

const cardClasses = [
  'flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white text-left shadow-sm',
  'transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200/60 hover:shadow-md hover:shadow-indigo-500/10',
  'dark:border-white/10 dark:bg-slate-800/80 dark:hover:border-indigo-500/30',
].join(' ')

const primaryButtonClasses = [
  'inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white no-underline',
  'shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-500/40',
].join(' ')

const secondaryButtonClasses = [
  'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 no-underline shadow-sm',
  'transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600',
  'dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-indigo-500/30 dark:hover:text-indigo-400',
].join(' ')

const imageClasses = [
  'block h-auto w-auto max-h-[min(320px,55vh)] object-contain rounded-xl border border-slate-200/80 shadow-sm',
  'transition-transform duration-300 group-hover/thumb:scale-[1.02]',
  'dark:border-white/10',
].join(' ')

function FeaturedProjectImage({ src, alt, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group/thumb shrink-0 cursor-zoom-in border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={imageClasses}
      />
    </button>
  )
}

export default function FeaturedProjectCard({
  images,
  title,
  description,
  href,
  repository,
  download,
}) {
  const [activeIndex, setActiveIndex] = useState(null)

  const externalLinkProps = (url) =>
    url?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  const openLightbox = (previewIndex) => setActiveIndex(previewIndex)
  const closeLightbox = () => setActiveIndex(null)
  const showPrev = () => setActiveIndex((current) => (current > 0 ? current - 1 : current))
  const showNext = () =>
    setActiveIndex((current) => (current < images.length - 1 ? current + 1 : current))

  return (
    <>
      <article className={cardClasses}>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <h3 className="mb-3 text-xl font-semibold leading-snug text-slate-900 dark:text-white md:text-2xl">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {description}
          </p>

          {images.length > 0 && (
            <div className="featured-gallery mt-2 flex flex-nowrap items-end gap-4 overflow-x-auto overscroll-x-contain py-3">
              {images.map((src, previewIndex) => (
                <FeaturedProjectImage
                  key={`${src}-${previewIndex}`}
                  src={src}
                  alt={`View ${title} screenshot ${previewIndex + 1}`}
                  onClick={() => openLightbox(previewIndex)}
                />
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-3">
            {href && (
              <a
                href={href}
                className={primaryButtonClasses}
                {...externalLinkProps(href)}
              >
                View project
                <ExternalIcon />
              </a>
            )}
            {download && (
              <a
                href={download}
                className={primaryButtonClasses}
                {...externalLinkProps(download)}
              >
                Download APK
                <ExternalIcon />
              </a>
            )}
            {repository && repository !== href && (
              <a
                href={repository}
                className={secondaryButtonClasses}
                {...externalLinkProps(repository)}
              >
                View repository
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>
      </article>

      {activeIndex !== null && (
        <ImageLightbox
          src={images[activeIndex]}
          alt={`${title} screenshot ${activeIndex + 1}`}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < images.length - 1}
        />
      )}
    </>
  )
}
