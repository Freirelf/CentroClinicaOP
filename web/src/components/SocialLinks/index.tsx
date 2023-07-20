import React from "react";

import iconInstagram from '../../assets/images/icons/instagram.svg'
import iconTelephone from '../../assets/images/icons/telephone.svg'
import iconWhatsapp from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function SocialLinks () {
  return(
    <ul className="social-links">
          <li>
            <a href="https://www.instagram.com/centroclinica13/" target="_blank" rel="noreferrer">
            <img src={iconInstagram} alt="Icon Instagram"/>
            </a>
          </li>

          <li>
            <a href={"#contact"}>
              <img src={iconTelephone} alt="Icon telephone"/>
            </a>
          </li>

          <li>
            <a href="https://wa.me/5585985771554?text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta+para...++" target="_blank" rel="noreferrer">
              <img src={iconWhatsapp} alt="Icon WhatsApp"/>
            </a> 
          </li>
        </ul>
  );
}

export default SocialLinks;