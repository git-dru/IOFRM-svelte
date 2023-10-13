/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'logo-dark': "url('/images/logo-dark.svg')",
        'logo-light': "url('/images/logo-light.svg')",
        'back-image': "url('/images/background.jpg')",
      },
      colors: {
        'custom-background': "#23394a",
      }
    },
  },
  plugins: [],
}

