import React from 'react';
import Search from '../assets/search.png';

const SixthSection = () => {
  return (
    <div className='bg-palette1 pt-20 pb-[100px] flex justify-center' >
      <div>
        <div className='flex justify-center' >
          <h2 className='text-center mb-20 bg-background font-black w-[421.36px] text-6xl' >
            How it works
          </h2>
        </div>
        <div className='flex items-center justify-center gap-16 mb-10'>
          <div className='flex flex-col items-center gap-1.5' >
            <div 
              className='flex justify-center items-center bg-background w-[50px] 
              h-[50px] rounded-full shadow-xl' 
            >
              <p className='font-bold text-palette3 text-xl' >1</p>
            </div>
            <div className='w-[148.66px] bg-background' >
              <p className='text-center text-[30px] font-extrabold' >Step one</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-1.5 opacity-50' >
            <div 
              className='flex justify-center items-center bg-background w-[50px] 
              h-[50px] rounded-full shadow-xl' 
            >
              <p className='font-bold text-palette3 text-xl' >2</p>
            </div>
            <div className='w-[148.66px] bg-background' >
              <p className='text-center text-[30px] font-extrabold' >Step two</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-1.5 opacity-50' >
            <div 
              className='flex justify-center items-center bg-background w-[50px] 
              h-[50px] rounded-full shadow-xl' 
            >
              <p className='font-bold text-palette3 text-xl' >3</p>
            </div>
            <div className='w-[148.66px] bg-background' >
              <p className='text-center text-[30px] font-extrabold' >Step three</p>
            </div>
          </div>
        </div>
        <div 
          className='w-[1170px] h-[563.55px] rounded-xl search-contain grid grid-cols-2
          py-10 px-20' 
        >
          <div>
            <h2 className="font-bold text-5xl">
              <span className="text-palette2">10 minute set-up:</span>
              <br />Identify your industry.
            </h2>
            <p className="mt-4 font-medium">
              You have a product. That product has an industry. That industry has an audience. 
              <br/><br/>Stop relying on manual targeting methods and let machine learning take-over.
              <br/><br/>
              Within 10 minutes of creating your free account, we guide you on providing a simple list 
              of specific 
              keywords and terms associated with your product.
              <br/><br/>Click "submit campaign" and your job is done.</p>
          </div>
          <div>
            <img src={Search} alt="search" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SixthSection