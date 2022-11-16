/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: "640px",
                // => @media (min-width: 640px) { ... }

                md: "768px",
                // => @media (min-width: 768px) { ... }

                lg: "1024px",
                // => @media (min-width: 1024px) { ... }

                xl: "1280px",
                // => @media (min-width: 1280px) { ... }

                xl3: '1366px',

                xl2: '1440px',
                // => @media (min-width: 1440px) { ... }

                "2xl": "1536px",
                // => @media (min-width: 1536px) { ... }
                "3xl": '1900px',
            },
            colors: {
                redGray: "#FEE2E2",
                semiRed: "#FCA5A5",
                orange: "#C2410C",
                redClare: "#F87171",
                white: "#FFF",
                gray_custom: "#9B9B9B",
                dark: '#212529',
                yellow_custom: "#fec101",
                blue_custom: "#1d71ba",
                red_custom: "#00af72",
                semiBlack: '#252525',
            },
            spacing: {
                sidebar: "16vw",
                xl: '15vw',
                lg: '5vw',
                lg_sidebar: '13.5vw'
            },
            fontFamily: {
                poppins: "Poppins",
            },
            width: {
                max: "100%",
                custom_1: "30.25rem",
                custom_2: "21.4rem",
                custom_3: "84vw",
                custom_5: "80vw",
                custom_6: "40vw",
                custom_4: "30%",
                custom_7: "60%",
                payment_table: "75vw",
                '2xl': '14.8125rem',
                sidebar: "18vw",
                input: "16vw",
                swiper: "80vw",
                card: "92rem",
                cards_1: "14vw",
                user: "6.5rem",
                perfil: "1px",
                lg_fit: '49rem',
                table: '30rem',
                aboutbar: '40rem',
                xl_aboutbar: '30rem',
                lg_aboutbar: '35rem',
                slade: '9rem',
                xl2_slade: '45rem',
                xl_slade: '48rem',
                lg_slade: '20rem',
                tec: '35rem',
            },
            height: {
                max: "100vh",
                custom_1: "5.25rem",
                custom_2: "7.391rem",
                73: "4.563rem",
                custom_3: "31.25rem",
                custom_4: "34rem",
                user: "6.5rem",
                limit_Card: '38rem',
                lg_limit_Card: '25rem',
                xl_limit_Card: '34rem',
                xl2_limit_Card: '31rem',
                xl3_limit_Card: '22.2rem',
                card: '40rem'
                
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
                mobile_1: "19rem",
                lg_mobile_1: "26rem",
                mobile_2: "31.5rem",
                mobile_3: "29rem",
                lg_mobile_3: "37rem",
                mobile_4: "33.1rem",
                lg_mobile_4: "41rem",
                mobile_5: "36rem",
                mobile_6: "27rem",
                lg_mobile_6: "35rem",
                mobile_7: "24rem",
                mobile_8: "28.1rem",
                pop: "-0.800rem",
                xl: '9rem',
                xxl: '-3.5rem',
                xxl2: '2rem'
            },
            inset: {
                custom: "41rem",
                custom_2: "57.638rem",
                custom_3: "32rem",
                custom_4: "27.60rem",
                custom_5: "32.55rem",
                custom_6: "40.55rem",
                mobile_1: "7rem",
                mobile_2: "1rem",
                mobile_3: "6.1rem",
                mobile_4: "14rem",
                mobile_5: "31.5rem",
                mobile_6: "14.5rem",
                mobile_7: "14.5rem",
                mobile_8: "18rem",
                mobile_9: "15rem",
                mobile_10: "22rem",
                mobile_11: "39rem",
                mobile_12: "23.4rem",
                mobile_13: "22rem",
                xl: '10rem',
                xl_l: '15rem'
            },
            fontSize: {
                20: '14.5px',
                10: '10px',
                90: "90px",
                51: "51px",
                12: "12px",
                30: "30px",
                80: "80px",
            },
            borderRadius: {
                custom_1: "50px",
            },
            backgroundColor: {
                
            },
        },
    },
    plugins: [],
    variants: {
        appearance: ["responsive"],
    },
};
