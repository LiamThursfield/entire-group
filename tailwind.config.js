/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

// load default theme settings
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Raleway', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        indigo: {
          ...defaultTheme.colors.indigo,
          1000: '#282657',
        },
        'entire-blue': {
          900:  '#1A2975',
          1000: '#111C4E'
        },
        mono: {
            100: '#E5E5E5',
            200: '#CCCCCC',
            300: '#B2B2B2',
            400: '#999999',
            500: '#807F7F',
            600: '#666666',
            700: '#4D4D4D',
            800: '#333333',
            900: '#1A1A1A',
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
