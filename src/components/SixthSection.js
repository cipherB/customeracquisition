import React from 'react';
import Search from '../assets/search.png';

const SixthSection = () => {
  return (
    <div className='bg-palette1 pt-20 pb-[140px] md:pb-[100px] flex justify-center px-4 md:px-0' >
      <div>
        <div className='flex justify-center' >
          <h2 
            className='text-center md:mb-20 bg-background font-black 
            md:w-[421.36px] text-[45px] md:text-6xl w-auto mb-10' 
          >
            How it works
          </h2>
        </div>
        <div className='flex items-center justify-between md:justify-center gap-4 md:gap-16 mb-10'>
          <div className='flex flex-col items-center gap-1.5' >
            <div 
              className='flex justify-center items-center bg-background w-[50px] 
              h-[50px] rounded-full shadow-xl' 
            >
              <p className='font-bold text-palette3 md:text-xl text-[17px]' >1</p>
            </div>
            <div className='w-auto md:w-[148.66px] bg-background' >
              <p className='text-center md:text-[30px] font-extrabold' >Step one</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-1.5 opacity-50' >
            <div 
              className='flex justify-center items-center bg-background w-[50px] 
              h-[50px] rounded-full shadow-xl' 
            >
              <p className='font-bold text-palette3 md:text-xl text-[17px]' >2</p>
            </div>
            <div className='w-auto md:w-[148.66px] bg-background' >
              <p className='text-center md:text-[30px] font-extrabold' >Step two</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-1.5 opacity-50' >
            <div 
              className='flex justify-center items-center bg-background w-[50px] 
              h-[50px] rounded-full shadow-xl' 
            >
              <p className='font-bold text-palette3 md:text-xl text-[17px]' >3</p>
            </div>
            <div className='w-auto md:w-[148.66px] bg-background' >
              <p className='text-center md:text-[30px] font-extrabold' >Step three</p>
            </div>
          </div>
        </div>
        <div 
          className='md:w-[1170px] md:h-[563.55px] rounded-xl search-contain md:grid md:grid-cols-2
          py-10 md:px-20 w-full px-[15px] flex flex-col h-auto' 
        >
          <div>
            <h2 className="font-bold text-[32px] md:text-5xl">
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