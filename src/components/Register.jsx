import { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { problemStatements } from '../data/problemStatements'

const MIN_TEAM = 2
const MAX_TEAM = 4

const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_GROUP_URL

const emptyLead = {
  full_name: '', usn: '', college_email: '', personal_email: '',
  phone: '', branch: '', year: '', section: '',
}
const emptyMember = { full_name: '', usn: '', college_email: '', branch: '', year: '' }

const inputCls =
  'w-full bg-rust-800/60 border border-rust-600/50 focus:border-brass-400/70 outline-none rounded-sm px-3 py-2 text-sm text-bone placeholder:text-bone/30'
const labelCls = 'block font-mono text-[10px] tracking-widest text-bone/50 mb-1 uppercase'

function Field({ label, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className={labelCls}>{label}</span>
      {children}
    </label>
  )
}

function YearSelect({ value, onChange }) {
  return (
    <select required value={value} onChange={onChange} className={inputCls}>
      <option value="" disabled>Select</option>
      {[1, 2, 3, 4].map((y) => <option key={y} value={y}>{y}</option>)}
    </select>
  )
}

export default function Register() {
  const [teamName, setTeamName] = useState('')
  const [lead, setLead] = useState(emptyLead)
  const [members, setMembers] = useState([{ ...emptyMember }])
  const [psId, setPsId] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | done
  const [error, setError] = useState('')
  const [registeredTeamName, setRegisteredTeamName] = useState('')

  const teamSize = 1 + members.length
  const psMatch = problemStatements.find((p) => p.id === psId)
  const suggestions = problemStatements.filter((p) => p.id.includes(psId))
  const setLeadField = (k, v) => setLead((l) => ({ ...l, [k]: v }))
  const setMemberField = (i, k, v) =>
    setMembers((ms) => ms.map((m, idx) => (idx === i ? { ...m, [k]: v } : m)))
  const addMember = () => teamSize < MAX_TEAM && setMembers((ms) => [...ms, { ...emptyMember }])
  const removeMember = (i) => teamSize > MIN_TEAM && setMembers((ms) => ms.filter((_, idx) => idx !== i))

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    const cleanTeamName = teamName.trim()
    if (cleanTeamName.length < 2) {
      setError('Enter a team name with at least 2 characters.')
      return
    }

    if (!psMatch) {
      setError('Enter a valid problem statement ID, for example SPS-SW-01.')
      return
    }

    const everyone = [lead, ...members]
    const usns = everyone.map((p) => p.usn.trim().toUpperCase())
    if (new Set(usns).size !== usns.length) {
      setError('Every team member needs a different USN.')
      return
    }

    setStatus('sending')
    const { error: rpcError } = await supabase.rpc('register_team', {
      p_team_name: cleanTeamName,
      p_problem_statement_id: psId,
      p_participants: everyone, // first entry is treated as the lead
    })

    if (rpcError) {
      setStatus('idle')

      if (rpcError.code === '23505') {
        if (rpcError.message.includes('teams_team_name_unique')) {
          setError('That team name is already taken. Please pick another one.')
        } else if (rpcError.message.includes('participants_usn_key')) {
          setError('One of these USNs is already registered in another team. Check with your teammates.')
        } else {
          setError('Duplicate entry found. Please check your details.')
        }
      } else {
        setError('Something went wrong. Please try again, or contact us using the details below.')
      }
      return
    }

    setRegisteredTeamName(cleanTeamName)
    setTeamName('')
    setStatus('done')
  }

  return (
    <section id="register" className="relative py-24 sm:py-32 bg-rust-950/30 overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <span className="font-mono text-xs tracking-[0.3em] text-brass-300">04 / REGISTER</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 mb-6 text-bone">
            Bring your team to the workshop.
          </h2>
          <p className="text-bone/65 text-sm sm:text-base mb-10 max-w-xl mx-auto">
            Teams of 2 to 4. Registration closes before Week 0 kickoff, so lock in your team and
            preferred problem statement early.
          </p>
        </div>

        {status === 'done' ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-rust-900 border border-brass-400/50 clip-plate p-8 text-center"
          >
            <h3 className="font-display font-bold text-2xl text-bone mb-2">You're registered.</h3>
            <p className="text-bone/65 text-sm">
              Your team{' '}
              <span className="font-display font-bold text-brass-300">{registeredTeamName}</span>{' '}
              has been registered successfully. Watch your email for the next steps.
            </p>

            {WHATSAPP_URL && (
              <div className="mt-8">
                <p className="text-bone/65 text-sm mb-4">
                  Join the participants WhatsApp group for all updates and announcements.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-sm bg-brass-400 text-rust-950 font-display font-bold tracking-wide shadow-brass"
                >
                  JOIN WHATSAPP GROUP
                </a>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-rust-900 border border-rust-600/60 clip-plate p-5 sm:p-8 flex flex-col gap-8"
          >
            {/* team name */}
            <fieldset className="flex flex-col gap-4">
              <legend className="font-display font-bold text-lg text-bone mb-1">Team name</legend>
              <Field label="Team name">
                <input
                  required
                  minLength={2}
                  maxLength={50}
                  placeholder="e.g. Team Pulse"
                  className={inputCls}
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </Field>
            </fieldset>

            {/* team lead */}
            <fieldset className="flex flex-col gap-4">
              <legend className="font-display font-bold text-lg text-bone mb-1">Team lead</legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name">
                  <input required className={inputCls} value={lead.full_name}
                    onChange={(e) => setLeadField('full_name', e.target.value)} />
                </Field>
                <Field label="USN">
                  <input required maxLength={15} className={`${inputCls} uppercase`} value={lead.usn}
                    onChange={(e) => setLeadField('usn', e.target.value)} />
                </Field>
                <Field label="College email">
                  <input required type="email" className={inputCls} value={lead.college_email}
                    onChange={(e) => setLeadField('college_email', e.target.value)} />
                </Field>
                <Field label="Personal email">
                  <input required type="email" className={inputCls} value={lead.personal_email}
                    onChange={(e) => setLeadField('personal_email', e.target.value)} />
                </Field>
                <Field label="Phone (WhatsApp preferred)" className="sm:col-span-2">
                  <input required type="tel" inputMode="tel" pattern="[0-9+ ]{10,15}"
                    title="10 to 15 digits, e.g. +91 98765 43210"
                    className={inputCls} value={lead.phone}
                    onChange={(e) => setLeadField('phone', e.target.value)} />
                </Field>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Field label="Branch">
                  <input required placeholder="ECE" className={`${inputCls} uppercase`} value={lead.branch}
                    onChange={(e) => setLeadField('branch', e.target.value)} />
                </Field>
                <Field label="Year">
                  <YearSelect value={lead.year} onChange={(e) => setLeadField('year', e.target.value)} />
                </Field>
                <Field label="Section">
                  <input required maxLength={3} placeholder="A" className={`${inputCls} uppercase`}
                    value={lead.section} onChange={(e) => setLeadField('section', e.target.value)} />
                </Field>
              </div>
            </fieldset>

            {/* members */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-lg text-bone">Team members</h3>
                <span className="font-mono text-[10px] text-bone/50">
                  TEAM SIZE {teamSize} / {MAX_TEAM}
                </span>
              </div>

              {members.map((m, i) => (
                <fieldset key={i} className="border border-rust-600/40 rounded-sm p-4 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <legend className="font-mono text-[10px] tracking-widest text-brass-300 uppercase">
                      Member {i + 1}
                    </legend>
                    {teamSize > MIN_TEAM && (
                      <button type="button" onClick={() => removeMember(i)}
                        className="font-mono text-[10px] text-bone/40 hover:text-brass-400">
                        REMOVE
                      </button>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full name">
                      <input required className={inputCls} value={m.full_name}
                        onChange={(e) => setMemberField(i, 'full_name', e.target.value)} />
                    </Field>
                    <Field label="USN">
                      <input required maxLength={15} className={`${inputCls} uppercase`} value={m.usn}
                        onChange={(e) => setMemberField(i, 'usn', e.target.value)} />
                    </Field>
                    <Field label="Email" className="sm:col-span-2">
                      <input required type="email" className={inputCls} value={m.college_email}
                        onChange={(e) => setMemberField(i, 'college_email', e.target.value)} />
                    </Field>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Branch">
                      <input required placeholder="ECE" className={`${inputCls} uppercase`} value={m.branch}
                        onChange={(e) => setMemberField(i, 'branch', e.target.value)} />
                    </Field>
                    <Field label="Year">
                      <YearSelect value={m.year} onChange={(e) => setMemberField(i, 'year', e.target.value)} />
                    </Field>
                  </div>
                </fieldset>
              ))}

              {teamSize < MAX_TEAM && (
                <button type="button" onClick={addMember}
                  className="self-start font-mono text-xs tracking-wider text-brass-300 border border-brass-400/50 hover:border-brass-400 rounded-sm px-4 py-2 transition">
                  + ADD MEMBER
                </button>
              )}
            </div>

            {/* problem statement */}
            <fieldset className="flex flex-col gap-2">
              <legend className="font-display font-bold text-lg text-bone mb-1">Problem statement</legend>
              <Field label="Problem statement ID">
                <input
                  required
                  value={psId}
                  onChange={(e) => setPsId(e.target.value.replace(/\s/g, '').toUpperCase())}
                  placeholder="Type or tap an ID, e.g. SPS-SW-01"
                  autoCapitalize="characters"
                  autoCorrect="off"
                  spellCheck={false}
                  className={`${inputCls} font-mono`}
                />
              </Field>

              {psMatch ? (
                <p className="text-xs text-brass-300">✓ {psMatch.title}</p>
              ) : psId ? (
                <p className="text-xs text-bone/40">No match yet. Pick one from the list below.</p>
              ) : null}

              <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                {suggestions.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPsId(p.id)}
                    className={`font-mono text-[10px] tracking-wider px-2.5 py-1.5 rounded-sm border transition ${
                      p.id === psId
                        ? 'bg-brass-400 text-rust-950 border-brass-400'
                        : 'border-bone/25 text-bone/60 hover:border-brass-400/60'
                    }`}
                  >
                    {p.id}
                  </button>
                ))}
              </div>

              <p className="text-bone/40 text-xs">
                Several teams can choose the same problem statement. Read the full briefs in the section above.
              </p>
            </fieldset>

            {error && (
              <p role="alert" className="text-sm text-red-300 border border-red-400/40 bg-red-950/30 rounded-sm px-4 py-3">
                {error}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-sm bg-brass-400 text-rust-950 font-display font-bold text-lg tracking-wide shadow-brass disabled:opacity-60"
            >
              {status === 'sending' ? 'SUBMITTING...' : 'REGISTER YOUR TEAM'}
            </motion.button>
          </motion.form>
        )}

        <p className="text-bone/35 text-xs font-mono mt-6 text-center">
          Having trouble with the form? Reach out on the contacts below.
        </p>
      </div>
    </section>
  )
}