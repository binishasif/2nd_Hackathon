import React from 'react';

const OURHAPPYCUSTOMER = () => {
  return (
    <div className="flex flex-col items-center space-y-6 px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-black text-center w-full text-4xl sm:text-5xl md:text-6xl mb-8">
        OUR HAPPY CUSTOMERS
      </h1>

      {/* Horizontal Row of Reviews */}
      <div className="flex flex-col sm:flex-row sm:space-x-8 justify-center space-y-6 sm:space-y-0 w-full">
        {/* Sarah's Review */}
        <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 w-full sm:w-[350px] shadow-lg">
          <div className="flex justify-center mb-2">
            {/* 5 Star Icons */}
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-lg">★</span>
            ))}
          </div>
          <button className="rounded-full bg-white p-4 w-full">
            <p className="text-center font-medium">
              Sarah M.<br />
              "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
            </p>
          </button>
        </div>

        {/* Alex's Review */}
        <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 w-full sm:w-[350px] shadow-lg">
          <div className="flex justify-center mb-2">
            {/* 5 Star Icons */}
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-lg">★</span>
            ))}
          </div>
          <button className="rounded-full bg-white p-4 w-full">
            <p className="text-center font-medium">
              Alex K.<br />
              "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
            </p>
          </button>
        </div>

        {/* James's Review */}
        <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 w-full sm:w-[350px] shadow-lg">
          <div className="flex justify-center mb-2">
            {/* 5 Star Icons */}
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-lg">★</span>
            ))}
          </div>
          <button className="rounded-full bg-white p-4 w-full">
            <p className="text-center font-medium">
              James L.<br />
              "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
            </p>
          </button>
        </div>
      </div>

      {/* Stay up to date section */}
      <div className="bg-black rounded-[20px] w-full sm:w-[1240px] h-[180px] flex items-center justify-between px-6 py-4">
        <h1 className="text-white text-left text-2xl sm:text-3xl font-semibold w-full sm:w-[60%]">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>

        {/* Email Input and Subscribe Button */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-[35%]">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg w-full sm:w-[200px] text-black focus:outline-none"
          />
          <button className="bg-white text-black p-3 rounded-lg w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default OURHAPPYCUSTOMER;
