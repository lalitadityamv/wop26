import aess from '../assets/societies/aess.png'
import grss from '../assets/societies/grss.png'
import comsoc from '../assets/societies/comsoc.png'
import computerSociety from '../assets/societies/computer-society.png'
import cis from '../assets/societies/cis.png'
import pes from '../assets/societies/pes.png'
import wie from '../assets/societies/wie.png'
import infoTheory from '../assets/societies/infotheory.png'
import sps from '../assets/societies/sps.png'
import embs from '../assets/societies/embs.png'
import photonics from '../assets/societies/photonics.png'
import apmtt from '../assets/societies/apmtt.png'
import ras from '../assets/societies/ras.png'
import cas from '../assets/societies/cas.png'

// every IEEE society chapter active at the BMSIT&M student branch — shown in full in the footer
export const allSocieties = [
  { code: 'AESS', name: 'Aerospace & Electronic Systems Society', logo: aess },
  { code: 'GRSS', name: 'Geoscience & Remote Sensing Society', logo: grss },
  { code: 'ComSoc', name: 'Communications Society', logo: comsoc },
  { code: 'CS', name: 'Computer Society', logo: computerSociety },
  { code: 'CIS', name: 'Computational Intelligence Society', logo: cis },
  { code: 'PES', name: 'Power & Energy Society', logo: pes },
  { code: 'WIE', name: 'Women in Engineering', logo: wie },
  { code: 'ITSOC', name: 'Information Theory Society', logo: infoTheory },
  { code: 'SPS', name: 'Signal Processing Society', logo: sps },
  { code: 'EMBS', name: 'Engineering in Medicine & Biology Society', logo: embs },
  { code: 'PHO', name: 'Photonics Society', logo: photonics },
  { code: 'AP/MTT-S', name: 'Antennas & Propagation / Microwave Theory & Techniques', logo: apmtt },
  { code: 'RAS', name: 'Robotics & Automation Society', logo: ras },
  { code: 'CAS', name: 'Circuits & Systems Society', logo: cas },
]

// the societies actually running problem statements for Winter of Projects,
// helping the Student Branch organise it
export const contributingSocieties = allSocieties

// kept for anything still importing the old name
export const societies = contributingSocieties