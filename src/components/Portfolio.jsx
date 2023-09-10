import React, { useState, useEffect } from 'react';
import dp from "../assets/dp.jpeg"
import Socials from './Socials';
import { motion } from 'framer-motion';
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import node from "../assets/node.png"
import css from "../assets/css.png"
import html from "../assets/html.png"
import redux from "../assets/redux.png"
import js from "../assets/js.png"
const roles = [
  'React Developer.',
  'Software Engineer.',
  'Website Developer.',
  'FrontEnd Expert.',
];

const Portfolio = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const targetText = roles[roleIndex];

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < targetText.length) {
        currentText += targetText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedText('');
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1000); // Delay before clearing and changing text (in milliseconds)
      }
    }, 150); // Adjust typing speed here (in milliseconds)

    return () => {
      clearInterval(typingInterval);
    };
  }, [roleIndex]);

  return (
    <div className='flex flex-col md:flex-row h-[100vh] justify-between items-center w-full mt-5 md:mt-0 container mx-auto px-5 md:px-10'>
      <div className='overlay-portfolio opacity-20'></div>

      {/* Left Div */}
      <div className='flex-col md:w-[55%] w-full'>

        <div className=' font-poppins font-normal'>
          <h4 className=''>Hey There!</h4>
          <hr className='w-[50px] h-[2px] bg-primary border-none'/>

          <div className='flex items-center mt-2'>
          <p className='text-secondary'>My name is </p> <h3 className='ms-3 font-black text-2xl md:text-4xl font-inter '>"Saith Ahmad"</h3>
          </div>

          <div className='flex items-start text-lg relative mt-1 min-h-[65px] flex-col md:h-[80px] h-[65px]'>
          <p className='text-secondary'>I'm a </p> <h3 className='absolute top-7 w-full font-black md:text-5xl sm:text-4xl text-[32px] font-inter text-primary glow-text'>{typedText}</h3>
          </div>

          <p className='text-secondary mt-5 text-lg'>Greetings! I'm a skilled React.js developer and frontend expert, crafting top-notch solutions to enhance your online presence. With an eye for stunning user experiences, I'll turn your ideas into attractive, functional websites.

          But it doesn't stop there. As an SEO expert, I boost organic traffic using cutting-edge strategies, ensuring high search engine rankings. This means more visibility and targeted visitors for you. Join me in creating captivating digital experiences that drive growth and establish your brand as a digital leader. Let's bring your vision to life! Contact me today.</p>
          <div className='flex gap-2 mt-3 '>
          <motion.img whileTap={{rotate : 180}} whileHover={{scale : 1.2 , boxShadow: "0 0 6px rgba(255, 255, 255, 0.9)"}} src={react} alt="react" className='glow w-[30px] h-[30px] object-contain p-[3px]' loading='lazy'/>
          <motion.img whileTap={{rotate : 180}} whileHover={{scale : 1.2 , boxShadow: "0 0 6px rgba(255, 255, 255, 0.9)"}} src={redux} alt="redux" className='glow w-[30px] h-[30px] object-contain p-[3px]'/>
          <motion.img whileTap={{rotate : 180}} whileHover={{scale : 1.2 , boxShadow: "0 0 6px rgba(255, 255, 255, 0.9)"}} src={node} alt="node" className='glow w-[30px] h-[30px] object-contain p-[3px]' loading='lazy'/>
          <motion.img whileTap={{rotate : 180}} whileHover={{scale : 1.2 , boxShadow: "0 0 6px rgba(255, 255, 255, 0.9)"}} src={tailwind} alt="tailwind" className='glow w-[30px] h-[30px] object-contain p-[3px]' loading='lazy'/>
          <motion.img whileTap={{rotate : 180}} whileHover={{scale : 1.2 , boxShadow: "0 0 6px rgba(255, 255, 255, 0.9)"}} src={js} alt="js" className='glow w-[30px] h-[30px] object-contain p-[3px]' loading='lazy'/>
          <motion.img whileTap={{rotate : 180}} whileHover={{scale : 1.2 , boxShadow: "0 0 6px rgba(255, 255, 255, 0.9)"}} src={css} alt="css" className='glow w-[30px] h-[30px] object-contain p-[3px]' loading='lazy'/>
          <motion.img whileTap={{rotate : 180}} whileHover={{scale : 1.2 , boxShadow: "0 0 6px rgba(255, 255, 255, 0.9)"}} src={html} alt="html" className='glow w-[30px] h-[30px] object-contain p-[3px]' loading='lazy'/>
          </div>
        </div>

      </div>

      {/* Right Div */}
      <div className='md:w-[40%] flex flex-col w-full mt-5 md:mt-0 justify-center items-center'>
        <div className='rounded-full w-full flex justify-center'>
          <img src={dp} alt="" className='rounded-full w-full border-solid border-2 border-primary max-w-[500px]' loading='lazy'/>
        </div>
        <Socials/>
        
      </div>


    </div>
  );
};

export default Portfolio;
