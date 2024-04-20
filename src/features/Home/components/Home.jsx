import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'

import { Navbar } from '../../Navbar'
import { FormContact } from '../../FormContact'

export class Home extends React.Component {
  render() {
    return (
      <div className="bg-body-tertiary">
        <Navbar />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image1.jpg"
              alt="First slide"
              style={{ maxWidth: '100%', maxHeight: '500px' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image2.jpg"
              alt="Second slide"
              style={{ maxWidth: '100%', maxHeight: '500px' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image3.jpg"
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
              <Col>
                <h2>Redes Sociais e Endereço</h2>
                {/* Add your social media links and address here */}
              </Col>
              <Col>
                <h2>Mapa</h2>
                {/* Add your map here */}
              </Col>
              <Col>
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
