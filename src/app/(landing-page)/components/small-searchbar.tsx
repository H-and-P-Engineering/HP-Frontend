export default function SmallSearchBar() {
   
    return (
        <span 
            className="flex flex-col sm:flex-row items-center bg-white w-30 h-12 rounded-[10px] mx-auto p-2 sm:p-0">
            <input
                type="text"
                placeholder="Search for item..."
                aria-label="Search"
                className="flex-1 w-full px-4 sm:px-6 py-2 sm:py-4 text-[1em] sm:text-[1.1em] font-inter border-none outline-none text-gray-800 placeholder-gray-500 rounded-[8px] sm:rounded-none"
            ></input>
        </span>
    )
}