import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useReducedMotion } from 'motion/react'
import { FiExternalLink, FiFileText, FiGithub, FiPlayCircle } from 'react-icons/fi'
import { PageHeader, SectionHeader, TimelineLink } from '../components/Timeline.jsx'
import InlineDiagram from '../components/InlineDiagram.jsx'
import { research, sideProjects } from '../data/repositories.json'
import { asset } from '../utils.js'
import './Repositories.css'

// Diagram that draws itself once it scrolls into view
function DrawnDiagram({ project }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const progress = useMotionValue(reduce ? 1 : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(progress, 1, { duration: 1.8, ease: 'easeInOut' })
    return () => controls.stop()
  }, [inView, reduce, progress])

  return (
    <div ref={ref} className="repo-card__diagram">
      <InlineDiagram src={asset(project.image)} progress={progress} label={`Line diagram drawn with ${project.title}`} />
    </div>
  )
}

function RepoCard({ project, index, children }) {
  return (
    <motion.article
      className="repo-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="repo-card__media">{children}</div>
      <div className="repo-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="repo-card__links">
          <TimelineLink href={project.repositoryURL} icon={FiGithub}>Repository</TimelineLink>
          <TimelineLink href={project.publicationDoi} icon={FiFileText}>Publication</TimelineLink>
          <TimelineLink href={project.websiteURL} icon={FiExternalLink}>Website</TimelineLink>
          <TimelineLink href={project.demoURL} icon={FiPlayCircle}>{project.demoLabel}</TimelineLink>
        </div>
      </div>
    </motion.article>
  )
}

export default function Repositories() {
  return (
    <div className="container tl-page repo-page">
      <PageHeader eyebrow="Code & Side Projects" title="Repositories" />

      <section className="tl-section">
        <SectionHeader number="01" title="Research" />
        <div className="repo-grid">
          {research.map((project, i) => (
            <RepoCard key={project.title} project={project} index={i}>
              <DrawnDiagram project={project} />
            </RepoCard>
          ))}
        </div>
      </section>

      <section className="tl-section">
        <SectionHeader number="02" title="Side Projects" />
        <div className="repo-grid">
          {sideProjects.map((project, i) => (
            <RepoCard key={project.title} project={project} index={i}>
              <img src={asset(project.image)} alt="" loading="lazy" />
            </RepoCard>
          ))}
        </div>
      </section>
    </div>
  )
}
