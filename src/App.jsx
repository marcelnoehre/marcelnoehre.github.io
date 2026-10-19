import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import PageStub from './pages/PageStub.jsx'
import CV from './pages/CV.jsx'
import Publications from './pages/Publications.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  // Braces matter: newer browsers return a Promise from scrollTo, which must not become the cleanup
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<PageStub title="Projects" />} />
          <Route path="/cv" element={<CV />} />
          <Route path="*" element={<PageStub title="Not found" />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
