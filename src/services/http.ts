/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { $cookies } from '@/plugins/cookies'

const http = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
})

const getAuthToken = () => $cookies.get('viro__ss__key')

const authInterceptor = (config: any) => {
  const token = getAuthToken()
  if (token) config.headers['Authorization'] = `Bearer ${getAuthToken()}`
  return config
}

const errorInterceptor = (error: any) => {
  if (!error.response) {
    return Promise.reject(error)
  }

  switch (error.response.status) {
    case 400:
      console.error(error.response.status, error.message)
      Promise.reject('Data not found')
      break
    case 401:
      console.error(error.response.status, "You don't have permissions for this route")
      $cookies.remove('viro__ss__key')
      break
    default:
      console.error(error.response.status, error.message)
      Promise.reject('Server error')
      break
  }
}

// Interceptor for responses
const responseInterceptor = (response: any) => {
  switch (response.status) {
    case 200:
      // yay!
      break
    // any other cases
    default:
    // default case
  }

  return response
}

http.interceptors.request.use(authInterceptor, errorInterceptor)

http.interceptors.response.use(responseInterceptor)

export default http
