import { motion } from 'framer-motion'

export default function RegistrationClosed() {
  return (
    <section id="register" className="relative py-24 sm:py-32 bg-rust-950/30 overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span className="font-mono text-xs tracking-[0.3em] text-brass-300">REGISTRATIONS</span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 mb-6 text-bone"
        >
          Registrations are closed.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-bone/65 text-sm sm:text-base mb-8 max-w-xl mx-auto"
        >
          Thank you to every team that signed up. Follow the IEEE BMSIT&amp;M Student Branch on
          Instagram (@bmsit_ieee) for the next announcements.
        </motion.p>
        <span className="inline-block px-10 py-4 rounded-sm border border-bone/25 text-bone/50 font-display font-bold text-lg tracking-wide cursor-not-allowed select-none">
          REGISTRATIONS CLOSED
        </span>
      </div>
    </section>
  )
}