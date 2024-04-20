import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

import { FormContact } from './FormContact'
import { SessionMaps } from './SessionMaps'
import { Navbar } from '../../Navbar'

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
            <Col md={6} style={{ minHeight: '500px', alignContent: 'center' }}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./1920x1080.png"
                    alt="First slide"
                    style={{ maxWidth: '100%', minHeight: '500px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./1920x1080.png"
                    alt="First slide"
                    style={{ maxWidth: '100%', minHeight: '500px' }}
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col md={6} style={{ minHeight: '500px', alignContent: 'center' }}>
              <center>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Incidunt excepturi dignissimos aspernatur aliquid quod debitis
                  quae id? Officiis optio odit ipsam assumenda facilis ipsa
                  nihil, ullam non accusamus fugiat odio!
                </p>
              </center>
            </Col>
          </Row>
          <Row style={{ minHeight: '500px', alignContent: 'center' }}>
            <FormContact />
          </Row>
        </Container>
        <footer className="bg-body-secondary">
          <Container>
            <Row>
              <Col md="4">
                <ul>
                  <li>
                    <FaLinkedin /> LinkedIn
                  </li>
                  <li>
                    <FaInstagram /> Instagram
                  </li>
                  <li>
                    <FaFacebook /> Facebook
                  </li>
                </ul>
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
