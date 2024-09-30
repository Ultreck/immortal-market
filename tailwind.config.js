import { nextui } from '@nextui-org/react';
import tailwindAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        heading: '#071952',
        accent: {
          50: '#fffaeb',
          100: '#fef1c7',
          200: '#fee289',
          300: '#fdca40',
          400: '#fcb823',
          500: '#f79609',
          600: '#da6f05',
          700: '#b54d08',
          800: '#933b0d',
          900: '#79310e',
        },
      },
      fontSize: {
        md: '.9rem',
      },
      ringWidth: {
        3: '3px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage:{
        'custom-gradient': `
          url(//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb/platform_online/static/image/start_image_bg.ace35048.jpeg), 
          radial-gradient(19.51% 127.29% at 81.05% 84.1%, rgba(23, 224, 226, 1) 0%, rgba(23, 224, 226, 0) 100%), 
          radial-gradient(100% 357.86% at 54.27% 26.6%, rgba(176, 242, 251, 1) 0%, rgba(176, 242, 251, 0) 100%), 
          radial-gradient(21.47% 124.06% at 2.13% -6.45%, rgba(203, 245, 255, 1) 0%, rgba(179, 239, 253, 0) 100%), 
          radial-gradient(29.86% 837.67% at 97.87% 66.05%, rgba(0, 178, 205, 0.8) 0%, rgba(49, 201, 226, 0) 100%), 
          radial-gradient(24.04% 145.4% at 57.67% 135.49%, rgba(0, 195, 202, 1) 0%, rgba(50, 208, 240, 0) 100%), 
          linear-gradient(112.12deg, rgba(53, 213, 232, 1) 27.38%, rgba(12, 198, 222, 1) 55.15%, rgba(90, 215, 252, 1) 96.02%)
        `,
      },
      backgroundImage:{
        'custom-gradient': `
          url(//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb/platform_online/static/image/start_image_bg.ace35048.jpeg), 
          radial-gradient(19.51% 127.29% at 81.05% 84.1%, rgba(23, 224, 226, 1) 0%, rgba(23, 224, 226, 0) 100%), 
          radial-gradient(100% 357.86% at 54.27% 26.6%, rgba(176, 242, 251, 1) 0%, rgba(176, 242, 251, 0) 100%), 
          radial-gradient(21.47% 124.06% at 2.13% -6.45%, rgba(203, 245, 255, 1) 0%, rgba(179, 239, 253, 0) 100%), 
          radial-gradient(29.86% 837.67% at 97.87% 66.05%, rgba(0, 178, 205, 0.8) 0%, rgba(49, 201, 226, 0) 100%), 
          radial-gradient(24.04% 145.4% at 57.67% 135.49%, rgba(0, 195, 202, 1) 0%, rgba(50, 208, 240, 0) 100%), 
          linear-gradient(112.12deg, rgba(53, 213, 232, 1) 27.38%, rgba(12, 198, 222, 1) 55.15%, rgba(90, 215, 252, 1) 96.02%)
        `,
      },
      animation: {
        marquee: 'marquee 12s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindAnimate, nextui()],
};
