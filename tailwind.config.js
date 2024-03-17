/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwind-components/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
        'md': '481px',
      },
      fontFamily:{
        merriweather_sans:['Merriweather Sans'],
        plusJakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      scale: {
        '-100': '-1',
      },
      boxShadow: {
        'custom': '0px 4px 8px 0px #0000001E',
      },
    },
  },
  plugins: [],
}

