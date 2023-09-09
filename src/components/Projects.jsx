import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { projects } from '../contents/contents';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3, // Show 2 slides on wider screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500, // Autoplay with a 3-second delay
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  const handleProjectClick = (url) => {
    window.open(url, '_blank'); // Open the link in a new tab
  };

  return (


     <div className='mx-auto container px-5 md:px-10 overflow-hidden h-[500px] md:h-[500px] mt-20' >
      <h2 className='text-3xl md:text-4xl font-inter font-black'>Recent Projects</h2>
      <div className='h-[4px] w-[100px] bg-primary ms-3 mt-1 mb-4'></div>

      <Slider {...settings}>
      {
        projects.map((item, index)=>(
           <div  key={index} className='px-2'  >
          <div className='mt-2 w-full md:w-[350px] h-[350px] rounded-md  overflow-hidden flex flex-col justify-between'
          
          style={{
             boxShadow: "0 0 10px rgba(0, 158, 191, 0.7)",
           }}
           >
               <div className='overflow-hidden'><img src={item.icon} alt="youtube" className='w-full h-[250px] object-cover' loading='lazy'/></div>
               <div className='bg-primary h-[100px] flex flex-col items-center justify-center'>
                  <h4 className='text-2xl font-poppins text-center'>{item.title}</h4>
                  <motion.button whileHover={{scale:1.1}} className='text-green-900 font-poppins text-sm hover:font-bold' onClick={() => handleProjectClick(item.link)}>Checkout</motion.button>
              </div>
           </div>
             </div>

        ))
      }
      
      </Slider>
    </div>
  );
}

export default Projects;

