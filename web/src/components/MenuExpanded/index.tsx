import React, {useEffect, useState} from "react";
import Menu from "../Main";

import logoCentroClinica from '../../assets/images/CentroClinicaLogo.png'

import './styles.css'

const MenuExpanded: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const handleResize = ()=> {
    setIsMobileView(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      { isMobileView ? (
        <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      ) : (
        <nav className="navigationWeb">
          <img src={logoCentroClinica} alt="logo centro clinica" />
          <ul>
            <li><a href="#start">Início</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#photos">Fotos</a></li>
          </ul>
        </nav>
      )};
      
    </div>
  );
};

export default MenuExpanded;