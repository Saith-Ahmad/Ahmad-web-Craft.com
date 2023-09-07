
import React from 'react';
import Business_Growth from "../assets/business-grow.png";
import Button from './Button';
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.png"
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-center items-center md:px-10 min-h-[100vh] px-5 mt-5 md:mt-0'>
      <div className="overlay opacity-10 "></div>

      {/* Left Div */}
      <div className='w-full md:w-3/5'>
        <h1 className='font-inter font-black text-4xl sm:text-5xl'>Elevating Businesses Through Innovative Web Experiences</h1>
        <p className='text-xl text-secondary font-poppins  sm:leading-8 mt-2'>Empower your business through our innovative web development expertise. Our custom solutions are carefully designed to enhance user experiences and cultivate long-lasting customer relationships. Elevate your digital footprint, unlock avenues of growth, and attain tangible milestones in today's dynamic and competitive business environment.</p>
        <a href="#contact"><Button text="Elevate Your Brand"/></a>

        <div className='flex text-white mt-5 items-center flex-col md:flex-row'>
          <div className='flex'>
            <motion.img src={pic1} whileHover={{scale:0.8}} alt="sara" className='h-[50px] w-[50px] rounded-full border-solid border-2 border-primary '/>
            <motion.img src={pic2} whileHover={{scale:0.8}}  alt="john" className='h-[50px] w-[50px] rounded-full border-solid border-2 border-primary -ml-4'/>
            <motion.img src={pic3} whileHover={{scale:0.8}}  alt="Aron" className='h-[50px] w-[50px] rounded-full border-solid border-2 border-primary -ml-4'/>
            <motion.img src={pic4} whileHover={{scale:0.8}}  alt="Finch" className='h-[50px] w-[50px] rounded-full border-solid border-2 border-primary -ml-4'/>
          </div>
          <p className='text-md font-semibold md:w-[220px] leading-5 ms-2 text-center md:text-left font-poppins'>"Trusted by Businesses Across the World"</p>
        </div>
      </div>

      {/* Right Div */}
      <div className='w-full md:w-2/5  relative mt-10  md:mx-0 mb-[20%] sm:mb-0'>
        <img className='w-full h-full' src={Business_Growth} alt="Businesss-Growth" />
        <div className='glow-blue'></div>
        <div className='glow-red'></div>
      </div>
    </div>
    </>
  )
}

export default Hero;
