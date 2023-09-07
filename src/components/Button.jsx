import React from 'react'
import { motion } from 'framer-motion'

const Button = ( {text} ) => {
  return (
    <motion.button whileHover={{scale:1.1}} className='mt-4 btn font-inter bg-primary hover:bg-hoverGreen' onClick={()=>console.log("button")}>
      {text}
    </motion.button>
  )
}

export default Button
