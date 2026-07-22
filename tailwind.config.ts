import type { Config } from 'tailwindcss'

/**
 * Tokens from `samva-design-system.md` §10.
 * The `tint-*` scales are the design file's `color-mix(in srgb, <color> N%, #fff)`
 * expressions resolved against the fixed Teal & Fuchsia palette, so the rendered
 * output matches the prototype without relying on `color-mix` support.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#F0FAF9',
          100: '#E6F5F3',
          400: '#1ABBA8',
          500: '#0D9E8E',
          deep: '#0C9183', // accent @ 92% over black — offset card shadows
          tint7: '#EEF8F7',
          tint12: '#E2F3F1',
          tint14: '#DDF1EF',
          tint20: '#CFECE8',
          tint22: '#CAEAE6',
          tint30: '#B6E2DD',
          tint40: '#9ED8D2',
          tint45: '#92D3CC',
          tint55: '#7ACAC1',
        },
        fuchsia: {
          100: '#FEE9EF',
          400: '#FF2D6F',
          500: '#F0145A',
          tint12: '#FDE3EB',
          tint14: '#FDDEE8',
          tint20: '#FCD0DE',
          tint40: '#F9A1BD',
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
        md: '0 4px 20px rgba(13,158,142,0.10), 0 1px 4px rgba(0,0,0,0.04)',
        lg: '0 8px 40px rgba(26,35,64,0.12)',
      },
      maxWidth: {
        shell: '1200px',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at 92% 8%, rgba(13,158,142,0.09) 0%, transparent 46%)',
      },
    },
  },
  plugins: [],
}

export default config
