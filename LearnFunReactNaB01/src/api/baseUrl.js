import axios from 'axios'

const ROOT_API_URL = `http://api.openweathermap.org/data/2.5/`

export const basicCallApi = (url) => {
  const instance = axios.create({
    baseURL: ROOT_API_URL,
    timeout: 100000
  })
}
