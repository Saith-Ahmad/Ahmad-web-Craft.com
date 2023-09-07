import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Projects from './components/Projects';
import Choose from './components/Choose';
import Clients from './components/Clients';
import Form from './components/Form';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-background-gradient' id="home">
      <Header/>
      <div className='container mx-auto  flex flex-col justify-center items-center text-white p-0'>
        <Hero />
      </div>
      <div className='relative text-white'>
        <Portfolio/>
        <div id='services'><Services/></div>
        <div id='projects'><Projects/></div>
        <Choose/>
        <Clients/>
        <Form/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
