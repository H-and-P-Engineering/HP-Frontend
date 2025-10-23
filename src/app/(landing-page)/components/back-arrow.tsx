export default function BackArrow() {
    
    return (
               
        <button
            aria-label="Go back"
            // onClick={window.history.back()}
            className="text-[2em] bg-transparent border-none text-[#193a63] cursor-pointer font-inter flex items-center gap-[0.45em]"
        >
            &larr;
        </button>
                   
    )
}