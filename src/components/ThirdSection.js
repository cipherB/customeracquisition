import React from 'react';
import IframeImg from '../assets/iframeImg.PNG';
import Demo from '../assets/demo.png';
import Play from '../assets/play.svg';
import useScreenSize from './ScreenSize';

const ThirdSection = () => {
  const { width } = useScreenSize();
  return (
    <div 
      className='third-section min-h-screen pt-[100px] md:pt-20 pb-10 md:;pb-[120px] px-[9px]
      flex justify-center md:px-0' 
    >
      <div>
        <h2 className={`${width>700?"third-title":"third-title-mob"} text-center`} >
          Product & Tech Demo Hub
        </h2>
        <div className='flex justify-center px-2 md:px-0' >
          <img src={IframeImg} alt="iframe" className='w-[305.25px] md:w-[550px] h-[800px] mb-[60px]' />
        </div>
        <div className='w-full flex justify-center' >
          <button className='bg-[#444] text-sm rounded-[50px] p-2 flex gap-2 mb-5' >
            <p className='font-bold text-palette1' >A LOOK UNDER THE HOOD</p>
          </button>
        </div>
        <h2 className='text-center md:text-5xl font-extrabold mb-[15px] text-[22px]' >
          DEMO SERIES: Introduction
        </h2>
        <div className='px-2 md:px-0 w-full h-[198.79px] md:w-[800px] md:h-[447.5px] relative'>
          <img src={Demo} alt="vid" className='w-full h-full' />
          <img src={Play} alt="play" className='h-10 w-10 md:h-20 md:w-20 absolute 
          top-[40%] left-[50%]' />
        </div>
        <div className='flex justify-center' >
          <button 
            className='bg-palette1 w-4/5 md:w-auto mt-10 text-background 
            font-bold px-6 py-2 rounded-sm' 
          >
            WATCH FULL VIDEO
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThirdSection