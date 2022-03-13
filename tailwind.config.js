const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      "lnj-purple": "#4B3C5E",
      "lnj-purple-dark": "#1F1927",
      "lnj-purple-light": "#ECC3FF",
      "lnj-orange": "#FFCC84",
      ...colors
    },
    extend: {
      fontFamily: {
        body: ["Manrope", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"]
      }
    },
  },
  plugins: [],
}
