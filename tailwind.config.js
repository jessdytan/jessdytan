/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
        'md': '481px',
      },
      fontFamily:{
        merriweather_sans:['Merriweather Sans']
      },
      scale: {
        '-100': '-1',
      },
    },
  },
  plugins: [],
}

