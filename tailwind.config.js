import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#16a34a",
          "secondary": "#166534",
          "accent": "#0048ff",
          "neutral": "#1c0410",
          "base-100": "#22261b",
          "info": "#0083a4",
          "success": "#00d393",
          "warning": "#ff9800",
          "error": "#ff5465",
        },
      },
    ],
  },

  plugins: [
    daisyui,
  ]
}