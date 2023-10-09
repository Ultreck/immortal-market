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
        heading: '#071952',
        primary: {
          50: '#dbf7ff',
          100: '#aee1ff',
          200: '#7ecbff',
          300: '#4db6ff',
          400: '#22a1fe',
          500: '#0e88e5',
          600: '#006ab3',
          700: '#004c81',
          800: '#002d50',
          900: '#001020',
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

