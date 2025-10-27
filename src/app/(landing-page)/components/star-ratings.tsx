import styles from './StarRating.module.css';
interface StarRatingProps {
  rating: number;
}
export default function StarRating({rating}: StarRatingProps) {
  const maxStars = 5;
  const fullStars = Math.floor(rating); // Number of full stars (eg 4 for 4.1)
  const decimalPart = rating % 1; // 0.1 for 4.1
  const hasPartialStar = decimalPart > 0; // True if there's a decimal
  const emptyStars = maxStars - fullStars - (hasPartialStar ? 1 : 0); // 0 for 4.1

  return (
    <div className="flex justify-end col-span-2 w-fit bg-amber-600 gap-0.025 ">
      {/* Full Stars */}
      {Array(fullStars)
      // .fill creates an array of length n number of elements. in this case n is the number of fullStars
      // null is provided as the fixed values in the array because the value doesnt matter
        .fill(null)
        .map((_, index) => (
          <svg
            key={`full-${index}`}
            className="flex"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#FFC107"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        ))}

      {/* Partial Star */}
      {hasPartialStar && (
        <svg
          key="partial"
          className= "flex"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="partialStar">
              {/* eg it adjusts width to 10% of 24 (2.4px) for 0.1 rating */}
              <rect x="0" y="0" width={24 * decimalPart} height="24" />
            </clipPath>
            <clipPath id="partialStarComplement">
              {/* eg it adjusts width to 10% of 24 (2.4px) for 0.1 rating */}
              <rect x={24 * decimalPart} y="0" width={24 * (1 - decimalPart)} height="24" />
            </clipPath>          
          </defs>
          {/* full star background (white) */}
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="white"
          />
          {/* Filled portion (yellow) */} 
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#FFC107"
            clipPath="url(#partialStar)"
          />
        </svg>
      )}

      {/* Empty Stars */}
      {Array(emptyStars)
        .fill(null)
        .map((_, index) => (
          <svg
            key={`empty-${index}`}
            className= "flex"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        ))}
    </div>
  );
}