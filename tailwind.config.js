/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "",
        "secondary": "#F0F0F0",
        "TPrimary": "#111111",
        "TSecondary": "#989898",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  }
}