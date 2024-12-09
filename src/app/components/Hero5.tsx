import React from 'react'
import Image from 'next/image'
import blog1 from "../../../public/images/coffee1.png"
import blog2 from "../../../public/images/lap1.png"
import blog3 from "../../../public/images/lap2.png"

const Hero5 = () => {
  return (
    <>
    <div className='text-center p-2 py-10 md:px-20'>
    <div className='py-10'>
    <h2 className='text-4xl py-2 font-bold'>Our Blogs</h2>
    <p className='text-gray-700'>Find a bright ideal to suit your taste with our great selection</p>
    </div>

        {/*  blog layout*/}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 min-h-[600px]'>

            {/* 01 */}
            <div className='p-2 min-h-80'>
                <Image src={blog1} alt='blog' width={400} height={400} className='w-full'/>
              <h2 className='text-xl  font-bold pt-5'>Going all-in with millennial design</h2>
              <button className='border-b border-black py-2 text-lg'>Read More</button>
              <div className='text-sm text-gray-500 flex gap-5 justify-center py-5'>
                <span>5 min</span> <span>12th Oct 2022</span>
              </div>
            </div>

            {/* 02 */}
            <div className='p-2 min-h-80'>
                <Image src={blog2} alt='blog' width={400} height={400} className='w-full'/>
              <h2 className='text-xl  font-bold pt-5'>Going all-in with millennial design</h2>
              <button className='border-b border-black py-2 text-lg'>Read More</button>
              <div className='text-sm text-gray-500 flex gap-5 justify-center py-5'>
                <span>5 min</span> <span>12th Oct 2022</span>
              </div>
            </div>

            {/* 03 */}
            <div className='p-2 min-h-80'>
                <Image src={blog3} alt='blog' width={400} height={400} className='w-full'/>
              <h2 className='text-xl  font-bold pt-5'>Going all-in with millennial design</h2>
              <button className='border-b border-black py-2 text-lg'>Read More</button>
              <div className='text-sm text-gray-500 flex gap-5 justify-center py-5'>
                <span>5 min</span> <span>12th Oct 2022</span>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero5