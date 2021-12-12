module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    media: false, 
    theme: {
        screens: {
            xsm: "250px",
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            spacing: {
                94: "22rem",
                120: "30rem",
                128: "32rem",
                127: "33.7rem",
                129: "36rem",
                130: "38.5rem",
                132: "40rem",
                144: "42rem",
                152: "56rem",
                165: "64rem",
                182: "71rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
}
