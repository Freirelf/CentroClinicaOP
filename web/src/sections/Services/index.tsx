import React from "react";
import Card from "../../components/Card";

import gynecology from '../../assets/images/gynecology.png' 
import proctology from '../../assets/images/Proctology.png'
import orthopedics from '../../assets/images/orthopedics.png'
import urology from '../../assets/images/urology.png'
import generalSurgeon from '../../assets/images/generalSurgeon.png'
import psychiatry from '../../assets/images/psychiatry.png'
import laboratory from '../../assets/images/laboratory.png'
import physiotherapy from '../../assets/images/physiotherapy.png'
import dentistry from '../../assets/images/dentistry.png'


import './styles.css'

function Services() {

  return (
    <div id="services" className="services">
      <div className="servicesHeader">
        <h4>Serviços</h4>
        <h2>Como podemos ajudá-lo(a) a se sentir melhor?</h2>
        
      </div>
      <em>
        <p id="observation">*Consulte as especialidades com atendimento por convênios.</p> 
      </em>

      <div className="cards">
        
        <Card 
          title= 'Ginecologista'
          image= {gynecology} alt="female reproductive system" 
          info= 'Dr. Virgílio Dourado e Dra. Márcia Sá, responsáveis pela saúde da mulher, com atenção especial ao órgão genital feminino (Incluindo vagina, trompas, úteros e ovários) e as mamas.'
        />

        <Card 
          title= 'Cirurgião geral'
          image= {generalSurgeon} alt="operating table"
          info= 'Dr. Virgílio Dourado, médico especialista treinado para o manejo cirúrgico das afecções mais diversas do organismo como um todo, com ênfase no trauma, urgência e emergência.'
        />

        <Card 
          title= 'Proctologista'
          image= {proctology} alt="digestive system"
          info= 'Dr. Ney Feitosa, especializado no diagnóstico e tratamento de doenças/alterações relacionadas à parte final do sistema digestivo, o que inclui o intestino grosso (cólon), ânus e reto.'
        />

        <Card 
          title= 'Ortopedista'
          image= {orthopedics} alt="bone part"
          info= 'Dr. Frederico Uchôa, especialista em diagnosticar e acompanhar lesões que acometem todo sistema locomotor. Doenças e traumas que afetam músculos, articulações, ossos e ligamentos.'
        />

        <Card 
          title= 'Urologista'
          image= {urology} alt="urinary system"
          info= 'Dr. Everton de castro, especialista por tratar/diagnosticar as doenças do trato urinário e doenças relativas às glândulas suprarrenais. Trata a saúde da bexiga, rins, uretra e ureteres.'
        />

        <Card 
          title= 'Psiquiatria'
          image= {psychiatry} alt="nervous system"
          info= 'Dra. Bruna Dourado e Dra. Edvanda Dourado, especialistas em diagnóstico de desordens mentais, como depressão, ansiedade, esquizofrenia e até mesmo de casos de dependência em substâncias químicas.'
        />  

        <Card 
          title= 'Laboratório'
          image= {laboratory} alt="collection bottle"
          info= 'Realização de diversos exames específicos de acordo com solicitação médica. Orienta o paciente a respeito do tipo de exame e da coleta do material.'
        />  

        <Card 
          title= 'Fisioterapia'
          image= {physiotherapy} alt="bone column"
          info= 'Dra. Renata Melo, especialista em prevenção, habilitação e reabilitação, realiza diagnósticos específicos e desenvolve programas de prevenção, promoção de saúde e qualidade de vida.'
        /> 

        <Card 
          title= 'Odontologia'
          image= {dentistry} alt="tooth"
          info= 'Dra. Danielle Dourado, responsável pelo tratamento da saúde e estética bucal. A respeito dos dentes, gengiva, ossos da face, maxilar, mordida e demais áreas que envolvem a boca.'
        />
        
      </div>
    </div>
  )
}

export default Services;