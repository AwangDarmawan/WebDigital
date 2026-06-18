/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],

        playfair: ["Playfair Display", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        cinzel: ["Cinzel", "serif"],
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
    keyframes: {
      scroll: {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(-50%)",
        },
      },
    },
    animation: {
      scroll: "scroll 25s linear infinite",
    },
  },
  plugins: [],
};
