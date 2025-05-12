/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'construction': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        'site': {
          primary: 'var(--primary)',
          'primary-dark': 'var(--primary-dark)',
          secondary: 'var(--secondary)',
          accent: 'var(--accent)',
          background: 'var(--background)',
          foreground: 'var(--foreground)',
        }
      },
      boxShadow: {
        'sharp': '5px 5px 0px 0px rgba(0,0,0,0.1)',
        'sharp-lg': '8px 8px 0px 0px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        'gradient-construction': 'linear-gradient(to right, var(--primary), var(--primary-dark))',
        'texture': 'url("/images/texture.png")',
      },
    },
  },
  plugins: [],
} 