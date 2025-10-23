import Image from "next/image";
import BannerCarousel from "../components/banner-carousel";
import BackArrowShareButton from "../components/backarrow-sharebutton";
// import React from "react";
export default function HomeItemsDetails() {
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
          <BackArrowShareButton/>
      </BannerCarousel>

      <section className="relative flex flex-col md:flex-row items-start justify-between max-w-[1150px] mx-[5em] my-[2em] mb-[2.5em] gap-[3em] p-0 font-[Inter,Arial,sans-serif]">

        {/* LEFT CONTENT */}
        <div className="flex-[3] min-w-0 w-full">
          <div className="flex justify-between items-center mb-[0.3em]">
            <span className="flex items-center gap-[0.6em] mb-[2.5em] font-raleway text-[1em] font-extralight text-[#00000099]">
              <img src="img/location.png" alt="" className="w-4 align-middle mr-[3px]" /> 
                Ikeja, Lagos
            </span>

            <span className="flex items-center gap-[0.3em] mb-[2.5em] ml-[60em] font-raleway text-[1em] font-medium text-[#1bbf54]">
              Available 
              <span className="text-[#1bbf54] text-[1em]">&#9679;</span>
            </span>
          </div>

          <div className="font-raleway text-[1.5em] font-medium text-[#222] mb-[2em]">Modern Fabric Sofa</div>

          <div className="flex flex-wrap gap-[1.2em] text-[1em] mb-[1.7em]">
            <span className="flex items-center gap-[0.2em] rounded-[5px] px-[0.8em] py-[0.4em] text-[0.95em] text-[#00000099] font-raleway">
              <img src="img/houseicon.png" alt="" className="w-[15px] align-middle mr-[3px]" /> 
                4 Bedroom Duplex
            </span>
            <span className="flex items-center gap-[0.2em] rounded-[5px] px-[0.8em] py-[0.4em] text-[0.95em] text-[#00000099] font-raleway">
              <img src="img/bandlight.png" alt="" className="w-[15px] align-middle mr-[3px]" /> 
                Band A Light
            </span>
            <span className="flex items-center gap-[0.2em] rounded-[5px] px-[0.8em] py-[0.4em] text-[0.95em] text-[#00000099] font-raleway">
              <img src="img/telescope.png" alt="" className="w-[15px] align-middle mr-[3px]" /> 
                500 SQ FT
            </span>
            <span className="flex items-center gap-[0.2em] rounded-[5px] px-[0.8em] py-[0.4em] text-[0.95em] text-[#00000099] font-raleway">
              <img src="img/road.png" alt="" className="w-[15px] align-middle mr-[3px]" /> 
                Good road
            </span>
          </div>

          <div className="text-[1.9em] font-bold text-[#00000099] mt-[0.8em] mb-[2em] font-raleway">N300,000</div>

          <div className="font-raleway text-[1.8em] font-bold text-[#222] mt-[1.25em] mb-[0.35em]">Product Title</div>
          <div className="font-inter text-[1em] text-[#333] mb-[0.7em]">Modern Fabric Sofa Set – 3-Seater + 2-Seater</div>

          <div className="font-raleway text-[1.8em] font-bold text-[#222] mt-[1.25em] mb-[0.35em]">Overview</div>
          <div className="font-inter font-thin text-[1em] text-[#333] mb-[0.7em] leading-[1.6]">
          Add comfort and elegance to your living room with this premium fabric sofa set, designed with soft cushioning, durable frame, and stylish upholstery to blend with any interior. Perfect for families and lounge areas.</div>

          <div className="font-raleway text-[1.8em] font-bold text-[#222] mt-[1.25em] mb-[0.35em]">Key Features</div>
          <ul className="flex flex-col gap-[0.6em] ml-[0.5em] font-inter text-[#333] text-[0.97em]">
            <div className="flex items-center mb-[1.82em]">
              <span className="text-[1.1em] text-[#e34747] mr-[8px]">🧱</span>
              <span><span className="font-bold">Material:</span> High-quality wood frame + soft fabric upholstery</span>
            </div>

            <div className="flex items-center mb-[1.82em]">
              <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">🎨</span>
              <span><span className="font-bold">Color Options:</span> Grey, Beige, Navy Blue</span>
            </div>

            <div className="flex items-center mb-[1.82em]">
              <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">🗃</span>
              <span><span className="font-bold">Set Includes:</span> 1 x 3-Seater, 1 x 2-Seater</span>
            </div>

            <div className="flex items-center mb-[1.82em]">
              <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">🛋</span>
              <span><span className="font-bold">Easy to Clean:</span> Removable cushion covers</span>
            </div>

            <div className="flex items-center mb-[1.82em]">
              <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">💪🏽</span>
              <span><span className="font-bold">Durability:</span> Anti-scratch legs & firm support</span>
            </div>

          </ul>

          <div className="font-raleway text-[1.8em] font-bold text-[#222] mt-[1.25em] mb-[0.6em]">Specifications</div>
          <ul className="flex flex-col gap-[0.6em] ml-[0.5em] font-inter text-[#333] text-[0.97em]">
            <div className="flex items-center mb-[0.6em]">
              <span className="text-[1.2em] text-[black] mr-[8px] leading-none">•</span>
              <span>Dimensions (3-Seater): 210cm (L) x 85cm (W) x 90cm (H)</span>
            </div>

            <div className="flex items-center mb-[0.6em]">
              <span className="text-[1.2em] text-[black] mr-[8px] leading-none">•</span>
              <span>Dimensions (2-Seater): 160cm (L) x 80cm (W) x 90cm (H)</span>
            </div>

            <div className="flex items-center mb-[0.6em]">
              <span className="text-[1.2em] text-[black] mr-[8px] leading-none">•</span>
              <span>Weight Capacity: 400kg combined</span>
            </div>

            <div className="flex items-center">
              <span className="text-[1.2em] text-[black] mr-[8px] leading-none">•</span>
              <span>Warranty: 12 months manufacturer warranty</span>
            </div>
          </ul>

          <div className="font-raleway text-[1.8em] font-bold text-[#222] mt-[1.25em] mb-[0.35em]">Why You’ll Love It</div>
          <ul className="text-[1em] text-[#222] font-inter pl-[1.1em] mt-[0.3em] mb-[0.5em]">
            <li className="flex items-center mb-[1.82em] leading-[1.6]">
                <span className="w-[7px] h-[7px] bg-[black] rounded-full mr-[10px]"></span>
                <span>Adds style and warmth to your home</span>
            </li>
            <li className="flex items-center mb-[1.82em] leading-[1.6]">
                <span className="w-[7px] h-[7px] bg-[black] rounded-full mr-[10px]"></span>
                <span>Comfortable seating for family & guests</span>
            </li>
            <li className="flex items-center mb-[1.82em] leading-[1.6]">
                <span className="w-[7px] h-[7px] bg-[black] rounded-full mr-[10px]"></span>
                <span>Strong build to last for years</span>
            </li>
            <li className="flex items-center mb-[1.82em] leading-[1.6]">
                <span className="w-[7px] h-[7px] bg-[black] rounded-full mr-[10px]"></span>
                <span>Cashback rewards available when purchased on our platform</span>
            </li>
          </ul>
        </div>

        {/* RIGHT: AGENT CARD */}
        <aside className="flex-[1] bg-[#f6f7fb] rounded-[13px] mb-10 shadow-[0_2px_14px_rgba(50,50,93,0.08)] p-9 font-inter max-w-[220px] min-w-[360px] mt-[4em] self-start sm:max-w-[420px] sm:min-w-[420px] sm:p-5 sm:mt-[2em] sm:mx-auto sm:w-full">
          <div className="agent-card-top">
            <div className="font-nunito text-[2.07em] font-extralight mb-4 text-[#222] text-left">Contact Agent</div>
            <div className="flex items-center gap-[0.9em] mb-[0.7em]">
              <img src="img/person5.jpg" alt="Agent" className="w-[100px] h-[100px] rounded-[10%] object-cover bg-[#ddd]" />
              <div className="flex flex-col gap-[0.2em]">
                <span className="text-[0.68em] text-[#193a63]">Agent
                  <span className="inline-flex items-center text-[#3571a6]">
                    <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain ml-1" />
                  </span>
                </span>
                <span className="font-raleway font-normal text-[1.07em]">Ugochukwu Pius</span>
                <span className="font-nunito font-light text-[0.77em]">piusugochukwujohn@gmail.com</span>
                <span className="text-[#1bbf54] text-[0.95em]">Active now&#9679;</span>
              </div>
            </div>
            <button className="bg-white/15 text-[#254b83] font-inter font-semibold text-[1em] border border-[#254b83]/25 rounded-[10px] py-[0.8em] px-[1em] w-full mt-[2.2em] mb-[0.9em] backdrop-blur-[10px] shadow-[0_4px_14px_rgba(37,75,131,0.15)] transition-all duration-200 flex items-center justify-center gap-[0.4em] hover:bg-[#254b83]/10 hover:shadow-[0_6px_18px_rgba(37,75,131,0.25)] active:scale-95">
              <i className="fi fi-sr-comments"></i>
              Start Conversation
            </button>
          </div>
        </aside>
      </section>

      <section className="min-h-screen -mt-8 font-raleway font-normal flex items-start px-6 py-12 ml-4 md:ml-16 lg:ml-24">
        {/* Container aligned left with lots of right whitespace (like the reference) */}
        <section className="w-full max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6">Reviews & Rating</h2>

          {/* Scrollable list of reviews */}
          <div className="space-y-6 max-h-[76vh] overflow-y-auto pr-4">
            {/* Review item */}
            <article className="flex flex-col gap-3 border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3">
                {/* Stars */}
                <div className="flex items-center space-x-0.5" aria-hidden="true">
                  {/* 4 filled, 1 empty */}
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-slate-200" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                </div>
              </div>

              {/* Title + text */}
              <div>
                <h3 className="text-sm font-semibold">Great Quality Sofa</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  The sofa set was exactly as described. Very comfortable and delivered on time.<br/> I would have loved more color options, but overall a great purchase.
                </p>
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm font-medium">Chinedu Michael</span>
                <span className="text-sm text-slate-500">Verified Buyer</span>
                <span className="ml-1 inline-flex items-center justify-center w-4 h-4 bg-emerald-50 rounded-full">
                  <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293A1 1 0 006.293 9.707l2 2a1 1 0 001.414 0l4-4z"/></svg>
                </span>
              </div>
            </article>

            {/* Duplicate review items - copy/paste to simulate the list shown in the image */}
            <article className="flex flex-col gap-3 border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center space-x-0.5" aria-hidden="true">
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-slate-200" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold">Great Quality Sofa</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  The sofa set was exactly as described. Very comfortable and delivered on time.<br/> I would have loved more color options, but overall a great purchase.
                </p>
              </div>

              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm font-medium">Chinedu Michael</span>
                <span className="text-sm text-slate-500">Verified Buyer</span>
                <span className="ml-1 inline-flex items-center justify-center w-4 h-4 bg-emerald-50 rounded-full">
                  <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293A1 1 0 006.293 9.707l2 2a1 1 0 001.414 0l4-4z"/></svg>
                </span>
              </div>
            </article>

            {/* Third */}
            <article className="flex flex-col gap-3 border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center space-x-0.5" aria-hidden="true">
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-slate-200" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold">Great Quality Sofa</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  The sofa set was exactly as described. Very comfortable and delivered on time.<br/> I would have loved more color options, but overall a great purchase.
                </p>
              </div>

              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm font-medium">Chinedu Michael</span>
                <span className="text-sm text-slate-500">Verified Buyer</span>
                <span className="ml-1 inline-flex items-center justify-center w-4 h-4 bg-emerald-50 rounded-full">
                  <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293A1 1 0 006.293 9.707l2 2a1 1 0 001.414 0l4-4z"/></svg>
                </span>
              </div>
            </article>

            {/* Fourth */}
            <article className="flex flex-col gap-3 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center space-x-0.5" aria-hidden="true">
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                  <svg className="w-4 h-4 text-slate-200" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"/></svg>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold">Great Quality Sofa</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  The sofa set was exactly as described. Very comfortable and delivered on time.<br/> I would have loved more color options, but overall a great purchase.
                </p>
              </div>

              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm font-medium">Chinedu Michael</span>
                <span className="text-sm text-slate-500">Verified Buyer</span>
                <span className="ml-1 inline-flex items-center justify-center w-4 h-4 bg-emerald-50 rounded-full">
                  <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293A1 1 0 006.293 9.707l2 2a1 1 0 001.414 0l4-4z"/></svg>
                </span>
              </div>
            </article>
          </div>
        </section>
      </section>

      <section className="w-screen max-w-[1200px] px-4 sm:px-6 py-10 mx-auto">
        <h2 className="text-3xl mb-8 tracking-wide text-[#191a1d] font-raleway font-semibold text-center sm:text-left">
            Customers Also Viewed
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
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

          {/* Card 2 */}
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

          {/* Card 3 */}
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
