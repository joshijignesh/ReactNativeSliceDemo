import { Api } from '../../Api'

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    Api.user
      .getUsers()
      .then((response: any) => {
        resolve(response)
      })
      .catch((error: any) => {
        reject(error)
      })
  })
}