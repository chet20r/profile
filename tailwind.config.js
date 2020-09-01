const plugin = require('tailwindcss/plugin');

const darkTheme = {
  '--color-bg-primary': '#393e46',
  '--color-bg-secondary': '#222831',
  '--color-bg-inverse': '#eeeeee',

  '--color-text-primary': '#32e0c4',
  '--color-text-secondary': '#eeeeee',
  '--color-text-inverse': '#222831',

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
  '--color-bg-inverse': '#222831',

  '--color-text-primary': '#2a6fdb',
  '--color-text-secondary': '#393e46',
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
    fontWeights: {
      normal: 'var(--font-weight-normal)',
      display: 'var(--font-weight-display)',
      btn: 'var(--font-weight-btn)',
    },
    textColor: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      disabled: 'var(--color-text-disabled)',
      inverse: 'var(--color-text-inverse)',
    },
    backgroundColor: {
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)',
      inverse: 'var(--color-bg-inverse)',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'visited'],
  },
  plugins: [
    plugin(({ addBase, addUtilities, theme }) => {
      const baseStyles = {
        body: {
          background: theme('backgroundColor.primary'),
          color: theme('textColor.primary'),
          'font-family': 'var(--font-family)',
          transition: 'all 200ms linear',
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
