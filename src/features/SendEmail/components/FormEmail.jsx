import React from 'react'
import { Button, Form } from 'react-bootstrap'

export class FormEmail extends React.Component {
  state = {
    smtp: '',
    smtpPort: '',
    emailFrom: '',
    emailPassword: '',
    subject: '',
    message: '',
    emails: [{ email: 'coordenadorti@transfuturoveiculos.com.br' }]
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="inputSmtp">
            <Form.Label>SMTP</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="SMTP"
              value={this.state.smtp}
              onChange={e => this.setState({ smtp: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputSmtpPort">
            <Form.Label>Porta</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="PORTA"
              value={this.state.smtpPort}
              onChange={e => this.setState({ smtpPort: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEmailFrom">
            <Form.Label>E-mail Envio</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="E-mail Envio"
              value={this.state.emailFrom}
              onChange={e => this.setState({ emailFrom: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEmailPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              size="sm"
              type="password"
              placeholder="Senha do E-mail"
              value={this.state.emailPassword}
              onChange={e => this.setState({ emailPassword: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputSubject">
            <Form.Label>Assunto</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Assunto"
              value={this.state.subject}
              onChange={e => this.setState({ subject: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputMessage">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control
              size="sm"
              as="textarea"
              placeholder="Mensagem"
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEmails">
            <Form.Label>E-mails</Form.Label>
            <Form.Control size="sm" type="file" placeholder="E-mails" />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="button">
            <Button
              variant="success"
              onClick={() => this.props.value.sendEmail(this.state)}
            >
              Enviar
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
