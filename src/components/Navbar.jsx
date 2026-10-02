import { useState, useEffect } from 'react'
import wopLogo from '../assets/wop-logo.jpeg'
import instituteLogo from '../assets/top/institute.png'
import iicLogo from '../assets/top/iic.png'
import stbLogo from '../assets/top/stb.png'

const links = [
  { href: '#about', label: 'About' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#problems', label: 'Problem Statements' },
  { href: '#register', label: 'Register' },
]

const topLogos = [
  { src: instituteLogo, alt: 'BMS Institute of Technology and Management' },
  { src: iicLogo, alt: "Institution's Innovation Council" },
  { src: stbLogo, alt: 'IEEE BMSIT&M Student Branch' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-rust-950/90 backdrop-blur border-b border-rust-700/60' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <div className="flex items-center gap-3">
          <img src={wopLogo} alt="Winter of Projects logo" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-brass-400/70 shadow-brass" />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-bold text-sm tracking-widest text-bone">WINTER OF</span>
            <span className="font-display font-bold text-sm tracking-widest text-brass-400 text-glow-brass">PROJECTS</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-mono text-xs tracking-wider text-bone/80 hover:text-brass-400 transition-colors">
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* institute / IIC / STB — desktop inline */}
          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-rust-600/60">
            {topLogos.map((logo) => (
              <div key={logo.alt} className="bg-bone/95 rounded-sm px-1.5 py-1">
                <img src={logo.src} alt={logo.alt} title={logo.alt} className="h-7 w-auto max-w-[60px] object-contain" />
              </div>
            ))}
          </div>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-bone transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-bone transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-bone transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-rust-950/95 backdrop-blur border-t border-rust-700/60 px-4 py-4 flex flex-col gap-4">
          {/* institute / IIC / STB — mobile, inside the menu so the collapsed bar stays clean */}
          <div className="flex items-center gap-3 pb-3 border-b border-rust-700/50">
            {topLogos.map((logo) => (
              <div key={logo.alt} className="bg-bone/95 rounded-sm px-1.5 py-1">
                <img src={logo.src} alt={logo.alt} title={logo.alt} className="h-6 w-auto max-w-[52px] object-contain" />
              </div>
            ))}
          </div>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-mono text-sm tracking-wider text-bone/85">
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
