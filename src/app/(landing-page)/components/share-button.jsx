export default function ShareButton() {
    
    return (
              
        <button
            id="shareBtn"
            aria-label="Share"
            className="font-inter text-[1.08em] text-[#193a63] flex items-center gap-[0.3em] bg-transparent border-none cursor-pointer"
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
                   
    )
}