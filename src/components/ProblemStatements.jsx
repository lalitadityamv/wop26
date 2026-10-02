import { useState } from 'react'
import { motion } from 'framer-motion'
import { problemStatements } from '../data/problemStatements'
import { contributingSocieties } from '../data/societies'
import PSBrowseModal from './PSBrowseModal'
import PSDetailModal from './PSDetailModal'

function societyOf(code) {
  return contributingSocieties.find((s) => s.code === code)
}

export default function ProblemStatements() {
  const [browseOpen, setBrowseOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const track = [...problemStatements, ...problemStatements]

  return (
    <section id="problems" className="relative py-24 sm:py-32 bg-rust-900/35 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-14">
        <span className="font-mono text-xs tracking-[0.3em] text-brass-300">03 / PROBLEM STATEMENTS</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 text-bone">
  {problemStatements.length} challenges, {contributingSocieties.length} societies.
</h2>
<p className="text-bone/60 text-sm sm:text-base mt-4 max-w-2xl">
  Every IEEE society chapter at BMSIT&amp;M brought its own problem statements, split into
  hardware and software tracks. Scroll the preview below, click any card for a quick look,
  or browse everything by society and track.
</p>
      </div>

      {/* auto scrolling marquee */}
      <div className="relative w-full overflow-hidden py-2 mb-12 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
  className="flex gap-5 w-max"
  animate={{ x: ['0%', '-50%'] }}
  transition={{ duration: problemStatements.length * 2, repeat: Infinity, ease: 'linear' }}
>
          {track.map((ps, i) => {
            const soc = societyOf(ps.society)
            return (
              <button
                key={`${ps.id}-${i}`}
                onClick={() => setSelected(ps)}
                className="shrink-0 w-64 sm:w-72 text-left bg-rust-800/70 border border-rust-600/50 hover:border-brass-400/70 hover:-translate-y-1 transition-all rounded-sm p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] px-2 py-0.5 rounded-sm border border-brass-400/50 text-brass-300">
  {soc && (
    <span className="bg-bone/95 rounded-sm px-1 py-0.5 flex items-center">
      <img src={soc.logo} alt={soc.name} className="h-3.5 w-auto" />
    </span>
  )}
  {ps.society} · {ps.track}
</span>
                  <span className="font-mono text-[9px] text-bone/35">{ps.id}</span>
                </div>
                <div className="font-display font-bold text-base text-bone leading-snug">{ps.title}</div>
                <p className="text-bone/55 text-xs mt-2 line-clamp-2">{ps.summary}</p>
              </button>
            )
          })}
        </motion.div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setBrowseOpen(true)}
          className="px-8 py-3 rounded-sm bg-brass-300 text-rust-950 font-display font-bold tracking-wide shadow-copper hover:brightness-110 transition"
        >
          VIEW ALL PROBLEM STATEMENTS
        </button>
      </div>

      <PSBrowseModal
        open={browseOpen}
        onClose={() => setBrowseOpen(false)}
        onSelect={(ps) => {
          setSelected(ps)
        }}
      />
      <PSDetailModal ps={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
