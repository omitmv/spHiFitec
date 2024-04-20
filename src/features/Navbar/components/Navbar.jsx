import React from 'react'
import { Container, Nav, Navbar as NavBoot } from 'react-bootstrap'

export class Navbar extends React.Component {
  render() {
    return (
      <NavBoot expand="lg" className="bg-body-tertiary">
        <Container>
          <NavBoot.Brand href="/">Hi-Fitec</NavBoot.Brand>
          <NavBoot.Toggle aria-controls="basic-navbar-nav" />
          <NavBoot.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#contact">Contato</Nav.Link>
              <Nav.Link href="#about">Sobre</Nav.Link>
            </Nav>
          </NavBoot.Collapse>
        </Container>
      </NavBoot>
    )
  }
}
