import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative w-full bg-[#F2F0F1]'>
      {/* Background Image */}
      <Image
        src="/banner.png"
        alt="Banner Image"
        width={1440}
        height={663}
        className='w-full h-auto object-cover'
      />

      {/* Text Content */}
      <div className='absolute top-1/4 left-10 text-left px-4 sm:px-8 md:left-16 lg:left-20'>
        <h1 className='text-black font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:block hidden'>
          FIND CLOTHES THAT MATCH
          <br/>
           YOUR STYLE
        </h1>
        
        {/* Paragraph Hidden on Small Screens */}
        <p className='text-gray-400 mt-4 max-w-md text-sm sm:text-base md:text-lg lg:text-xl hidden sm:block'>
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>

        {/* Add margin to push the button down on small screens */}
        <button className='mt-6 bg-black text-white rounded-full w-[180px] h-[48px] sm:w-[210px] sm:h-[52px] md:w-[240px] md:h-[56px] sm:mt-10'>
          Shop Now
        </button>

        {/* Add space below the button */}
        <div className="mt-8"></div> {/* This adds some space below the button */}
      </div>
    </div>
  );
};

export default Banner;
