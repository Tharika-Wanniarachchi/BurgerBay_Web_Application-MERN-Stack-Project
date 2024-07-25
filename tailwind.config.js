/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color" : "#FF7D29",
        "secondary-bg-color" : "#FFD4B4",
        "card-bg" : "#FFF9F5",
        "banner-color" : "#FFF8F4",
       },
      fontFamily:{
        "primary" : ["Inter Tight", "sans-serif"],
        "header-font":["Andika", "sans-serif;"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

