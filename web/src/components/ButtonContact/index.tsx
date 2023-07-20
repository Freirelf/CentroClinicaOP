import React from "react";
import whatsapp from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function ButtonContact() {

  return (
    <a className="buttonContact" href="https://wa.me/5585985771554?text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta++" target="_blank" rel="noreferrer">
      <img src={whatsapp} alt="Logo whatsapp" />  
      Agende sua consulta
    </a>
  );
}

export default ButtonContact;