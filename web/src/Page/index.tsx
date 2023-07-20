import React from 'react'
import Navigation from '../components/Navigation';
import PageHeader from '../sections/HeaderPage';
import Services from '../sections/Services';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

function Page(){
  return (
    <div className='landing-page'>
      <Navigation />

      <PageHeader />

      <Services />

      <About />

      <Contact />

      <Footer />
    </div>
  )
}

export default Page;