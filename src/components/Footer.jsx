import { allSocieties } from '../data/societies'
import instituteLogo from '../assets/top/institute.png'
import iicLogo from '../assets/top/iic.png'
import stbLogo from '../assets/top/stb.png'

const contacts = [
  { label: 'Event Lead', value: 'ieeestb.bmsit@gmail.com' },
  { label: 'Phone', value: '+91 63647 44793' },
  { label: 'Phone', value: '+91 90085 75914' },
  { label: 'Instagram', value: '@bmsit_ieee' },
]

export default function Footer() {
  return (
    <footer className="bg-rust-950 border-t border-rust-700/60 pt-16 pb-8 px-4 sm:px-6">
      

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-10 sm:gap-6 mb-12">
        <div>
          <h4 className="font-display font-bold text-lg text-bone mb-3">Winter of Projects</h4>
          <p className="text-bone/55 text-sm leading-relaxed">
  Organised by the IEEE BMSIT&amp;M Student Branch with the Signal Processing Society, the
  Geoscience &amp; Remote Sensing Society, and the Computer Society. Problem statements are
  contributed by every society chapter and mentored by its members.
</p>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-widest text-brass-300 mb-4 uppercase">Contacts</h4>
          <ul className="flex flex-col gap-2">
            {contacts.map((c) => (
              <li key={c.label} className="text-sm text-bone/60">
                <span className="text-bone/35">{c.label}: </span>{c.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-12">
  <h4 className="font-mono text-xs tracking-widest text-brass-300 mb-4 uppercase">IEEE Societies at BMSIT&amp;M</h4>
  <div className="flex flex-wrap gap-3">
    {allSocieties.map((s) => (
      <div key={s.code} className="bg-bone/95 rounded-sm px-2 py-1.5">
        <img src={s.logo} alt={s.name} title={s.name} className="h-10 w-auto" />
      </div>
    ))}
  </div>
</div>

      <div className="max-w-6xl mx-auto border-t border-rust-700/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-bone/35 text-xs font-mono">&copy; 2026 IEEE BMSIT&amp;M Student Branch. All rights reserved.</p>
        <p className="text-bone/35 text-xs font-mono">Built for Winter of Projects</p>
      </div>
    </footer>
  )
}
