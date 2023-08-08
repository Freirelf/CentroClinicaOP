import React, { useState } from "react";

import SocialLinks from "../SocialLinks";

import openMenu from '../../assets/images/icons/openMenuBlue.svg'
import closeMenu from '../../assets/images/icons/close.svg'
import whatsapp from '../../assets/images/icons/whatsapp.svg'
import logoCentroClinicaName from '../../assets/images/CentoClinicaWhite.png'
import logoCentroClinica from '../../assets/images/CentroClinicaLogo.png'


import './styles.css'

interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, toggleMenu }) => {
  
  const [imageSrcLogo, setImageSrc] = useState(logoCentroClinica)
  
  const handleToggleMenu = () => {
    toggleMenu();
    setImageSrc(isOpen ? logoCentroClinica : logoCentroClinicaName)
  }

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    toggleMenu();
    setImageSrc(isOpen ? logoCentroClinica : logoCentroClinicaName)

    // Impedir que o comportamento padrão do link ocorra
    event.preventDefault();
  
    // Obter o alvo do link (âncora)
    const targetId = event.currentTarget.getAttribute('href');
  
    if (targetId) {
      // Verificar se o alvo existe
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Obter a posição do elemento alvo
        const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
  
        // Scroll suave para o elemento alvo
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    
    <div className={`menu-navigation ${isOpen ? 'open' : ''}`}>
      <div className="navigation">

        <img className="logo-home" src={imageSrcLogo} alt="Logo Clínica" />
        <button onClick={handleToggleMenu}>
         <img src={isOpen ? closeMenu : openMenu} alt="Menu" />
        </button>
        
      </div>

      {isOpen && (
        <ul className={`menu-options ${isOpen ? 'open' : ''}`}>
          <li className="liOptions">
            <a href="#start" onClick={handleToggleMenu}>
              Início
            </a>
          </li>
          <li className="liOptions">
            <a href="#services" onClick={handleToggleMenu}>
              Serviços
            </a>
          </li>
          <li className="liOptions">
            <a href="#about" onClick={handleToggleMenu}>
              Sobre
            </a>
          </li>
          <li className="liOptions"> 
            <a href="#contact" onClick={handleLinkClick}>
              Contato
            </a>
          </li>
          <li className="liOptions">
            <a href="#photos" onClick={handleToggleMenu}>
              Fotos
            </a>
          </li>
          
          <a className="buttonContact" href="https://wa.me/5585985771554?text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta++" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="Logo whatsapp" />  
              Agende sua consulta
          </a>
          <SocialLinks/>
        </ul>
      )}

    </div>
  );
};

export default Menu;

/*   {options.map((option, index) => (
            <li key={index}> 
              <Link to={''}>{option}</Link>
            </li>
          ))}*/