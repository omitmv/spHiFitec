import axios from 'axios'

export const request = async (url, method, data) => {
  const host = process.env.REACT_APP_URL
  axios({
    method,
    url: host + url,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*'
    },
    data
  })
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}
