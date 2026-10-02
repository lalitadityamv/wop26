# Winter of Projects — Registration Site

React + Vite + Tailwind + Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Where to edit things

- `src/data/problemStatements.js` — every problem statement, each with a unique `id`
  (e.g. `SPS-HW-01`), its `society` code, `track` (`HW`/`SW`), title and summary.
- `src/data/societies.js` — the IEEE societies shown in the filter tabs and footer badges.
  Swap the placeholder circular badges in `Footer.jsx` for real logo image files once you
  have them (drop files in `src/assets/` and `import` them like `wop-logo.jpeg` in `Navbar.jsx`).
- `src/components/Navbar.jsx` — the "IEEE STB" badge is a placeholder; replace with the
  actual IEEE Student Branch logo the same way the WOP logo is imported.
- `src/components/Register.jsx` — set `REGISTRATION_LINK` to your real Google Form / Forms link.
- `src/components/Hero.jsx` — animated background (perspective grid + rising embers + scanline).
  Tune particle count, colors, and speed at the top of the file.

## Notes

- Fully responsive: navbar collapses to a hamburger menu below `md`, grids reflow at `sm`/`md`
  breakpoints, hero type scales down on small screens.
- The problem statement marquee auto-scrolls infinitely (duplicated list) and pauses only in the
  sense that clicking a card opens its detail modal without needing to catch it mid-scroll.
