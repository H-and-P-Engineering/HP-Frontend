import Link from "next/link";

export default function FilterLandHouse() {
   
    return (
        <form id="homeSearchForm"
            className="flex flex-row sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white/20 backdrop-blur-md rounded-xl shadow-md px-6 py-5 mt-6 max-w-full md:max-w-4xl mx-auto">

            {/* Property Type */}
            <div className="flex flex-col items-start min-w-[120px] w-full sm:w-auto">
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
                <option value="abuja">Abuja</option>
                <option value="portharcourt">Port Harcourt</option>
                </select>
            </div>

            {/* Search Button */}
            <button type="submit" aria-label="Search"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center text-[1.2em] transition cursor-pointer">
                <i className="fi fi-br-search"></i>
            </button>
        </form>
    )
}