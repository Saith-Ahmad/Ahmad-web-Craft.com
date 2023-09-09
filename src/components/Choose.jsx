import React from 'react'
import { choose } from '../contents/contents';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Choose = () => {
    return (
        <div className='relative'>
            <div className='choose-overlay opacity-20'></div>
            <div className='mx-auto container px-5 md:px-10 mt-10 h-[450px] overflow-hidden overflow-y-visible pt-10'>
            <h2 className='text-3xl md:text-4xl font-inter font-black'>Why Choose Us?</h2>
            <div className='h-[4px] w-[100px] bg-primary ms-3  mb-4'></div>
            {
                choose.map((item, index) => (
                    <Accordion key={index} sx={{background: "rgba(255, 255, 255, 0.1)", backdropFilter:"blur(10px)"}}>
                        <AccordionSummary
                            sx={{color:"white"}}
                            expandIcon={<ExpandMoreIcon  sx={{color:'#019EBF'}}/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{fontSize:"18px", fontFamily:"poppins"}}>{item.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className='text-secondary'>
                            <Typography sx={{fontSize:'16px', fontFamily:"poppins"}}>
                               {item.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
        </div>
    )
}

export default Choose
