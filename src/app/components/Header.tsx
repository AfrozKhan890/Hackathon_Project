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
            <Image src="/images/icon1.jpg" alt="icon1" width={30} height={30} />
          </li>
          <li>
            <Image src="/images/icon2.png" alt="icon2" width={30} height={30} />
          </li>
          <li>
            <Image src="/images/icon3.png" alt="icon3" width={30} height={30} />
          </li>
          <li>
            <Image src="/images/icon4.png" alt="icon4" width={40} height={40} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
