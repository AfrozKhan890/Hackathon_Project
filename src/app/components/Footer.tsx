import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='p-2 md:px-20 py-10 grid grid-cols-1  gap-5 md:grid-cols-4 minh-[400px]'>

                {/* 01 */}
                <div className=' p-5 min-h-20 md:min-h-[300px] flex items-center text-gray-500'>
                    <div>                    
                        <p className=''>400 University Drive Suite 200 Coral Gables,</p>
                        <p>FL 33134 USA</p></div>
                </div>

                {/* 02 */}

                <div className='  p-5 min-h-[300px] '>
                    <p className='text-gray-400 font-bold '>Links</p>

                    <ul className='grid grid-cols-1 gap-5 pt-10'>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/'}>Shop</Link></li>
                        <li><Link href={'/'}>About</Link></li>
                        <li><Link href={'/'}>Contact</Link></li>
                    </ul>

                </div>

                {/* 03 */}
                <div className=' p-5 min-h-[300px] '>
                    <p className='text-gray-400 font-bold '>Links</p>

                    <ul className='grid grid-cols-1 gap-5 pt-10'>
                        <li><Link href={'/'}>Payment Options</Link></li>
                        <li><Link href={'/'}>Returns</Link></li>
                        <li><Link href={'/'}>Privacy Policies</Link></li>

                    </ul>

                </div>

                {/* 04 */}
                <div className='  p-5 min-h-40 md:min-h-[300px] '>
                    <p className='text-gray-400 font-bold '>Newsletter</p>

                    <ul className='grid grid-cols-2 gap-5 pt-10'>

                        <div className='text-sm flex gap-2 '>
                            <input type="text" className='px-4 py-2 border-b border-black' placeholder='Enter Your Email Address' />
                            <button className='border-b border-black'>SUBSCRIBE</button>
                        </div>



                    </ul>

                </div>

            </div>
            <div className=' mb-10 p-2 md:px-20'>
                <p className='border-t border-black pt-10'>2024 Afroz Khan. All rights reverved</p>
            </div>
        </>
    )
}

export default Footer