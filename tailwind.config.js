/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg': `url('../src/images/more/15.jpg')`
      },
      textColor:{
        semiWhite: '#ebebdb'
      }
    },
  },
  plugins: [],
}

