/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./src/**/*.{js,vue,ts}",
    ],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")]
};