import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion } from 'framer-motion';

const Socials = () => {
  return (
    <div>
      <div className='flex justify-center mt-5 gap-2'>
          <motion.a href='https://www.facebook.com/profile.php?id=100079267406205' target='_blank'  whileHover={{scale:1.2 , boxShadow:"0 0 20px rgba(0, 158, 191, 1.0)"}} className='text-primary '><FacebookIcon sx={{width:'30px', height:'30px'}} className='icon-shadow'/></motion.a>
          <motion.a href='https://www.instagram.com/saith_ahmad_13/' target='_blank'  whileHover={{scale:1.2 , boxShadow:"0 0 20px rgba(0, 158, 191, 1.0)"}} className='text-primary '><InstagramIcon sx={{width:'30px', height:'30px'}} className='icon-shadow'/></motion.a>
          <motion.a href='https://www.linkedin.com/in/muhammad-ahmad-578954230/' target='_blank'  whileHover={{scale:1.2 , boxShadow:"0 0 20px rgba(0, 158, 191, 1.0)"}} className='text-primary '><LinkedInIcon sx={{width:'30px', height:'30px'}} className='icon-shadow'/></motion.a>
          <motion.a href='https://wa.link/uq0e7s' target='_blank'  whileHover={{scale:1.2 , boxShadow:"0 0 20px rgba(0, 158, 191, 1.0)"}} className='text-primary '><WhatsAppIcon sx={{width:'30px', height:'30px'}} className='icon-shadow'/></motion.a>
          <motion.a href='mailto:ahmadwebcrafts@gmail.com' target='_blank'  whileHover={{scale:1.2 , boxShadow:"0 0 20px rgba(0, 158, 191, 1.0)"}} className='text-primary '><MailIcon sx={{width:'30px', height:'30px'}} className='icon-shadow'/></motion.a>
          <motion.a href='https://twitter.com/SaithAh70998774' target='_blank'  whileHover={{scale:1.2 , boxShadow:"0 0 20px rgba(0, 158, 191, 1.0)"}} className='text-primary '><TwitterIcon sx={{width:'30px', height:'30px'}} className='icon-shadow'/></motion.a>
        </div>
    </div>
  )
}

export default Socials
