import Image from 'next/image';
import React from 'react';

const BROWSEBYDRESSSTYLE = () => {
  return (
    <div className="w-full bg-[#F0F0F0] rounded-xl p-8">
      <h1 className="font-bold text-black text-3xl md:text-4xl lg:text-5xl text-center mb-8">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {/* First Row */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image src="/product09.png" alt="" width={407} height={289} className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image src="/product10.png" alt="" width={684} height={289} className="w-full h-auto" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Second Row */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image src="/product11.png" alt="" width={684} height={289} className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image src="/product12.png" alt="" width={407} height={289} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default BROWSEBYDRESSSTYLE;
