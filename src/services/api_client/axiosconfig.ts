import rootAxios from 'axios'

export const BASE_URL = 'https://randomuser.me/api'

/**
 * @returns instance of Axios
 */
const createAxiosInstance = () =>
  rootAxios.create({
    baseURL: BASE_URL,
  })

export default createAxiosInstance
