import { externalLinkProps } from '../../../utils/projectLinks'

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 15h-8.5A2.25 2.25 0 012 12.75v-8.5A2.25 2.25 0 014.25 2h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
    </svg>
  )
}

const showcasePrimaryClasses =
  'inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-orange-500/40'

const showcaseSecondaryClasses =
  'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-200 no-underline shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-500/30 hover:text-orange-400'

const defaultPrimaryClasses =
  'inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-orange-500/40'

const defaultSecondaryClasses =
  'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 no-underline shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:text-orange-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-orange-500/30 dark:hover:text-orange-400'

export default function ProjectActionButtons({
  href,
  repository,
  backendRepository,
  download,
  figma,
  variant = 'default',
  className = '',
}) {
  const primaryClass = variant === 'showcase' ? showcasePrimaryClasses : defaultPrimaryClasses
  const secondaryClass = variant === 'showcase' ? showcaseSecondaryClasses : defaultSecondaryClasses

  return (
    <div className={`relative z-30 flex flex-wrap gap-3 ${className}`}>
      {download && (
        <a href={download} className={primaryClass} {...externalLinkProps(download)}>
          Download APK
          <ExternalIcon />
        </a>
      )}
      {href && (
        <a href={href} className={download ? secondaryClass : primaryClass} {...externalLinkProps(href)}>
          View project
          <ExternalIcon />
        </a>
      )}
      {repository && (
        <a
          href={repository}
          className={download || href ? secondaryClass : primaryClass}
          {...externalLinkProps(repository)}
        >
          Source code
          <ExternalIcon />
        </a>
      )}
      {backendRepository && backendRepository !== repository && (
        <a href={backendRepository} className={secondaryClass} {...externalLinkProps(backendRepository)}>
          Backend repo
          <ExternalIcon />
        </a>
      )}
      {figma && (
        <a href={figma} className={secondaryClass} {...externalLinkProps(figma)}>
          Figma
          <ExternalIcon />
        </a>
      )}
    </div>
  )
}
