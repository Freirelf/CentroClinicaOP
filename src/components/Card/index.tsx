import React, { useState } from "react";
import circleCheck from '../../assets/images/icons/circleCheck.svg'
import close from '../../assets/images/icons/closeBlue.png'
import whatsapp from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface CardProps {
  title: string; 
  image: string;
  info: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({title, image, info, alt }) => {

  const [showContent, setShowContent] = useState(false)

  const handleButtonClick = () => {
    setShowContent(!showContent);
  }

  const handleImageClick = () => {
    setShowContent(false);
  }

  return (
    <div className="Card">

      <header className="headerCard">
        <h4>{title}</h4>
          <button arial-expanded="false" aria-label="Fechar card" onClick={handleImageClick} className="closeCard">
            <img src={showContent ? close : circleCheck} alt="Icon close" />
          </button>

      </header> 

      <div className={`imageCard ${showContent ? 'openCard' : ''}`}>
        <img src={image} alt={alt} />
      </div>

      <div className="knowMore">
        <button aria-expanded="true" aria-label="Abrir card" onClick={handleButtonClick} className={`buttonOpenCard ${showContent ? 'openCard' : ''}`}>
          clique para saber +
        </button>

          {showContent && 
            <div className="infoCardExpended">
              <p>{info}</p>
              <a className="buttonCardContact" href="https://wa.me/5585985771554?text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta++" target="_blank" rel="noreferrer">
                <img src={whatsapp} alt="Logo whatsapp" />  
                Agende sua consulta
              </a>
            </div>  
          }
      </div>

    </div>
  )
}

export default Card; 