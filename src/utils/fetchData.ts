import { API } from '../api/slider'

export function fetchData(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(API.slider)
    }, 1000)
    reject(new Error('Some error occurred.'))
  })
}
