module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    media: false,
    theme: {
        screens: {
            xsm: "250px",
            sm: "370px",
            smd: "635px",
            md: "768px",
            lg: "976px",
            sxl: "1240px",
            xl: "1440px",
        },
        extend: {
            spacing: {
                18: "4.5rem",
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
            boxShadow: {
                "2xl": "0 5px 8px -1px rgba(0, 0, 0, 0.3)",
                "4xl": "0 25px 25px -2px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@themesberg/flowbite/plugin")],
    images: {
        domains: [""],
    },
};
