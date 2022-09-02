import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FAF9F9',
          500: '#FFDFC3',
          900: '#E99525',
        },
        gray: {
          50: '#EEF0FA',
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        secondary: {
          800: '#E55D3B',
          900: '#E8524A',
        },
        dark: { 700: '#133445', 900: '#0E2029' },
      },
    },
  },
  shortcuts: {
    btn: 'ml-6 flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-secondary-900 hover:bg-secondary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-800',
    'btn-outline-gray':
      'btn text-gray-500 bg-white border border-1 border-gray-500 hover:bg-gray-100 focus:ring-gray-800',
    input:
      'w-full bg-white rounded border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 text-base outline-none text-gray-700 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out',
    'input-error': 'input border-red-300',
  },
})
