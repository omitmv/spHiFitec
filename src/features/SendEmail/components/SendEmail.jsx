import React from 'react'

import { FormEmail } from './FormEmail'
import { Button, Container } from 'react-bootstrap'

export class SendEmail extends React.Component {
  state = {
    smtp: '',
    smtpPort: '',
    emailFrom: '',
    emailPassword: '',
    subject: '',
    message: '',
    emails: []
  }

  sendEmail() {
    console.log('send email')
  }

  render() {
    return (
      <Container>
        <h1>Send Email</h1>
        <FormEmail value={this.state} />
        <Button variant="success" onClick={this.sendEmail}>
          Enviar
        </Button>
      </Container>
    )
  }
}
