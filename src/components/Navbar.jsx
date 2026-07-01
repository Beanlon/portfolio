import { useCallback, useRef, useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function ThemeIcon({ dark }) {
  if (dark) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
      </svg>
    )
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
    </svg>
  )
}

export default function Navbar({ dark, onToggleTheme }) {
  const buttonRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onResize = () => setMenuOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [menuOpen])

  const handleThemeClick = useCallback(() => {
    const button = buttonRef.current
    if (!button || button.classList.contains('press-contrast')) return

    button.classList.add('press-contrast')
    const onAnimEnd = () => {
      onToggleTheme()
      button.classList.remove('press-contrast')
      button.removeEventListener('animationend', onAnimEnd)
    }
    button.addEventListener('animationend', onAnimEnd)
  }, [onToggleTheme])

  const islandClasses = [
    'nav-island flex items-center justify-between gap-3 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5',
    scrolled ? 'nav-island-scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const themeButtonClasses = dark
    ? 'border-white/10 bg-white/10 text-white [--button-bg:rgba(255,255,255,0.1)] [--button-text:#fff] [--button-contrast-bg:#6366f1] [--button-contrast-text:#fff]'
    : 'border-slate-200/80 bg-white/70 text-slate-700 [--button-bg:rgba(255,255,255,0.7)] [--button-text:#334155] [--button-contrast-bg:#6366f1] [--button-contrast-text:#fff]'

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-5 sm:top-4 md:px-8">
      <div className="relative mx-auto max-w-6xl">
        <nav className={`${islandClasses} pointer-events-auto`}>
          <a
            href="#about"
            className="shrink-0 text-base font-semibold tracking-tight text-slate-800 no-underline transition-colors hover:text-indigo-600 dark:text-slate-100 dark:hover:text-indigo-400 sm:text-lg"
          >
            Jeric Mata
          </a>

          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 no-underline transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              ref={buttonRef}
              type="button"
              onClick={handleThemeClick}
              aria-label="Toggle theme"
              className={`flex cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 sm:gap-2 sm:px-3 sm:py-2 ${themeButtonClasses}`}
            >
              <ThemeIcon dark={dark} />
              <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
            </button>

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className={`flex h-9 w-9 items-center justify-center rounded-full border text-slate-700 transition-colors md:hidden dark:text-slate-200 ${themeButtonClasses}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="nav-island-menu pointer-events-auto absolute inset-x-0 top-[calc(100%+0.5rem)] p-2 md:hidden">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 no-underline transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
