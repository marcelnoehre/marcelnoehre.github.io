import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import './HeroLattice.css'

// Line diagram of the Boolean lattice B4 with fixed positions (from 126.pos, y pointing up).
// Each element is stored with the set of atoms below it, which defines the order.
const POSITIONS = [
  [0, 7, 0b1111],
  [-2.5, 5, 0b0111],
  [-1, 5.5, 0b1011],
  [1, 5.5, 0b1101],
  [2.5, 5, 0b1110],
  [-3.5, 3.5, 0b0011],
  [-1.5, 3.5, 0b0101],
  [0, 4, 0b1001],
  [0, 3, 0b0110],
  [1.5, 3.5, 0b1010],
  [3.5, 3.5, 0b1100],
  [-2.5, 2, 0b0001],
  [-1, 1.5, 0b0010],
  [1, 1.5, 0b0100],
  [2.5, 2, 0b1000],
  [0, 0, 0b0000],
]
const SCALE = 60
const PADDING = 30

const isSubset = (a, b) => (a & b) === a
const bitCount = (set) => [0, 1, 2, 3].filter((i) => (set >> i) & 1).length

// rank counts levels from the top, so the drawing builds downwards
const NODES = POSITIONS.map(([x, y, set]) => ({ set, x: x * SCALE, y: -y * SCALE, rank: 4 - bitCount(set) }))

// Covering pairs: the upper set has exactly one more atom
const EDGES = NODES.flatMap((lower) =>
  NODES.filter((upper) => isSubset(lower.set, upper.set) && bitCount(upper.set) === bitCount(lower.set) + 1).map(
    (upper) => ({ lower, upper, rank: upper.rank }),
  ),
)

const xs = NODES.map((node) => node.x)
const ys = NODES.map((node) => node.y)
const VIEWBOX = [
  Math.min(...xs) - PADDING,
  Math.min(...ys) - PADDING,
  Math.max(...xs) - Math.min(...xs) + 2 * PADDING,
  Math.max(...ys) - Math.min(...ys) + 2 * PADDING,
].join(' ')

// Relation of an element to the hovered one: in its upset (above) or downset (below)
const relation = (set, active) => {
  if (isSubset(active, set)) return 'up'
  if (isSubset(set, active)) return 'down'
  return null
}

export default function HeroLattice() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(null)

  const edgeState = ({ lower, upper }) => {
    if (active === null) return ''
    if (isSubset(active, lower.set)) return 'is-up'
    if (isSubset(upper.set, active)) return 'is-down'
    return 'is-dimmed'
  }
  const nodeState = (set) => {
    if (active === null) return ''
    if (set === active) return 'is-active'
    const rel = relation(set, active)
    return rel ? `is-${rel}` : 'is-dimmed'
  }

  return (
    <svg className="lattice" viewBox={VIEWBOX} role="img" aria-label="Line diagram of a Boolean lattice">
      <defs>
        <linearGradient id="lattice-split" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.5" style={{ stopColor: 'var(--accent)' }} />
          <stop offset="0.5" style={{ stopColor: 'var(--warm)' }} />
        </linearGradient>
      </defs>
      <g>
        {EDGES.map((edge, i) => (
          <motion.line
            key={`${edge.lower.set}-${edge.upper.set}`}
            className={`lattice__edge ${edgeState(edge)}`}
            x1={edge.upper.x}
            y1={edge.upper.y}
            x2={edge.lower.x}
            y2={edge.lower.y}
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 + edge.rank * 0.35 + (i % 4) * 0.06, ease: 'easeInOut' }}
          />
        ))}
      </g>
      <g>
        {NODES.map((node) => (
          <g
            key={node.set}
            className={`lattice__node ${nodeState(node.set)}`}
            onPointerEnter={() => setActive(node.set)}
            onPointerLeave={() => setActive(null)}
          >
            <circle className="lattice__hit" cx={node.x} cy={node.y} r="22" />
            <motion.circle
              className="lattice__dot"
              cx={node.x}
              cy={node.y}
              r="8"
              initial={reduce ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.2 + node.rank * 0.35 }}
            />
          </g>
        ))}
      </g>
    </svg>
  )
}
