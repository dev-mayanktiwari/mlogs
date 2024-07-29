/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundlight : "#D9D9D9",
        backgroundDark : "#BFBFBF",
        buttonColor : "#cccccc"
      },
      fontFamily : {
        myFont : ["IBM Plex Mono", "sans-serif"]
      }
    },
  },
  plugins: [],
}

