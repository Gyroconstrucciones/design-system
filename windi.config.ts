import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  attributify: {
    prefix: 'w:',
  },
  theme: {
    extend: {
      colors: {
        primary: '#201087',
        secondary: '#F5A623',
        accent: '#73EEDC',
      },
    },
  },
  shortcuts: {
    btn: 'py-3 px-6 font-semibold rounded-lg shadow-md flex flex-row items-center justify-around',
    'btn-primary': 'text-white bg-primary hover:bg-primary dark:bg-accent dark:text-black dark:hover:bg-accent',
    'btn-secondary': 'text-black bg-secondary hover:bg-secondary',
  },
})
