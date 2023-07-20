import React from 'react'

import whatsapp from '../../assets/images/icons/whatsapp.svg'
import mapPin from '../../assets/images/icons/map-pin.svg'
import telephone from '../../assets/images/icons/telephone.svg'
import logoCentroClinicaName from '../../assets/images/CentoClinicaWhite.png'
import logoCentroClinica from '../../assets/images/CentroClinicaLogo.png'

import './styles.css'
import BackToTopButton from '../../components/BackToTopButton'

function Footer(){



  return (
    <div>
      <div className="footer">
        <header>
          <img className="logoIcon" src={logoCentroClinica} alt="Logo" />
          <img className="logoName" src={logoCentroClinicaName} alt="Logo" />
          <p>Todos os direitos reservados.</p>
        </header>
        <div className="linksFooter">
        
          <ul className="socialLinksFooter">
            <li>
              <a className="contactFooter" href="https://www.google.com/maps/place/R.+Dr+Costa+Ara%C3%BAjo,+1210+-+F%C3%A1tima,+Fortaleza+-+CE,+60040-630/@-3.7463859,-38.5349016,17z/data=!3m1!4b1!4m6!3m5!1s0x7c7491954c5443b:0x5fcc0d66410c719e!8m2!3d-3.7463913!4d-38.5323267!16s%2Fg%2F11c4s21_04" target="_blank" rel="noreferrer">
                <img src={mapPin} alt="Location" />
                  Rua Doutor Cost Araújo, 1210, Fátima.
              </a>
            </li>
            <li>
              <a className="contactFooter" href="https://wa.me/5585985771554?text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta+" target="_blank" rel="noreferrer">
                <img src={whatsapp} alt="whatsapp" />
                  (85) 98577-1554 | (85) 981098431
              </a>
            </li>
            <li>
              <a className="contactFooter" href="#contact">
                <img src={telephone} alt="telephone" />
                  (85) 3879-2205 | 3878-2204 | 3276-4655 | 3122-9742
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="dev">
        <p>Site desenvolvido por LFSolutions. </p>
      </div>

    <BackToTopButton />
    </div>
    
  )
}

export default Footer;