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
        <div className="aboutHeader">
          <h4>Sobre nos</h4>
          <h2>Entenda quem somos e por que existimos</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt maxime, deleniti atque excepturi tenetur magnam ducimus harum nam, quos in vel dolor ad velit autem enim rerum iure. Libero, maxime Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum facilis explicabo natus ut accusantium enim in animi reiciendis facere laborum repellat, molestias obcaecati quibusdam optio provident cum aliquid omnis.</p>
        </div>
    
      <div className="carroca">
        <Carousel id="photos" data-bs-theme="dark">
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

    <div id="convenios">
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