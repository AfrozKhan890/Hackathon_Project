import React from 'react'
import Image from 'next/image';
import banner from '../../../../public/images/banner_shop.png'

const Hero = () => {
    return (
        <>
            <div className='p-4 md:px-20 py-10 bg-gray-100 min-h-[300px] flex items-center justify-center'>

                {/* Banner Container */}
                <div className='relative w-full h-full max-w-screen-lg min-h-[300px]'>
                    <Image src={banner}  alt='blog' layout='fill' objectFit='cover' className='rounded-lg' />
                </div>
            </div>
        </>
    )
}

export default Hero;
