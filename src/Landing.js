import React from 'react';
import SectionFour from './components/correction/SectionFour';
import SectionOne from './components/correction/SectionOne';
import SectionThree from './components/correction/SectionThree';
import SectionTwo from './components/correction/SectionTwo';
import EightSection from './components/EightSection';
import FifthSection from './components/FifthSection';
import Footer from './components/Footer';
import FourthSection from './components/FourthSection';
import LandSection from './components/LandSection';
import Navbar from './components/Navbar';
import SecSection from './components/SecSection';
import SevSection from './components/SevSection';
import SixthSection from './components/SixthSection';
import ThirdSection from './components/ThirdSection';

const Landing = () => {
  return (
    <div>
      <div className='fixed top-0 z-50 w-full'>
        <Navbar />
      </div>
      <div className='md:mt-[179px] mt-[120px] mb-10 md:mb-[86px]' >
        <LandSection />
      </div>
      <div className='mb-[70px] md:mb-[86px]' >
        <SectionOne />
      </div>
      <div className='mb-[70px] md:mb-[86px]' >
        <SectionTwo />
      </div>
      <div className='mb-[70px] md:mb-[86px]' >
        <SectionThree />
      </div>
      <div className='mb-[70px] md:mb-[86px]' >
        <SectionFour />
      </div>
      {/* <div className='mb-[70px] md:mb-[86px]' >
        <SecSection />
      </div>
      <div className='md:mb-[86px]' >
        <ThirdSection />
      </div>
      <div className=' md:mb-[86px]' >
        <FourthSection />
      </div>
      <div>
        <FifthSection />
      </div>
      <div className='' >
        <SixthSection />
      </div>
      <div className='' >
        <SevSection />
      </div>
      <div className='' >
        <EightSection />
      </div> */}
      <div className='' >
        <Footer />
      </div>
    </div>
  )
}

export default Landing