import React from 'react';
import { testimonials } from '../contents/contents';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2, // Show 2 slides on wider screens
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

  return (
   <div className='relative py-20'>
    <div className="clients-overlay opacity-20"></div>
     <div className='mx-auto container px-5 md:px-10 overflow-hidden h-[600px] md:h-[450px]'>
      <h2 className='text-3xl md:text-4xl font-inter font-black'>Happy Clients</h2>
      <div className='h-[4px] w-[100px] bg-primary ms-3 mt-1 mb-4'></div>

      <Slider {...settings}>
        {testimonials.map((item, index) => {
          const { client, clientImage, nationality, testimonial } = item;
          return (
            <div key={index} className="px-2">
              <div
                className="mt-2 w-full rounded-md min:h-[300px] h-[480px] md:h-[350px] overflow-hidden flex flex-col justify-between"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 0 12px rgba(0, 158, 191, 0.7)",
                }}
              >
                <div className='p-2'>
                  <FormatQuoteIcon className='text-primary' sx={{ fontSize: "48px" }} />
                  <p className='font-poppins text-secondary text-md'>{testimonial}</p>
                </div>
                <div className='bg-primary h-[100px] mt-10 relative wavy flex flex-col justify-center items-center'>
                  <img src={clientImage} alt="client" className='w-[60px] h-[60px] object-contain rounded-full absolute -top-10 left-[50%-60px]' />
                  <p className='text-xl font-bold font-poppins text-white '>{client}</p>
                  <p className='text-md font-semibold font-poppins text-green-900'>{nationality}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
   </div>
  );
}

export default Clients;


