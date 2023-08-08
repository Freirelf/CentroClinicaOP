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

  /* scrollspy */
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('div[id]')
      let currentSection = '';

      sections.forEach(section => {
        const { top , height } = section.getBoundingClientRect();
        if (top <= 5 && top + height >= 5) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])


  return (
    <div>
      { isMobileView ? (
        <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      ) : (
        <nav className="navigationWeb">
          <img src={logoCentroClinica} alt="logo centro clinica" />
          <ul>
            <li className={activeSection === 'start' ? 'active' : ''}>
              <a href="#start">Início</a>
            </li>
            <li className={activeSection === 'services' ? 'active' : ''}>
              <a href="#services">Serviços</a>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a href="#about">Sobre</a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a href="#contact">Contato</a>
            </li>
            <li >
              <a className="buttonNavContact" href="https://wa.me/5585985771554?text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta++">Agende sua consulta</a>
            </li>
          </ul>
        </nav>
      )};
      
    </div>
  );
};

export default MenuExpanded;