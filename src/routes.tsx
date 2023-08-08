import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Page from './Pages/index'
import FormSuccess from './Pages/FormSuccess';

function Rota(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Page}/>
        <Route path='/success' Component={FormSuccess}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Rota;