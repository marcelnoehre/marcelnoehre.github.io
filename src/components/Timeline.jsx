import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import './Timeline.css'

const ease = [0.22, 1, 0.36, 1]

// Page title whose words slide up out of a mask, like the name in the hero
export function PageHeader({ eyebrow, title }) {
  return (
    <header className="tl-hero">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        {eyebrow}
      </motion.p>
      <h1>
        {title.split(' ').map((word, i) => (
          <span key={word} className="tl-hero__mask">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>
    </header>
  )
}

// Numbered section heading, shared by all subpages
export function SectionHeader({ number, title }) {
  return (
    <motion.header
      className="tl-section__header"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.7, ease }}
    >
      <span className="tl-section__number">{number}</span>
      <h2>{title}</h2>
    </motion.header>
  )
}

export function TimelineSection({ number, title, children }) {
  return (
    <section className="tl-section">
      <SectionHeader number={number} title={title} />
      <ol className="tl-list">{children}</ol>
    </section>
  )
}

// One entry: its node fills once the entry reaches the reading line,
// and the edge to the next entry draws along with the scroll
export function TimelineItem({ last, ongoing = false, className = '', children }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.75'] })
  const [reached, setReached] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', (value) => setReached(value > 0))

  return (
    <li ref={ref} className="tl-item">
      <div className="tl-rail" aria-hidden="true">
        <span className={`tl-node ${reached || reduce ? 'is-reached' : ''} ${ongoing ? 'is-ongoing' : ''}`} />
        {!last && (
          <span className="tl-edge">
            <motion.span style={{ scaleY: reduce ? 1 : scrollYProgress }} />
          </span>
        )}
      </div>

      <motion.article
        className={`tl-card ${className}`}
        initial={reduce ? false : { opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
      >
        {children}
      </motion.article>
    </li>
  )
}

// Icon link with an underline that grows on hover
export function TimelineLink({ href, icon: Icon, children }) {
  if (!href) return null
  return (
    <a className="tl-link" href={href} target="_blank" rel="noreferrer">
      <Icon aria-hidden="true" />
      <span>{children}</span>
    </a>
  )
}
