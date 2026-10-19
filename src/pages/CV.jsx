import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import { MdBusiness, MdGroups, MdLink } from 'react-icons/md'
import cv from '../data/cv.json'
import './CV.css'

const ease = [0.22, 1, 0.36, 1]

// "2025-11" -> "Nov 2025", built from local parts so no timezone shifts the month
const formatDate = (value) => {
  const [year, month] = value.split('-').map(Number)
  return new Date(year, month - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

function DateRange({ from, to }) {
  return (
    <div className="cv-date">
      {!to && <span className="cv-date__since">Since</span>}
      <span className="cv-date__pill">{formatDate(from)}</span>
      {to && (
        <>
          <span className="cv-date__sep">—</span>
          <span className="cv-date__pill">{formatDate(to)}</span>
        </>
      )}
    </div>
  )
}

function EntryLink({ href, icon: Icon, children }) {
  if (!href) return null
  return (
    <a className="cv-link" href={href} target="_blank" rel="noreferrer">
      <Icon aria-hidden="true" />
      <span>{children}</span>
    </a>
  )
}

// One entry: its node fills once the entry reaches the reading line,
// and the edge to the next entry draws along with the scroll
function TimelineItem({ item, title, subtitle, last, children }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.75'] })
  const [reached, setReached] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', (value) => setReached(value > 0))

  const ongoing = !item.to
  return (
    <li ref={ref} className="cv-item">
      <div className="cv-rail" aria-hidden="true">
        <span className={`cv-node ${reached || reduce ? 'is-reached' : ''} ${ongoing ? 'is-ongoing' : ''}`} />
        {!last && (
          <span className="cv-edge">
            <motion.span style={{ scaleY: reduce ? 1 : scrollYProgress }} />
          </span>
        )}
      </div>

      <motion.article
        className="cv-card"
        initial={reduce ? false : { opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
      >
        <DateRange from={item.from} to={item.to} />
        <div className="cv-card__content">
          <h3>{title}</h3>
          {subtitle && <p className="cv-field">{subtitle}</p>}
          <div className="cv-links">
            <EntryLink href={item.institutionURL} icon={MdBusiness}>{item.institution}</EntryLink>
            <EntryLink href={item.instituteURL} icon={MdGroups}>{item.institute}</EntryLink>
            <EntryLink href={item.homepageURL} icon={MdLink}>{item.homepage}</EntryLink>
          </div>
          {children}
        </div>
      </motion.article>
    </li>
  )
}

function Section({ number, title, children }) {
  return (
    <section className="cv-section">
      <motion.header
        className="cv-section__header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7, ease }}
      >
        <span className="cv-section__number">{number}</span>
        <h2>{title}</h2>
      </motion.header>
      <ol className="cv-timeline">{children}</ol>
    </section>
  )
}

export default function CV() {
  return (
    <div className="container cv">
      <header className="cv-hero">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          Experience & Education
        </motion.p>
        <h1>
          {['Curriculum', 'Vitae'].map((word, i) => (
            <span key={word} className="cv-hero__mask">
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

      <Section number="01" title="Experience">
        {cv.experience.map((item, i) => (
          <TimelineItem key={`${item.position}-${item.from}`} item={item} title={item.position} last={i === cv.experience.length - 1} />
        ))}
      </Section>

      <Section number="02" title="Education">
        {cv.education.map((item, i) => (
          <TimelineItem
            key={`${item.degree}-${item.from}`}
            item={item}
            title={item.degree}
            subtitle={item.field}
            last={i === cv.education.length - 1}
          >
            {item.thesis && (
              <div className="cv-thesis">
                <span className="cv-thesis__label">Thesis</span>
                <p className="cv-thesis__title">{item.thesis}</p>
                {item.original && <p className="cv-thesis__original">Original: {item.original}</p>}
              </div>
            )}
          </TimelineItem>
        ))}
      </Section>
    </div>
  )
}
