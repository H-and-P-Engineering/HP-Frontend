"use client";
import Image from "next/image";
// const images = [
//     // { 
//     //   imagePath: "/banner-image1.webp",
//     // },
//   "/images/banner-image1.webp",
//   "/images/banner-image2.webp",
//   "/images/banner-image1.webp",
// ];
import React, {useState, useEffect} from "react";
export default function BannerCarousel({bannerImages, lineone, heading, children, className=""} : {
  bannerImages: Array<string>;
  lineone: string;
  heading: string;
  // linethree: string;
  children?: React.ReactNode;
  className?: string;

}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>(prevIndex + 1) % bannerImages.length);
      }, 9000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className={`relative w-full h-auto overflow-hidden ${className}`}>
        
        <div className="relative w-full h-[770px]">
          {bannerImages.map((src, index) => (
            // <ul key={index} className="flex-none w-full h-[770px]" >
              <Image
              key={index}
              src={src}
              alt={`Slide ${index + 1}` }
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority={index === 0}
              className={`absolute top-0 left-0 transition-opacity duration-500 ease-in-out h-[770px] min-h-screen w-full
                ${currentIndex === index ? 'opacity-100': 'opacity-0'}`}
            />          
            // {/* </ul> */}
          ))}
        </div>
        <div
          className="absolute w-full z-20 top-60 px-[6vw] flex flex-col items-center justify-center text-center gap-15">
          {children}
        </div>

        {/* banner slider button absolute to banner images */}
        <div className="absolute bottom-2 left-1/2 transform-translate-x-1/2 flex space-x-2">
          {bannerImages.map((_, index) =>
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            />
          )}
        </div>

      </div>
    );

};

