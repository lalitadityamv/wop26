import { motion, AnimatePresence } from 'framer-motion'
import { contributingSocieties } from '../data/societies'

export default function PSDetailModal({ ps, onClose }) {
  if (!ps) return null
  const society = contributingSocieties.find((s) => s.code === ps.society)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-rust-900 border border-rust-600/60 clip-plate p-6 sm:p-8"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-bone/50 hover:text-brass-400 text-xl leading-none">
            &times;
          </button>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center gap-1.5 font-mono text-[10px] px-2 py-1 rounded-sm border border-brass-400/60 text-brass-300">
  {society && (
    <span className="bg-bone/95 rounded-sm px-1 py-0.5 flex items-center">
      <img src={society.logo} alt={society.name} className="h-4 w-auto" />
    </span>
  )}
  {ps.society}
</span>
            <span className="font-mono text-[10px] px-2 py-1 rounded-sm border border-bone/30 text-bone/60">
              {ps.track === 'HW' ? 'HARDWARE' : 'SOFTWARE'}
            </span>
            <span className="font-mono text-[10px] text-bone/40 ml-auto">ID: {ps.id}</span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-bone mb-3">{ps.title}</h3>
          <div className="text-bone/70 text-sm leading-relaxed whitespace-pre-line max-h-[50vh] overflow-y-auto pr-2">
  {ps.details || ps.summary}
</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
