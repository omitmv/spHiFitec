import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

import { FormContact } from './FormContact'
import { SessionMaps } from './SessionMaps'
import { Navbar } from '../../Navbar'
import { FloatButton } from './FloatButton'

export class Home extends React.Component {
  render() {
    return (
      <div id="home" className="bg-body-tertiary">
        <Navbar />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/image1.jpg"
              alt="First slide"
              style={{ maxWidth: '100%', maxHeight: '500px' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/image2.jpg"
              alt="Second slide"
              style={{ maxWidth: '100%', maxHeight: '500px' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/image3.jpg"
              alt="Third slide"
              style={{ maxWidth: '100%', maxHeight: '500px' }}
            />
          </Carousel.Item>
        </Carousel>
        <Container>
          <Row
            id="contact"
            style={{ minHeight: '500px', alignContent: 'center' }}
          >
            <FormContact />
          </Row>
          <Row id="about">
            <Col md={6} style={{ minHeight: '500px', alignContent: 'center' }}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./assets/image4.jpg"
                    alt="First slide"
                    style={{ maxWidth: '100%', minHeight: '500px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./assets/image5.jpg"
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
        </Container>
        <FloatButton />
        <footer className="bg-body-secondary">
          <Container>
            <Row>
              <Col md="4">
                <ul style={{ listStyle: 'none' }}>
                  <br />
                  <li>
                    <a href="https://www.linkedin.com/in/rafael-valverde-19454145/">
                      <FaLinkedin style={{ fontSize: '3rem' }} />
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="https://www.instagram.com/omitmv/">
                      <FaInstagram style={{ fontSize: '3rem' }} />
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="https://www.facebook.com/rafael.valverde.90857/">
                      <FaFacebook style={{ fontSize: '3rem' }} />
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md="4">
                <SessionMaps />
              </Col>
              <Col md="4">
                <h2>hi-fitec</h2>
                <h3>
                  <a href="#home">Home</a>
                </h3>
                <h3>
                  <a href="#contact">Contato</a>
                </h3>
                <h3>
                  <a href="#about">Sobre</a>
                </h3>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    )
  }
}
