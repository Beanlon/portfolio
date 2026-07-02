import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { to: { pathname: '/', hash: '#about' }, label: 'Home' },
  { to: { pathname: '/', hash: '#about-me' }, label: 'About' },
  { to: { pathname: '/', hash: '#achievements' }, label: 'Achievements' },
  { to: { pathname: '/', hash: '#projects' }, label: 'Projects' },
  { to: { pathname: '/', hash: '#contact' }, label: 'Contact' },
]

const menuButtonClasses =
  'flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition-colors hover:border-orange-500/30 hover:text-orange-400'

export default function Navbar() {
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

  const islandClasses = [
    'nav-island flex items-center justify-between gap-3 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5',
    scrolled ? 'nav-island-scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-5 sm:top-4 md:px-8">
      <div className="relative mx-auto max-w-6xl">
        <nav className={`${islandClasses} pointer-events-auto`}>
          <Link
            to={{ pathname: '/', hash: '#about' }}
            className="shrink-0 text-base font-semibold tracking-tight text-slate-100 no-underline transition-colors hover:text-orange-400 sm:text-lg"
          >
            Jeric Mata
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-300 no-underline transition-colors hover:bg-orange-500/10 hover:text-orange-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`${menuButtonClasses} md:hidden`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </nav>

        {menuOpen && (
          <div className="nav-island-menu pointer-events-auto absolute inset-x-0 top-[calc(100%+0.5rem)] p-2 md:hidden">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 no-underline transition-colors hover:bg-orange-500/10 hover:text-orange-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
