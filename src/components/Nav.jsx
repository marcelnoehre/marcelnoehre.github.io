import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme.js'
import './Nav.css'

const LINKS = [
  { to: '/publications', label: 'Publications' },
  { to: '/repositories', label: 'Repositories' },
  { to: '/cv', label: 'CV' },
]

export default function Nav() {
  const [theme, toggleTheme] = useTheme()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  // The current page's link brings you back to the top instead of doing nothing
  const onLinkClick = (event, to) => {
    if (to !== pathname) return
    event.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  const onToggle = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
  }

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="Home">
          <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
            <path d="M16 6 L7 16 L16 26 L25 16 Z" className="nav__brand-lines" />
            {[[16, 6], [7, 16], [25, 16], [16, 26]].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" className="nav__brand-node" />
            ))}
          </svg>
          <span>Marcel Nöhre</span>
        </Link>
        <nav className="nav__links">
          {LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} className="nav__link" onClick={(event) => onLinkClick(event, to)}>
              {label}
            </NavLink>
          ))}
          <button
            type="button"
            className="nav__theme"
            onClick={onToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>
    </header>
  )
}
