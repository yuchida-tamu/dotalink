/** @type {import('tailwindcss').Config} */
module.exports = {
  // Include all the app files that might use Tailwind classes
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0a7ea4',
          dark: '#fff',
        },
        text: {
          light: '#11181C',
          dark: '#ECEDEE',
        },
        background: {
          light: '#fff',
          dark: '#151718',
        },
        icon: {
          light: '#687076',
          dark: '#9BA1A6',
        },
      },
    },
  },
  plugins: [],
}