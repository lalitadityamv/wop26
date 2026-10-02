import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import { contributingSocieties } from '../data/societies'
import { problemStatements } from '../data/problemStatements'

export default function PSBrowseModal({ open, onClose, onSelect }) {
  const [activeSociety, setActiveSociety] = useState('ALL')

  const grouped = useMemo(() => {
    const list = activeSociety === 'ALL' ? contributingSocieties : contributingSocieties.filter((s) => s.code === activeSociety)
    return list.map((soc) => ({
      society: soc,
      hw: problemStatements.filter((p) => p.society === soc.code && p.track === 'HW'),
      sw: problemStatements.filter((p) => p.society === soc.code && p.track === 'SW'),
    })).filter((g) => g.hw.length || g.sw.length)
  }, [activeSociety])

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-rust-900 border border-rust-600/60 clip-plate my-8 sm:my-0"
        >
          <div className="sticky top-0 bg-rust-900/95 backdrop-blur border-b border-rust-700/60 px-5 sm:px-8 py-5 flex items-center justify-between z-10">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-bone">All Problem Statements</h3>
            <button onClick={onClose} className="text-bone/50 hover:text-brass-400 text-2xl leading-none">&times;</button>
          </div>

          <div className="px-5 sm:px-8 pt-5 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSociety('ALL')}
              className={`font-mono text-[10px] tracking-wider px-3 py-1.5 rounded-sm border ${activeSociety === 'ALL' ? 'bg-brass-400 text-rust-950 border-brass-400' : 'border-bone/25 text-bone/60'}`}
            >
              ALL
            </button>
            {contributingSocieties.map((s) => (
              <button
  key={s.code}
  onClick={() => setActiveSociety(s.code)}
  className={`flex items-center gap-1.5 font-mono text-[10px] tracking-wider px-3 py-1.5 rounded-sm border transition ${
    activeSociety === s.code ? 'bg-brass-400 text-rust-950 border-brass-400' : 'border-bone/25 text-bone/60'
  }`}
>
  <span className="bg-bone/95 rounded-sm px-1 py-0.5 flex items-center">
    <img src={s.logo} alt={s.name} className="h-3.5 w-auto" />
  </span>
  {s.code}
</button>
            ))}
          </div>

          <div className="px-5 sm:px-8 py-6 sm:py-8 flex flex-col gap-10 max-h-[65vh] overflow-y-auto">
            {grouped.map((g) => (
              <div key={g.society.code}>
                <div className="flex items-center gap-2.5 mb-4">
  <div className="bg-bone/95 rounded-sm px-1.5 py-1 flex items-center">
    <img src={g.society.logo} alt={g.society.name} className="h-6 w-auto" />
  </div>
  <h4 className="font-display font-bold text-base sm:text-lg text-bone">{g.society.name}</h4>
  <span className="font-mono text-[10px] text-bone/40">{g.society.code}</span>
</div>

                {['hw', 'sw'].map((track) =>
                  g[track].length ? (
                    <div key={track} className="mb-5 last:mb-0">
                      <div className="font-mono text-[10px] tracking-widest text-bone/40 mb-2 uppercase">
                        {track === 'hw' ? 'Hardware Track' : 'Software Track'}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {g[track].map((ps) => (
                          <button
                            key={ps.id}
                            onClick={() => onSelect(ps)}
                            className="text-left bg-rust-800/60 border border-rust-600/50 hover:border-brass-400/60 rounded-sm p-4 transition group"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-mono text-[10px] text-brass-300">{ps.id}</span>
                              <span className="text-bone/30 group-hover:text-brass-400 transition text-xs">&rarr;</span>
                            </div>
                            <div className="font-display font-bold text-sm sm:text-base text-bone">{ps.title}</div>
                            <p className="text-bone/55 text-xs mt-1 line-clamp-2">{ps.summary}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
