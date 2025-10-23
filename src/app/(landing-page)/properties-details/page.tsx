import Image from "next/image";
import BackArrowShareButton from "../components/backarrow-sharebutton";
import BannerCarousel from "../components/banner-carousel";
export default function PropertiesDetails() {
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

                  <div className="font-raleway text-[1.5em] font-medium text-[#222] mb-[2em]">Akora Estate</div>

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

                  <div className="text-[1.9em] font-bold text-[#00000099] mt-[0.8em] mb-[2em] font-raleway">N150 million</div>

                  <div className="font-raleway text-[1.8em] font-bold text-[#222] mt-[1.25em] mb-[0.35em]">Property Title</div>
                  <div className="font-inter text-[1em] text-[#333] mb-[0.7em]">4-Bedroom Luxury Duplex with Modern Finishes in Ikeja, Lagos</div>

                  <div className="font-raleway text-[1.8em] font-bold text-[#222] mt-[1.25em] mb-[0.35em]">Overview</div>
                  <div className="font-inter font-thin text-[1em] text-[#333] mb-[0.7em] leading-[1.6]">
                    This stunning 4-bedroom duplex offers the perfect blend of modern design,<br /> comfort, and convenience. Located in Akora Estate, the property is designed for <br/>families or professionals seeking both style and functionality in a serene environment.
                  </div>

                  <div className="font-raleway text-[1.8em] font-bold text-[#222] mt-[1.25em] mb-[0.35em]">Key Features</div>
                  <ul className="flex flex-col gap-[0.6em] ml-[0.5em] font-inter text-[#333] text-[0.97em]">
                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#e34747] mr-[8px]">🛌</span>
                      <span><span className="font-bold">4 Spacious Bedrooms</span> (all ensuite with wardrobes)</span>
                    </div>
                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#e34747] mr-[8px]">🛀</span>
                      <span><span className="font-bold">5 Bathrooms</span> including a visitor's toilet</span>
                    </div>

                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">🍽</span>
                      <span><span className="font-bold">Fully Fitted Kitchen</span> with cabinets, oven, gas cooker & extractor</span>
                    </div>

                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">🛋</span>
                      <span><span className="font-bold">Large Living Room & Dining Area</span> with POP ceiling & lighting</span>
                    </div>

                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">🚙</span>
                      <span><span className="font-bold">Parking Space</span> for up to 3 cars</span>
                    </div>

                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">🏡</span>
                      <span><span className="font-bold">Private Compound</span> with green area for relaxation</span>
                    </div>
                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">👮🏼‍♂️</span>
                      <span><span className="font-bold">24/7 Security & Gated Estate Access</span></span>
                    </div>
                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">💡</span>
                      <span><span className="font-bold">Stable Power Supply </span>(Estate transformer + inverter-ready)</span>
                    </div>
                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">🚰</span>
                      <span><span className="font-bold">Clean Water Supply </span>with borehole system</span>
                    </div>
                  </ul>

                  <div className="font-raleway text-[1.8em] font-bold text-[#222] mt-[1.25em] mb-[0.35em]">Location Insights</div>
                  <ul className="flex flex-col gap-[0.6em] ml-[0.5em] font-inter text-[#333] text-[0.97em]">
                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">🚏</span>
                      <span>2 min to Lekki Phase 1 Bus Stop</span>
                    </div>

                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">🛒</span>
                      <span>Close to major supermarkets & malls</span>
                    </div>

                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">🏫</span>
                      <span>10 min drive to top schools in the area</span>
                    </div>

                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">🏥</span>
                      <span>Proximity to hospitals & health centers</span>
                    </div>

                    <div className="flex items-center mb-[1.82em]">
                      <span className="text-[1.1em] text-[#5a79fa] mr-[8px]">🏖️</span>
                      <span>Quick access to Lekki-Epe Expressway & beaches</span>
                    </div>

                  </ul>

                  <div className="font-raleway text-[1.8em] font-bold text-[#222] mt-[1.25em] mb-[0.35em]">Extra Incentives</div>
                  <ul className="text-[1em] text-[#222] font-inter pl-[1.1em] mt-[0.3em] mb-[0.5em]">
                    <li className="flex items-center mb-[1.82em] leading-[1.6]">
                      <span className="w-[7px] h-[7px] bg-[black] rounded-full mr-[10px]"></span>
                      <span>Flexible payment plan available</span>
                    </li>
                    <li className="flex items-center mb-[1.82em] leading-[1.6]">
                      <span className="w-[7px] h-[7px] bg-[black] rounded-full mr-[10px]"></span>
                      <span>Comes with 1-year free estate service charge</span>
                    </li>
                    <li className="flex items-center mb-[1.82em] leading-[1.6]">
                      <span className="w-[7px] h-[7px] bg-[black] rounded-full mr-[10px]"></span>
                      <span>Cashback rewards apply when purchased through our platform</span>
                    </li>
                  </ul>
                </div>

                {/* RIGHT: AGENT CARD */}
                <aside className="flex-[1] bg-[#f6f7fb] rounded-[13px] mb-10 shadow-[0_2px_14px_rgba(50,50,93,0.08)] p-9 font-inter max-w-[220px] min-w-[360px] mt-[4em] self-start sm:max-w-[420px] sm:min-w-[420px] sm:p-5 sm:mt-[2em] sm:mx-auto sm:w-full">
                  <div className="agent-card-top">
                    <div className="font-nunito text-[2.07em] font-extralight mb-4 text-[#222] text-left">Contact Agent</div>
                    <div className="flex items-center gap-[0.9em] mb-[0.7em]">
                      <img src="img/person3.jpg" alt="Agent" className="w-[100px] h-[100px] rounded-[10%] object-cover bg-[#ddd]" />
                      <div className="flex flex-col gap-[0.2em]">
                        <span className="text-[0.68em] text-[#193a63]">Agent
                          <span className="inline-flex items-center text-[#3571a6]">
                            <img src="img/verified.png" alt="Verified" className="w-[14px] h-[14px] object-contain ml-1" />
                          </span>
                        </span>
                        <span className="font-raleway font-normal text-[1.07em] text-black">Ugochukwu Pius</span>
                        <span className="font-nunito font-light text-[0.77em] text-black/70">piusugochukwujohn@gmail.com</span>
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

              {/* Google Map */}
              <section className="mt-[2em] mb-0 ml-[5em] mr-5 px-[1em] pb-[2em] bg-white sm:ml-[1em] sm:max-w-auto sm:px-[1em]">
                <h2 className="font-raleway text-[1.25em] font-bold text-[#193a63] mb-[1em]">
                  Google map
                </h2>
                <div className="rounded-[7px]  overflow-hidden bg-[#eee] box-border sm:w-full sm:h-[520px]">
                  <Image
                    src="/images/google-map.webp"
                    alt="Google Map of Lagos area"
                    width={1200}
                    height={1700}
                    // layout="fill"
                    // objectFit="cover"
                    objectPosition="center"
                    className="block w-full h-full object-cover"
                  />
                </div>
              </section>

              <section className="w-full flex justify-center bg-[#fff] py-16 px-4">
                <div className="w-full max-w-[1200px] px-4 sm:px-6 flex flex-col items-center sm:items-start">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-10 tracking-wide text-[#191a1d] text-center sm:text-left font-raleway">
                    Featured Properties
                  </h2>
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
                  </div>
                </div>
              </section>
              
              
        </main>
    )
}