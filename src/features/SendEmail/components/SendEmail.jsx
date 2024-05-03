import React from 'react'
import { Container } from 'react-bootstrap'

import { FormEmail } from './FormEmail'
import { sendEmail } from './sendEmailController'

export class SendEmail extends React.Component {
  render() {
    return (
      <>
        <Container>
          <h1>Send Email</h1>
          <FormEmail
            value={{
              sendEmail: value => sendEmail(value)
            }}
          />
        </Container>
        <br />
      </>
    )
  }
}
