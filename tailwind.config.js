/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      "breakpoint": "850px",
      "tbp": "750px"
    },
    extend: {
      backgroundImage: {
        "edge-hex": "url('src/assets/backgrounds/bg-edge-hex.jpg')",
        "edge-rounds": "url('src/assets/backgrounds/bg-edge-rounds.jpg')",
        "edge-sq-blocks": "url('src/assets/backgrounds/bg-edge-sq-blocks.jpg')",
        "rect": "url('src/assets/backgrounds/bg-rect.jpg')"
      }
    },
  },
  plugins: [],
}
