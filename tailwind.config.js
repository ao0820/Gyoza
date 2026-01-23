/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#c30e2e', // Akabeni
          orange: '#ee7800', // Daidai
          yellow: '#fcc800', // Yamabuki
          black: '#0d0015', // Shikkoku
        },
        sumi: '#1c1c1c', // Ink Black
        washi: '#fcfaf2', // Japanese Paper White
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
