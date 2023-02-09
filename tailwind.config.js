/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        background: '#fffffe',
        secondary: '#d1d1e9',
        button: '#6246ea',
        paragraf: '#2b2c34',
        dark1: '#121212',
        dark2: '#2a2929',
        dark3: '#545151',
        dark4: '#f0f0f0',
      },
      spacing: {
        "big": "35rem",
        "small": "25rem"
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        covered: ['Covered By Your Grace', 'sans-serif'],
      },
      animation: {
        "goyang": 'goyang 3s linear infinite',
        "goyang2": 'goyang2 3s linear infinite',
      },
      keyframes: {
        goyang: {
          '50%': { transform: 'translate(14px, -5px)' },
        },
        goyang2: {
          '50%':{transform: 'translate(-5px, 10px )'}
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],

}
