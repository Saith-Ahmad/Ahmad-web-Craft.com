import{j as e}from"./index-d6fbb6b1.js";import{l as o}from"./logo-25964369.js";import{a as c,b as i}from"./contents-1db86d93.js";import{m as a}from"./motion-c139e7e1.js";const p=()=>{const l=new Date().getFullYear(),r=s=>{if(s==="blog")window.open("https://youtube.com","_blank");else{const t=document.getElementById(s);t&&t.scrollIntoView({behavior:"smooth"})}};return e.jsxs("div",{className:"bg-header-gradient py-2 mt-40 flex flex-col items-center gap-5",children:[e.jsxs("div",{className:"mx-auto container flex justify-between  items-center md:items-start flex-wrap pt-6",children:[e.jsx("div",{className:"w-full md:w-[30%] flex justify-center md:justify-start md:-mt-10 mt:0",children:e.jsx("img",{src:o,alt:"logo",className:"h-[200px] w-[200px] object-contain"})}),e.jsxs("div",{className:"flex justify-around w-full md:w-[70%]",children:[e.jsxs("div",{className:"flex flex-col font-poppins gap-1 justify-center items-start",children:[e.jsx("h5",{className:"font-bold text-lg",children:"Pages"}),c.map((s,t)=>e.jsx("div",{className:"flex flex-col cursor-pointer",children:e.jsx(a.a,{onClick:()=>r(s.id),whileHover:{scale:1.2},className:"hover:text-primary text-md",children:s.name})},t))]}),e.jsxs("div",{className:"flex flex-col font-poppins gap-1 justify-center items-start",children:[e.jsx("h5",{className:"font-bold text-lg",children:"Contacts"}),i.map((s,t)=>e.jsx("div",{className:"flex flex-col",children:e.jsx(a.a,{href:s.url,target:"_blank",whileHover:{scale:1.1},className:"hover:text-primary text-md",children:s.name})},t))]})]})]}),e.jsx("div",{className:"font-poppins text-md text-primary border-t-[1px] border-[#ffffff3b] w-full text-center py-1",children:e.jsxs(a.p,{whileHover:{scale:1.2},className:"cursor-pointer",children:[e.jsx("span",{children:"©"})," ",l,"www.ahmadwebcraft.com"]})})]})};export{p as default};