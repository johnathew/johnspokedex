/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        poketype: {
          100: "#9E854E", //normal
          150: "#CC1C12", //fire
          200: "#286CA9", //water
          250: "#4DCC3E", //grass
          350: "#E9EF56", //electric
          400: "#43DFEA", //ice
          450: "#EA7C0C", //fighting
          500: "#EA7C0C", //
        },
      },
    },
  },
  plugins: [],
};
