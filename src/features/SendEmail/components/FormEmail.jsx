import React from 'react'
import { Form } from 'react-bootstrap'

export class FormEmail extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="inputSmtp">
            <Form.Label>SMTP</Form.Label>
            <Form.Control size="sm" type="text" placeholder="SMTP" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputSmtpPort">
            <Form.Label>Porta</Form.Label>
            <Form.Control size="sm" type="text" placeholder="PORTA" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEmailFrom">
            <Form.Label>E-mail Envio</Form.Label>
            <Form.Control size="sm" type="text" placeholder="E-mail Envio" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEmailPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              size="sm"
              type="password"
              placeholder="Senha do E-mail"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputSubject">
            <Form.Label>Assunto</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Assunto" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputMessage">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control size="sm" as="textarea" placeholder="Mensagem" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEmails">
            <Form.Label>E-mails</Form.Label>
            <Form.Control size="sm" type="file" placeholder="E-mails" />
          </Form.Group>
        </Form>
      </div>
    )
  }
}
