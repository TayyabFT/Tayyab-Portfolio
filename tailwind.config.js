/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'skin': 'var(--skin-color)',
        'bg-black-900': 'var(--bg-black-900)',
        'bg-black-100': 'var(--bg-black-100)',
        'bg-black-50': 'var(--bg-black-50)',
        'text-black-900': 'var(--text-black-900)',
        'text-black-700': 'var(--text-black-700)',
      },
    },
  },
  plugins: [],
}

