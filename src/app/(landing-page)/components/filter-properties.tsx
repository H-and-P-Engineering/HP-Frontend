import SmallSearchBar from "./small-searchbar";

export default function FilterLandHouse() {
   
    return (
        <form id="homeSearchForm"
            className="flex flex-row sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white/20 backdrop-blur-md rounded-xl shadow-md px-6 py-5 mt-6 max-w-full md:max-w-4xl mx-auto">

            {/* Property Type */}
            <div className="relative flex flex-col items-start min-w-[120px] w-full sm:w-auto">
                <label htmlFor="type" className="text-[1em] font-medium text-white mb-1">Type</label>
                <select id="type" className="border border-white/50 rounded-md text-white text-[1em] px-3 py-2 w-full bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer">
                <option value="duplex">Duplex</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="office">Office</option>
                <option value="shop">Shop</option>
                </select>
            </div>

            {/* Price */}
            <div className="flex flex-col items-start min-w-[120px] w-full sm:w-auto">
                <label htmlFor="price" className="text-[1em] font-medium text-white mb-1">Price</label>
                <select id="price" className="border border-white/50 rounded-md text-white text-[1em] px-3 py-2 w-full bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer">
                <option value="50m-100m">N50m - N100m</option>
                <option value="100m-200m">N100m - N200m</option>
                <option value="200m+">N200m+</option>
                </select>
            </div>

            {/* Area */}
            <div className="flex flex-col items-start min-w-[120px] w-full sm:w-auto">
                <label htmlFor="area" className="text-[1em] font-medium text-white mb-1">Area</label>
                <select id="area" className="border border-white/50 rounded-md text-white text-[1em] px-3 py-2 w-full bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer">
                <option value="lagos">Lagos</option>
                <option value="abuja">Ibeju, lekki</option>
                <option value="portharcourt">Greenhill estate, Ikeja</option>
                </select>
            </div>
            <SmallSearchBar/>
            <button
              className="bg-brand-600 text-white font-[Raleway] text-[1.5em] font-[400] rounded-[12px] px-7 py-2 w-auto shadow-[0_2px_12px_0_rgba(50,50,93,0.03)] flex items-center gap-[0.7em] transition-colors duration-150 hover:bg-[#e1e9f6] hover:text-[#254b83] cursor-pointer">
              Finish
            </button>
        </form>
    )
}