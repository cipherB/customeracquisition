import React from 'react';
import Desktop from '../assets/desktopIllustrate.png';
import InViewAnimateRight from './InViewAnimateRight';
import useScreenSize from './ScreenSize';

const FifthSection = () => {
  const { width } = useScreenSize();
  return (
    <div 
      className='flex px-0 md:pr-0 md:pl-16 md:justify-between items-center flex-col-reverse
      md:flex-row bg-background py-[120px] md:py-auto overflow-x-hidden' 
    >
      <div className='md:w-[486.56px]' >
        <h2 
          className='font-extrabold text-[#f8faff] text-center text-[32px] md:text-left
          md:text-5xl mb-4' 
        >
          The First Ever <br/><span className=' text-palette4' >Data Playground</span>
        </h2>
        <p class="mb-6 text-center md:text-left">
          Built by growth professionals, for growth{width>700&&<br />}
           professionals. iiintent.io is 
          not a product. It is an {width>700&&<br />}
          infinitely expandable, member-driven {width>700&&<br />}experimentation 
          hub for the next level in {width>700&&<br />}business progression. 
        </p>
        <div className='flex md:block justify-center' >
          <button
            className='bg-background border border-palette1 rounded-sm px-8 py-2'
          >
            Go Play
          </button>
        </div>
      </div>
      <InViewAnimateRight>
        <img src={Desktop} alt="desktop" className='w-[310px] 
        md:w-[1000px] h-[228.56px] md:h-[662.4px]' />
      </InViewAnimateRight>
    </div>
  )
}

export default FifthSection