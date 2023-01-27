import React from 'react';
import useScreenSize from '../ScreenSize';
// #c3f99f
const SectionTwo = () => {
  const { width } = useScreenSize();
  return (
    <div className='flex justify-center px-4 py-12 bg-white md:px-0 ' >
      <div>
        <div className='flex justify-center w-full' >
          <p className='bg-[#a5d934] md:w-[590px] rounded-[16px] font-bold mb-6 p-2 text-slate-900'>
            WARNING: WE RESERVE THE RIGHT TO REVOKE THIS OFFER AT ANY TIME
          </p>
        </div>
        <h1 className=' text-[34px] md:text-[45px] mb-4 text-black font-black leading-[1em] text-center' >
          WE GUARANTEE TO BEAT{width>700&&<br/>} YOUR BEST LANDING PAGE{width>700&&<br/>} OR YOU WON'T PAY US A{width>700&&<br/>} SINGLE CENT
        </h1>
        <div className='flex justify-center w-full' >
          <div>
            <div className='md:px-[18%] text-black text-xl leading-[1.5em]' >
              <p ><mark className='bg-[#c3f99f]' ><span className='font-bold' >Does this offer excite you?</span> Interested in putting </mark></p>
              <p><mark className='bg-[#c3f99f]' >us to the test?</mark></p>
              <p className='my-4' >Hold on there, tiger ...not so fast.</p>
              <p className='my-4' >Gotta back up a little first.</p>
              <p ><mark className='bg-[#c3f99f]' ><span className='font-bold' >Does this offer excite you?</span> Interested in putting </mark></p>
              <p><mark className='bg-[#c3f99f]' >us to the test?</mark></p>
              <p className='my-4' >Hold on there, tiger ...not so fast.</p>
              <p className='my-4' >Gotta back up a little first.</p>
              <p className='my-4' >Because this is not for everybody.</p>
              <p className='' >There are <span className='underline' >three important factors</span> which must</p>
              <p className='mb-4' >exist before you should even think about applying for this opportunity.</p>
              <div className='number' >
                <h2 className='text-[#a5d934] font-black text-[60px] pt-2' >1</h2>
                <div>
                  <p className='font-bold' >You must already be running ads on either</p>
                  <p className='font-bold' >Google or Facebook, and they must be</p>
                  <p><span className='font-bold' >running <span className='underline' > profitably.</span> This opportunity isn't for</span></p>
                  <p>newbies or businesses that aren't already</p>
                </div>
              </div>
              <div className='number ' >
                <h2 className='text-[#a5d934] font-black text-[60px] pt-2' >2</h2>
                <div>
                  <p className='font-bold' >You must be willing to let us create ads we</p>
                  <p><span className='font-bold' >think we sell.</span> Listen, since we're doing this</p>
                  <p>all on our own dime....Frankly, we don't care</p>
                  <p>what you, your business partner, your</p>
                  <p>spouse, your friends or Snow White and the</p>
                  <p>seven dwarfs think about our work. Except</p>
                  <p>For checking the ads for your legal and</p>
                  <p>factual appproval - we'll hold all creative</p>
                  <p>control. Because, if an ad isn't ours -we</p>
                  <p>can't guarantee its success.</p>
                </div>
              </div>
              <div className='number' >
                <h2 className='text-[#a5d934] font-black text-[60px] pt-2' >3</h2>
                <div>
                  <p className='font-bold' >You must not be selling anything even</p>
                  <p><span className='font-bold' >remotely shady,</span> ilegal, scammy, dangerous</p>
                  <p>or in any way be involved in multi-level</p>
                  <p>marketing. That's it. Does this opportunity</p>
                  <p>interest you? Do you meet the above</p>
                  <p>qualifications? If so, go here and book in a </p>
                  <p>30-minute strategy session with our team to</p>
                  <p>see if we'd be a good fit.</p>
                </div>
              </div>
            </div>
              <div className='flex justify-center' >
                <div className='rounded-[10px] bg-[#a5d934] md:w-[900px] flex flex-col items-center md:py-4 gap-2' >
                <h2 className='text-white text-[32px] font-extrabold' >CLAIM YOUR FREE 30-MINUTE STRATEGY SESSION</h2>
                <p className='text-slate-600' >Be quick! FREE spots are almost gone for January</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo