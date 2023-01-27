import React from 'react'
import useScreenSize from './ScreenSize'

const LandSection = () => {
  const { width } = useScreenSize();
  return (
    <div className=' w-full px-4 md:px-0' >
      <div className='mb-5 md:mb-[49px] w-full' >
        <h1 className={`${width>700?"landing-name":"landing-name-mob"} text-center `}>
          Customer Acquisition
        </h1>
        <p className='text-center text-white' >
          The place 'Zuck's Army' sends their Platinum Ad Partners for insight and
          <span className='font-semibold' > iintent</span>
        </p>
      </div>
      <form className='w-full flex flex-col md:flex-row gap-y-[15px] gap-x-4 justify-center' >
        <input 
          type="email"
          name="email"
          placeholder="Your work email address"
          className="text-white placeholder:text-white w-full md:w-[431px]  pl-5
          h-[55px] bg-gray-800 rounded-sm"
        />
        <button
          className='bg-palette1 font-semibold w-full md:w-auto h-[55px] px-3 
          rounded-sm text-background'
        >
          Book a demo
        </button>
      </form>
      <p className='text-center mt-4' >
        <a href="#h" className='text-palette1 underline' >
          Or go to the on-demand demos
        </a>
      </p>
    </div>
  )
}

export default LandSection