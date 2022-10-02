import axios from 'axios'

export const http = axios.create({})

export const request = (method: string) => {
  return http({
    method
  })
}

export const get = () => request('get')
export const post = () => request('post')
export const put = () => request('put')
export const remove = () => request('delete')
