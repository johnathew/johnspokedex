/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['Press\\ Start\\ 2P', 'sans-serif']
      }
    },
  },
  plugins: [],
};
