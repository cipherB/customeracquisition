import React from 'react'
import useScreenSize from './ScreenSize'

const LandSection = () => {
  const { width } = useScreenSize();
  return (
    <div className='w-full px-4 md:px-0 landing' >
      <div className='mb-5 md:mb-[49px] w-full' >
        {/* <h1 className={`${width>700?"landing-name":"landing-name-mob"} text-center `}>
          Customer Acquisition
        </h1> */}
        <div className={`${width>700?"landing-top":"landing-top-mob"} text-center `}>
          growth marketers: Meet iiintent
        </div>
        <h1 class="text-center text-[60px] md:text-[110px] font-black leading-[1em] mb-5">
          3X Your <br/>Revenue Growth.<br/>‍<span
            className={`landing-ex`}
          >Tomorrow.</span>
        </h1>
        <p className="text-center leading-[1.5em] font-semibold"><span className="text-span-28">
          <strong className="bold-text">
          20% of your audience brings 80% of your revenue</strong>
          {width>700&&<br/>}</span><span className="opacity-50 ">
            3% of that audience is ready to convert</span><span className="text-span-28"> 
          </span><span className="text-palette1"><em> today{width>700&&<br/>}
          </em>‍</span>With <span className={`landing-ex`}>iiintent</span>, 
          <span className="text-span-29"><em className="opacity-50">that 3% just became your 100%</em>
          </span><span className="text-span-11"><em>{width>700&&<br/>}</em></span>
        </p>
        {/* <p className='text-center text-white' >
          The place 'Zuck's Army' sends their Platinum Ad Partners for insight and
          <span className='font-semibold' > iintent</span>
        </p> */}
      </div>
      <form className='w-full flex flex-col md:flex-row gap-y-[15px] gap-x-4 justify-center items-center' >
        <input 
          type="email"
          name="email"
          placeholder="Email address"
          className="text-white placeholder:text-white w-full md:w-[431px]  pl-5
          h-[55px] bg-[#333] rounded-sm"
        />
        <button
          className='md:w-[350px] md:h-[55px] w-[270px] h-[42px] land-btn'
        >GET STARTED NOW</button>
      </form>
      {/* <p className='mt-4 text-center' >
        <a href="#h" className='underline text-palette1' >
          Or go to the on-demand demos
        </a>
      </p> */}
      {/* <div className='flex flex-col items-center justify-center w-full gap-4 mt-5 md:flex-row' >
        <button
          className='md:w-[350px] md:h-[55px] w-[270px] h-[42px] land-btn'
        >ENGINEER YOUR GROWTH</button>
        <button
          className='md:w-[149.76px] w-[250px] h-[55px] bg-transparent rounded-md font-bold border-[#bb5bb1]
          text-[#bb5bb1] border'
        >LEARN MORE</button>
      </div> */}
    </div>
  )
}

export default LandSection