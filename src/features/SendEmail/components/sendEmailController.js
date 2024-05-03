import axios from 'axios'

export const sendEmail = async values => {
  axios
    .post('https://apiwebview.azurewebsites.net/util/send-email', values)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}
