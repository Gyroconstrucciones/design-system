import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { $cookies } from './plugins/cookies'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),
})

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const requiresAuth = to.matched.some((record) => record.meta.private)
  const isAuthenticated = $cookies.get('viro__ss__key')

  if (requiresAuth && isAuthenticated == null) {
    next({ name: 'login' })
  } else if (isAuthenticated != null && to.name == 'login') {
    next({ name: 'index' })
  } else {
    next()
  }
})

export default router
