import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* no local background here on purpose: MechanismBackground shows through */}
      <div className="absolute inset-0 bg-rust-950/25" />

      {/* one slow, minimal drifting glow so the hero doesn't read flat */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-[640px] max-h-[640px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.16) 0%, transparent 70%)' }}
        animate={{ x: ['-6%', '6%', '-6%'], y: ['-4%', '5%', '-4%'], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono text-[11px] sm:text-xs tracking-[0.35em] text-brass-300 mb-4"
        >
          IEEE BMSITM STB · CS · SPS · GRSS
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-wide"
        >
          <span className="block text-bone">WINTER OF</span>
          <span className="block text-brass-400 text-glow-brass">PROJECTS</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: [0.3, 1, 0.3], scaleX: 1 }}
          transition={{ opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }, scaleX: { duration: 0.8, delay: 0.35 } }}
          className="mx-auto mt-5 h-[2px] w-28 bg-gradient-to-r from-transparent via-brass-400 to-transparent"
        />
        <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.25 }}
  className="mt-6 text-sm sm:text-base text-bone/70 max-w-xl mx-auto"
>
  Eight weeks in the workshop. Pick a problem statement from any IEEE society, pick a track,
  and build something that runs, with society's members mentoring you along the way.
</motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#register" className="w-full sm:w-auto px-8 py-3 rounded-sm bg-brass-400 text-rust-950 font-display font-bold tracking-wide shadow-brass hover:brightness-110 transition">
            REGISTER NOW
          </a>
          <a href="#problems" className="w-full sm:w-auto px-8 py-3 rounded-sm border border-copper-400/70 text-copper-400 font-display font-bold tracking-wide hover:bg-copper-400/10 transition">
            VIEW PROBLEM STATEMENTS
          </a>
        </motion.div>
      </div>
    </section>
  )
}
