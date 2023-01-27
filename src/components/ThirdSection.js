import React from 'react';
import IframeImg from '../assets/iframeImg.PNG';
import Demo from '../assets/demo.png';
import Play from '../assets/play.svg';

const ThirdSection = () => {
  return (
    <div className='third-section min-h-screen pt-20 pb-[120px] flex justify-center' >
      <div>
        <h2 className='third-title text-center' >Product & Tech Demo Hub</h2>
        <div className='flex justify-center' >
          <img src={IframeImg} alt="iframe" className='w-[550px] h-[800px] mb-[60px]' />
        </div>
        <div className='w-full flex justify-center' >
          <button className='bg-[#444] text-sm rounded-[50px] p-2 flex gap-2 mb-5' >
            <p className='font-bold text-palette1' >A LOOK UNDER THE HOOD</p>
          </button>
        </div>
        <h2 className='text-center text-5xl font-extrabold mb-[15px]' >
          DEMO SERIES: Introduction
        </h2>
        <div className='w-[800px] h-[447.5px] relative'>
          <img src={Demo} alt="vid" className='w-full h-full' />
          <img src={Play} alt="play" className='h-20 w-20 absolute top-[40%] left-[50%]' />
        </div>
        <div className='flex justify-center' >
          <button className='bg-palette1 mt-10 text-background font-bold px-6 py-2 rounded-sm' >
            WATCH FULL VIDEO
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThirdSection