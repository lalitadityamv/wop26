import { motion } from 'framer-motion'

// TODO: replace with the real amounts
const TOTAL_POOL = '₹00,000'

const prizes = [
  { place: '2nd', title: 'Runner-up', amount: '₹00,000' },
  { place: '1st', title: 'Winner', amount: '₹00,000', featured: true },
  { place: '3rd', title: 'Second Runner-up', amount: '₹00,000' },
]

export default function PrizePool() {
  return (
    <section id="prizes" className="relative py-24 sm:py-32 bg-rust-950/30 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-brass-300"
        >
          02 / PRIZE POOL
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 mb-4 text-bone"
        >
          Build it. Demo it. Win big.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-bone/70 text-sm sm:text-base leading-relaxed max-w-2xl"
        >
          Your project is funded while you build it, and the best demos at the finale are judged
          by faculty and industry reviewers for a share of the prize pool.
        </motion.p>

        {/* total pool */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="clip-plate bg-rust-800/70 border border-brass-400/40 mt-12 px-6 py-8 sm:py-10 text-center"
        >
          <div className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-bone/60 uppercase">
            Total prize pool
          </div>
          <div className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-brass-400 text-glow-brass mt-3">
            {TOTAL_POOL}
          </div>
        </motion.div>

        {/* tiers: winner is centred on desktop and first on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6 md:items-end">
          {prizes.map((p, i) => (
            <motion.div
              key={p.place}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`clip-plate p-6 text-center border ${
                p.featured
                  ? 'order-first md:order-none bg-rust-800/90 border-brass-400/70 shadow-brass md:py-10'
                  : 'bg-rust-800/70 border-rust-600/50'
              }`}
            >
              <div
                className={`font-mono text-xs tracking-[0.3em] uppercase ${
                  p.featured ? 'text-brass-300' : 'text-bone/50'
                }`}
              >
                {p.place} place
              </div>
              <div className="font-display font-bold text-lg text-bone mt-1">{p.title}</div>
              <div
                className={`font-display font-bold mt-4 ${
                  p.featured
                    ? 'text-4xl sm:text-5xl text-brass-400 text-glow-brass'
                    : 'text-3xl sm:text-4xl text-brass-300'
                }`}
              >
                {p.amount}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}