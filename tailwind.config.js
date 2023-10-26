/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        persianRed: '#CD2F3B',
        wine: '#702127',
        night: '#121212',
        timberWolf: '#D7CDCC',
        grayTheme: '#282828',
      }
    },
  },
  plugins: [],
}

