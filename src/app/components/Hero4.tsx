import React from 'react'
import sofa1 from "../../../public/images/S_table10.png"
import Image from 'next/image'
const Hero4 = () => {
    return (
        <>
            <div className='p-2 md:py-10 md:px-20 grid grid-cols-1 md:grid-cols-4 min-h-[600px] bg-yellow-200 '>

                <div className='p-2 col-span-3 flex justify-center'>
                    <Image src={sofa1} alt="sofa" width={800} height={800} />
                </div>
                <div className='p-2  grid  justify-center items-center text-center '>
                    <div className='grid gap-4  mx-auto'>
                        <p>New Arrivals</p>
                        <h2 className='text-4xl '>Asgaard sofa</h2>
                        <div>         <button className='border border-black px-4 py-2 w-40'>Order Now</button></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero4