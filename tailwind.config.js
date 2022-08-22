/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightbluish : '#4f5985',
        bluish: '#bdbdbd',
        orangish : '#f3994a',
        orangeyellow : '#f2994b',
        bluedark: '#4f4f4f',
        orangishyel :'#f2b14b',
        darkblue: 'A6ABB1',
      },
      fontFamily: { 
        html: ['Inter'] 
      }
  },
},
  plugins: [],
}
