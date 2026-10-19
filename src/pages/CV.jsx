import { MdBusiness, MdGroups, MdLink } from 'react-icons/md'
import { PageHeader, TimelineItem, TimelineLink, TimelineSection } from '../components/Timeline.jsx'
import cv from '../data/cv.json'
import './CV.css'

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

function CVItem({ item, title, subtitle, last, children }) {
  return (
    <TimelineItem last={last} ongoing={!item.to} className="cv-card">
      <DateRange from={item.from} to={item.to} />
      <div className="cv-card__content">
        <h3>{title}</h3>
        {subtitle && <p className="cv-field">{subtitle}</p>}
        <div className="cv-links">
          <TimelineLink href={item.institutionURL} icon={MdBusiness}>{item.institution}</TimelineLink>
          <TimelineLink href={item.instituteURL} icon={MdGroups}>{item.institute}</TimelineLink>
          <TimelineLink href={item.homepageURL} icon={MdLink}>{item.homepage}</TimelineLink>
        </div>
        {children}
      </div>
    </TimelineItem>
  )
}

export default function CV() {
  return (
    <div className="container tl-page">
      <PageHeader eyebrow="Experience & Education" title="Curriculum Vitae" />

      <TimelineSection number="01" title="Experience">
        {cv.experience.map((item, i) => (
          <CVItem key={`${item.position}-${item.from}`} item={item} title={item.position} last={i === cv.experience.length - 1} />
        ))}
      </TimelineSection>

      <TimelineSection number="02" title="Education">
        {cv.education.map((item, i) => (
          <CVItem
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
          </CVItem>
        ))}
      </TimelineSection>
    </div>
  )
}
