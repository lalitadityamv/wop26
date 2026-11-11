import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { allSocieties } from '../data/societies'
import { problemStatements } from '../data/problemStatements'
import { selectedTeams, openInnovationTeams } from '../data/results'

const psById = Object.fromEntries(problemStatements.map((p) => [p.id, p]))
const societyByCode = Object.fromEntries(allSocieties.map((s) => [s.code, s]))

// one flat list so the strip can show everything in a single row
const items = [
  ...selectedTeams.map((t) => ({
    team: t.team,
    psId: t.psId,
    society: societyByCode[psById[t.psId]?.society] || null,
    open: false,
  })),
  ...openInnovationTeams.map((name) => ({
    team: name,
    psId: null,
    society: null,
    open: true,
  })),
]

const total = items.length

// every word typed must appear somewhere in the card's searchable text
function matches(tokens, item) {
  if (!tokens.length) return true
  const ps = psById[item.psId]
  const hay = [
    item.team,
    item.psId,
    ps?.title,
    item.society?.name,
    item.society?.code,
    item.open ? 'open innovation' : '',
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
  return tokens.every((tok) => hay.includes(tok))
}

function TeamCard({ item }) {
  const ps = psById[item.psId]
  return (
    <div className="shrink-0 w-64 sm:w-72 mr-3 bg-rust-800/70 border border-rust-600/50 rounded-sm p-4 flex flex-col">
      <div className="h-8 mb-3 flex items-center">
        {item.society ? (
          <div className="bg-bone/95 rounded-sm px-1.5 py-1 flex items-center">
            <img src={item.society.logo} alt={item.society.name} className="h-6 w-auto" />
          </div>
        ) : (
          <span className="font-mono text-[10px] tracking-widest text-brass-300">
            {item.open ? 'OPEN INNOVATION' : 'OTHER'}
          </span>
        )}
      </div>
      <div className="font-display font-bold text-base sm:text-lg text-bone tracking-wide uppercase">
        {item.team}
      </div>
      {item.psId && (
        <>
          <div className="font-mono text-[10px] text-brass-300 mt-2">{item.psId}</div>
          {ps && <div className="text-bone/55 text-xs mt-1 line-clamp-2">{ps.title}</div>}
        </>
      )}
    </div>
  )
}

function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`font-mono text-[11px] tracking-wide px-3 py-1.5 rounded-sm border transition-colors ${
        active
          ? 'bg-brass-300 text-rust-950 border-brass-300'
          : 'border-rust-600/60 text-bone/70 hover:border-brass-300/60'
      }`}
    >
      {children}
    </button>
  )
}

export default function Results() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all') // 'all' | society code | 'open'

  const scrollerRef = useRef(null)
  const pausedRef = useRef(false)
  const resumeTimer = useRef(null)

  const tokens = useMemo(
    () => query.trim().toLowerCase().split(/\s+/).filter(Boolean),
    [query]
  )

  const filtered = useMemo(
    () =>
      items.filter((it) => {
        const inFilter =
          filter === 'all' ||
          (filter === 'open' ? it.open : it.society?.code === filter)
        return inFilter && matches(tokens, it)
      }),
    [tokens, filter]
  )

  // drift only when nothing is filtered, otherwise show the matches still
  const auto = filtered.length === items.length && filtered.length > 3
  const rendered = auto ? [...filtered, ...filtered] : filtered

  // jump back to the start whenever the result set changes
  useEffect(() => {
    if (scrollerRef.current) scrollerRef.current.scrollLeft = 0
  }, [query, filter])

  // continuous drift with seamless wraparound
  useEffect(() => {
    const el = scrollerRef.current
    if (!auto || !el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const speed = 40 // pixels per second, make it negative to reverse direction
    let pos = el.scrollLeft
    let last = performance.now()
    let raf

    const tick = (now) => {
      const dt = (now - last) / 1000
      last = now
      if (pausedRef.current) {
        pos = el.scrollLeft // follow the user while paused
      } else {
        pos += speed * dt
        const half = el.scrollWidth / 2
        if (pos >= half) pos -= half
        el.scrollLeft = pos
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [auto])

  const pause = () => {
    clearTimeout(resumeTimer.current)
    pausedRef.current = true
  }
  const resume = (delay = 0) => {
    clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false
    }, delay)
  }

  const nudge = (dir) =>
    scrollerRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })

  return (
    <section id="results" className="relative py-24 sm:py-32 bg-rust-950/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-brass-300"
        >
          RESULTS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 mb-4 text-bone"
        >
          {total} teams selected.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-bone/65 text-sm sm:text-base max-w-2xl mb-8"
        >
          Congratulations to the selected teams, and thank you to everyone who applied. Search by
          team name or society to find yours.
        </motion.p>

        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={pause}
          onBlur={() => resume(1500)}
          placeholder="Search team name or society"
          className="w-full bg-rust-800/70 border border-rust-600/50 rounded-sm px-4 py-3 text-bone placeholder:text-bone/40 text-sm focus:outline-none focus:border-brass-300"
        />

        <div className="flex flex-wrap gap-2 mt-4 mb-3">
          <Chip active={filter === 'all'} onClick={() => setFilter('all')}>ALL</Chip>
          {allSocieties.map((s) => (
            <Chip key={s.code} active={filter === s.code} onClick={() => setFilter(s.code)}>
              {s.code}
            </Chip>
          ))}
          {openInnovationTeams.length > 0 && (
            <Chip active={filter === 'open'} onClick={() => setFilter('open')}>OPEN INNOVATION</Chip>
          )}
        </div>

        <div className="font-mono text-[11px] text-bone/40 mb-6">
          Showing {filtered.length} of {total}
        </div>
      </div>

      {/* the moving strip spans the full width of the section */}
      <div
        className="relative"
        onMouseEnter={pause}
        onMouseLeave={() => resume(0)}
        onTouchStart={pause}
        onTouchEnd={() => resume(2000)}
      >
        {filtered.length === 0 ? (
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-bone/60 text-sm border border-dashed border-rust-600/50 rounded-sm p-8 text-center">
              No team found for "{query}". Check the spelling or try a society name.
            </div>
          </div>
        ) : (
          <>
            <div
              ref={scrollerRef}
              className="flex overflow-x-auto px-4 sm:px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {rendered.map((it, i) => (
                <TeamCard key={`${it.team}-${it.psId}-${i}`} item={it} />
              ))}
            </div>

            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-rust-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-rust-950 to-transparent" />

            {/* arrows */}
            <button
              onClick={() => nudge(-1)}
              aria-label="Scroll left"
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-sm bg-rust-800 border border-rust-600/60 text-bone hover:border-brass-300"
            >
              ‹
            </button>
            <button
              onClick={() => nudge(1)}
              aria-label="Scroll right"
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-sm bg-rust-800 border border-rust-600/60 text-bone hover:border-brass-300"
            >
              ›
            </button>
          </>
        )}
      </div>
    </section>
  )
}