import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  extract: {
    // accepts globs and file paths relative to project root
    include: ['index.html', 'src/components/**/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules/**/*', '.git/**/*'],
  },
  corePlugins: {
    preflight: false,
  },
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
})
