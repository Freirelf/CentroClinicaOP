import React from "react";
import { Link } from "react-router-dom";

import './styles.css'

function FormSuccess(){
  return(
    <div className="formSuccess">
      <h2>Obrigado pelas informações, clique no botão para voltar.</h2>
      <Link className="linkBack" to = '/'> Voltar </Link>
    </div>
  )
}

export default FormSuccess;