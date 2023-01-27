import React from 'react';
import Desktop from '../assets/desktopIllustrate.png';

const FifthSection = () => {
  return (
    <div className='flex pl-16 justify-between items-center' >
      <div className='w-[486.56px]' >
        <h2 className='font-extrabold text-[#f8faff] text-5xl mb-4' >
          The First Ever <br/><span className=' text-palette4' >Data Playground</span>
        </h2>
        <p class="mb-6">
          Built by growth professionals, for growth<br /> professionals. iiintent.io is 
          not a product. It is an <br />infinitely expandable, member-driven <br />experimentation 
          hub for the next level in <br />business progression. 
        </p>
        <button
          className='bg-background border border-palette1 rounded-sm px-8 py-2'
        >
          Go Play
        </button>
      </div>
      <img src={Desktop} alt="desktop" className='w-[1000px] h-[662.4px]' />
    </div>
  )
}

export default FifthSection