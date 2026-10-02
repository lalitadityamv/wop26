export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rust: {
          950: '#0f0b07',
          900: '#1b140d',
          800: '#291e13',
          700: '#3d2c1a',
          600: '#5a4023',
          500: '#7a5730',
          400: '#9c7440',
        },
        brass: {
          300: '#e9d38a',
          400: '#d4af37',
          500: '#b8860b',
          600: '#8b6914',
        },
        copper: {
          400: '#c17847',
          500: '#a85c32',
          600: '#7a3f1d',
        },
        bone: '#f0e6d2',
      },
      fontFamily: {
        display: ['"Rye"', '"Georgia"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        brass: '0 0 8px rgba(212,175,55,0.55), 0 0 24px rgba(212,175,55,0.22)',
        copper: '0 0 8px rgba(168,92,50,0.55), 0 0 24px rgba(168,92,50,0.22)',
      },
    },
  },
  plugins: [],
}
