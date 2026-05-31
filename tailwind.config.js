/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff8eb',
          100: '#ffeed1',
          200: '#ffd99c',
          300: '#ffbc63',
          400: '#ff9f33',
          500: '#f78812',
          600: '#e0760c',
          700: '#b25a09',
          800: '#8a4505',
          900: '#663300',
          950: '#331a00',
        },
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -12px rgba(224, 118, 12, 0.18)',
      },
      animation: {
        'ken-burns': 'ken-burns 14s ease-out forwards',
        'rise': 'rise 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'progress': 'progress linear forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1.05) translate(0, 0)' },
          '100%': { transform: 'scale(1.18) translate(-2%, -1.5%)' },
        },
        'rise': {
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'progress': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
