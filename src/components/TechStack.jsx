import { useEffect, useState } from 'react'
import { skills } from '../data/skills'

function SkillIcon({ slug, iconSrc, iconColor, darkIconColor }) {
  if (iconSrc) {
    return (
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
        className="h-9 w-9 shrink-0 md:h-10 md:w-10"
      />
    )
  }

  const lightIconHex = iconColor.replace('#', '')
  const darkIconHex = (darkIconColor ?? iconColor).replace('#', '')
  const lightIconUrl = `https://cdn.simpleicons.org/${slug}/${lightIconHex}`
  const darkIconUrl = `https://cdn.simpleicons.org/${slug}/${darkIconHex}`

  if (darkIconColor) {
    return (
      <>
        <img
          src={lightIconUrl}
          alt=""
          aria-hidden="true"
          className="h-9 w-9 shrink-0 md:h-10 md:w-10 dark:hidden"
        />
        <img
          src={darkIconUrl}
          alt=""
          aria-hidden="true"
          className="hidden h-9 w-9 shrink-0 md:h-10 md:w-10 dark:block"
        />
      </>
    )
  }

  return (
    <img
      src={lightIconUrl}
      alt=""
      aria-hidden="true"
      className="h-9 w-9 shrink-0 md:h-10 md:w-10"
    />
  )
}

function SkillBadge({
  name,
  slug,
  color,
  darkText,
  iconColor,
  darkIconColor,
  iconSrc,
  neutralCard = false,
}) {
  const resolvedIconColor = iconColor ?? color

  const cardStyle = neutralCard
    ? undefined
    : {
        borderColor: `${color}66`,
        backgroundColor: `${color}22`,
        color: darkText ? '#1e293b' : color,
      }

  const cardClass = neutralCard
    ? 'border-slate-300/70 bg-slate-500/10 text-slate-600 dark:border-slate-500/50 dark:bg-slate-400/10 dark:text-slate-300'
    : ''

  const labelClass = neutralCard
    ? 'text-slate-600 dark:text-slate-300'
    : darkText
      ? 'text-slate-800 dark:text-slate-100'
      : ''

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-4 rounded-2xl border-2 px-7 py-5 text-lg font-semibold shadow-lg md:px-8 md:py-5 md:text-xl ${cardClass}`}
      style={cardStyle}
    >
      <SkillIcon
        slug={slug}
        iconSrc={iconSrc}
        iconColor={resolvedIconColor}
        darkIconColor={darkIconColor}
      />
      <span className={labelClass}>{name}</span>
    </span>
  )
}

export default function TechStackMarquee() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const loopedSkills = reduceMotion ? skills : [...skills, ...skills]

  return (
    <div
      className={reduceMotion ? 'tech-marquee tech-marquee-static' : 'tech-marquee'}
      aria-label="Languages and technologies"
    >
      <div className="tech-marquee-track">
        {loopedSkills.map((skill, index) => (
          <SkillBadge key={`${skill.name}-${index}`} {...skill} />
        ))}
      </div>
    </div>
  )
}
