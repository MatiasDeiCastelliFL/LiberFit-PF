/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        
      },
      colors: {
        redGray:'#FEE2E2',
        semiRed: '#FCA5A5',
        orange: '#C2410C',
        redClare: '#F87171',
        gray: '#9B9B9B',
        white: '#FFF'
      },
      fontFamily: {
        
      },
      backgroundImage: {
        landing: "url('./src/assets/IMG/LandingBG.png')",
      },
      width: {
        max: '100%'
      },
      height: {
        max: '100vh'
      }
    },
  },
  plugins: [],
  variants:{
    appearance: ['responsive'],
  }
}
