module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#7c3aed',
        accent: '#0891b2',
      },
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
