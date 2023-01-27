import React from 'react';
import Desktop from '../assets/desktopIllustrate.png';
import Lightning from '../assets/lightning.png';
import InViewAnimateGrow from './InViewAnimateGrow';
import useScreenSize from './ScreenSize';

const EightSection = () => {
  const { width } = useScreenSize();
  return (
    <div className='bg-background' >
      <div className=' my-[72px] md:mt-36 md:mb-[60px] px-3 md:px-0' >
        <div className='flex justify-center' >
          <img src={Desktop} alt="desktop" className='md:w-[1152px] 
          md:h-[648.88px] w-full h-[233.44px]' />
        </div>
        <div className='mt-[60px] flex items-center flex-col gap-y-10' >
          <h2 className={`${width>700?"eight-title":"eight-title-mob"}`} >This could be us.</h2>
          <button
            className='font-bold bg-palette1 text-background py-3 rounded px-10 
            w-4/5 md:w-auto'
          >
            LET'S TALK
          </button>
        </div>
      </div>
      <div className='md:mx-[103px] mx-4 pt-5 pb-[60px]' >
        <div className='mb-20' >
          <h2 className={`text-center ${width>700?"eight-sec-title":"eight-sec-title"} mb-3`} >
            THE IINTENT MEMBERS
          </h2>
          <h2 className="mb-4 text-center font-black text-lg md:text-5xl">
            The best thing about machine{width>700&&<br/>} learning: 
            <span class="text-[#aaa]">it keeps getting better</span>
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6'>
          <div>
            <InViewAnimateGrow>
              <div className='team' >
                <img src={Lightning} alt="lightning" className='w-12 h-12' />
                <div>
                  <p className='py-1 font-bold text-sm' >Jim M, Red Earth</p>
                  <p className='text-[#858585]' >
                    “I can’t believe how much time we were wasting before to get a 
                    pipeline lead. This product is well worth its cost.”
                  </p>
                </div>
              </div>
            </InViewAnimateGrow>
            <InViewAnimateGrow>
              <div className='team' >
                <img src={Lightning} alt="lightning" className='w-12 h-12' />
                <div>
                  <p className='py-1 font-bold text-sm' >Jim M, Red Earth</p>
                  <p className='text-[#858585]' >
                    “I can’t believe how much time we were wasting before.”
                  </p>
                </div>
              </div>
            </InViewAnimateGrow>
          </div>
          <div>
            <InViewAnimateGrow>
              <div className='team' >
                <img src={Lightning} alt="lightning" className='w-12 h-12' />
                <div>
                  <p className='py-1 font-bold text-sm' >Jim M, Red Earth</p>
                  <p className='text-[#858585]' >
                    “I can’t believe how much time we were wasting before to get a 
                    pipeline lead. This product is well worth its cost.
                    how much time we were wasting before to get a 
                    pipeline lead. This product is well worth its cost.
                    how much time we were wasting before to get a 
                    pipeline lead. This product is well worth its cost.”
                  </p>
                </div>
              </div>
            </InViewAnimateGrow>
            <InViewAnimateGrow>
              <div className='team' >
                <img src={Lightning} alt="lightning" className='w-12 h-12' />
                <div>
                  <p className='py-1 font-bold text-sm' >Jim M, Red Earth</p>
                  <p className='text-[#858585]' >
                    “I can’t believe how much time we were wasting before to get a 
                    pipeline lead. This product is well worth its cost.”
                  </p>
                </div>
              </div>
            </InViewAnimateGrow>
          </div>
          <div>
            <InViewAnimateGrow>
              <div className='team' >
                <img src={Lightning} alt="lightning" className='w-12 h-12' />
                <div>
                  <p className='py-1 font-bold text-sm' >Jim M, Red Earth</p>
                  <p className='text-[#858585]' >
                    “I can’t believe how much time we were wasting before to get a 
                    pipeline lead. This product is well worth its cost.”
                  </p>
                </div>
              </div>
            </InViewAnimateGrow>
            <InViewAnimateGrow>
              <div className='team' >
                <img src={Lightning} alt="lightning" className='w-12 h-12' />
                <div>
                  <p className='py-1 font-bold text-sm' >Jim M, Red Earth</p>
                  <p className='text-[#858585]' >
                    “I can’t believe how much time we were wasting before to get a 
                    pipeline lead. This product is well worth its cost.”
                  </p>
                </div>
              </div>
            </InViewAnimateGrow>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default EightSection