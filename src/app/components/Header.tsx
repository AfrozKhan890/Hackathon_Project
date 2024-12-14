import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className="flex justify-between flex-wrap text-black px-10 py-5 gap-x-40 bg-[#FBEBB5]">
        {/* Section 1 */}
        <div className="w-[300px]"></div>

        {/* Section 2 */}
        <ul className="flex flex-wrap justify-center gap-x-10 py-10 md:py-0">
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/shop'}>Shop</Link></li>
          <li><Link href={'/about'}>About</Link></li>
          <li><Link href={'/contact'}>Contact</Link></li>
        </ul>

        {/* Section 3 - Icons */}
        <ul className="flex justify-center gap-x-10">
          <li>
            <h1 className='h-[30px] w-[30px]'>icon1</h1>
          </li>
          <li>
            <h1 className='h-[30px] w-[30px]'>icon2</h1>
          </li>
          <li>
          <h1 className='h-[30px] w-[30px]'>icon3</h1>
          </li>
          <li>
          <h1 className='h-[30px] w-[30px]'>icon4</h1>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
