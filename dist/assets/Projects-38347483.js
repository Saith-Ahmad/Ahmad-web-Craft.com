import{j as e}from"./index-7d993df3.js";import{S as i}from"./slider-f78f6296.js";import{p as r}from"./contents-ea54edae.js";import{m as n}from"./motion-6ce43759.js";const m=()=>{const t={dots:!0,infinite:!0,speed:700,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3500,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]},o=s=>{window.open(s,"_blank")};return e.jsxs("div",{className:"mx-auto container px-5 md:px-10 overflow-hidden h-[500px] md:h-[500px] mt-20",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-inter font-black",children:"Recent Projects"}),e.jsx("div",{className:"h-[4px] w-[100px] bg-primary ms-3 mt-1 mb-4"}),e.jsx(i,{...t,children:r.map((s,l)=>e.jsx("div",{className:"px-2",children:e.jsxs("div",{className:"mt-2 w-full md:w-[350px] h-[350px] rounded-md  overflow-hidden flex flex-col justify-between",style:{boxShadow:"0 0 10px rgba(0, 158, 191, 0.7)"},children:[e.jsx("div",{className:"overflow-hidden",children:e.jsx("img",{src:s.icon,alt:"youtube",className:"w-full h-[250px] object-cover",loading:"lazy"})}),e.jsxs("div",{className:"bg-primary h-[100px] flex flex-col items-center justify-center",children:[e.jsx("h4",{className:"text-2xl font-poppins text-center",children:s.title}),e.jsx(n.button,{whileHover:{scale:1.1},className:"text-green-900 font-poppins text-sm hover:font-bold",onClick:()=>o(s.link),children:"Checkout"})]})]})},l))})]})};export{m as default};