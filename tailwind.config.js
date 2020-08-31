const plugin = require('tailwindcss/plugin');

const darkTheme = {
  '--color-bg-primary': '#393e46',
  '--color-bg-secondary': '#222831',
  '--color-bg-default': '#393e46',
  '--color-bg-inverse': '#eeeeee',

  '--color-text-primary': '#32e0c4',
  '--color-text-secondary': '#eeeeee',
  '--color-text-default': '#32e0c4',
  '--color-text-default-soft': '#32e0c4',
  '--color-text-inverse': '#222831',
  '--color-text-inverse-soft': '#222831',

  '--font-heading': 'Roboto, sans-serif',
  '--font-body': '"Open Sans", sans-serif',
  '--font-family': 'Roboto, "Open Sans", sans-serif',
  '--font-weight-normal': 400,
  '--font-weight-display': 400,
  '--font-weight-btn': 600,
};

const lightTheme = {
  '--color-bg-primary': '#eeeeee',
  '--color-bg-secondary': '#393e46',
  '--color-bg-default': '#eeeeee',
  '--color-bg-inverse': '#222831',

  '--color-text-primary': '#fc5185',
  '--color-text-secondary': '#393e46',
  '--color-text-default': '#fc5185',
  '--color-text-default-soft': '#f67280',
  '--color-text-inverse': '#00adb5',

  '--font-heading': 'Roboto, sans-serif',
  '--font-body': '"Open Sans", sans-serif',
  '--font-family': 'Roboto, "Open Sans", sans-serif',
  '--font-weight-normal': 400,
  '--font-weight-display': 400,
  '--font-weight-btn': 600,
};

module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.svelte'],
    whitelistPatterns: [/svelte-/],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    colors: {},
    fontFamily: {
      heading: 'var(--font-heading)',
      body: 'var(--font-body)',
    },
    fontWeights: {
      normal: 'var(--font-weight-normal)',
      display: 'var(--font-weight-display)',
      btn: 'var(--font-weight-btn)',
    },
    textColor: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      default: 'var(--color-text-default)',
      disabled: 'var(--color-text-disabled)',
      inverse: 'var(--color-text-inverse)',
    },
    backgroundColor: {
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)',
      default: 'var(--color-bg-default)',
      inverse: 'var(--color-bg-inverse)',
    },
    extend: {},
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'visited'],
  },
  plugins: [
    plugin(({ addBase, addUtilities, theme }) => {
      const baseStyles = {
        '*': {
          transition: 'all 300ms ease',
        },
        body: {
          background: theme('backgroundColor.primary'),
          color: theme('textColor.primary'),
          'font-family': 'var(--font-family)',
        },
      };
      const utilities = {
        '.theme-dark': darkTheme,
        ':root': lightTheme,
      };
      addBase(baseStyles);
      addUtilities(utilities);
    }),
  ],
};
