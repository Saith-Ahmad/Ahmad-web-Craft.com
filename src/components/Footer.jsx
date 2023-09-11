import React from 'react'
import logo from "../assets/logo.png"
import { pages, contacts } from '../contents/contents'
import { motion } from 'framer-motion'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    const handleNavLinkClick = (id) => {
        if (id === 'blog') {
          window.open('https://blogs.ahmadwebcraft.com/', '_blank');
        } else {
          const section = document.getElementById(id);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    
  return (
    <div className='bg-header-gradient py-2 mt-40 flex flex-col items-center gap-5'>
        <div className='mx-auto container flex justify-between  items-center md:items-start flex-wrap pt-6'>

        <div className='w-full md:w-[30%] flex justify-center md:justify-start md:-mt-10 mt:0'>
            <img src={logo} alt="logo" className='h-[200px] w-[200px] object-contain'/>
        </div>

        <div className='flex justify-around w-full md:w-[70%]'>
        <div className='flex flex-col font-poppins gap-1 justify-center items-start'>
            <h5 className='font-bold text-lg'>Pages</h5>
            {
                pages.map((item, index)=>(
                    <div key={index} className='flex flex-col cursor-pointer'>
                       <motion.a onClick={()=>handleNavLinkClick(item.id)} whileHover={{scale:1.2}} className='hover:text-primary text-md'>{item.name}</motion.a>
                    </div>
                ))
            }
        </div>

        <div className='flex flex-col font-poppins gap-1 justify-center items-start'>
            <h5 className='font-bold text-lg'>Contacts</h5>
            {
                contacts.map((item, index)=>(
                    <div key={index} className='flex flex-col'>
                        <motion.a href={item.url} target='_blank' whileHover={{scale:1.1}} className='hover:text-primary text-md'>{item.name}</motion.a>
                    </div>
                ))
            }
        </div>
        </div>
    </div>
    <div className='font-poppins text-md text-primary border-t-[1px] border-[#ffffff3b] w-full text-center py-1'>
        <motion.p whileHover={{scale:1.2}} className='cursor-pointer'><span>&copy;</span> {year}www.ahmadwebcraft.com</motion.p>
    </div>
    </div>
  )
}

export default Footer
