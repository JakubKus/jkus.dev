const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
        navbar: '0 0 5px rgb(0 0 0)'
      },
      colors: {
        'accent-1': 'rgb(255 255 255 / 90%)',
        'accent-1-light': 'rgb(255 255 255 / 30%)',
        'accent-2': 'rgb(50 205 50)',
        'accent-2-light': 'rgb(50 205 50 / 10%)',
        'accent-3': 'rgb(51 51 51)',
        'accent-4': 'rgb(39 40 34)',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '1.5xl': '1.375rem',
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      gridTemplateColumns: {
        navbar: 'calc(calc(100% - var(--content-width)) / 2) 1fr calc(calc(100% - var(--content-width)) / 2)',
      },
      height: {
        footer: 'var(--footer-height)',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      maxWidth: {
        content: 'var(--content-width)',
      },
      minHeight: {
        content: 'calc(100% - var(--footer-height) - var(--navbar-height))',
        desktopContent: 'calc(100% - var(--footer-height) - var(--desktop-navbar-height))',
      },
      screens: {
        desktop: {
          min: defaultTheme.screens.xl
        },
        wideDesktop: {
          min: defaultTheme.screens['2xl']
        },
      },
      spacing: {
        28: '7rem',
        pageSpacing: '0.875rem',
        pageSpacingMD: '4rem',
        navbar: 'var(--navbar-height)',
        desktopNavbar: 'var(--desktop-navbar-height)',
        footer: 'var(--footer-height)',
      },
    },
  },
  plugins: [],
};
