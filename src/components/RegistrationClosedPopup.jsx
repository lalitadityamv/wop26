import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { REGISTRATIONS_OPEN } from '../config'

export default function RegistrationClosedPopup() {
  const [open, setOpen] = useState(true)

  if (REGISTRATIONS_OPEN) return null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-rust-900 border border-brass-400/60 clip-plate p-6 sm:p-8 text-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="closed-title"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-bone/50 hover:text-brass-400 text-xl leading-none"
            >
              &times;
            </button>

            <span className="font-mono text-[10px] tracking-[0.3em] text-brass-300 uppercase">
              Winter of Projects
            </span>
            <h3 id="closed-title" className="font-display font-bold text-2xl sm:text-3xl text-bone mt-2 mb-3">
              Registrations Closed
            </h3>
            <p className="text-bone/70 text-sm leading-relaxed">
              Thank you to everyone who registered. Registrations for Winter of Projects are now
              closed. Follow <span className="text-brass-300">@bmsit_ieee</span> on Instagram for
              updates.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 px-8 py-3 rounded-sm bg-brass-400 text-rust-950 font-display font-bold tracking-wide shadow-brass hover:brightness-110 transition"
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}