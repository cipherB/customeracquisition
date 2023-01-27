import React from 'react';
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
      <div className='fixed top-0 w-full z-50'>
        <Navbar />
      </div>
      <div className='mt-[179px] mb-[86px]' >
        <LandSection />
      </div>
      <div className=' mb-[86px]' >
        <SecSection />
      </div>
      <div className=' mb-[86px]' >
        <ThirdSection />
      </div>
      <div className=' mb-[86px]' >
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
      </div>
      <div className='' >
        <Footer />
      </div>
    </div>
  )
}

export default Landing