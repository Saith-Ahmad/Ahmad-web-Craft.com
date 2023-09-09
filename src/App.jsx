import React, { lazy, Suspense } from 'react';

const Hero = lazy(() => import('./components/Hero'));
const Header = lazy(() => import('./components/Header'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Services = React.lazy(() => import('./components/Services'));
const Projects = React.lazy(() => import('./components/Projects'));
const Choose = React.lazy(() => import('./components/Choose'));
const Clients = React.lazy(() => import('./components/Clients'));
const Form = React.lazy(() => import('./components/Form'));
const Footer = React.lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <div className='bg-background-gradient' id="home">
      <Header />
      <div className='container mx-auto  flex flex-col justify-center items-center text-white p-0'>
        <Hero />

      </div>
      <Suspense fallback={<div className='bg-backgroung-gradient'>Loading...</div>}>
        <div className='relative text-white'>
          <Portfolio />
          <div id='services'><Services /></div>
          <div id='projects'><Projects /></div>
          <Choose />
          <Clients />
          <Form />
          <Footer />
        </div>
      </Suspense>

    </div>
  );
};

export default App;
