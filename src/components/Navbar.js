import React, { useState } from 'react';
import Logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from "framer-motion";

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
            className='bg-transparent rounded-md px-4 py-2 font-semibold
            cursor-pointer border border-palette1 text-palette1' 
            >
              Login
          </button>
          <button 
            className='bg-palette1 border-none rounded-md px-4 py-2 text-background font-semibold
            cursor-pointer ' 
            >
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
          className='md:hidden absolute top-0 mt-[48px] left-0 bg-white h-[80vh] 
          w-full list-none px-8 pt-5' 
          initial={{ opacity: 0 }}
          animate={openMenu ? { opacity: 1 } : { opacity: 0 }}
          exit={{ opacity: 0}}
          transition={{ duration: 0.5 }}
        >
          <li className='py-3' >
            <a href="#services" 
              onClick={()=>setOpenMenu(false)}
            >Services</a>
          </li>
          <li className='py-3' >
            <a href="#about" 
              onClick={()=>setOpenMenu(false)}
            >About Us</a>
          </li>
          <li className='py-3' >
            <a href="#offer" 
              onClick={()=>setOpenMenu(false)}
            >What we offer</a>
          </li>
          <li className='py-3' >
            <a href="#faq" 
              onClick={()=>setOpenMenu(false)}
            >FAQ</a>
          </li>
          <li className='py-3' >
            <a href="#contact" 
              onClick={()=>setOpenMenu(false)}
            >Contact Us</a>
          </li>
        </motion.ul>
      </div>
    </div>
  )
}

export default Navbar