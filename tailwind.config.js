/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        background: '#fffffe',
        secondary: '#d1d1e9',
        button: '#6246ea',
        skills: '#6246ea',
        paragraf: '#2b2c34'
      },
      screens: {
        smm: "360px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      },
      spacing: {
        "big": "35rem",
        "small": "25rem"
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif']
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
  plugins: [],
}
