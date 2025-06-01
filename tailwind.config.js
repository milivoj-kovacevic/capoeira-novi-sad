/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'cas-blue': '#232b5a',
        'cas-yellow': '#ffe600',
        'cas-green': '#1db954',
      },
    },
  },
  plugins: [],
}

