import React from 'react';

const FourthSection = () => {
  return (
    <div className='fourth-section min-h-screen flex justify-center items-center' >
      <div className='flex gap-[30px]'>
        <div 
          className='bg-white w-[300px] gap-[60px] h-[400px] rounded-[10px] flex justify-center 
          items-center flex-col' 
        >
          <div className='w-[150px] h-[150px] rounded-full bg-white border-4
          border-palette3 flex justify-center items-center' >
            <div className='search bg-palette3 w-[125px] rounded-full h-[125px] cursor-pointer' ></div>
          </div>
          <p className='text-xl text-[#333]' >CASE STUDIES</p>
        </div>
        <div 
          className='bg-white w-[300px] gap-[60px] h-[400px] rounded-[10px] flex 
          justify-center items-center flex-col' 
        >
          <div className='w-[150px] h-[150px] rounded-full bg-white border-4
          border-palette2 flex justify-center items-center' >
            <div className='lightning bg-palette2 w-[125px] rounded-full h-[125px] cursor-pointer' ></div>
          </div>
          <p className='text-xl text-[#333]' >USE CASES</p>
        </div>
        <div 
          className='bg-white w-[300px] gap-[60px] h-[400px] rounded-[10px] flex 
          justify-center items-center flex-col' 
        >
          <div className='w-[150px] h-[150px] rounded-full bg-white border-4
          border-palette1 flex justify-center items-center' >
            <div className='rocket bg-palette1 w-[125px] rounded-full h-[125px] cursor-pointer' ></div>
          </div>
          <p className='text-xl text-[#333]' >FEATURES</p>
        </div>
      </div>
    </div>
  )
}

export default FourthSection