import Image from "next/image";
import BannerCarousel from "./components/banner-carousel";
import BannerSubtitle from "./components/banner-subtitle";
import BannerH1 from "./components/banner-h1";
import FilterLandHouse from "./components/filter-properties";
// import React from "react";
export default function Home() {
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
          <BannerH1>Find Your Dream Home, Land,<br />or Furniture in One Place</BannerH1>
          {/* Description  */}
          <div
            className="text-[1.15em] font-light text-white leading-[1.5]">
            Browse verified listings, chat with
            <span
              className="bg-[#ffd900a6] text-[#222] rounded-[5px] px-[0.25em] py-[0.1em] font-semibold mx-[2px]"
              >trusted agents
            </span>,
              and enjoy<br />
              secure transactions with
            <span
              className="bg-[#ffd900a6] text-[#222] rounded-[5px] px-[0.25em] py-[0.1em] font-semibold mx-[2px]"
              >cashback
            </span>
              rewards.
          </div>
          {/* Get Started Button */}
          <button
            className="bg-white text-[#193a63] font-[Raleway] text-[1.17em] font-[400] rounded-[12px] px-[2.6em] py-[0.7em] mt-[0.6em] shadow-[0_2px_12px_0_rgba(50,50,93,0.03)] flex items-center gap-[0.7em] transition-colors duration-150 hover:bg-[#e1e9f6] hover:text-[#254b83] cursor-pointer">
            Get started &rarr;
          </button>
        </div>
        <FilterLandHouse/>
      </BannerCarousel>

      

      {/* home items */}
      <section className="w-full px-4 sm:px-6 py-10 box-border mx-auto">
        <h2 className="text-3xl font-bold mb-8 tracking-wide text-[#191a1d] text-center sm:text-left">
          Home items
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1  */}
          <div className="bg-[#E8E5E533] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col relative transition-shadow duration-200">
            <div className="relative w-full h-[250px] bg-gray-300 overflow-hidden rounded-t-[18px]">
              <img src="img/sofa.jpg" alt="Sofa" className="w-full h-full object-cover block" />
              <button className="absolute top-4 right-4 w-[39px] h-[39px] flex items-center justify-center rounded-full text-[#e34747] text-[1.5em] shadow-md transition-colors duration-150 bg-none border-none cursor-pointer">🤍</button>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1 text-[#e34747] text-sm">
                  <img src="img/location.png" alt="Location" className="w-4 h-4" /> Ikeja, Lagos
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

              <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-1">
                Sofa
              </div>

              <div className="text-gray-500 text-sm mt-1">
                <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 590 Reviews
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="font-raleway font-bold text-[1.08em] text-[#191a1d]">
                  N400,000
                </div>
                <button className="bg-[#193a63] hover:bg-[#0f2b4a] text-white text-sm font-semibold rounded-[24px] py-2 px-4 flex items-center gap-1 transition-colors">
                  View details &rarr;
                </button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#E8E5E533] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col relative transition-shadow duration-200">
            <div className="relative w-full h-[250px] bg-gray-300 overflow-hidden rounded-t-[18px]">
              <img src="img/pillow.jpg" alt="Sofa" className="w-full h-full object-cover block" />
              <button className="absolute top-4 right-4 w-[39px] h-[39px] flex items-center justify-center rounded-full text-[#e34747] text-[1.5em] shadow-md transition-colors duration-150 bg-none border-none cursor-pointer">🤍</button>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1 text-[#e34747] text-sm">
                  <img src="img/location.png" alt="Location" className="w-4 h-4" /> Ikeja, Lagos
                </div>

                <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                  <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                    Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                  </span>
                  <img src="img/person2.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                  <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                  <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                </div>
              </div>

              <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-1">
                Sofa
                Bed Frame
              </div>

              <div className="text-gray-500 text-sm mt-1">
                <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 590 Reviews
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="font-raleway font-bold text-[1.08em] text-[#191a1d]">
                  N400,000
                </div>
                <button className="bg-[#193a63] hover:bg-[#0f2b4a] text-white text-sm font-semibold rounded-[24px] py-2 px-4 flex items-center gap-1 transition-colors">
                  View details &rarr;
                </button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#E8E5E533] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col relative transition-shadow duration-200">
            <div className="relative w-full h-[250px] bg-gray-300 overflow-hidden rounded-t-[18px]">
              <img src="img/bedsheet.jpg" alt="Sofa" className="w-full h-full object-cover block" />
              <button className="absolute top-4 right-4 w-[39px] h-[39px] flex items-center justify-center rounded-full text-[#e34747] text-[1.5em] shadow-md transition-colors duration-150 bg-none border-none cursor-pointer">🤍</button>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1 text-[#e34747] text-sm">
                  <img src="img/location.png" alt="Location" className="w-4 h-4" /> Ikeja, Lagos
                </div>

                <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                  <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                    Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                  </span>
                  <img src="img/person3.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                  <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                  <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                </div>
              </div>

              <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-1">
                Sofa
                Bedding Set
              </div>

              <div className="text-gray-500 text-sm mt-1">
                <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 590 Reviews
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="font-raleway font-bold text-[1.08em] text-[#191a1d]">
                  N400,000
                </div>
                <button className="bg-[#193a63] hover:bg-[#0f2b4a] text-white text-sm font-semibold rounded-[24px] py-2 px-4 flex items-center gap-1 transition-colors">
                  View details &rarr;
                </button>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-[#E8E5E533] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col relative transition-shadow duration-200">
            <div className="relative w-full h-[250px] bg-gray-300 overflow-hidden rounded-t-[18px]">
              <img src="img/fridge.jpg" alt="Sofa" className="w-full h-full object-cover block" />
              <button className="absolute top-4 right-4 w-[39px] h-[39px] flex items-center justify-center rounded-full text-[#e34747] text-[1.5em] shadow-md transition-colors duration-150 bg-none border-none cursor-pointer">🤍</button>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1 text-[#e34747] text-sm">
                  <img src="img/location.png" alt="Location" className="w-4 h-4" /> Ikeja, Lagos
                </div>

                <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                  <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                    Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                  </span>
                  <img src="img/person4.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                  <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                  <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                </div>
              </div>

              <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-1">
                Sofa
                Refrigerator
              </div>

              <div className="text-gray-500 text-sm mt-1">
                <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 590 Reviews
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="font-raleway font-bold text-[1.08em] text-[#191a1d]">
                  N400,000
                </div>
                <button className="bg-[#193a63] hover:bg-[#0f2b4a] text-white text-sm font-semibold rounded-[24px] py-2 px-4 flex items-center gap-1 transition-colors">
                  View details &rarr;
                </button>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-[#E8E5E533] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col relative transition-shadow duration-200">
            <div className="relative w-full h-[250px] bg-gray-300 overflow-hidden rounded-t-[18px]">
              <img src="img/ac.jpg" alt="Sofa" className="w-full h-full object-cover block" />
              <button className="absolute top-4 right-4 w-[39px] h-[39px] flex items-center justify-center rounded-full text-[#e34747] text-[1.5em] shadow-md transition-colors duration-150 bg-none border-none cursor-pointer">🤍</button>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1 text-[#e34747] text-sm">
                  <img src="img/location.png" alt="Location" className="w-4 h-4" /> Ikeja, Lagos
                </div>

                <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                  <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                    Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                  </span>
                  <img src="img/person5.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                  <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                  <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                </div>
              </div>

              <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-1">
                Sofa
                Air Conditioner
              </div>

              <div className="text-gray-500 text-sm mt-1">
                <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 590 Reviews
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="font-raleway font-bold text-[1.08em] text-[#191a1d]">
                  N400,000
                </div>
                <button className="bg-[#193a63] hover:bg-[#0f2b4a] text-white text-sm font-semibold rounded-[24px] py-2 px-4 flex items-center gap-1 transition-colors">
                  View details &rarr;
                </button>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-[#E8E5E533] rounded-[18px] shadow-md hover:shadow-lg overflow-hidden flex flex-col relative transition-shadow duration-200">
            <div className="relative w-full h-[250px] bg-gray-300 overflow-hidden rounded-t-[18px]">
              <img src="img/generator.jpg" alt="Sofa" className="w-full h-full object-cover block" />
              <button className="absolute top-4 right-4 w-[39px] h-[39px] flex items-center justify-center rounded-full text-[#e34747] text-[1.5em] shadow-md transition-colors duration-150 bg-none border-none cursor-pointer">🤍</button>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1 text-[#e34747] text-sm">
                  <img src="img/location.png" alt="Location" className="w-4 h-4" /> Ikeja, Lagos
                </div>

                <div className="grid grid-cols-[auto_1fr] grid-areas-['label_label''avatar_name''stars_stars''see_see'] justify-items-end text-right gap-x-1.5 text-[#193a63] font-raleway scale-[0.95]">
                  <span className="col-span-2 text-[13px] text-gray-500 flex items-center justify-end gap-[4px]">
                    Listing Agent <i className="text-[#1d9bf0] text-[11px]">●</i>
                  </span>
                  <img src="img/person6.jpg" className="w-[32px] h-[32px] rounded-full object-cover border border-[#ccc] justify-self-end -mt-1 sm:-mt-2" alt="" />
                  <span className="font-bold text-[15px]">Ugochukwu Pius</span>
                  <span className="col-span-2 text-[#ffa700] text-[14px] tracking-[1px] justify-self-end">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span className="col-span-2 text-[#3571a6] text-[13px] underline cursor-pointer justify-self-end font-medium">See more</span>
                </div>
              </div>

              <div className="font-raleway font-bold text-[1.35em] text-[#191a1d] -mt-1">
                Sofa
                Generator
              </div>

              <div className="text-gray-500 text-sm mt-1">
                <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 590 Reviews
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="font-raleway font-bold text-[1.08em] text-[#191a1d]">
                  N400,000
                </div>
                <button className="bg-[#193a63] hover:bg-[#0f2b4a] text-white text-sm font-semibold rounded-[24px] py-2 px-4 flex items-center gap-1 transition-colors">
                  View details &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* top rated agents */}
      <section className="w-full px-4 sm:px-6 py-10 box-border mx-auto">
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
            <img src="img/person2.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

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
            <img src="img/person3.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

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
            <img src="img/person3.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

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
            <img src="img/person3.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

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
            <img src="img/person3.jpg" alt="Agent 1" className="w-full h-[250px] object-cover bg-gray-300" />

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

      {/* How it works */}
      <section className="w-full bg-white py-12 box-border font-inter mt-6 mb-5">
        <div className="mx-auto flex flex-wrap justify-between gap-8">

          {/* Left Content */}
          <div className="flex-1 min-w-[240px] max-w-[370px] flex flex-col justify-start pl-4">
            <h2 className="font-raleway text-[2.3rem] font-bold text-[#191a1d] mb-6">How it works</h2>
            <p className="text-[1.15em] text-[#222] mb-8 leading-relaxed">
              Finding a home shouldn’t be stressful.<br/>
              We connect you with trusted agents and vendors. All in one secure and easy-to-use platform.
            </p>
            <button className="bg-[#193c69] hover:bg-[#254b83] text-white font-medium rounded-[12px] py-3 px-9 transition-colors inline-block">
              Get started &rarr;
            </button>
          </div>

          {/* Steps */}
          <div className="flex-2 flex flex-col justify-end gap-12 min-w-[320px]">

            {/* Step 1 */}
            <div className="flex flex-col sm:flex-row items-center justify-end sm:items-start gap-6 sm:ml-[12em]">
              <span className="bg-[#193c69] text-white font-inter font-bold text-[2.1em] w-[60px] h-[60px] flex items-center justify-center rounded-full">1</span>
              <div className="flex items-center gap-6 bg-[#fafbfc] rounded-[10px] shadow-[0_2px_12px_rgba(50,50,93,0.07)] p-5 min-h-[90px] w-full sm:w-[400px]">
                <img src="img/howitlisting.png" alt="Browse Listings" className="w-[60px] h-[60px] object-contain rounded-[11px]"/>
                <div>
                  <div className="font-raleway text-[1.22em] font-bold text-[#222] mb-1">Browse Listings</div>
                  <div className="font-raleway text-[1em] text-[#222]">Search apartments, lands, and home items that fit your needs</div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:ml-[3em]">
              <span className="bg-[#193c69] text-white font-inter font-bold text-[2.1em] w-[60px] h-[60px] flex items-center justify-center rounded-full">2</span>
              <div className="flex items-center gap-6 bg-[#fafbfc] rounded-[10px] shadow-[0_2px_12px_rgba(50,50,93,0.07)] p-5 min-h-[90px] w-full sm:w-[400px]">
                <img src="img/howitchat.png" alt="Connect & Chat" className="w-[60px] h-[60px] object-contain rounded-[11px]"/>
                <div>
                  <div className="font-raleway text-[1.22em] font-bold text-[#222] mb-1">Connect & Chat</div>
                  <div className="font-raleway text-[1em] text-[#222]">Message trusted agents or vendors instantly within the website</div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col sm:flex-row items-center justify-end sm:items-start gap-6 sm:ml-[12em]">
              <span className="bg-[#193c69] text-white font-inter font-bold text-[2.1em] w-[60px] h-[60px] flex items-center justify-center rounded-full">3</span>
              <div className="flex items-center gap-6 bg-[#fafbfc] rounded-[10px] shadow-[0_2px_12px_rgba(50,50,93,0.07)] p-5 min-h-[90px] w-full sm:w-[400px]">
                <img src="img/reward.png" alt="Buy & Earn Rewards" className="w-[60px] h-[60px] object-contain rounded-[11px]"/>
                <div>
                  <div className="font-raleway text-[1.22em] font-bold text-[#222] mb-1">Buy & Earn Rewards</div>
                  <div className="font-raleway text-[1em] text-[#222]">Complete secure transactions and enjoy cashback on deals</div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>

      <section className="w-full h-[500px] relative font-inter">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/cashbackimage.webp')] bg-center bg-cover"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(18,28,47,0.45)] z-10"></div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-[800px] mx-auto text-center px-4 py-12 flex flex-col items-center justify-center h-full text-white">
          <h2 className="font-raleway text-[2.6em] font-bold mb-4">Get Cashback on Every Deal</h2>
          <div className="font-raleway text-[1.55em] font-normal leading-tight">
            Buy land, apartments, or home items<br/>
            and earn up to 2% cashback instantly
          </div>
        </div>

        {/* Decorative Elements (Optional) */}
        <div className="absolute z-30 w-auto h-auto left-[4vw] top-[22%] deco-1">
          <Image src={'/images/cashbackdecor1.webp'} width={68.49} height={139.64} alt="banner" className="bg-transparent"/>
        </div>
        <div className="absolute z-30 w-auto h-auto left-[7vw] bottom-[6%] deco-2">
          <Image src={'/images/cashbach.webp'} width={91.72} height={128.58} alt="banner" className="bg-transparent"/>
        </div>
        <div className="absolute z-30 w-auto h-auto right-[4vw] top-[16%] deco-3">
          <Image src={'/images/cashbackdecor3.webp'} width={68.49} height={139.64} alt="banner" className="bg-transparent"/>
        </div>
        <div className="absolute z-30 w-auto h-auto right-[6vw] bottom-[8%] deco-4">
          <Image src={'/images/cashbackdecor4.webp'} width={91.72} height={128.58} alt="banner" className="bg-transparent"/>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="w-full bg-white font-inter py-12 mt-6 mb-10 box-border">
        <div className="mx-auto flex flex-wrap gap-8 justify-between px-4">
          {/* Left: Title and Description */}
          <div className="flex-1 min-w-[280px] pl-4 flex flex-col justify-start items-start mt-20">
            <h2 className="font-raleway text-[2.8em] font-bold mb-2 leading-tight text-[#191a1d]">
              What our<br/>customers says
            </h2>
            <p className="text-[1.14em] text-[#222] leading-relaxed mb-10">
              Real experiences from people like you.<br/>
              See how buyers, agents, and vendors<br/>
              are making the most of our platform.
            </p>
            <button className="bg-[#193C69] hover:bg-[#254b83] text-white text-[1.12em] font-medium rounded-[12px] py-2.5 px-9 transition-colors mb-10">
              View more &rarr;
            </button>
          </div>
          {/* Right: Testimonials */}
          <div className="flex-2 flex flex-col gap-8 justify-center items-center mt-4 w-full sm:w-auto">

            {/* Testimonial 1 (pushed right) */}
            <div className="relative bg-[#fafbfc] shadow-md rounded-lg flex items-center gap-5 p-4 min-w-[350px] max-w-[500px] sm:translate-x-24">
              <img src="img/customer1.jpg" alt="Customer photo" className="w-[80px] h-[80px] rounded-full object-cover border border-[#ccc]"/>
              <div className="flex flex-col gap-1 min-w-[180px]">
                <div className="font-raleway text-[1.32em] font-bold text-[#191a1d]">Chinedu A.</div>
                <div className="text-[1em] text-[#222] leading-snug">
                  I found my new apartment in less than a week. The process was smooth, and I loved being able to chat directly with the agent. Plus, the cashback reward was a nice bonus
                </div>
              </div>
              <div className="absolute right-5 top-7 text-[2.6em] font-raleway text-[#193C69] opacity-60">&#8221;</div>    
            </div>
            {/* Testimonial 2 (pushed left) */}
            <div className="relative bg-[#fafbfc] shadow-md rounded-lg flex items-center gap-5 p-4 min-w-[350px] max-w-[500px] sm:-translate-x-24">
              <img src="img/customer2.jpg" alt="Customer photo" className="w-[80px] h-[80px] rounded-full object-cover border border-[#ccc]"/>
              <div className="flex flex-col gap-1 min-w-[180px]">
                <div className="font-raleway text-[1.32em] font-bold text-[#191a1d]">Chinedu A.</div>
                <div className="text-[1em] text-[#222] leading-snug">
                  I found my new apartment in less than a week. The process was smooth, and I loved being able to chat directly with the agent. Plus, the cashback reward was a nice bonus
                </div>
              </div>
              <div className="absolute right-5 top-7 text-[2.6em] font-raleway text-[#193C69] opacity-60">&#8221;</div>
            </div>

            {/* Testimonial 3 (pushed right) */}
            <div className="relative bg-[#fafbfc] shadow-md rounded-lg flex items-center gap-5 p-4 min-w-[350px] max-w-[500px] sm:translate-x-24">
              <img src="img/customer3.jpg" alt="Customer photo" className="w-[80px] h-[80px] rounded-full object-cover border border-[#ccc]"/>
              <div className="flex flex-col gap-1 min-w-[180px]">
                <div className="font-raleway text-[1.32em] font-bold text-[#191a1d]">Chinedu A.</div>
                <div className="text-[1em] text-[#222] leading-snug">
                  I found my new apartment in less than a week. The process was smooth, and I loved being able to chat directly with the agent. Plus, the cashback reward was a nice bonus
                </div>
              </div>
              <div className="absolute right-5 top-7 text-[2.6em] font-raleway text-[#193C69] opacity-60">&#8221;</div>
            </div>
          </div>
        </div>  
      </section>

      {/* You can add more sections here as needed inside the .wrapper */}
  
      <section className="newsletter-section w-full bg-white font-inter py-12 px-4 ">
        <div className="newsletter-wrapper max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Left: Newsletter Info */}
          <div className="newsletter-info flex-1 md:flex-auto md:pl-4">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-[#191a1d] mb-4">
              Our Newsletter
            </h2>
            <p className="text-lg md:text-xl text-[#222] leading-relaxed">
              Stay updated with the latest property listings,<br/>
              market tips, and exclusive cashback deals.
            </p>
          </div>

          {/* Right: Signup Form */}
          <form className="newsletter-form flex-1 md:flex-auto flex flex-col gap-4 md:gap-6 mt-6 md:mt-0" id="newsletterForm" >
            <h3 className="text-2xl font-raleway font-bold text-[#191a1d] mb-2">Sign up</h3>
            <input type="text" name="fullname" placeholder="Full name" required 
              className="w-full text-[1.15em] font-raleway font-normal px-4 py-4 rounded bg-[#eae8e8] text-[#222] focus:outline-2 focus:outline-[#3571a6] focus:bg-[#f7f7f7]" />
            <input type="email" name="email" placeholder="Email address" required 
              className="w-full text-[1.15em] font-raleway font-normal px-4 py-4 rounded bg-[#eae8e8] text-[#222] focus:outline-2 focus:outline-[#3571a6] focus:bg-[#f7f7f7]" />
            <button type="submit" 
              className="bg-[#193C69] hover:bg-[#254b83] text-white text-[1.05em] font-semibold rounded-[15px] py-3 px-6 transition-colors">
              Subscribe &rarr;
            </button>
          </form>
        </div>
      </section>
      
    </main>
    
  );
}
