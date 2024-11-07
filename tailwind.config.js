/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plex: ['"IBM Plex Sans"', 'sans-serif'],
      },
      fontSize: {
        '8vw': '8vw', // Responsive font size based on viewport width
      },
    },
  },
  plugins: [],
}

