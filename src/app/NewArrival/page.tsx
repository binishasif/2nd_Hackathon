import React from 'react';
import Image from 'next/image';

const NewArrival = () => {
  return (
<div className='w-full bg-white pt-12'>

   {/* Brand Section */}
<div className="bg-black w-full h-[122px] flex justify-center items-center gap-6 px-4 sm:px-8 hidden sm:flex">
  <h2 className="text-white font-bold text-sm sm:text-lg">VERSACE</h2>
  <h2 className="text-white font-bold text-sm sm:text-lg">ZARA</h2>
  <h2 className="text-white font-bold text-sm sm:text-lg">GUCCI</h2>
  <h2 className="text-white font-bold text-sm sm:text-lg">PRADA</h2>
  <h2 className="text-white font-bold text-sm sm:text-lg">Calvin Klein</h2>
</div>

      {/* New Arrivals Header */}
      <h1 className='text-black font-bold text-3xl sm:text-4xl md:text-5xl text-center my-8'>
        NEW ARRIVALS
      </h1>

      {/* Product Grid */}
      <div className='flex flex-wrap justify-center gap-8 px-4 sm:px-8'>
        {/* Product 1 */}
        <div className='text-center w-full sm:w-[250px] md:w-[296px]'>
          <Image src="/product01.png" alt="" width={296} height={444} className="w-full h-auto" />
          <h1 className='font-bold text-sm sm:text-lg md:text-xl mt-4'>T-shirt with Tape details</h1>
          <div className='flex justify-center space-x-1 my-2'>
            {[...Array(5)].map((_, index) => (
              <span key={index} className='text-yellow-400'>★</span>
            ))}
          </div>
          <h1 className='font-bold text-sm sm:text-lg md:text-xl'>$120</h1>
        </div>

        {/* Product 2 */}
        <div className='text-center w-full sm:w-[250px] md:w-[296px]'>
          <Image src="/product02.png" alt="" width={295} height={298} className="w-full h-auto" />
          <h1 className='font-bold text-sm sm:text-lg md:text-xl mt-4'>SKINNY FIT JEANS</h1>
          <div className='flex justify-center space-x-1 my-2'>
            {[...Array(5)].map((_, index) => (
              <span key={index} className='text-yellow-400'>★</span>
            ))}
          </div>
          <h1 className='font-bold text-sm sm:text-lg md:text-xl'>$240 <s className='opacity-50'>$260</s></h1>
          <button className='bg-[#fec3c3] text-[#FF3333] rounded-full w-[58px] h-[28px] text-xs sm:text-sm'>
            -20%
          </button>
        </div>

        {/* Product 3 */}
        <div className='text-center w-full sm:w-[250px] md:w-[296px]'>
          <Image src="/product03.png" alt="" width={295} height={298} className="w-full h-auto" />
          <h1 className='font-bold text-sm sm:text-lg md:text-xl mt-4'>CHECKERED SHIRT</h1>
          <div className='flex justify-center space-x-1 my-2'>
            {[...Array(5)].map((_, index) => (
              <span key={index} className='text-yellow-400'>★</span>
            ))}
          </div>
          <h1 className='font-bold text-sm sm:text-lg md:text-xl'>$180</h1>
        </div>

        {/* Product 4 */}
        <div className='text-center w-full sm:w-[250px] md:w-[296px]'>
          <Image src="/product04.png" alt="" width={295} height={298} className="w-full h-auto" />
          <h1 className='font-bold text-sm sm:text-lg md:text-xl mt-4'>SLEEVE STRIPED T-SHIRT</h1>
          <div className='flex justify-center space-x-1 my-2'>
            {[...Array(5)].map((_, index) => (
              <span key={index} className='text-yellow-400'>★</span>
            ))}
          </div>
          <h1 className='font-bold text-sm sm:text-lg md:text-xl'>$130 <s className='opacity-50'>$160</s></h1>
          <button className='bg-[#fec3c3] text-[#FF3333] rounded-full w-[58px] h-[28px] text-xs sm:text-sm'>
            -30%
          </button>
        </div>
      </div>

      {/* View All Button */}
      <div className='flex justify-center my-8'>
        <button className='text-black border-[1px] border-gray-400 rounded-full h-[52px] w-[218px] text-[16px] sm:text-lg'>
          View All
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
