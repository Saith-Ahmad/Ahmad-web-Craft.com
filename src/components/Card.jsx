import React from 'react';
import contact from '../assets/contact.png'
import './card.css'; // Import your CSS file
import Socials from './Socials';

const Card = ( { icon, title, description } ) => {
    return (
        <div className="flip-card mt-5 w-full sm:w-1/2 md:w-1/3 min:h-[400px] h-[450px] overflow-hidden">
            <div className="flip-card-inner">
                <div className="flip-card-front flex flex-col justify-center items-center p-2">
                    <img src={icon} alt={title} className='w-[150px] h-[150px]' loading='lazy'/>
                    <h3 className='text-2xl sm:text-3xl font-poppins font-bold text-white mt-2'>{title}</h3>
                    <p className='text-secondary text-md font-poppins mt-2'>{description}</p>
                </div>
                <div className="flip-card-back px-2 py-5 flex flex-col justify-between items-center">
                        <h5 className='text-2xl font-poppins underline'>Lets Connect</h5>
                        <img src={contact} alt="contact" className='w-[150px] h-[150px] object-contain' loading='lazy'/>
                   <Socials/>
                </div>
            </div>
        </div>
    );
};

export default Card;
