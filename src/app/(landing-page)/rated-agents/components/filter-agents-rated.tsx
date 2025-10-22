import SmallSearchBar from "../../components/small-searchbar";

export default function FilterAgentsRated() {
   
    return (
        <form id="homeSearchForm" autoComplete="off"
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white/20 backdrop-blur-md rounded-xl shadow-md px-6 py-5 mt-6 max-w-full md:max-w-4xl mx-auto">

            {/* Property Type */}
            <div className="flex flex-col items-start min-w-[120px] w-full sm:w-auto">
                <label htmlFor="type" className="text-[1em] font-medium text-white mb-1">Location</label>
                <select id="type" className="border border-white/50 rounded-md text-white text-[1em] px-3 py-2 w-full bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer">
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Port">Port Harcourt</option>
                </select>
            </div>

            {/* Price */}
            <div className="flex flex-col items-start min-w-[120px] w-full sm:w-auto">
                <label htmlFor="price" className="text-[1em] font-medium text-white mb-1">Ratings</label>
                <select id="price" className="border border-white/50 rounded-md text-white text-[1em] px-3 py-2 w-full bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer">
                <option value="50m-100m">4 - 5</option>
                <option value="100m-200m">4 - 3</option>
                <option value="200m+">2+</option>
                </select>
            </div>

            {/* Area */}
            <div className="flex flex-col items-start min-w-[120px] w-full sm:w-auto">
                <label htmlFor="area" className="text-[1em] font-medium text-white mb-1">Specialization</label>
                <select id="area" className="border border-white/50 rounded-md text-white text-[1em] px-3 py-2 w-full bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer">
                <option value="lagos">Apartments</option>
                <option value="abuja">Lands</option>
                <option value="portharcourt">Mansions</option>
                </select>
            </div>

            <SmallSearchBar/>
            <button
              className="bg-blue-600 text-white font-[Raleway] text-[1.5em] font-[400] rounded-[12px] px-7 py-2 w-auto shadow-[0_2px_12px_0_rgba(50,50,93,0.03)] flex items-center gap-[0.7em] transition-colors duration-150 hover:bg-[#e1e9f6] hover:text-[#254b83] cursor-pointer">
              Finish
            </button>
        </form>
    )
}