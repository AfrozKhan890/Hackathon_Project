import React from 'react'
import Image from 'next/image'
import sofa1 from "../../../public/images/sofa1.png"
const Hero = () => {
    return (
        <>
            <div className=' grid md:grid-cols-2 bg-[#FBEBB5] min-h-[600px] gap-2 px-4 md:px-40'>

                <div className='p-10 grid justify-center items-center md:pb-40'>
                    <div className='text-3xl md:text-6xl font-bold '>
                        <h2 className=''>Rocket single </h2>
                        <h2>Seater</h2>
                        <button className='text-lg border-b border-black'>Shop Now</button>
                    </div>

                </div>

                <div className='grid '>
                    <Image src={sofa1} alt='sofa1'  width={500} height={500} layout="responsive" />

                </div>

            </div>
        </>
    )
}

export default Hero