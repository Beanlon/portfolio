import { Link } from 'react-router-dom'
import ProjectActionButtons from './ProjectActionButtons'
import { getProjectDetailPath } from '../../../utils/projectLinks'

function ShowcasePreview({ device = 'mobile', previewImages = [], title }) {
  if (!previewImages.length) return null

  if (device === 'desktop') {
    return (
      <div className="relative z-10 flex w-full items-center justify-center lg:justify-end">
        <div className="featured-showcase-desktop-frame">
          <img
            src={previewImages[0]}
            alt={`${title} preview`}
            loading="lazy"
            decoding="async"
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10 flex items-end justify-center gap-3 sm:gap-4 lg:justify-end">
      {previewImages.map((src, index) => (
        <div
          key={src}
          className={`featured-showcase-mobile-frame ${index === 1 ? 'hidden sm:block' : ''}`}
          style={{ transform: index === 1 ? 'translateY(-8px)' : undefined }}
        >
          <img
            src={src}
            alt={`${title} preview ${index + 1}`}
            loading="lazy"
            decoding="async"
            className="h-auto w-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default function FeaturedProjectCard({
  slug,
  device = 'mobile',
  title,
  subtitle,
  shortDescription,
  description,
  placed,
  previewImages,
  images = [],
  download,
  repository,
  figma,
  href,
}) {
  const detailPath = getProjectDetailPath(slug)
  const cardDescription = shortDescription ?? description
  const resolvedPreviewImages =
    previewImages ?? (device === 'desktop' ? images.slice(0, 1) : images.slice(0, 2))

  return (
    <article className="featured-showcase relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm dark:border-white/10">
      {placed && (
        <p className="absolute left-6 top-6 z-30 text-xs font-semibold uppercase tracking-widest text-orange-500 dark:text-orange-400 sm:left-8 sm:top-8 sm:text-sm">
          {placed}
        </p>
      )}

      <div className="relative grid gap-8 p-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-6 lg:p-8">
        <div className={`relative z-20 min-w-0 ${placed ? 'pt-6 sm:pt-7' : ''}`}>
          {detailPath ? (
            <Link to={detailPath} className="group inline-block no-underline">
              <h3 className="text-4xl font-bold tracking-tight text-white transition-colors group-hover:text-orange-300 sm:text-5xl">
                {title}
              </h3>
            </Link>
          ) : (
            <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h3>
          )}

          {subtitle && (
            <p className="mt-3 text-sm font-medium leading-snug text-orange-500 sm:text-base dark:text-orange-400">
              {subtitle}
            </p>
          )}

          {cardDescription && (
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
              {cardDescription}
            </p>
          )}

          <ProjectActionButtons
            variant="showcase"
            className="mt-6"
            href={href}
            repository={repository}
            download={download}
            figma={figma}
          />

          {detailPath && (
            <Link
              to={detailPath}
              className="relative z-30 mt-4 inline-flex text-sm font-medium text-orange-400 no-underline transition-colors hover:text-orange-300"
            >
              View full project details →
            </Link>
          )}
        </div>

        <ShowcasePreview device={device} previewImages={resolvedPreviewImages} title={title} />
      </div>
    </article>
  )
}
