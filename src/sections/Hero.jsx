import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import HeroLattice from '../components/HeroLattice.jsx'
import about from '../data/about.json'
import './Hero.css'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const latticeY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const latticeScale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const latticeOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const [first, ...rest] = about.name.split(' ')

  return (
    <section ref={ref} className="hero">
      <div className="container hero__grid">
        <motion.div className="hero__text" style={{ y: textY, opacity: textOpacity }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="hero__topic">Formal Concept Analysis</span>
            <span className="hero__topic-sep"> · </span>
            <span className="hero__topic">Lattice Drawing</span>
          </motion.p>

          <h1 className="hero__name">
            {[first, rest.join(' ')].map((word, i) => (
              <span key={word} className="hero__mask">
                <motion.span
                  className={i === 1 ? 'hero__name-accent' : undefined}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="hero__role"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
          >
            <p className="hero__position">{about.position}</p>
            <p>
              <a className="text-link" href={about.departmentURL} target="_blank" rel="noreferrer">
                {about.department}
              </a>
              <span className="hero__sep"> · </span>
              <a className="text-link" href={about.universityURL} target="_blank" rel="noreferrer">
                {about.university}
              </a>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__lattice"
          style={{ y: latticeY, scale: latticeScale, opacity: latticeOpacity }}
        >
          <HeroLattice />
          <motion.p
            className="hero__caption"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            hover a concept
            <span className="hero__legend hero__legend--up">upset</span>
            <span className="hero__legend hero__legend--down">downset</span>
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{ opacity: textOpacity }}
        aria-hidden="true"
      >
        <span>scroll</span>
        <span className="hero__scroll-line" />
      </motion.div>
    </section>
  )
}
