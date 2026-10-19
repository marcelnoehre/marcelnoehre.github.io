import { motion } from 'motion/react'
import { MdMail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { SiGithub, SiGooglescholar, SiOrcid, SiResearchgate } from 'react-icons/si'
import { socials } from '../data/social.json'
import about from '../data/about.json'
import './Footer.css'

const ICONS = { MdMail, FaLinkedin, SiOrcid, SiGooglescholar, SiResearchgate, SiGithub }

export default function Footer() {
  const mail = socials.find((social) => social.name === 'Mail')

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer__cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Get in touch</p>
          <h2>
            <em>Let’s connect</em> the dots.
          </h2>
          {mail && (
            <a className="footer__mail text-link" href={mail.url}>
              {mail.url.replace('mailto:', '')}
            </a>
          )}
        </motion.div>

        <ul className="footer__socials">
          {socials.map((social, i) => {
            const Icon = ICONS[social.icon]
            return (
              <motion.li
                key={social.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <a
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="footer__social"
                  style={{ '--brand': social.color }}
                  aria-label={social.name}
                  title={social.name}
                >
                  {Icon ? <Icon /> : <span className="footer__letter">{social.icon}</span>}
                </a>
              </motion.li>
            )
          })}
        </ul>

        <div className="footer__meta">
          <span>© {new Date().getFullYear()} {about.name}</span>
          <span>{about.department} · {about.university}</span>
        </div>
      </div>
    </footer>
  )
}
