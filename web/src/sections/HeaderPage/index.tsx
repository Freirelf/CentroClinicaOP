import React from "react";

import ButtonContact from '../../components/ButtonContact';
import jewelDoctor from '../../assets/images/jewelDoctor.png';

import './styles.css';

function PageHeader() { 
  return (
    <div id="start" className="header-page">
        <div className="header">
          <header>
            <h4>BOAS VINDAS A CENTRO CLÍNICA &#128075;</h4>
            <h1>Assistência médica simplificada para todos</h1>
          </header>
          <p>
            Os médicos da Centro Clínica vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.
          </p>
          <ButtonContact />
        </div>

        <div className="content">
          <div className="jewelDoctor">
            <img src={jewelDoctor} alt="Doctor giving a gem to hand in blue lab coat" />
          </div>

            <div className="stats">
              <div className="stat">
                <h3>+5.000</h3>
                <p>Pacientes atendidos</p>
              </div>
              <div className="stat">
                <h3>+8</h3>
                <p>Especialidades disponíveis</p>
              </div>
              <div className="stat">
                <h3>+5</h3>
                <p>Anos de atendimento</p>
              </div>
            </div>

          </div>
          
        </div>

  );
}

export default PageHeader;