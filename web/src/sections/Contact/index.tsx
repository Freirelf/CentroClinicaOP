import React from 'react'
import ButtonContact from '../../components/ButtonContact'
import email from '../../assets/images/icons/mail.svg'
import mapPin from '../../assets/images/icons/map-pin-blue.svg'
import telephone from '../../assets/images/icons/telefone.svg'
import whatsappBlue from '../../assets/images/icons/whatsappBlue.svg'

import './styles.css'



function Contact(){
  return (
    <div id="contact" >
      <div className="contact">
        <h2>Entre em contato com a gente!</h2>
        <p>
          <img src={mapPin} alt="Location" />
          Rua Doutor Costa Araújo, 1210, Fátima</p>
        <p>
          <img src={email} alt="email" />
          centroclinica13demaio@hotmail.com
        </p>

        <p>
          <img src={whatsappBlue} alt="whatsapp" />
          (85) 98577-1554 | (85) 981098431
        </p>

        <p>
           <img src={telephone} alt="telephone" /> 
          (85) 3879-2205 | 3878-2204 | 3272-2476 | 3122-9742
        </p>

        <ButtonContact />
      </div>

      <form action="https://formsubmit.co/saicon.vd@hotmail.com" method="post" id="form">
        <input type="hidden" name="_next" value="https://freirelf.github.io/Centro-Clinica/formSucess.html" />
      
        <input type="hidden" name="_autoresponse" value="Recebemos suas informações, obrigado pelo contato, logo retornaremos!" />
        <fieldset >
          <div className="fieldset-wrapper">
            <legend>Olá, conte-nos como podemos ajuda-lo(a)</legend>
            <div className="input-wrapper">
              <label htmlFor="eventName">Nome </label>
              <input type="text" name="name" id="eventName" required minLength={5}/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="eventEmail">Email <span>(digite um email válido)</span></label>
              <input type="text" name="email" id="eventEmail" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="event-whatsapp">Whatsapp para contato <span>(somente números)</span></label>
                  <input type="number" name="contato" id="event-whatsapp" required />
            </div>
      
            <div className="input-wrapper">
              <label htmlFor="event-info">Informações (digite aqui sua dúvida) </label>
              <textarea className="textarea" name="info" id="event-info" cols={30} rows={10} required></textarea>
            </div>
          </div>
        </fieldset>
        <div className="buttonForm">
          <input type="submit" form="form" value="Enviar"/>
        </div>
      </form>


      

    </div>
  )
}

export default Contact; 