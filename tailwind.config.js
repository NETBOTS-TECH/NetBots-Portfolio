/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        'primary-dark': '#0052A3',
        secondary: '#0099FF',
        'secondary-dark': '#007ACC',
        accent: '#00CCFF',
        dark: '#0A1929',
        'dark-lighter': '#1A2938',
        'dark-light': '#2A3947',
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #0066CC, #0099FF)',
        'gradient-secondary': 'linear-gradient(to right, #0099FF, #00CCFF)',
        'gradient-accent': 'linear-gradient(to right, #00CCFF, #0066CC)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
} 