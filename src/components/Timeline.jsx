import { motion } from 'framer-motion'

const stops = [
  { date: 'Oct 5', title: 'Registrations Open', desc: 'Teams form, problem statements drop, kickoff briefing.' },
  { date: 'Oct 10', title: 'Track Lock-in', desc: 'Confirm your society, problem statement, and HW / SW track.' },
  { date: 'Oct 20', title: 'Project PPT Submission', desc: 'Submit a presentation covering your approach, design and planned prototype.' },
  { date: 'Oct 31', title: 'Selected Teams Announced', desc: 'Shortlisted teams move into build. Weekly mentor check-ins begin.' },
  { date: 'Dec', title: 'Demo Day', desc: 'Final showcase, judging, and awards. Date to be announced.' },
]

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32 bg-rust-950/30 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <span className="font-mono text-xs tracking-[0.3em] text-brass-300">02 / TIMELINE</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 mb-14 text-bone">8 weeks, mapped out.</h2>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-brass-400 via-rust-600 to-brass-300" />
          <div className="flex flex-col gap-10 sm:gap-12">
            {stops.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-8 sm:-left-10 top-1 w-4 h-4 rounded-full bg-rust-950 border-2 border-brass-400 shadow-brass" />
                <div className="font-mono text-xs tracking-widest text-brass-400 mb-1">{s.date.toUpperCase()}</div>
                <div className="font-display font-bold text-lg sm:text-xl text-bone">{s.title}</div>
                <p className="text-bone/60 text-sm mt-1 max-w-md">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
