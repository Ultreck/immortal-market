/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'md': '.9rem',
      },
      colors: {
        primary: {
          50: '#e6f6ff',
          100: '#c2def1',
          200: '#9dc4e1',
          300: '#78a8d4',
          400: '#538cc7',
          500: '#396fad',
          600: '#2b5387',
          700: '#1d4062',
          800: '#0d2b3d',
          900: '#00121a',
        },
        accent: {
          '50': '#fffaeb',
          '100': '#fef1c7',
          '200': '#fee289',
          '300': '#fdca40',
          '400': '#fcb823',
          '500': '#f79609',
          '600': '#da6f05',
          '700': '#b54d08',
          '800': '#933b0d',
          '900': '#79310e',
        },
      },
      ringWidth: {
        '3': '3px',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
  },
  plugins: [],
}

