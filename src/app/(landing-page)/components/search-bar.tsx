export default function SearchBar() {
   
    return (
        <form
            id="heroSearchForm"
            className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-[10px] overflow-hidden max-w-[550px] w-[90%] sm:w-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] mx-auto p-2 sm:p-0"
        >
            <input
                type="text"
                placeholder="Search for item..."
                aria-label="Search"
                className="flex-1 w-full px-4 sm:px-6 py-3 sm:py-4 text-[1em] sm:text-[1.1em] font-inter border-none outline-none text-gray-800 placeholder-gray-500 rounded-[8px] sm:rounded-none"
            />
            <button
                type="submit"
                className="w-full sm:w-auto mt-2 sm:mt-0 bg-[#1e3a8a] text-white rounded-[8px] sm:rounded-[14px] px-6 sm:px-8 py-3 sm:py-4 text-[1em] cursor-pointer transition-all duration-300 hover:bg-[#132b63] font-inter"
            >
                Search
            </button>
        </form>
    )
}