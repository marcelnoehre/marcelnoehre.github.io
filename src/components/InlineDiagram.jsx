import { useEffect, useId, useRef } from 'react'
import './InlineDiagram.css'

// Colors as exported by the drawing tool, mapped to theme tokens
const COLORS = {
  'rgb(0%, 0%, 0%)': 'var(--ink)',
  'rgb(100%, 100%, 100%)': 'var(--bg)',
  'rgb(50.195312%, 50.195312%, 50.195312%)': 'var(--muted)',
}

const clamp = (value) => Math.min(1, Math.max(0, value))

// Line weights and node size as fractions of the drawing's larger side, so diagrams
// exported with different strokes and canvas sizes look alike
const EDGE_WIDTH = 0.0055
const NODE_RADIUS = 0.017
// Thin outline on label glyphs so small text appears as bright as the edges
const LABEL_STROKE = 0.0007

// Parses the SVG, namespaces its ids and swaps fixed colors for theme variables
function prepareSvg(text, prefix) {
  const svg = new DOMParser().parseFromString(text, 'image/svg+xml').documentElement
  svg.removeAttribute('width')
  svg.removeAttribute('height')

  for (const el of svg.querySelectorAll('[id]')) el.id = `${prefix}${el.id}`
  for (const el of svg.querySelectorAll('*')) {
    for (const attr of ['href', 'xlink:href']) {
      const value = el.getAttribute(attr)
      if (value?.startsWith('#')) el.setAttribute(attr, `#${prefix}${value.slice(1)}`)
    }
    const clip = el.getAttribute('clip-path')
    if (clip) el.setAttribute('clip-path', clip.replace('url(#', `url(#${prefix}`))
    for (const prop of ['fill', 'stroke']) {
      const color = COLORS[el.getAttribute(prop)]
      if (color) {
        el.removeAttribute(prop)
        el.style[prop] = color
      }
    }
  }

  // The white background rectangle is the only filled path without a stroke
  for (const path of svg.querySelectorAll('path')) {
    if (path.style.fill === 'var(--bg)' && !path.style.stroke) path.remove()
  }
  return svg
}

const topOf = (el) => el.getBoundingClientRect().top

// Resizes a node around its own center to the target radius; the wrapper keeps the path's
// own transform intact and the outline is compensated to the target width
function resizeNode(node, radius, strokeWidth) {
  const scale = radius / (node.getBBox().width / 2)
  const wrapper = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  node.replaceWith(wrapper)
  wrapper.appendChild(node)
  wrapper.style.transformBox = 'fill-box'
  wrapper.style.transformOrigin = 'center'
  wrapper.style.transform = `scale(${scale})`
  node.style.strokeWidth = strokeWidth / scale
}

// Splits the drawing into edges, nodes and labels, ordered top to bottom
function classify(svg, weight) {
  const paths = [...svg.querySelectorAll('path')].filter((path) => !path.closest('defs'))
  const edges = paths
    .filter((path) => path.style.fill === '' && path.getAttribute('fill') === 'none' && !path.getAttribute('stroke-dasharray'))
    .sort((a, b) => topOf(a) - topOf(b))
    .map((path) => ({ el: path, length: path.getTotalLength() }))
  const nodes = paths
    .filter((path) => path.style.fill === 'var(--bg)')
    .sort((a, b) => topOf(a) - topOf(b))
  // Glyphs, dashed leader lines and the filled dots at the end of the leaders
  const labels = [
    ...svg.querySelectorAll('use'),
    ...paths.filter((path) => path.getAttribute('stroke-dasharray')),
    ...paths.filter((path) => path.style.fill && path.style.fill !== 'var(--bg)'),
  ]

  const { width, height } = svg.viewBox.baseVal
  const size = Math.max(width, height)
  const strokeWidth = EDGE_WIDTH * size * weight

  for (const node of nodes) {
    node.style.stroke = 'var(--accent)'
    resizeNode(node, NODE_RADIUS * size, strokeWidth)
  }
  for (const { el, length } of edges) {
    el.style.strokeWidth = strokeWidth
    el.style.strokeDasharray = `${length} ${length}`
  }
  for (const glyph of svg.querySelectorAll('use')) {
    glyph.style.stroke = 'var(--ink)'
    glyph.style.strokeWidth = LABEL_STROKE * size * weight
    glyph.style.strokeLinejoin = 'round'
  }
  return { edges, nodes, labels }
}

// Edges draw in first, nodes appear on top of them, labels fade in last
function render({ edges, nodes, labels }, progress) {
  edges.forEach(({ el, length }, i) => {
    const start = (i / edges.length) * 0.5
    const local = clamp((progress - start) / 0.25)
    el.style.strokeDashoffset = length * (1 - local)
    el.style.opacity = local > 0 ? 1 : 0
  })
  nodes.forEach((el, i) => {
    const start = 0.15 + (i / nodes.length) * 0.5
    el.style.opacity = clamp((progress - start) / 0.12)
  })
  const labelOpacity = clamp((progress - 0.75) / 0.2)
  for (const el of labels) el.style.opacity = labelOpacity
}

// weight thickens all lines, e.g. for small thumbnails
export default function InlineDiagram({ src, progress, label, weight = 1 }) {
  const ref = useRef(null)
  const prefix = `d${useId().replace(/[^a-zA-Z0-9]/g, '')}-`

  useEffect(() => {
    let cancelled = false
    let unsubscribe

    fetch(src)
      .then((response) => response.text())
      .then((text) => {
        if (cancelled || !ref.current) return
        const svg = prepareSvg(text, prefix)
        ref.current.replaceChildren(svg)
        const parts = classify(svg, weight)
        render(parts, progress.get())
        unsubscribe = progress.on('change', (value) => render(parts, value))
      })
      .catch(() => {
        // Leave the frame empty if the drawing fails to load
      })

    return () => {
      cancelled = true
      unsubscribe?.()
    }
  }, [src, progress, prefix, weight])

  return <div ref={ref} className="diagram" role="img" aria-label={label} />
}
