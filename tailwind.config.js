/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      columns: {
          
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'duke-navy-blue': '#012169',
        'duke-royal-blue': '#00539B',
        'hatteras': '#E2E6ED',
        'graphite': '#666666',
        'dandelion': '#FFD960'
      },
      fontFamily: {
        sans: ['Open Sans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['EB Garamond', 'Georgia', 'Times New Roman', 'Times', 'serif'],
      }
  },
  plugins: [
    require('flowbite/plugin')
  ],
  }
}
