import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const faqs = [
  "What does a Digital Marketing Agency actually do?",
  "How do I know that I will get a return on my investment",
  "Do you work with big or small companies?",
  "Why is King Kong the best digital marketing agency?",
  "Can you guarantee results?",
  "What's involved with digital marketing?"
]
// #c88533
const SectionFour = () => {
  const [open, setOpen] = useState(null);
  return (
    <div className='pt-[70px] md:pt-[120px] px-4 md:px-0 pb-10 bg-white flex justify-center' >
      <div className='w-full md:w-[820px] border-t-2 border-[#c88533]' >
        <h2 className='text-[34px] md:text-[45px] mb-6 text-black font-black leading-[1em] text-center' >
          FREQUENTLY ASKED QUESTIONS
        </h2>
        {
          faqs.map((item, id) => (
            <div key={id} className="mb-2 p-2 md:py-4 bg-[#f2f2f2]" >
              <div className='flex items-center justify-between cursor-pointer gap-x-2'
              onClick={() => {
                open===id?setOpen(null):setOpen(id)
              }} >
                <p className='font-bold text-black md:text-xl' >{item}</p>
                {
                  open===id ?(
                    <IoIosArrowUp className='font-bold text-black md:text-xl' />
                  ) :(
                    <IoIosArrowDown className='font-bold text-black md:text-xl' />
                  )
                }
              </div>
              {
                open===id && (
                  <div>
                    <p className='pt-2 text-black md:text-xl' >
                      Agencies leverage iiintent.io crush lead
                      generation for their clients. However, there's
                      levels to this. Check out how one of our guns
                      figured out a meta-strategy to make more
                      money from one client than all 42 others combined.
                    </p>
                  </div>
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SectionFour