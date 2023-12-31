/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctor: {
          primary: "#0FCFEC",
          secondary: '#19D3AE',
          accent: "#3A4256",
          neutral: "#291334",
          "base-100": "#faf7f5",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

