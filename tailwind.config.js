/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  safelist: [
    'back-home-link',
    'nav-btn',
    'btn',
    'font-bold',
    'underline',
    'bg-brand-pink',
    'bg-brand-primary',
    'text-white',
    'px-4',
    'py-2',
    'rounded',
    'uppercase',
    'inline-block'
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#f6c7d8',
        'brand-accent': '#11b1b1',
        'brand-primary': '#1976d2'
      }
    },
  },
  plugins: [],
};
