import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import BannerCarousel from "../components/banner-carousel";
import BannerSubtitle from "../components/banner-subtitle";
import BannerH1 from "../components/banner-h1";
import FilterLandHouse from "../components/filter-properties";
// import React from "react";
export default function PropertiesItems() {
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
          <BannerSubtitle>Browse. Connect. Buy. Settle in</BannerSubtitle>
          {/* Heading */}
          <BannerH1>Discover all listed homes<br />and spaces</BannerH1>
          {/* Description  */}
          
        </div>
        <FilterLandHouse/>
      </BannerCarousel>

      {/* Featured Properties */}
      <section className="w-screen mx-auto bg-white py-16 px-4 flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col items-center sm:items-start">

          {/* Category Buttons */}
          <div className="flex justify-start items-center flex-wrap gap-6 mb-10">
            <button
              className="bg-[#1a3a63] text-white font-raleway font-semibold text-[1.05em] border-2 border-[#1a3a63] rounded-[10px] px-8 py-3 cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:bg-[#1a3a63] hover:text-white">
              Houses
            </button>

            <button
              className="bg-transparent text-[#1a3a63] font-raleway font-semibold text-[1.05em] border-2 border-[#1a3a63] rounded-[10px] px-8 py-3 cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:bg-[#1a3a63] hover:text-white">
              Lands
            </button>

            <button
              className="bg-transparent text-[#1a3a63] font-raleway font-semibold text-[1.05em] border-2 border-[#1a3a63] rounded-[10px] px-8 py-3 cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:bg-[#1a3a63] hover:text-white">
              Rent
            </button>
          </div>

          <div className="flex items-center w-full mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide text-[#191a1d] text-center sm:text-left font-raleway">
              Available
            </h2>
            <div className="ml-auto flex items-center gap-0.5">
              <a className="text-[blue] underline">See all</a>
              <FaChevronRight className=" text-[black] -mt-1" />
            </div>
          </div>
          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 w-full">
            {/* Card 1 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recently added */}
      <section className="w-screen mx-auto bg-white py-16 px-4 flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col items-center sm:items-start">
          <div className="flex items-center w-full mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide text-[#191a1d] text-center sm:text-left font-raleway">
              Recently added
            </h2>
            <div className="ml-auto flex items-center gap-0.5">
              <a className="text-[blue] underline">See all</a>
              <FaChevronRight className=" text-[black] -mt-1" />
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 w-full">
            {/* Card 1 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recently bought */}
      <section className="w-screen mx-auto bg-white py-16 px-4 flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col items-center sm:items-start">
          <div className="flex items-center w-full mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide text-[#191a1d] text-center sm:text-left font-raleway">
              Recently bought
            </h2>
            <div className="ml-auto flex items-center gap-0.5">
              <a className="text-[blue] underline">See all</a>
              <FaChevronRight className=" text-[black] -mt-1" />
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 w-full">
            {/* Card 1 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Others searched */}
      <section className="w-screen mx-auto bg-white py-16 px-4 flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col items-center sm:items-start">
          <div className="flex items-center w-full mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide text-[#191a1d] text-center sm:text-left font-raleway">
              Others searched
            </h2>
            <div className="ml-auto flex items-center gap-0.5">
              <a className="text-[blue] underline">See all</a>
              <FaChevronRight className=" text-[black] -mt-1" />
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 w-full">
            {/* Card 1 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#E8E5E533] rounded-[18px] shadow-[0_6px_28px_0_rgba(50,50,93,0.08)] hover:shadow-[0_12px_32px_0_rgba(50,50,93,0.13)] transition-shadow flex flex-col overflow-hidden">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img src="img/house5.jpg" alt="Akora Estate" className="w-full h-full object-cover" />
                <button className="absolute top-4 right-5 text-[#e34747] text-[1.5em] bg-transparent border-none rounded-full w-[39px] h-[39px] flex items-center justify-center shadow-[0_2px_8px_rgba(50,50,93,0.09)]">🤍</button>
              </div>

              <div className="flex flex-col gap-2.5 px-3 py-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-[#e34747] text-sm font-inter">
                    <img src="img/location.png" alt="Location" className="w-[15px] mr-1.5 mb-[2px]" />
                    Ikeja, Lagos
                  </div>

                  <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                    <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                      Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                    </span>
                    <img src="img/person1.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                    <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                    <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                  </div>
                </div>

                {/* Title */}
                <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-2">Akora Estate</div>

                {/* Tags */}
                <div className="flex gap-6 text-[#191a1d] text-[0.70rem] font-inter mt-4 mb-3">
                  <span className="flex items-center gap-1.5">
                    <img src="img/houseicon.png" className="w-4 h-4" alt="" /> 4 Bedroom Duplex
                  </span>
                  <span className="flex items-center gap-1.5 ">
                    <img src="img/bandlight.png" className="w-4 h-4" alt="" /> Band A Light
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="img/telescope.png" className="w-4 h-4" alt="" /> 500 SQ FT
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-2">
                  <div className="font-raleway text-[1.08em] font-bold text-[#191a1d] whitespace-nowrap">N150 million</div>
                  <button className="bg-[#163C69] hover:bg-[#0f2b4a] text-white font-inter text-[15px] font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition-all">View details &rarr;</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      
    </main>
    
  );
}
