/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { App } from '@vue/runtime-core'
import VueCookies from 'vue3-cookies'

interface VueCookiesCustom {
  /**
   * Set a cookie
   */
  set(
    keyName: string,
    value: string,
    expireTimes?: string | number | Date,
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite?: string
  ): this
  /**
   * Get a cookie
   */
  get(keyName: string): string
  /**
   * Remove a cookie
   */
  remove(keyName: string, path?: string, domain?: string): boolean
  /**
   * Exist a cookie name
   */
  isKey(keyName: string): boolean
  /**
   * Get All cookie name
   */
  keys(): string[]
}

let $cookies: VueCookiesCustom

export default (app: App<any>) => {
  VueCookies.install(app)
  $cookies = app.config.globalProperties.$cookies
}

export { $cookies }
