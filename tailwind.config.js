/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      letterSpacing: {
        wide: "0.36em",
      },
      fontSize: {
        "5xl": "40px",
      },
      lineHeight: {
        full: "100%",
        sm: "120%",
        md: "150%",
        lg: "166%",
      },
      colors: {
        grey: "#E5E5E5",
        darkGrey: "#4D4D4D",
        orange: "#E67E22",
        lightOrange: "#FCF2E9",
        offOrange: "#FFF7EF",
        offBlack: "#111111",
        lightGrey: "#A0A0A0",
        iconGrey: "#343434",
      },
      boxShadow: {
        expertise: " 0px 6px 19.5px 0px #0000001A; ",
      },
      screens: {
        "2xl": "1340px",
      },
    },
  },
  plugins: [],
};
