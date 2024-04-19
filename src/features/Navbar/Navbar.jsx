import React from 'react'
import { Container, Nav, Navbar as NavBoot, NavDropdown } from 'react-bootstrap'

export class Navbar extends React.Component {
  render() {
    return (
      <NavBoot expand="lg" className="bg-body-tertiary">
        <Container>
          <NavBoot.Brand href="#home">Hi-Fitec</NavBoot.Brand>
          <NavBoot.Toggle aria-controls="basic-navbar-nav" />
          <NavBoot.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavBoot.Collapse>
        </Container>
      </NavBoot>
    )
  }
}
