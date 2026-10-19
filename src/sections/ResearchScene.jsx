import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import InlineDiagram from '../components/InlineDiagram.jsx'
import { asset } from '../utils.js'
import './ResearchScene.css'

// A pinned full-screen scene: the diagram draws itself while the section scrolls by
export default function ResearchScene({ project, index }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  // Progress starts as the section enters from below, so it is never empty while sliding in.
  // The first ~45% (one viewport of the 220vh section) is the slide-in, the rest is pinned.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })

  const drawn = useMotionValue(1)
  const drawProgress = useTransform(scrollYProgress, [0.14, 0.68], [0, 1])
  const textOpacity = useTransform(scrollYProgress, [0.09, 0.35], [0, 1])
  const textY = useTransform(scrollYProgress, [0.09, 0.35], [60, 0])
  const linksOpacity = useTransform(scrollYProgress, [0.52, 0.68], [0, 1])
  const pinnedProgress = useTransform(scrollYProgress, [0.455, 1], [0, 1])
  const number = String(index + 1).padStart(2, '0')

  return (
    <section ref={ref} className={`scene ${index % 2 ? 'scene--flip' : ''}`}>
      <div className="scene__sticky">
        <div className="container scene__grid">
          <div className="scene__visual">
            <InlineDiagram
              src={asset(project.image)}
              nodeScale={project.nodeScale}
              progress={reduce ? drawn : drawProgress}
              label={`Line diagram drawn with ${project.title}`}
            />
          </div>

          <motion.div className="scene__text" style={reduce ? undefined : { opacity: textOpacity, y: textY }}>
            <span className="scene__number" aria-hidden="true">{number}</span>
            <h3 className="scene__title">{project.title}</h3>
            <p className="scene__description">{project.description}</p>
            <motion.div className="scene__links" style={reduce ? undefined : { opacity: linksOpacity }}>
              {project.publicationDoi && (
                <a className="scene__link scene__link--primary" href={project.publicationDoi} target="_blank" rel="noreferrer">
                  Read the paper <FiArrowUpRight />
                </a>
              )}
              {project.repositoryURL && (
                <a className="scene__link" href={project.repositoryURL} target="_blank" rel="noreferrer">
                  <FiGithub /> Code
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>

        <div className="scene__progress" aria-hidden="true">
          <motion.span style={{ scaleY: pinnedProgress }} />
        </div>
      </div>
    </section>
  )
}
