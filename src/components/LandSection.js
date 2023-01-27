import React from 'react'

const LandSection = () => {
  return (
    <div className=' w-full' >
      <div className='mb-[49px] w-full' >
        <h1 className='landing-name text-center' >Customer Acquisition</h1>
        <p className='text-center text-white' >
          The place 'Zuck's Army' sends their Platinum Ad Partners for insight and
          <span className='font-semibold' > iintent</span>
        </p>
      </div>
      <form className='w-full flex gap-x-4 justify-center' >
        <input 
          type="email"
          name="email"
          placeholder="Your work email address"
          className="text-white placeholder:text-white w-[431px]  pl-5
          h-[55px] bg-gray-800 rounded-sm"
        />
        <button
          className='bg-palette1 font-semibold h-[55px] px-3 rounded-sm text-background'
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