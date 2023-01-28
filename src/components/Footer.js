import React from 'react';
import Logo from '../assets/CA.png';
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='px-2 pt-16 border-t border-black bg-background md:px-8' >
      <div className='md:mx-[88px]'>
        <div className='grid grid-cols-1 md:grid-cols-4' >
          <div className='px-5 pb-16' >
            <img src={Logo} alt="logo" className='w-[260px] h-[72.4px] mb-6' />
            <p class="text-sm text-[#d1d1d1]">
              <strong>Invent. Innovate. Improve. 
              </strong>The <strong>iiintent</strong> code that drives our products, 
              content, community and<br /> growth.
            </p>
            <div className='flex items-center pt-4 gap-x-3' >
              <BsFacebook className='text-xl cursor-pointer text-palette3' />
              <BsInstagram className='text-xl cursor-pointer text-palette3' />
              <BsLinkedin className='text-xl cursor-pointer text-palette3' />
              <BsLinkedin className='text-xl cursor-pointer text-palette3' />
              <BsYoutube className='text-xl cursor-pointer text-palette3' />
            </div>
          </div>
          <div className='px-5 pb-16' >
            <h4 class="mb-5 font-extrabold text-palette3 text-xl">Product</h4>
            <ul className='flex flex-col list-none gap-y-3' >
              <li className='text-[#f6f6f6] text-sm cursor-pointer' >Video FAQs</li>
              <li className='text-[#f6f6f6] text-sm cursor-pointer' >Custom Demo</li>
              <li className='text-[#f6f6f6] text-sm cursor-pointer' >On-Demand Demo</li>
            </ul>
          </div>
          <div className='px-5 pb-16' >
            <h4 class="mb-5 font-extrabold text-palette3 text-xl">Content</h4>
            <ul className='flex flex-col list-none gap-y-3' >
              <li className='text-[#f6f6f6] text-sm cursor-pointer' >Case Studios</li>
            </ul>
          </div>
        </div>
        <div className='mt-4 mx-[15px] flex gap-x-6 py-8 flex-wrap' >
          <div className='text-[#777] text-[9px] py-0.5 border-r border-white md:pr-6 pr-2' >
            Powered by <span className="uppercase text-palette2"> Customer Acquisition</span>
          </div>
          <div className='text-[#777] text-[9px] py-0.5 border-r border-white md:pr-6 pr-2' >
            Crafted by <span className="uppercase text-palette2"> Customer Acquisition Labs</span>
          </div>
          <div className='text-[#777] text-[9px] py-0.5 border-r border-white md:pr-6 pr-2' >
            Our <span className="uppercase text-palette2"> PRIVACY POLICY</span>
          </div>
          <div className='text-[#777] text-[9px] py-0.5 ' >
            Our <span className="uppercase text-palette2">
              Terms & condition
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer