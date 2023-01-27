import React from 'react';
import Desktop from '../assets/desktopIllustrate.png';
import Lightning from '../assets/lightning.png';

const EightSection = () => {
  return (
    <div className='bg-background' >
      <div className=' mt-36 mb-[60px]' >
        <div className='flex justify-center' >
          <img src={Desktop} alt="desktop" className='w-[1152px] h-[648.88px]' />
        </div>
        <div className='mt-[60px] flex items-center flex-col gap-y-10' >
          <h2 className='eight-title' >This could be us.</h2>
          <button
            className='font-bold bg-palette1 text-background py-3 rounded px-10'
          >
            LET'S TALK
          </button>
        </div>
      </div>
      <div className='mx-[103px] pt-5 pb-[60px]' >
        <div className='mb-20' >
          <h2 className='text-center eight-sec-title mb-3' >THE IINTENT MEMBERS</h2>
          <h2 className="mb-4 text-center font-black text-5xl">
            The best thing about machine<br/> learning: 
            <span class="text-[#aaa]">it keeps getting better</span>
          </h2>
        </div>
        <div className='grid grid-cols-3 gap-x-6'>
          <div>
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
            <div className='team' >
              <img src={Lightning} alt="lightning" className='w-12 h-12' />
              <div>
                <p className='py-1 font-bold text-sm' >Jim M, Red Earth</p>
                <p className='text-[#858585]' >
                  “I can’t believe how much time we were wasting before.”
                </p>
              </div>
            </div>
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </div> 
      </div>
    </div>
  )
}

export default EightSection