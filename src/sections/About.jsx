import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import about from '../data/about.json'
import { asset } from '../utils.js'
import './About.css'

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.18, 1])
  return <motion.span style={{ opacity }}>{children} </motion.span>
}

// Abstract that "lights up" word by word, fully lit just before the target reaches the
// screen center. On desktop the text block is centered beside the photo, so both line up.
function RevealText({ text, target }) {
  const { scrollYProgress } = useScroll({ target, offset: ['start 0.9', 'center 0.55'] })
  const words = text.split(' ')
  return (
    <p className="about__abstract">
      {words.map((word, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </p>
  )
}

const ORBIT = Array.from({ length: 6 }, (_, i) => (i / 6) * 2 * Math.PI)

export default function About() {
  const ref = useRef(null)
  const textRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [-40, 80])

  return (
    <section ref={ref} className="about">
      <div className="container about__grid">
        {/* The wrapper triggers the reveal, a fully clipped image never counts as in view */}
        <motion.div
          className="about__photo-wrap"
          style={{ y: photoY }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.svg className="about__orbit" viewBox="-110 -110 220 220" style={{ rotate: orbitRotate }} aria-hidden="true">
            <circle r="100" className="about__orbit-ring" />
            {ORBIT.map((angle, i) => (
              <circle key={i} cx={Math.cos(angle) * 100} cy={Math.sin(angle) * 100} r={i % 2 ? 2.5 : 4} className="about__orbit-node" />
            ))}
          </motion.svg>
          <motion.div
            className="about__photo"
            variants={{
              hidden: { clipPath: 'circle(0% at 50% 50%)' },
              visible: { clipPath: 'circle(50% at 50% 50%)' },
            }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
          >
            <img src={asset(about.image)} alt={`Portrait of ${about.name}`} />
          </motion.div>
        </motion.div>

        <div ref={textRef} className="about__text">
          <p className="eyebrow">About me</p>
          <RevealText text={about.abstract} target={textRef} />
        </div>
      </div>
    </section>
  )
}
