import './src/assets/sass/app.scss'
import 'virtual:windi.css'

export function setupVue3({ app }) {
  app.provide('test', 'hello')
  // app.use(...)
}
