import Image from "next/image";
import BannerCarousel from "../components/banner-carousel";
import BannerSubtitle from "../components/banner-subtitle";
import BannerH1 from "../components/banner-h1";
import FilterAgentsRated from "./components/filter-agents-rated";
export default function FilterLandHouse() {
   const bannerImages = [
      '/images/banner-image1.webp',
      '/images/banner-image2.webp',
      '/images/banner-image1.webp',
    ];
    return (
        <main className="flex-grow flex flex-col gap-11 text-font-color bg-white">
              
              <BannerCarousel 
                bannerImages={bannerImages}
                lineone="Browse. Connect. Buy. Settle in"
                heading="Find Your Dream Home, Land,<br />or Furniture in One Place"
              >
                <div
                  className="w-full px-[6vw] flex flex-col items-center justify-center text-center gap-5">
                  {/* Subtitle */}
                  <BannerSubtitle>Find agents who are verified, reliable, and ready to help</BannerSubtitle>
                  {/* Heading */}
                  <BannerH1>Connect with Verified Agents<br />You Can Trust</BannerH1>
                  {/* Description  */}
                  
                </div>
                <FilterAgentsRated/>
              </BannerCarousel>

              <section className="w-full px-4 sm:px-6 py-10 mx-auto">
                <h2 className="text-3xl font-bold mb-8 tracking-wide text-[#191a1d] text-center sm:text-left">
                  Top rated Agents
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Agent Card 1 */}
                  <div className="bg-[#fff] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-shadow duration-200">
                    <img src="img/person1.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

                    <div className="flex flex-col p-5 gap-2 min-h-[180px] bg-white">
                      {/* Header */}
                      <div className="flex items-center justify-between text-gray-700 text-[0.98em] mb-2">
                        <span className="flex items-center gap-1 text-[0.93em]">
                          Agent 
                          <span className="text-[#3571a6] flex items-center">
                            <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain" />
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[#1bbf54] font-semibold text-[0.95em]">
                          Active <span className="text-[#1bbf54] text-[1em]">&#9679;</span>
                        </span>
                      </div>

                      {/* Name */}
                      <div className="font-raleway font-bold text-[1.23em] text-[#222] mt-4 mb-5">
                        Ugochukwu Pius
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 text-yellow-500 text-[1em] mb-3">
                        <span>★★★★★</span>
                        <span className="text-[#3571a6] text-[0.9em] font-medium">590 Reviews</span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="text-[#222] text-[1em]">
                          200 listed properties
                        </div>
                        <button className="bg-[#163C69] hover:bg-[#254b83] text-white text-[0.9em] font-semibold rounded-[15px] py-2 px-4 flex items-center gap-1 transition-colors">
                          View Profile &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Agent Card 2 */}
                  <div className="bg-[#fff] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-shadow duration-200">
                    <img src="img/person1.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

                    <div className="flex flex-col p-5 gap-2 min-h-[180px] bg-white">
                      {/* Header */}
                      <div className="flex items-center justify-between text-gray-700 text-[0.98em] mb-2">
                        <span className="flex items-center gap-1 text-[0.93em]">
                          Agent 
                          <span className="text-[#3571a6] flex items-center">
                            <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain" />
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[#1bbf54] font-semibold text-[0.95em]">
                          Active <span className="text-[#1bbf54] text-[1em]">&#9679;</span>
                        </span>
                      </div>

                      {/* Name */}
                      <div className="font-raleway font-bold text-[1.23em] text-[#222] mt-4 mb-5">
                        Ugochukwu Pius
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 text-yellow-500 text-[1em] mb-3">
                        <span>★★★★★</span>
                        <span className="text-[#3571a6] text-[0.9em] font-medium">590 Reviews</span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="text-[#222] text-[1em]">
                          200 listed properties
                        </div>
                        <button className="bg-[#163C69] hover:bg-[#254b83] text-white text-[0.9em] font-semibold rounded-[15px] py-2 px-4 flex items-center gap-1 transition-colors">
                          View Profile &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Agent Card 3 */}
                  <div className="bg-[#fff] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-shadow duration-200">
                    <img src="img/person1.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

                    <div className="flex flex-col p-5 gap-2 min-h-[180px] bg-white">
                      {/* Header */}
                      <div className="flex items-center justify-between text-gray-700 text-[0.98em] mb-2">
                        <span className="flex items-center gap-1 text-[0.93em]">
                          Agent 
                          <span className="text-[#3571a6] flex items-center">
                            <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain" />
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[#1bbf54] font-semibold text-[0.95em]">
                          Active <span className="text-[#1bbf54] text-[1em]">&#9679;</span>
                        </span>
                      </div>

                      {/* Name */}
                      <div className="font-raleway font-bold text-[1.23em] text-[#222] mt-4 mb-5">
                        Ugochukwu Pius
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 text-yellow-500 text-[1em] mb-3">
                        <span>★★★★★</span>
                        <span className="text-[#3571a6] text-[0.9em] font-medium">590 Reviews</span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="text-[#222] text-[1em]">
                          200 listed properties
                        </div>
                        <button className="bg-[#163C69] hover:bg-[#254b83] text-white text-[0.9em] font-semibold rounded-[15px] py-2 px-4 flex items-center gap-1 transition-colors">
                          View Profile &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Agent Card 4 */}
                  <div className="bg-[#fff] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-shadow duration-200">
                    <img src="img/person1.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

                    <div className="flex flex-col p-5 gap-2 min-h-[180px] bg-white">
                      {/* Header */}
                      <div className="flex items-center justify-between text-gray-700 text-[0.98em] mb-2">
                        <span className="flex items-center gap-1 text-[0.93em]">
                          Agent 
                          <span className="text-[#3571a6] flex items-center">
                            <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain" />
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[#1bbf54] font-semibold text-[0.95em]">
                          Active <span className="text-[#1bbf54] text-[1em]">&#9679;</span>
                        </span>
                      </div>

                      {/* Name */}
                      <div className="font-raleway font-bold text-[1.23em] text-[#222] mt-4 mb-5">
                        Ugochukwu Pius
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 text-yellow-500 text-[1em] mb-3">
                        <span>★★★★★</span>
                        <span className="text-[#3571a6] text-[0.9em] font-medium">590 Reviews</span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="text-[#222] text-[1em]">
                          200 listed properties
                        </div>
                        <button className="bg-[#163C69] hover:bg-[#254b83] text-white text-[0.9em] font-semibold rounded-[15px] py-2 px-4 flex items-center gap-1 transition-colors">
                          View Profile &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Agent Card 5 */}
                  <div className="bg-[#fff] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-shadow duration-200">
                    <img src="img/person1.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

                    <div className="flex flex-col p-5 gap-2 min-h-[180px] bg-white">
                      {/* Header */}
                      <div className="flex items-center justify-between text-gray-700 text-[0.98em] mb-2">
                        <span className="flex items-center gap-1 text-[0.93em]">
                          Agent 
                          <span className="text-[#3571a6] flex items-center">
                            <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain" />
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[#1bbf54] font-semibold text-[0.95em]">
                          Active <span className="text-[#1bbf54] text-[1em]">&#9679;</span>
                        </span>
                      </div>

                      {/* Name */}
                      <div className="font-raleway font-bold text-[1.23em] text-[#222] mt-4 mb-5">
                        Ugochukwu Pius
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 text-yellow-500 text-[1em] mb-3">
                        <span>★★★★★</span>
                        <span className="text-[#3571a6] text-[0.9em] font-medium">590 Reviews</span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="text-[#222] text-[1em]">
                          200 listed properties
                        </div>
                        <button className="bg-[#163C69] hover:bg-[#254b83] text-white text-[0.9em] font-semibold rounded-[15px] py-2 px-4 flex items-center gap-1 transition-colors">
                          View Profile &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Agent Card 6 */}
                  <div className="bg-[#fff] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-shadow duration-200">
                    <img src="img/person1.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

                    <div className="flex flex-col p-5 gap-2 min-h-[180px] bg-white">
                      {/* Header */}
                      <div className="flex items-center justify-between text-gray-700 text-[0.98em] mb-2">
                        <span className="flex items-center gap-1 text-[0.93em]">
                          Agent 
                          <span className="text-[#3571a6] flex items-center">
                            <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain" />
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[#1bbf54] font-semibold text-[0.95em]">
                          Active <span className="text-[#1bbf54] text-[1em]">&#9679;</span>
                        </span>
                      </div>

                      {/* Name */}
                      <div className="font-raleway font-bold text-[1.23em] text-[#222] mt-4 mb-5">
                        Ugochukwu Pius
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 text-yellow-500 text-[1em] mb-3">
                        <span>★★★★★</span>
                        <span className="text-[#3571a6] text-[0.9em] font-medium">590 Reviews</span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="text-[#222] text-[1em]">
                          200 listed properties
                        </div>
                        <button className="bg-[#163C69] hover:bg-[#254b83] text-white text-[0.9em] font-semibold rounded-[15px] py-2 px-4 flex items-center gap-1 transition-colors">
                          View Profile &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              <section className="w-full px-4 sm:px-6 py-10 mx-auto">
                <h2 className="text-3xl font-bold mb-8 tracking-wide text-[#191a1d] text-center sm:text-left">
                  Agents near you
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Agent Card 1 */}
                  <div className="bg-[#fff] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-shadow duration-200">
                    <img src="img/person1.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

                    <div className="flex flex-col p-5 gap-2 min-h-[180px] bg-white">
                      {/* Header */}
                      <div className="flex items-center justify-between text-gray-700 text-[0.98em] mb-2">
                        <span className="flex items-center gap-1 text-[0.93em]">
                          Agent 
                          <span className="text-[#3571a6] flex items-center">
                            <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain" />
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[#1bbf54] font-semibold text-[0.95em]">
                          Active <span className="text-[#1bbf54] text-[1em]">&#9679;</span>
                        </span>
                      </div>

                      {/* Name */}
                      <div className="font-raleway font-bold text-[1.23em] text-[#222] mt-4 mb-5">
                        Ugochukwu Pius
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 text-yellow-500 text-[1em] mb-3">
                        <span>★★★★★</span>
                        <span className="text-[#3571a6] text-[0.9em] font-medium">590 Reviews</span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="text-[#222] text-[1em]">
                          200 listed properties
                        </div>
                        <button className="bg-[#163C69] hover:bg-[#254b83] text-white text-[0.9em] font-semibold rounded-[15px] py-2 px-4 flex items-center gap-1 transition-colors">
                          View Profile &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Agent Card 2 */}
                  <div className="bg-[#fff] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-shadow duration-200">
                    <img src="img/person1.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

                    <div className="flex flex-col p-5 gap-2 min-h-[180px] bg-white">
                      {/* Header */}
                      <div className="flex items-center justify-between text-gray-700 text-[0.98em] mb-2">
                        <span className="flex items-center gap-1 text-[0.93em]">
                          Agent 
                          <span className="text-[#3571a6] flex items-center">
                            <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain" />
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[#1bbf54] font-semibold text-[0.95em]">
                          Active <span className="text-[#1bbf54] text-[1em]">&#9679;</span>
                        </span>
                      </div>

                      {/* Name */}
                      <div className="font-raleway font-bold text-[1.23em] text-[#222] mt-4 mb-5">
                        Ugochukwu Pius
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 text-yellow-500 text-[1em] mb-3">
                        <span>★★★★★</span>
                        <span className="text-[#3571a6] text-[0.9em] font-medium">590 Reviews</span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="text-[#222] text-[1em]">
                          200 listed properties
                        </div>
                        <button className="bg-[#163C69] hover:bg-[#254b83] text-white text-[0.9em] font-semibold rounded-[15px] py-2 px-4 flex items-center gap-1 transition-colors">
                          View Profile &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Agent Card 3 */}
                  <div className="bg-[#fff] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-shadow duration-200">
                    <img src="img/person1.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

                    <div className="flex flex-col p-5 gap-2 min-h-[180px] bg-white">
                      {/* Header */}
                      <div className="flex items-center justify-between text-gray-700 text-[0.98em] mb-2">
                        <span className="flex items-center gap-1 text-[0.93em]">
                          Agent 
                          <span className="text-[#3571a6] flex items-center">
                            <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain" />
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[#1bbf54] font-semibold text-[0.95em]">
                          Active <span className="text-[#1bbf54] text-[1em]">&#9679;</span>
                        </span>
                      </div>

                      {/* Name */}
                      <div className="font-raleway font-bold text-[1.23em] text-[#222] mt-4 mb-5">
                        Ugochukwu Pius
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 text-yellow-500 text-[1em] mb-3">
                        <span>★★★★★</span>
                        <span className="text-[#3571a6] text-[0.9em] font-medium">590 Reviews</span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="text-[#222] text-[1em]">
                          200 listed properties
                        </div>
                        <button className="bg-[#163C69] hover:bg-[#254b83] text-white text-[0.9em] font-semibold rounded-[15px] py-2 px-4 flex items-center gap-1 transition-colors">
                          View Profile &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Agent Card 4 */}
                  <div className="bg-[#fff] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-shadow duration-200">
                    <img src="img/person1.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

                    <div className="flex flex-col p-5 gap-2 min-h-[180px] bg-white">
                      {/* Header */}
                      <div className="flex items-center justify-between text-gray-700 text-[0.98em] mb-2">
                        <span className="flex items-center gap-1 text-[0.93em]">
                          Agent 
                          <span className="text-[#3571a6] flex items-center">
                            <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain" />
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[#1bbf54] font-semibold text-[0.95em]">
                          Active <span className="text-[#1bbf54] text-[1em]">&#9679;</span>
                        </span>
                      </div>

                      {/* Name */}
                      <div className="font-raleway font-bold text-[1.23em] text-[#222] mt-4 mb-5">
                        Ugochukwu Pius
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 text-yellow-500 text-[1em] mb-3">
                        <span>★★★★★</span>
                        <span className="text-[#3571a6] text-[0.9em] font-medium">590 Reviews</span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="text-[#222] text-[1em]">
                          200 listed properties
                        </div>
                        <button className="bg-[#163C69] hover:bg-[#254b83] text-white text-[0.9em] font-semibold rounded-[15px] py-2 px-4 flex items-center gap-1 transition-colors">
                          View Profile &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Agent Card 5 */}
                  <div className="bg-[#fff] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-shadow duration-200">
                    <img src="img/person1.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

                    <div className="flex flex-col p-5 gap-2 min-h-[180px] bg-white">
                      {/* Header */}
                      <div className="flex items-center justify-between text-gray-700 text-[0.98em] mb-2">
                        <span className="flex items-center gap-1 text-[0.93em]">
                          Agent 
                          <span className="text-[#3571a6] flex items-center">
                            <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain" />
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[#1bbf54] font-semibold text-[0.95em]">
                          Active <span className="text-[#1bbf54] text-[1em]">&#9679;</span>
                        </span>
                      </div>

                      {/* Name */}
                      <div className="font-raleway font-bold text-[1.23em] text-[#222] mt-4 mb-5">
                        Ugochukwu Pius
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 text-yellow-500 text-[1em] mb-3">
                        <span>★★★★★</span>
                        <span className="text-[#3571a6] text-[0.9em] font-medium">590 Reviews</span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="text-[#222] text-[1em]">
                          200 listed properties
                        </div>
                        <button className="bg-[#163C69] hover:bg-[#254b83] text-white text-[0.9em] font-semibold rounded-[15px] py-2 px-4 flex items-center gap-1 transition-colors">
                          View Profile &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Agent Card 6 */}
                  <div className="bg-[#fff] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-shadow duration-200">
                    <img src="img/person1.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

                    <div className="flex flex-col p-5 gap-2 min-h-[180px] bg-white">
                      {/* Header */}
                      <div className="flex items-center justify-between text-gray-700 text-[0.98em] mb-2">
                        <span className="flex items-center gap-1 text-[0.93em]">
                          Agent 
                          <span className="text-[#3571a6] flex items-center">
                            <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain" />
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[#1bbf54] font-semibold text-[0.95em]">
                          Active <span className="text-[#1bbf54] text-[1em]">&#9679;</span>
                        </span>
                      </div>

                      {/* Name */}
                      <div className="font-raleway font-bold text-[1.23em] text-[#222] mt-4 mb-5">
                        Ugochukwu Pius
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 text-yellow-500 text-[1em] mb-3">
                        <span>★★★★★</span>
                        <span className="text-[#3571a6] text-[0.9em] font-medium">590 Reviews</span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="text-[#222] text-[1em]">
                          200 listed properties
                        </div>
                        <button className="bg-[#163C69] hover:bg-[#254b83] text-white text-[0.9em] font-semibold rounded-[15px] py-2 px-4 flex items-center gap-1 transition-colors">
                          View Profile &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

        
              
            </main>
    )
}