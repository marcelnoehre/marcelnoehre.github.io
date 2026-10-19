import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import ResearchScene from '../sections/ResearchScene.jsx'
import { research } from '../data/repositories.json'
import './Home.css'

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      <section className="highlights">
        <motion.div
          className="container highlights__intro"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Research highlights</p>
          <h2>
            Making order <em>visible</em>.
          </h2>
        </motion.div>

        {research.map((project, i) => (
          <ResearchScene key={project.title} project={project} index={i} />
        ))}

        <div className="container highlights__more">
          <Link to="/publications" className="text-link">All publications →</Link>
        </div>
      </section>
    </>
  )
}
