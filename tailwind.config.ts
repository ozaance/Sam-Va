import type { Config } from 'tailwindcss'

/**
 * Charte SAM.
 * Primaire  : violet   #8D3CFF
 * Lila clair : #EFECF9 (fonds de section)  |  Lila foncé : #C7C4D8 (bordures)
 * Jaune      : #FFE6B4 (boutons sur fond violet, texte foncé)
 * Orange     : #F06400 (accent ponctuel, souvent avec le jaune)
 *
 * `violet` (ex-teal) reste la famille primaire et `orange` (ex-fuchsia) l'accent,
 * pour que les noms de classe gardent un sens. Les échelles `tint*` sont les
 * anciens `color-mix(<couleur> N%, #fff)` pré-calculés en hex sur la nouvelle
 * palette, afin de ne pas dépendre de color-mix.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: {
          50: '#F7F1FF',
          100: '#EFE4FF',
          400: '#A45CFF',
          500: '#8D3CFF',
          deep: '#7A33E0', // primaire assombrie — plaques d'ombre décalées
          tint7: '#F5EFFF',
          tint12: '#F1E8FF',
          tint14: '#EFE4FF',
          tint20: '#E8D8FF',
          tint22: '#E6D4FF',
          tint30: '#DDC5FF',
          tint40: '#D1B1FF',
          tint45: '#CCA7FF',
          tint55: '#BE94FF',
        },
        orange: {
          100: '#FEEAD9',
          400: '#FF7A26',
          500: '#F06400',
          tint12: '#FDECE0',
          tint14: '#FDE9DB',
          tint20: '#FCE0CC',
          tint40: '#F9C199',
        },
        cream: {
          DEFAULT: '#FFE6B4', // boutons sur fond violet — texte navy
          hover: '#FFD98F',
        },
        lila: {
          light: '#EFECF9', // fonds de section alternés
          DEFAULT: '#C7C4D8', // bordures, séparateurs
        },
        navy: {
          700: '#2D3A5A',
          900: '#1A2340',
        },
        gray: {
          100: '#F7F8FA',
          200: '#EEF0F4',
          400: '#9AA0B4',
          600: '#5A6180',
        },
        chrome: {
          red: '#EF4444',
          amber: '#F59E0B',
          green: '#10B981',
        },
        hairline: '#F1F5F9',
        skeleton: {
          DEFAULT: '#E7EBF0',
          strong: '#E2E8F0',
        },
        surface: '#FBFCFD',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      fontSize: {
        display: ['56px', { lineHeight: '1.06' }],
        h1: ['42px', { lineHeight: '1.1' }],
        h2: ['40px', { lineHeight: '1.1' }],
        h3: ['22px', { lineHeight: '1.2' }],
        h4: ['17px', { lineHeight: '1.3' }],
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '14px',
        lg: '22px',
        xl: '32px',
      },
      boxShadow: {
        xs: '0 1px 3px rgba(26,35,64,0.06)',
        sm: '0 2px 8px rgba(26,35,64,0.08)',
        md: '0 4px 20px rgba(141,60,255,0.12), 0 1px 4px rgba(0,0,0,0.04)',
        lg: '0 8px 40px rgba(26,35,64,0.12)',
      },
      maxWidth: {
        shell: '1200px',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at 92% 8%, rgba(141,60,255,0.09) 0%, transparent 46%)',
      },
    },
  },
  plugins: [],
}

export default config
