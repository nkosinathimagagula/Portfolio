/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      "breakpoint": "850px"
    },
    extend: {
      colors: {
        "menu-glass": "#00000000" 
      }
    },
  },
  plugins: [],
}
