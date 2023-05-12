/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "geant": ["16rem", {lineHeight: "1"}]
      },
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888383'
        }
      },
      fontFamily: {
        body: ["Nunito Sans"],
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

