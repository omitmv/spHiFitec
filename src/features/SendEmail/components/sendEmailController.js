import { request } from '../../../utils/utilsRequests'

export const sendEmail = async values => {
  const data = request('/utils/sendEmail', 'post', values)
  console.log(data)
}
