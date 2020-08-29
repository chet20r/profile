const plugin = require('tailwindcss/plugin');

const darkTheme = {
  '--color-bg-primary': '#c0b283',
  '--color-bg-secondary': '#dcd0c0',
  '--color-bg-default': '#f4f4f4',
  '--color-bg-inverse': '#373737',

  '--color-text-primary': '#fff',
  '--color-text-secondary': '#927e7e',
  '--color-text-default': '#373737',
  '--color-text-default-soft': '#6a6a6a',
  '--color-text-inverse': '#fff',
  '--color-text-inverse-soft': '#bbb',

  '--font-heading': 'Roboto, sans-serif',
  '--font-body': '"Open Sans", sans-serif',
  '--font-family': 'Roboto, "Open Sans", sans-serif',
  '--font-weight-normal': 400,
  '--font-weight-display': 400,
  '--font-weight-btn': 600,

  '--rounded-btn': 0,
};

const lightTheme = {
  '--color-bg-primary': '#ff73b3',
  '--color-bg-secondary': '#6f72b9',
  '--color-bg-default': '#fff',
  '--color-bg-inverse': '#cfd8dc',

  '--color-text-primary': '#000',
  '--color-text-secondary': '#44467b',
  '--color-text-default': '#373737',
  '--color-text-default-soft': '#6a6a6a',
  '--color-text-inverse': '#fff',

  '--font-heading': 'Ubuntu, sans-serif',
  '--font-body': '"Open Sans", sans-serif',
  '--font-family': 'Ubuntu, "Open Sans", sans-serif',
  '--font-weight-normal': 400,
  '--font-weight-display': 400,
  '--font-weight-btn': 600,

  '--rounded-btn': 1,
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
    borderRadius: {
      none: '0',
      btn: 'var(--rounded-btn)',
    },
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(({ addBase, addUtilities, theme }) => {
      const baseStyles = {
        body: {
          background: theme('backgroundColor.inverse'),
          transition: 'background 600ms linear',
          color: theme('textColor.secondary'),
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
