import axios, { AxiosResponse } from 'axios'


const interceptors = {
  onSuccess: (response: AxiosResponse<unknown>) => response,
  onError: (error: Error) => Promise.reject(error)
}

export const http = axios.create({
  baseURL: 'http://localhost:5000/api'
})

http.interceptors.response.use(interceptors.onSuccess, interceptors.onError)
