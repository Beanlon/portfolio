import { useEffect, useRef, useState } from 'react'

const variantClasses = {
  up: 'scroll-reveal-up',
  left: 'scroll-reveal-left',
  right: 'scroll-reveal-right',
}

export default function ScrollReveal({
  children,
  className = '',
  as: Component = 'div',
  variant = 'up',
  delay = 0,
  threshold = 0.12,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <Component
      ref={ref}
      className={[
        'scroll-reveal',
        variantClasses[variant] ?? variantClasses.up,
        visible ? 'is-visible' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  )
}
