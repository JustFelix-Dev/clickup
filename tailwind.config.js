/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'darked':"#292D34",
        "custom-base": "#24223E"
      }
    },
  },
  plugins: [],
}

