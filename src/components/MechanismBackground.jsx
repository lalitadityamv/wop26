import { motion, useScroll, useTransform } from 'framer-motion'

// Meshed pairs: two gears that touch must spin opposite ways, and the
// smaller one spins proportionally faster (ratio ~ 1 / relative size).
// dir is the only place sign lives — ratio is always a positive magnitude.
const pairs = [
  {
    big:   { id: 'drive', size: 320, top: '3%',  side: 'left',  reach: 200, ratio: 1,   dir: 1,  teeth: 16 },
    small: { id: 'g2',    size: 140, top: '12%', side: 'left',  reach: 330, ratio: 2.3, dir: -1, teeth: 9 },
  },
  {
    big:   { id: 'g3',    size: 270, top: '32%', side: 'right', reach: 190, ratio: 1.1, dir: -1, teeth: 14 },
    small: { id: 'g4',    size: 135, top: '30%', side: 'right', reach: 320, ratio: 2.4, dir: 1,  teeth: 8 },
  },
  {
    big:   { id: 'g5',    size: 300, top: '58%', side: 'left',  reach: 195, ratio: 0.9, dir: 1,  teeth: 15 },
    small: { id: 'g6',    size: 145, top: '67%', side: 'left',  reach: 330, ratio: 2.1, dir: -1, teeth: 9 },
  },
  {
    big:   { id: 'g7',    size: 280, top: '84%', side: 'right', reach: 200, ratio: 1,   dir: -1, teeth: 14 },
    small: { id: 'g8',    size: 130, top: '90%', side: 'right', reach: 330, ratio: 2.4, dir: 1,  teeth: 8 },
  },
]

// the flywheel idles on its own, always turning, independent of scroll —
// this is the gear that sits "before" the clutch, up near the drive gear
const flywheel = { size: 96, top: '2.5%', side: 'left', reach: 380, teeth: 8, dir: 1, ratio: 3.3 }
const clutch = { size: 82, left: 200, top: '4%', teeth: 10, dir: -1, ratio: 3.9 }

function GearShape({ teeth, color, strokeWidth = 5 }) {
  const cx = 100, cy = 100, rOuter = 92, rInner = 74, rHub = 26
  const points = []
  for (let i = 0; i < teeth * 2; i++) {
    const angle = (i * Math.PI) / teeth
    const r = i % 2 === 0 ? rOuter : rInner
    points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`)
  }
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <polygon points={points.join(' ')} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <circle cx={cx} cy={cy} r={rInner - 8} fill="none" stroke={color} strokeWidth={strokeWidth * 0.6} />
      <circle cx={cx} cy={cy} r={rHub} fill="none" stroke={color} strokeWidth={strokeWidth} />
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i * Math.PI) / 3
        return (
          <line
            key={i}
            x1={cx + rHub * Math.cos(a)}
            y1={cy + rHub * Math.sin(a)}
            x2={cx + (rInner - 8) * Math.cos(a)}
            y2={cy + (rInner - 8) * Math.sin(a)}
            stroke={color}
            strokeWidth={strokeWidth * 0.6}
          />
        )
      })}
    </svg>
  )
}

function sideStyle(spec) {
  return spec.side === 'left' ? { left: -(spec.size - spec.reach) } : { right: -(spec.size - spec.reach) }
}

function ScrollGear({ spec, scrollYProgress, color }) {
  const rotate = useTransform(scrollYProgress, [0, 1], [0, spec.dir * spec.ratio * 900])
  return (
    <motion.div className="absolute" style={{ top: spec.top, width: spec.size, height: spec.size, rotate, ...sideStyle(spec) }}>
      <GearShape teeth={spec.teeth} color={color} />
    </motion.div>
  )
}

// flywheel idles on its own all the time (inner div, constant loop) — and
// meshes with the clutch, so on top of that it picks up a scroll-synced spin
// at the correct ratio (outer div). Nested rotations around the same center
// add together, so while scrolling its total speed actually corresponds to
// the rest of the train, and at rest it just keeps idling.
function FlywheelGear({ spec, scrollYProgress }) {
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, spec.dir * spec.ratio * 900])
  return (
    <motion.div className="absolute" style={{ top: spec.top, width: spec.size, height: spec.size, rotate: scrollRotate, ...sideStyle(spec) }}>
      <motion.div
        className="w-full h-full"
        animate={{ rotate: spec.dir * 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      >
        <GearShape teeth={spec.teeth} color="rgba(233,211,138,0.65)" strokeWidth={6} />
      </motion.div>
    </motion.div>
  )
}

// the clutch: a small friction plate between the flywheel and the drive gear,
// acting as the idler. Like the flywheel it idles continuously on its own
// (inner div), and gains an additive scroll-synced spin at the correct ratio
// and opposite direction (outer div), so its speed corresponds to the rest
// of the train while scrolling. Its rim also lights up once you scroll —
// the "engage" moment.
function ClutchPlate({ spec, scrollYProgress }) {
  const engage = useTransform(scrollYProgress, [0, 0.03], [0, 1])
  const ringOpacity = useTransform(engage, [0, 1], [0.35, 0.95])
  const glowBlur = useTransform(engage, [0, 1], [4, 20])
  const glowAlpha = useTransform(engage, [0, 1], [0.15, 0.6])
  const boxShadow = useTransform([glowBlur, glowAlpha], ([b, a]) => `0 0 ${b}px rgba(212,175,55,${a})`)
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, spec.dir * spec.ratio * 900])

  return (
    <motion.div
      className="absolute rounded-full"
      style={{ left: spec.left, top: spec.top, width: spec.size, height: spec.size, boxShadow, rotate: scrollRotate }}
    >
      <motion.div
        className="w-full h-full"
        animate={{ rotate: spec.dir * 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.circle cx="50" cy="50" r="44" fill="rgba(15,11,7,0.35)" stroke="rgba(233,211,138,0.6)" strokeWidth="3" style={{ opacity: ringOpacity }} />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4
            return (
              <line
                key={i}
                x1={50 + 20 * Math.cos(a)}
                y1={50 + 20 * Math.sin(a)}
                x2={50 + 40 * Math.cos(a)}
                y2={50 + 40 * Math.sin(a)}
                stroke="rgba(233,211,138,0.5)"
                strokeWidth="3"
              />
            )
          })}
          <circle cx="50" cy="50" r="13" fill="rgba(18,13,9,0.7)" stroke="rgba(233,211,138,0.65)" strokeWidth="3" />
        </svg>
      </motion.div>
    </motion.div>
  )
}

export default function MechanismBackground() {
  const { scrollYProgress } = useScroll()
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 220])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-rust-950" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#241a10_0%,_#160f09_60%,_#0f0b07_100%)]" />
      <div className="absolute inset-0 grain" />

      <motion.div
        className="absolute -inset-x-4 -top-56 -bottom-56 opacity-[0.14]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          y: gridY,
        }}
      />

      {/* more transparent on small screens so the gears don't crowd mobile content */}
      <div className="opacity-50 sm:opacity-70 md:opacity-90 lg:opacity-100">
        <FlywheelGear spec={flywheel} scrollYProgress={scrollYProgress} />
        <ClutchPlate spec={clutch} scrollYProgress={scrollYProgress} />

        {pairs.map((pair) => (
          <div key={pair.big.id}>
            <ScrollGear spec={pair.big} scrollYProgress={scrollYProgress} color="rgba(212,175,55,0.5)" />
            <ScrollGear spec={pair.small} scrollYProgress={scrollYProgress} color="rgba(193,120,71,0.55)" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 shadow-[inset_0_0_220px_110px_rgba(10,8,6,0.55)]" />
    </div>
  )
}
