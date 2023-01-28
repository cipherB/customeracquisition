import React from 'react';
import Desktop from '../../assets/caseStudies.jpg';

const SectionThree = () => {
  return (
    <div className='px-4 py-8 bg-background md:px-20' >
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2' >
        <div className='w-full ' >
          <img src={Desktop} alt="desktop" className="md:h-[439.16px] h-[252.49px]" />
        </div>
        <div className='w-full ' >
          <img src={Desktop} alt="desktop" className="md:h-[439.16px] h-[252.49px]" />
        </div>
      </div>
    </div>
  )
}

export default SectionThree