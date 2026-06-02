/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F2",
        blush: "#F9E4E6",
        gold: "#D4AF37",
        sage: "#9CAF88",
        maroon: "#7A1E1E",
        peach: "#FFD6BA"
      },

      fontFamily: {
        playfair: ["Playfair Display"],
        vibes: ["Great Vibes"],
        poppins: ["Poppins"],
        cinzel: ["Cinzel"]
      },

      backgroundImage: {
        goldGradient:
          "linear-gradient(135deg,#D4AF37,#F7E7A9)"
      }
    }
  },
  plugins: []
};