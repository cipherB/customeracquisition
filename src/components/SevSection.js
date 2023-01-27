import React from 'react';
import Desktop from '../assets/desktopIllustrate.png';

const SevSection = () => {
  return (
    <div className='bg-white' >
      <div className='pt-20 pb-[120px] border-b border-background' >
        <div className=' mb-[60px]' >
          <h2 className="text-[45px] text-[#333] font-black text-center mb-5">
            Create a machine learning engine in<br/> minutes... 
            <em className="italic">welcome to your launchpad</em>
          </h2>
          <p className="text-[#6b7c93] text-lg text-center">
            Part of our demo process is walking you through a real scenario:&nbsp;
            <strong>your business +<br/> iiintent.io.</strong> Concepts are useful, but 
            <strong>practical application</strong> is what drives results.<br/> 
            Let us show you how to best leverage our technology for rapid success.
          </p>
        </div>
        <div className='pl-10 grid grid-cols-2 items-center' >
          <div>
            <img src={Desktop} alt="desktop" className='w-[620px] h-[439.16px]' />
          </div>
          <div>
            <p class="mb-2.5 text-[#161338] font-bold">UNLOCK&nbsp;YOUR&nbsp;HIDDEN&nbsp;REVENUE</p>
            <h2 class="text-[#333] text-4xl font-black mb-[15px]">
              Customize each element<br/> of 
              <span class="text-palette4">iiintent.io</span> to match<br/> your needs.
            </h2>
            <p class="text-[#6b7c93] text-lg">
              Plus, for demo members who sign up, we have two<br/> 
              exclusive launch bonuses not available to anyone else...<br/>
            </p>
          </div>
        </div>
      </div>
      <div className='py-[100px]' >
        <p className="text-background text-center font-bold text-lg">SEE IT FIRST-HAND</p>
        <h2 className="font-extrabold text-[#333] text-center text-4xl mb-9">
          Schedule your free custom demo
        </h2>
        <div className='flex justify-center items-center gap-x-[120px]' >
          <button
            className='text-background font-extrabold px-6 py-3 bg-palette1 rounded 
            shadow-xl border-none'
          >
            Free custom demo
          </button>
          <button
            className='text-background font-extrabold px-6 py-3 bg-palette2 rounded 
            shadow-xl border-none'
          >
            On-demand demo
          </button>
        </div>
      </div>
    </div>
  )
}

export default SevSection