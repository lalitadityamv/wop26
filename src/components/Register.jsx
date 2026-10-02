import { motion } from 'framer-motion'

const REGISTRATION_LINK = 'https://forms.gle/REPLACE-WITH-YOUR-FORM-LINK'

export default function Register() {
  return (
    <section id="register" className="relative py-24 sm:py-32 bg-rust-950/30 overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span className="font-mono text-xs tracking-[0.3em] text-brass-300">04 / REGISTER</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 mb-6 text-bone">
          Bring your team to the workshop.
        </h2>
        <p className="text-bone/65 text-sm sm:text-base mb-10 max-w-xl mx-auto">
          Teams of 2 to 4. Registration closes before Week 0 kickoff, so lock in your team and
          preferred problem statement early.
        </p>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href={REGISTRATION_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-sm bg-brass-400 text-rust-950 font-display font-bold text-lg tracking-wide shadow-brass"
        >
          REGISTER YOUR TEAM
        </motion.a>

        <p className="text-bone/35 text-xs font-mono mt-6">
          Having trouble with the form? Reach out on the contacts below.
        </p>
      </div>
    </section>
  )
}
