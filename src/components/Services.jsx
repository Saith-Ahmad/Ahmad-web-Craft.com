import React from 'react'
import Card from './Card'
import { services } from '../contents/contents'

const Services = () => {
  return (
    <div className='relative'>
        <div className='flex flex-col mx-auto container px-5 md:px-5 md:mt-20 sm:mt-40 mt-[35rem] pt-5'  >
        <div className='service-overlay opacity-20'></div>
      <div className=''>
        <h2 className='text-3xl md:text-4xl font-inter text-white  font-black'>My Experties</h2>
        <div className='h-[4px] w-[100px] bg-primary ms-3'></div>
      </div>
      <div className='w-full flex flex-wrap'>
        {
          services.map((item, index)=>(
            <Card key={index} icon={item.icon} title={item.title} description={item.description} />
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Services
