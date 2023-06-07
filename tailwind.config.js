/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#F4F6EF",
        "yellow-green": "#CDE4A2",
        "dark-yellow-green": "#7B8B5E",
      },
      fontFamily: {
        "josefin-sans": ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

