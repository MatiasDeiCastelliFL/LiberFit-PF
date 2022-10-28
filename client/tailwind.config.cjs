/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1600px'
      },
      colors: {
        redGray: "#FEE2E2",
        semiRed: "#FCA5A5",
        orange: "#C2410C",
        redClare: "#F87171",
        white: "#FFF",
        gray_custom: '#9B9B9B'
      },
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundImage: {
        landing: "url('./src/assets/IMG/LandingBG.png')",
      },
      width: {
        max: "100%",
        custom_1: "30.25rem",
        custom_2: "21.4rem",
        custom_3:"75vw",
        custom_4:"30%",
        sidebar: "18.688rem",
        input: "17.75rem",
        swiper: '95.9rem'
      },
      height: {
        max: "100vh",
        custom_1: "5.25rem",
        custom_2: "7.391rem",
        73: "4.563rem",
        custom_3: '31.25rem',
        custom_4: '34rem'
      },
      blur: {
        default: "30px",
      },
      translate: {
        custom: "38.938rem",
        custom_2: "40rem",
        custom_3: "30rem",
        custom_4: "36rem",
        custom_5: "41rem",
        custom_6: "45rem",
        custom_7: "-0.375rem",
        mobile_1: '19rem',
        mobile_2: '33rem',
        mobile_3: '29rem',
        mobile_4: '33.1rem',
        mobile_5: '39rem',
        mobile_6: '27rem',
        mobile_7: '24rem',
        mobile_8: '28.1rem',
      },
      inset: {
        custom: "41rem",
        custom_2: "57.638rem",
        custom_3: "32rem",
        custom_4: "27.60rem",
        custom_5: "32.55rem",
        custom_6: "40.55rem",
        mobile_1: '7rem',
        mobile_2: '1rem',
        mobile_3: '6.1rem',
        mobile_4: '14rem',
        mobile_5: '31.5rem',
        mobile_6: '14.5rem',
        mobile_7: '14.5rem',
        mobile_8: '18rem',
        mobile_9: '15rem',
        mobile_10: '22rem',
        mobile_11: '39rem',
        mobile_12: '23.4rem',
        mobile_13: "22rem"
      },
      fontSize: {
        90: "90px",
        51: "51px",
        12: "12px",
        30: "30px",
        80: "80px"
      },
    },
  },
  plugins: [],
  variants: {
    appearance: ["responsive"],
  },
};
