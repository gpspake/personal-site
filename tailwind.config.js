/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ["./hugo_stats.json"],
  theme: {
    extend: {
      fontFamily: {
        /* Override the default sans-serif stack */
        sans: [...defaultTheme.fontFamily.sans],
        voces: ['Voces', ...defaultTheme.fontFamily.sans],
        /* A custom stack you can use with class "font-mono" or "font-code" */
        code: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            '> ul > li > input:first-child': {
              marginTop: 0,
            },
            '> ul > li > input:last-child': {
              marginBottom: 0,
            },
            '> ol > li > input:first-child': {
              marginTop: 0,
            },
            '> ol > li > input:last-child': {
              marginBottom: 0,
            },
            '.gist .highlight tbody tr': {
              borderWidth: 0,
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
