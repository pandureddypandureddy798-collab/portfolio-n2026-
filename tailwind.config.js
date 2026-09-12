/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#06080e',
          900: '#0a0d16',
          850: '#0f1422',
          800: '#141c2e',
          700: '#1e293b',
          600: '#334155',
        },
        ai: {
          cyan: '#06b6d4',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          emerald: '#10b981',
          pink: '#ec4899',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(99, 102, 241, 0.3))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(6, 182, 212, 0.6))' },
        }
      }
    },
  },
  plugins: [],
};
