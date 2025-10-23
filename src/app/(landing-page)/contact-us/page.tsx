import SelectedOption from "../components/form-select";
import Image from "next/image";
import BannerCarousel from "../components/banner-carousel";
import BannerSubtitle from "../components/banner-subtitle";
import BannerH1 from "../components/banner-h1";
// import React from "react";
export default function ContactUs() {
  const bannerImages = [
    '/images/banner-image1.webp',
    '/images/banner-image2.webp',
    '/images/banner-image1.webp',
  ];
  const selectOptions = [
    {value: 'Type subject', label: 'Type subject'},
    {value: 'Property Inquiry', label: 'Property Inquiry'},
    {value: 'Agent Inquiry', label: 'Agent Inquiry'},
    {value: 'Account Issue', label: 'Account Issue'},
    {value: 'Other', label: 'Other'},
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
          <BannerSubtitle>Got a question or need support?</BannerSubtitle>
          {/* Heading */}
          <BannerH1>Talk to us anytime,<br />anywhere</BannerH1>
          {/* Description  */}
        </div>
      </BannerCarousel>

      {/* CONTACT FORM */}
      <section className="w-full mt-12 mb-8 pl-12 pr-6 text-left">
        <h2 className="text-xl font-bold text-[#191a1d] mb-4 text-left">
          Questions about properties, agents, or your account? We’ll reply shortly
        </h2>
        <h3 className="text-lg font-semibold mb-6 text-left text-[#191a1d]">Fill out the form</h3>

        <form className="flex flex-col gap-5 w-full max-w-xl">
          <div>
            <label className="font-medium text-gray-800 mb-1 block">Full name</label>
            <input type="text" placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 py-3 focus:border-[#3571a6] outline-none" required />
          </div>
          <div>
            <label className="font-medium text-gray-800 mb-1 block">Email Address</label>
            <input type="email" placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-3 focus:border-[#3571a6] outline-none" required />
          </div>
          <div>
            <label className="font-medium text-gray-800 mb-1 block">Phone Number</label>
            <input type="text" placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-md px-3 py-3 focus:border-[#3571a6] outline-none" required />
          </div>
          <SelectedOption 
              label="Subject"
              defaultValue="Type subject"
              selectOptions={selectOptions}
          />
          <div>
            <label className="font-medium text-gray-800 mb-1 block">Message</label>
            <textarea placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-md px-3 py-3 focus:border-[#3571a6] outline-none min-h-[120px]"
              required></textarea>
          </div>

          <div className="flex items-center justify-start flex-wrap gap-3 mt-3">
            <div className="flex gap-3">
              <a href="#"><img src="img/instagram.jpg" className="w-6 h-6" alt="Instagram" /></a>
              <a href="#"><img src="img/face.png" className="w-6 h-6" alt="Facebook" /></a>
              <a href="#"><img src="img/tik.jpg" className="w-6 h-6" alt="TikTok" /></a>
              <a href="#"><img src="img/xx.jpg" className="w-6 h-6" alt="X" /></a>
            </div>
            <button type="submit"
              className="bg-[#193a63] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#254b83] transition flex items-center gap-2 ml-[250px]">
              Send message →
            </button>
          </div>
        </form>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-red mt-[100px] pl-12 pr-6 text-left py-16">
        <div className="flex flex-wrap justify-start gap-20 mb-6">
          <div className="text-[#000000]">
            <h4 className="font-bold text-lg mr-[150px] mb-2">Call Center</h4>
            <p>+234 81 234 567 89<br/>+234 81 234 567 89</p>
          </div>
          <div className="text-[#000000]">
            <h4 className="font-bold text-lg mr-[150px] text-[#000000] mb-2">Office Address</h4>
            <p>Ikeja, Lagos</p>
          </div>
          <div className="text-[#000000]">
            <h4 className="font-bold text-lg text-[#000000] mb-2">Email Address</h4>
            <p>H&amp;p@gmail.com</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden sm:w-full sm:h-[520px]">
          {/* <img src="img/map.png" alt="Map showing Lagos location" className="w-full h-[400px] object-cover" /> */}
          <Image
              src="/images/google-map.webp"
              alt="Google Map of Lagos area"
              width={1200}
              height={582}
              // layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="block w-full h-full object-cover"
            />
        </div>
      </section>
     
    </main>
    
  );
}
