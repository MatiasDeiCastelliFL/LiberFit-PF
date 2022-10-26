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
        gray: '##9B9B9B',
        white: '#FFF'
      },
      fontFamily: {
        poppins: 'Poppins',
      },
      backgroundImage: {
        landing: "url('./src/assets/IMG/LandingBG.png')",
      },
      width: {
        max: '100%',
        custom_1: '30.25rem',
        custom_2: '21.4rem',
        sidebar: '18.688rem',
        input: '17.75rem'
      },
      height: {
        max: '100vh',
        custom_1: '5.25rem',
        custom_2: '7.391rem',
        73: '4.563rem'
      },
      blur:{
        default: '30px'
      },
      translate:{
        'custom': '38.938rem',
        'custom_2': '40rem',
        'custom_3': '30rem',
        'custom_4': '36rem',
        'custom_5': '41rem',
        'custom_6': '45rem'
      },
      inset:{
        custom: '41rem',
        custom_2:'57.638rem',
        custom_3: '32rem',
        custom_4: '27.60rem',
        custom_5: '32.55rem',
        custom_6: '40.55rem'

       
      },
      fontSize:{
        90: '90px',
        51: '51px'
      }
    },
  },
  plugins: [],
  variants:{
    appearance: ['responsive'],
  }
}
