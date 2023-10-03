/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        textCustom: "#706F6F",
        bgCustom: "#F3F3F3",
      },
    },
  },
  plugins: [require("daisyui")],
};
