import React from "react";

import { Carousel } from "react-bootstrap";

import unimed from '../../assets/images/logo_unimed.png'
import issec from '../../assets/images/issec.png'
import ipm from '../../assets/images/ipm_saude.png'
import bradesco from '../../assets/images/bradesco-saude.png'


import frenteClinica1 from '../../assets/images/photos/frenteClinica1.jpeg'
import frenteClinica from '../../assets/images/photos/frenteClinica.jpeg'
import escadaPiso1 from '../../assets/images/photos/escadaPiso1.jpeg'
import recepçãoFrente from '../../assets/images/photos/recepçãoFrente.jpeg'
import recepçãoFrente2 from '../../assets/images/photos/recepção2.jpeg'
import recepçãoFrente3 from '../../assets/images/photos/recepção3.jpeg'
import recepçãoFrente4 from '../../assets/images/photos/recepção4.jpeg'
import recepçãoFrente5 from '../../assets/images/photos/recepção5.jpeg'
import recepçãoFrente6 from '../../assets/images/photos/recepção6.jpeg'

import './styles.css'

function About() {
  return (
    <div id="about" className="about">
        <div className="aboutDiv">
          <div className="aboutHeader">
            <h4>Sobre nos</h4>
            <h2>Entenda quem somos e por que existimos</h2>
            <p>
              Bem-vindos à Centro clínica 13 de maio! Há mais de 5 anos, temos o prazer de cuidar da saúde e do bem-estar das pessoas com dedicação e comprometimento.<br/>
              <br/>
              Nossa clínica oferece um ambiente aconchegante e moderno, pensado para proporcionar conforto aos nossos pacientes. Aqui, prezamos pela qualidade em todos os aspectos, desde o atendimento até a limpeza das nossas instalações. Nossa equipe é composta por profissionais capacitados e dedicados, prontos para cuidar de você de maneira individualizada e respeitosa.<br/>
              <br/>
              Agradecemos a confiança que nossos pacientes depositam em nós e estamos ansiosos para fazer parte da sua jornada rumo a uma vida mais saudável e feliz.<br/>
              <br/>
              Seja bem-vindo à nossa clínica, onde o seu bem-estar é a nossa prioridade!
            </p>
          </div>
              
          <div className="carouselDiv">
            <Carousel  data-bs-theme="dark">
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={frenteClinica1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={frenteClinica}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5 className="title">Estacionamento</h5>
                  <p className="info">Estacione e deixe seu veículo em um local seguro.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={escadaPiso1}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={recepçãoFrente3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5 className="title">Acessibilidade</h5>
                  <p className="info">
                    Elevador para melhor mobilidade dos pacientes.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={recepçãoFrente}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={recepçãoFrente5}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5 className="title">Conforto</h5>
                  <p className="info">
                    Ótimo ambiente de espera, para melhor atendimento.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={recepçãoFrente2}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={recepçãoFrente4}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={recepçãoFrente6}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

    <div className="convenios">
        <ul>
          <li><img src={unimed} alt="Icon unimed" /></li>
          <li><img src={ipm} alt="Icon ipm" /></li>
          <li><img src={issec} alt="Icon do issec" /></li>
          <li><img src={bradesco} alt="Icon bradesco saúde" /></li>
        </ul>
    </div>
        
    </div>
 
  )
}

export default About; 