import React from 'react';
import Desktop from '../../assets/caseStudies.jpg';
import InViewAnimateRight from '../InViewAnimateRight';

const SectionOne = () => {
  return (
    <div className='overflow-x-hidden md:pl-16 bg-background' >
      <div className='flex flex-col items-center grid-cols-2 md:flex-row md:pl-10 md:grid gap-y-10' >
        <div>
          {/* <p class="mb-2.5 text-[#161338] font-bold text-center md:text-left">
            UNLOCK&nbsp;YOUR&nbsp;HIDDEN&nbsp;REVENUE
          </p> */}
          <h2 class="text-white text-2xl text-center md:text-left md:text-4xl 
          font-black mb-[15px]">
            Meta Agency Growth:<br/>
            From <span className='text-[#6b7c93]' >42$</span> to <span className='text-[#6b7c93]' >5$</span> CPL
          </h2>
          <p class="text-white text-sm text-center md:text-left md:text-lg">
            Agencies leverage iiintent.io crush lead<br/> generation for their clients.
            However, there's <br/> levels to this. Check out how one of our guns<br/>
            figured out a meta-strategy to make more<br/> money from one client than
            all 42 others combined.
          </p>
        </div>
        <div>
          <InViewAnimateRight>
            <img src={Desktop} alt="desktop" className='md:w-[620px] w-full md:h-[439.16px] 
            h-[252.49px]' />
          </InViewAnimateRight>
        </div>
      </div>
    </div>
  )
}

export default SectionOne