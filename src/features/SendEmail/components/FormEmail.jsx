import React from 'react'
import { Button, Form } from 'react-bootstrap'
import * as XLSX from 'xlsx'

export class FormEmail extends React.Component {
  state = {
    subject: '',
    message: '',
    emails: []
  }

  readExcel = file => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsArrayBuffer(file)

      fileReader.onload = e => {
        const bufferArray = e.target.result
        const wb = XLSX.read(bufferArray, { type: 'buffer' })
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        const data = XLSX.utils.sheet_to_json(ws)
        resolve(data)
      }

      fileReader.onerror = error => {
        reject(error)
      }
    })

    promise.then(d => {
      this.setState({ emails: d })
    })
  }

  render() {
    return (
      <div>
        <Form>
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
            <Form.Control
              size="sm"
              type="file"
              placeholder="E-mails"
              onChange={e => {
                const file = e.target.files[0]
                this.readExcel(file)
              }}
            />
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
