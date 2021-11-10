module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: {
        light: '#FBC783',
        DEFAULT: '#f79b26',
      },
      white: {
        DEFAULT: '#ffffff',
        dark: '#E5E7EB',
      }
    },
    screens: {
      'md': '34.375rem',
      // => @media (min-width: 34.375rem) { ... }

      'lg': '68.75rem',
      // => @media (min-width: 68.75rem) { ... }

      'xl': '93.75rem',
      // => @media (min-width: 93.75rem) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
