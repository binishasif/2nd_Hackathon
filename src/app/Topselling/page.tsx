import Image from 'next/image';
import React from 'react';

const TOPSELLING = () => {
  return (
    <div className="w-full bg-white">
      {/* Title Section */}
      <h1 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-8">TOP SELLING</h1>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-8 mb-8">
        {/* Product 1 */}
        <div className="text-center w-full sm:w-[250px] md:w-[295px]">
          <Image src="/product05.png" alt="Vertical Striped Shirt" width={295} height={298} className="w-full h-auto" />
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl mt-2">VERTICAL STRIPED SHIRT</h1>
          <div className="text-yellow-400 flex justify-center mb-2">
            {Array(5).fill('★').map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          </div>
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
            $212 <s className="opacity-50">$232</s>
          </h1>
          <button className="bg-[#fec3c3] text-[#FF3333] rounded-full w-[58px] h-[28px] mt-2 text-xs sm:text-sm">
            -20%
          </button>
        </div>

        {/* Product 2 */}
        <div className="text-center w-full sm:w-[250px] md:w-[295px]">
          <Image src="/product06.png" alt="Courage Graphic T-shirt" width={295} height={298} className="w-full h-auto" />
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl mt-2">COURAGE GRAPHIC T-SHIRT</h1>
          <div className="text-yellow-400 flex justify-center mb-2">
            {Array(5).fill('★').map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          </div>
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl">$145</h1>
        </div>

        {/* Product 3 */}
        <div className="text-center w-full sm:w-[250px] md:w-[295px]">
          <Image src="/product07.png" alt="Loose Fit Bermuda Shorts" width={295} height={298} className="w-full h-auto" />
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl mt-2">LOOSE FIT BERMUDA SHORTS</h1>
          <div className="text-yellow-400 flex justify-center mb-2">
            {Array(5).fill('★').map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          </div>
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl">$80</h1>
        </div>

        {/* Product 4 */}
        <div className="text-center w-full sm:w-[250px] md:w-[295px]">
          <Image src="/product08.png" alt="Faded Skinny Jeans" width={295} height={298} className="w-full h-auto" />
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl mt-2">FADED SKINNY JEANS</h1>
          <div className="text-yellow-400 flex justify-center mb-2">
            {Array(5).fill('★').map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          </div>
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl">$210</h1>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mb-8">
        <button className="text-black border-[1px] border-gray-400 rounded-full h-[52px] w-[218px] text-lg sm:text-xl">
          View All
        </button>
      </div>
    </div>
  );
};

export default TOPSELLING;
