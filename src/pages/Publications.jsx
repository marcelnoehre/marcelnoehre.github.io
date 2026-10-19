import { useState } from 'react'
import { AnimatePresence, motion, useMotionValue } from 'motion/react'
import { FiArrowUpRight, FiAward, FiCheck, FiCopy, FiGithub } from 'react-icons/fi'
import { PageHeader, TimelineItem, TimelineLink, TimelineSection } from '../components/Timeline.jsx'
import InlineDiagram from '../components/InlineDiagram.jsx'
import about from '../data/about.json'
import data from '../data/publications.json'
import { research } from '../data/repositories.json'
import { asset } from '../utils.js'
import './Publications.css'

// Code repositories, found by the DOI of the paper they belong to
const repositoryByDoi = Object.fromEntries(research.map((project) => [project.publicationDoi, project.repositoryURL]))

// Highlights my own name in the author list
function Authors({ authors }) {
  return (
    <p className="pub-authors">
      {authors.split(', ').map((author, i, all) => (
        <span key={author}>
          {author === about.name ? <strong>{author}</strong> : author}
          {i < all.length - 1 && ', '}
        </span>
      ))}
    </p>
  )
}

function Expandable({ open, children }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          className="pub-expand"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pub-expand__inner">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CopyButton({ text }) {
  const [state, setState] = useState('idle')
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setState('copied')
    } catch {
      setState('failed')
    }
    setTimeout(() => setState('idle'), 2000)
  }
  return (
    <button type="button" className="pub-copy" onClick={copy} aria-label="Copy BibTeX">
      {state === 'copied' ? <FiCheck /> : <FiCopy />}
      <span>{state === 'copied' ? 'Copied' : state === 'failed' ? 'Copy failed' : 'Copy'}</span>
    </button>
  )
}

// Fully drawn diagram, recolored to the theme like on the landing page
function Thumbnail({ publication }) {
  const drawn = useMotionValue(1)
  return (
    <div className="pub-thumb">
      <InlineDiagram src={asset(publication.image)} progress={drawn} weight={1.6} label={`Line diagram from ${publication.title}`} />
    </div>
  )
}

function PublicationItem({ publication, last }) {
  const [open, setOpen] = useState(null)
  const toggle = (panel) => setOpen((current) => (current === panel ? null : panel))

  return (
    <TimelineItem last={last} className={`pub-card ${publication.image ? 'has-thumb' : ''}`}>
      <div className="pub-card__main">
        <div className="pub-meta">
          <span className="pub-year">{publication.year}</span>
          {publication.award && (
            <span className="pub-award">
              <FiAward aria-hidden="true" /> {publication.award}
            </span>
          )}
        </div>
        <h3>{publication.title}</h3>
        <Authors authors={publication.authors} />
        <p className="pub-venue">{publication.published}</p>

        <div className="pub-actions">
          {publication.abstract && (
            <button
              type="button"
              className={`pub-button ${open === 'abstract' ? 'is-open' : ''}`}
              aria-expanded={open === 'abstract'}
              onClick={() => toggle('abstract')}
            >
              Abstract
            </button>
          )}
          <button
            type="button"
            className={`pub-button ${open === 'bibtex' ? 'is-open' : ''}`}
            aria-expanded={open === 'bibtex'}
            onClick={() => toggle('bibtex')}
          >
            BibTeX
          </button>
          <a className="pub-button pub-button--primary" href={publication.doi} target="_blank" rel="noreferrer">
            DOI <FiArrowUpRight aria-hidden="true" />
          </a>
          {repositoryByDoi[publication.doi] && (
            <a className="pub-button" href={repositoryByDoi[publication.doi]} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> Code
            </a>
          )}
        </div>
      </div>

      {publication.image && <Thumbnail publication={publication} />}

      <div className="pub-card__panels">
        {publication.abstract && (
          <Expandable open={open === 'abstract'}>
            <div className="pub-abstract">
              {publication.abstract.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Expandable>
        )}
        <Expandable open={open === 'bibtex'}>
          <div className="pub-bibtex">
            <CopyButton text={publication.bibtex} />
            <pre>
              <code>{publication.bibtex}</code>
            </pre>
          </div>
        </Expandable>
      </div>
    </TimelineItem>
  )
}

function AwardItem({ award, last }) {
  return (
    <TimelineItem last={last} className="pub-card award-card">
      <div className="award-card__icon" aria-hidden="true">
        <FiAward />
      </div>
      <div className="pub-card__main">
        <div className="pub-meta">
          <span className="pub-year">{award.year}</span>
          {award.place && <span className="pub-award">{award.place}</span>}
        </div>
        <h3>{award.title}</h3>
        <p className="pub-venue">{award.event}</p>
        {award.description && <p className="award-card__description">{award.description}</p>}
        <TimelineLink href={award.link} icon={FiArrowUpRight}>View related work</TimelineLink>
      </div>
    </TimelineItem>
  )
}

export default function Publications() {
  return (
    <div className="container tl-page">
      <PageHeader eyebrow="Papers, Data & Awards" title="Publications" />

      <TimelineSection number="01" title="Papers">
        {data.publications.map((publication, i) => (
          <PublicationItem key={publication.doi} publication={publication} last={i === data.publications.length - 1} />
        ))}
      </TimelineSection>

      <TimelineSection number="02" title="Open Data">
        {data.openData.map((publication, i) => (
          <PublicationItem key={publication.doi} publication={publication} last={i === data.openData.length - 1} />
        ))}
      </TimelineSection>

      {data.awards.length > 0 && (
        <TimelineSection number="03" title="Awards">
          {data.awards.map((award, i) => (
            <AwardItem key={`${award.title}-${award.event}`} award={award} last={i === data.awards.length - 1} />
          ))}
        </TimelineSection>
      )}
    </div>
  )
}
