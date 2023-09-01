import axios from '../services/api_client/axios'
export const Api = {
  user: {
    getUsers: () => axios.get<any, any>('?results=10'),
  }
}
