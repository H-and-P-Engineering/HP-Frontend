export default function BackArrowShareButton() {
    
    return (
        <div className="flex justify-between items-center w-full px-8 pt-5 pb-2 z-[2]">
           
           <button 
                aria-label="Go back"
                // onClick={window.history.back()}
                className="text-[2em] border-none text-[#FFFFFF] cursor-pointer font-inter flex items-center gap-[0.45em]"
            >
                &larr;
            </button>

            <button
                id="shareBtn"
                aria-label="Share"
                className=" font-inter text-[1.08em] text-[#FFFFFF] flex items-center gap-[0.3em] bg-transparent border-none cursor-pointer"
            >
                Share
                <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="align-middle"
                >
                    <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4m0 0L8 6m4-4v16" />
                </svg>
            </button>
                   
        </div>
    )
}