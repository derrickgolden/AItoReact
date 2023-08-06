/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '345',
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    extend: {
      backgroundImage:{
        'shadow': 'linear-gradient(0deg, #000000 0%, #ffffff 100%)'
      },
      gridTemplateRows: {
        '0': '0fr',
        '1': '1fr'
       },
       transitionProperty: {
         'gridRow': 'grid-template-rows',
         'visibility': 'visibility'
        }
    },
  },
  plugins: [],
}

