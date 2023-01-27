import React from 'react';
import Desktop from '../assets/desktopIllustrate.png';
import Mobile from '../assets/mobileIllustrate.png';

const SecSection = () => {
  return (
    <div className='relative px-16 flex justify-center ' >
      <div>
        <div className='' >
          <img src={Desktop} alt="desktop" className='w-[979px] h-[694px]' />
        </div>
        <div className='absolute right-16 z-10 top-24' >
          <img src={Mobile} alt="mobile" className='w-[269px] h-[623px]' />
        </div>
        <h2 className='mt-[103px] text-[#747474] text-center text-[34px] mb-[51px] 
        font-extrabold' >
          Machine Learning. For Marketers.
        </h2>
      </div>
    </div>
  )
}

export default SecSection