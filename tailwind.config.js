/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')

export default {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
         jost: ['Jost']
       },
       colors: {
        primary: '#163F46'
      },
    },
  },
  plugins: [],
}

