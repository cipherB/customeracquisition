import React from 'react';
import Desktop from '../assets/desktopIllustrate.png';
import Mobile from '../assets/mobileIllustrate.png';
import InViewAnimateTop from './InViewAnimateUp';

const SecSection = () => {
  return (
    <div className='relative px-4 md:px-16 flex justify-center ' >
      <div>
        <div className='' >
          <img src={Desktop} alt="desktop" className='w-full h-[243.1px] md:w-[979px] md:h-[694px]' />
        </div>
        <div className='absolute right-0 top-10 md:right-16 z-10 md:top-24' >
          <img src={Mobile} alt="mobile" className='w-[96.21px] h-[214.11px] 
          md:w-[269px] md:h-[623px]' />
        </div>
        <InViewAnimateTop>
          <h2 className='mt-[50px] md:mt-[103px] text-[#747474] text-center text-[34px] md:mb-[51px] 
          font-extrabold mb-[30px]' >
            Machine Learning. For Marketers.
          </h2>
        </InViewAnimateTop>
      </div>
    </div>
  )
}

export default SecSection