import React from 'react'
import Image from 'next/image';
import banner from '../../../../public/images/banner_shop.png'

const Hero = () => {
    return (
        <>
            <div className="relative w-screen h-[316px]">
  {/* Hero Background Image */}
  <Image
    src={banner}
    alt="Shop Background"
    layout="fill"
    objectFit="cover"
    className="absolute top-0 left-0"
  />
  {/* Hero Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black">
     &nbsp; &gt; &nbsp;
  </div>
</div>

        </>
    )
}

export default Hero;
