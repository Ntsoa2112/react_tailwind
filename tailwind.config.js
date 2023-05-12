/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "geant": ["16rem", {lineHeight: "1"}]
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

