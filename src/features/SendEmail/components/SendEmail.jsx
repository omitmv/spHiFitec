import React from 'react'
import { Container } from 'react-bootstrap'

import { FormEmail } from './FormEmail'

export class SendEmail extends React.Component {
  async sendEmail(values) {
    console.log(values)
  }

  render() {
    return (
      <>
        <Container>
          <h1>Send Email</h1>
          <FormEmail
            value={{
              sendEmail: value => this.sendEmail(value)
            }}
          />
        </Container>
        <br />
      </>
    )
  }
}
