import { Link } from 'react-router-dom'

// Placeholder until the subpages are designed
export default function PageStub({ title }) {
  return (
    <section className="container" style={{ minHeight: '70vh', paddingTop: 160 }}>
      <p className="eyebrow">Under construction</p>
      <h1 style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', margin: '16px 0 24px' }}>{title}</h1>
      <Link to="/" className="text-link">← Back home</Link>
    </section>
  )
}
