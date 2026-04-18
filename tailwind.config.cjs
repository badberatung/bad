/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1c3867',
          dark: '#152a4d',
          light: '#254a85'
        },
        secondary: {
          DEFAULT: '#449c9d',
          dark: '#367d7e',
          light: '#5ab0b1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      fontSize: {
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.15' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }]
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem'
      },
      minHeight: {
        'touch': '48px'
      },
      minWidth: {
        'touch': '48px'
      }
    }
  },
  plugins: []
};
