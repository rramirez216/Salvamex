module.exports = {
  purge: ['public/index.html'],
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
        light: '#F3F4F6',
        DEFAULT: '#ffffff',
        dark: '#E5E7EB',
      },
      grey: {
        DEFAULT: '#6D6D74',
      },
      blue: {
        light: '#C0C0C4',
        DEFAULT: '#091229',
      },
      semi: {
        DEFAULT: 'rgba(0,0,0,0.9)',
      },
    },
    screens: {
      xs: '27.5625rem',
      sm: '34.375rem',
      // => @media (min-width: 34.375rem) { ... }
      md: '48rem',

      lg: '68.75rem',
      // => @media (min-width: 68.75rem) { ... }

      xl: '93.75rem',
      // => @media (min-width: 93.75rem) { ... }
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      none: 'none',
      2: '1 1 320px',
    },
    extend: {
      maxWidth: {
        xsr: '352px',
      },
      backgroundImage: {
        'hero-image':
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/salvamex.jpg')",
      },
      height: {
        'h-18': '72px',
      },
      inset: {
        '72px': '72px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
