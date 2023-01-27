import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='bg-background border-t border-black pt-16 px-8' >
      <div className='mx-[88px]'>
        <div className='grid grid-cols-4' >
          <div className='px-5 pb-16' >
            <img src={Logo} alt="logo" className='w-[260px] h-[23.4px] mb-6' />
            <p class="text-sm text-[#d1d1d1]">
              <strong>Invent. Innovate. Improve. 
              </strong>The <strong>iiintent</strong> code that drives our products, 
              content, community and<br /> growth.
            </p>
          </div>
          <div className='px-5 pb-16' >
            <h4 class="mb-5 font-extrabold text-palette3 text-xl">Product</h4>
            <ul className='list-none flex flex-col gap-y-3' >
              <li className='text-[#f6f6f6] text-sm cursor-pointer' >Video FAQs</li>
              <li className='text-[#f6f6f6] text-sm cursor-pointer' >Custom Demo</li>
              <li className='text-[#f6f6f6] text-sm cursor-pointer' >On-Demand Demo</li>
            </ul>
          </div>
          <div className='px-5 pb-16' >
            <h4 class="mb-5 font-extrabold text-palette3 text-xl">Content</h4>
            <ul className='list-none flex flex-col gap-y-3' >
              <li className='text-[#f6f6f6] text-sm cursor-pointer' >Case Studios</li>
            </ul>
          </div>
        </div>
        <div className='mt-4 mx-[15px] flex gap-x-6 py-8' >
          <div className='text-[#777] text-[9px] py-0.5 border-r border-white pr-6' >
            Powered by <span className="text-palette2 uppercase"> Customer Acquisition</span>
          </div>
          <div className='text-[#777] text-[9px] py-0.5 border-r border-white pr-6' >
            Crafted by <span className="text-palette2 uppercase"> Customer Acquisition Labs</span>
          </div>
          <div className='text-[#777] text-[9px] py-0.5 border-r border-white pr-6' >
            Our <span className="text-palette2 uppercase"> PRIVACY POLICY</span>
          </div>
          <div className='text-[#777] text-[9px] py-0.5 ' >
            Our <span className="text-palette2 uppercase">
              Terms & condition
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer