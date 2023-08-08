import React, { useState, useEffect } from 'react';
import backToTop from '../../assets/images/icons/backToTop.svg'

import './styles.css'

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const scrollThreshold = 0.2 * window.innerHeight; // 20% da altura da janela

    setShowButton(scrollPosition > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ display: showButton ? 'block' : 'none' }}>
      <button
        id="backToTopButton"
        onClick={scrollToTop}>

        <img src={backToTop} alt="icon back to top button" />
      </button>
    </div>
  );
};

export default BackToTopButton;


          <a href="#start">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#143965"/>
            <path d="M20 27V13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13 20L20 13L27 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>  
          </a>