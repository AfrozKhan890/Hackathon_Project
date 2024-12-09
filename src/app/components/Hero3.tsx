import React from 'react'
import Image from 'next/image'
import sofa3 from "../../../public/images/sofa3.png"
import sofa4 from "../../../public/images/sofa4.png"
import sofa_table from "../../../public/images/sofa_table.png"
import table from "../../../public/images/table.png"


const Hero3 = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex  min-h-[500px] p-2 md:p-01 justify-center md:px-10">
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                   
                    <div className="p-2 min-h-[400px] p-2">
                        <Image src={sofa3} width={500} height={500} alt='table' />
                        <div className=''>
                            <h2 className='text-2xl'>Trenton modular sofa_3</h2>
                            <p className='py-2 font-bold'>Rs. 25,000.00</p>
                        </div>
                    </div>
                    
                    <div className="p-2 min-h-[400px] p-2">
                        <Image src={sofa4} width={500} height={500} alt='table' />
                        <div className=''>
                            <h2 className='text-2xl'>Granite dining table with dining chair</h2>
                            <p className='py-2 font-bold'>Rs. 25,000.00</p>
                        </div>
                    </div>

                    
                    <div className="p-2 min-h-[400px]  p-2">
                        <Image src={sofa_table} width={500} height={500} alt='table' />
                        <div className=''>
                            <h2 className='text-2xl '>Outdoor bar table and stool</h2>
                            <p className='py-2 font-bold'>Rs. 25,000.00</p>
                        </div>
                    </div>
                    
                    <div className="p-2 min-h-[400px]  p-2">
                        <Image src={table} width={500} height={500} alt='table' />
                        <div className=''>
                            <h2 className='text-2xl '>Plain console with teak mirror</h2>
                            <p className='py-2 font-bold'>Rs. 25,000.00</p>
                        </div>
                    </div>
                </div>
                
             
              <div className='flex justify-center py-10 '>
              <button className='border-b border-black py-2 text-lg'>Read More</button>
              </div>
          

            </div>
        </div>
    );
};






export default Hero3;