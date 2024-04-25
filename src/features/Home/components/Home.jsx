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
                <h1>
                  Bem-vindo à Hi-Fitec!{' '}
                  <span role="img" aria-label="emoji de foguete">
                    🚀
                  </span>
                </h1>
                <p>
                  Na Hi-Fitec, somos mais do que apenas uma empresa de software.
                  Somos criadores, inovadores e solucionadores de problemas.
                  Aqui está o que nos diferencia:
                </p>

                <p>1. Paixão pela Tecnologia</p>
                <p>
                  Nós respiramos código e sonhamos com algoritmos. Nossa equipe
                  é apaixonada por desenvolvimento de software, inteligência
                  artificial, nuvem e tecnologias emergentes. Se você está
                  procurando um lugar onde a paixão pela tecnologia é o nosso
                  combustível, você está no lugar certo.
                </p>

                <p>2. Cultura Colaborativa</p>
                <p>
                  Na Hi-Fitec, acreditamos que as melhores ideias surgem quando
                  trabalhamos juntos. Nossa cultura é baseada na colaboração,
                  respeito e inovação. Aqui, todos têm voz e são incentivados a
                  contribuir com suas perspectivas únicas.
                </p>

                <p>3. Compromisso com a Qualidade</p>
                <p>
                  Nossa equipe de desenvolvedores, designers e testadores está
                  comprometida em entregar software de alta qualidade. Não nos
                  contentamos com menos. Cada linha de código é escrita com
                  precisão, e cada projeto é testado exaustivamente para
                  garantir que atenda aos mais altos padrões.
                </p>

                <p>
                  Junte-se a nós e vamos construir o futuro juntos!{' '}
                  <span role="img" aria-label="emoji do globo">
                    🌐
                  </span>
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
                      <FaLinkedin style={{ fontSize: '3rem' }} /> Linkedin
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="https://www.instagram.com/omitmv/">
                      <FaInstagram style={{ fontSize: '3rem' }} /> Instagram
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="https://www.facebook.com/rafael.valverde.90857/">
                      <FaFacebook style={{ fontSize: '3rem' }} /> Facebook
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md="4">
                <SessionMaps />
              </Col>
              <Col md="4">
                <h3>hi-fitec</h3>
                <h4>
                  <a href="#home">Home</a>
                </h4>
                <h4>
                  <a href="#contact">Contato</a>
                </h4>
                <h4>
                  <a href="#about">Sobre</a>
                </h4>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    )
  }
}
