// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fugaz: ['"Fugaz One"', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        sansation: ['"Sansation"', 'sans-serif'],
        worksans: ['"Work-sans"', 'sans-serif'],
        Josefinsans: ['"Josefin-sans"', 'sans-serif'],
      },
      fontSize: {
        'max-7vh': '7vh',
      },
    },
  },
  plugins: [],
}
