/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        bannerImage:'url("./B10A7-Select-Your-XI/assets/bg-shadow.png")'
      }
    },
  },
  plugins: [],
}

