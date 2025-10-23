import Image from "next/image";
import BannerCarousel from "../components/banner-carousel";
import BannerSubtitle from "../components/banner-subtitle";
import BannerH1 from "../components/banner-h1";
import SearchBar from "../components/search-bar";
// import React from "react";
export default function HomeItems() {
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
          <BannerH1>20% Discount and Free<br />Delivery on Home Items</BannerH1>
          {/* Description  */}
          
        </div>
        <SearchBar/>
      </BannerCarousel>

      
      <section className="w-full px-4 sm:px-6 py-10 box-border mx-auto">
        {/* Category Buttons */}
        <div className="flex justify-start items-center gap-2 sm:gap-4 mb-8 w-full flex-nowrap px-2 sm:px-4 overflow-x-auto">
          <button
            className="bg-[#1a3a63] text-white font-raleway font-medium text-[0.8em] border border-[#1a3a63] rounded-[6px] px-4 py-2 cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-[1px] hover:bg-[#254b83] hover:text-white">
            Furniture ▾
          </button>

          <button
            className="bg-transparent text-[#1a3a63] font-raleway font-medium text-[0.8em] border border-[#1a3a63] rounded-[6px] px-4 py-2 cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-[1px] hover:bg-[#1a3a63] hover:text-white">
            Kitchen ▾
          </button>

          <button
            className="bg-transparent text-[#1a3a63] font-raleway font-medium text-[0.8em] border border-[#1a3a63] rounded-[6px] px-4 py-2 cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-[1px] hover:bg-[#1a3a63] hover:text-white">
            Appliances ▾
          </button>

          <button
            className="bg-transparent text-[#1a3a63] font-raleway font-medium text-[0.8em] border border-[#1a3a63] rounded-[6px] px-4 py-2 cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-[1px] hover:bg-[#1a3a63] hover:text-white">
            Decoration ▾
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-8 tracking-wide text-[#191a1d] text-center sm:text-left"></h2>
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

      
      <section className="w-full px-4 sm:px-6 py-10 box-border mx-auto">
        <h2 className="text-3xl font-bold mb-8 tracking-wide text-[#191a1d] text-center sm:text-left">
          Recently added
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

      <section className="w-full px-4 sm:px-6 py-10 box-border mx-auto">
        <h2 className="text-3xl font-bold mb-8 tracking-wide text-[#191a1d] text-center sm:text-left">
          Recently bought
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

      <section className="w-full px-4 sm:px-6 py-10 box-border mx-auto">
        <h2 className="text-3xl font-bold mb-8 tracking-wide text-[#191a1d] text-center sm:text-left">
          Others searched
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
        </div>
      </section>
      
    </main>
    
  );
}
