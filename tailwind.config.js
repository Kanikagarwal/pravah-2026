const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      zIndex: {
        '2000': '2000',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

