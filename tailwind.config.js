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
        "modal-overlay": "rgba(0,0,0,0.4)",
      },
      fontFamily: {
        "almiri": ["Cabin", "serif"]
      },
      boxShadow: {
        "all-sides-light": "0 0 4px rgba(0, 0, 0, 0.2)",
      }
    },
  },
  plugins: [],
}

