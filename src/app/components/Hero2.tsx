import React from 'react'
import Image from 'next/image'
import sofa2 from "../../../public/images/sofa2.png"
import table1 from "../../../public/images/table1.png"


const Hero2 = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex  min-h-[500px] p-2 md:p-01 bg=[#FAF4F4] justify-center">
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className=" p-6 min-h-[400px]">
                        <Image src={table1} width={500} height={500} alt='table' />
                        <div className=' pl-2 md:pl-40'>
                            <h2 className='text-4xl pb-5'>Side Table</h2>
                            <button className='text-lg border-b border-black'>View More</button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className=" min-h-[400px]">
                        <Image src={sofa2} width={500} height={500} alt='table' />
                        <div className=' pl-2 md:pl-40'>
                            <h2 className='text-4xl pb-5'>Side Table</h2>
                            <button className='text-lg border-b border-black'>View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;





