import React from 'react'

const Hero2 = () => {
  return (
   <>
   <div className='p-4 py-10 md:px-20 min-h-[250px] bg-yellow-50 grid grid-cols-1 md:grid-cols-3 gap-5'>

    {/* 01 */}
        <div className=' p-5 flex items-center '>
        <div>
        <h2 className='text-2xl  '>Free Delivery</h2>
        <p className='text-gray-500'>For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        </div>


    {/* 01 */}
    <div className=' p-5 flex items-center '>
        <div>
        <h2 className='text-2xl  '>90 Days Return</h2>
        <p className='text-gray-500'>If goods have problems, consectetur adipim scing elit.</p>
        </div>
        </div>


    {/* 01 */}
    <div className=' p-5 flex items-center '>
        <div>
        <h2 className='text-2xl  '>Secure Payment</h2>
        <p className='text-gray-500'>100% secure payment, consectetur adipim scing elit.</p>
        </div>
        </div>

   </div>
   </>
  )
}

export default Hero2