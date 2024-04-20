import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'

import { Navbar } from '../../Navbar'
import { FormContact } from './FormContact'
import { SessionMaps } from './SessionMaps'

export class Home extends React.Component {
  render() {
    return (
      <div className="bg-body-tertiary">
        <Navbar />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./1920x1080.png"
              alt="First slide"
              style={{ maxWidth: '100%', maxHeight: '500px' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./1920x1080.png"
              alt="Second slide"
              style={{ maxWidth: '100%', maxHeight: '500px' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./1920x1080.png"
              alt="Third slide"
              style={{ maxWidth: '100%', maxHeight: '500px' }}
            />
          </Carousel.Item>
        </Carousel>
        <Container>
          <Row>
            <FormContact />
          </Row>
          <Row>
            <Col md={6}>
              <h2>Carrossel de Imagens</h2>
              {/* Add your image carousel here */}
            </Col>
            <Col md={6}>
              <h2>Texto</h2>
              {/* Add your text here */}
            </Col>
          </Row>
        </Container>
        <footer>
          <Container>
            <Row>
              <Col md="4">
                <h2>Redes Sociais e Endereço</h2>
                {/* Add your social media links and address here */}
              </Col>
              <Col md="4">
                <SessionMaps />
              </Col>
              <Col md="4">
                <h2>Texto</h2>
                {/* Add your text here */}
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    )
  }
}
