import React, { useState } from 'react';
import Logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from "framer-motion";
import { BsLightningFill } from "react-icons/bs";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  
  return (
    <div className='w-full h-[48px] px-5 md:h-[101px] md:px-16 flex justify-between items-center 
    bg-background' >
        <a href="#home">
          <img src={Logo} alt="logo" className='cursor-pointer 
          w-[166.73px] h-[15px] md:w-[140px] md:h-[20px] md:ml-0' />
        </a>
      <ul className='md:flex list-none gap-x-8 items-center hidden' >
        <li >
          <a className='cursor-pointer font-bold text-palette1' href="#services" >Product Tour</a>
        </li>
        <li >
          <a className='cursor-pointer font-bold hover:text-primary' href="#about" >Case Studies</a>
        </li>
        <li >
          <a className='cursor-pointer font-bold hover:text-primary' href="#faq" >FAQ</a>
        </li>
        <li className='flex items-center gap-x-2' >
          <button 
            className='bg-transparent rounded-md px-6 py-3 font-semibold
            cursor-pointer border border-palette1 text-palette1' 
            >
              Login
          </button>
          <button 
            className='bg-palette1 border-none rounded-md px-6 py-3 text-background font-semibold
            cursor-pointer flex items-center gap-x-2 ' 
            >
              <BsLightningFill />
              Get Started
          </button>
        </li>
      </ul>
      <div className='block md:hidden' >
        {
          !openMenu ? <AiOutlineMenu 
            className='text-palette1 text-3xl font-bold' 
            onClick={()=>setOpenMenu(true)}
          /> :
          <motion.div
            initial={{rotate:0}}
            animate={{rotate:360}}
          >
            <AiOutlineClose 
              className={`text-palette1 text-3xl font-bold`}
              onClick={()=>setOpenMenu(false)}
            />
          </motion.div>
        }
        <motion.ul 
          className='md:hidden absolute top-0 mt-[48px] left-0 bg-[#1a1a1a] h-[20vh] 
          w-full list-none px-8 pt-5' 
          initial={{ opacity: 0 }}
          animate={openMenu ? { opacity: 1 } : { opacity: 0 }}
          exit={{ opacity: 0}}
          transition={{ duration: 0.5 }}
        >
          <li className='text-[#f8faff] font-bold py-3' >
            <a href="#services" 
              onClick={()=>setOpenMenu(false)}
            >Product Tour</a>
          </li>
          <li className='text-[#f8faff] font-bold py-3' >
            <a href="#about" 
              onClick={()=>setOpenMenu(false)}
            >Case Studies</a>
          </li>
          <li className='text-[#f8faff] font-bold py-3' >
            <a href="#offer" 
              onClick={()=>setOpenMenu(false)}
            >FAQs</a>
          </li>
        </motion.ul>
      </div>
    </div>
  )
}

export default Navbar