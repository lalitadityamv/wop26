import { motion } from 'framer-motion'

const stats = [
  { label: 'Weeks', value: '8' },
  { label: 'Societies', value: '14' },
  { label: 'Problem Statements', value: '35+' },
  { label: 'Tracks', value: 'HW / SW' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-rust-900/35 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-brass-300"
        >
          01 / ABOUT
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 mb-6 text-bone"
        >
          A workshop, not a sprint.
        </motion.h2>
        <motion.p
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="text-bone/70 text-sm sm:text-base leading-relaxed max-w-2xl"
>
  Winter of Projects is an 8-week build program organised by the IEEE BMSIT&amp;M Student
  Branch together with three of its society chapters: Signal Processing (SPS), Geoscience
  &amp; Remote Sensing (GRSS), and the Computer Society (CS). The problem statements come
  from every society chapter on campus, split into hardware and software tracks, so you
  pick a challenge that actually matches the tools you want to get good at. Each problem
  statement is mentored by members of the society that proposed it, with weekly check-ins,
  and the program closes with a demo day judged by faculty and industry reviewers.
</motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="clip-plate bg-rust-800/70 border border-rust-600/50 p-4 sm:p-6 text-center"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl text-brass-400 text-glow-brass">{s.value}</div>
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-bone/60 mt-2 uppercase">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
