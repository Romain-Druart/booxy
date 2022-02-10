module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
    },
    container: {
      padding: '2rem',
    },
    fontFamily: {
      'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
