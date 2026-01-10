import { useMovieData } from "../../../stores/useMovieData.ts";
import { FaStar } from "react-icons/fa";
import HalfStar from "./HalfStar.tsx";

export default function Rating() {
  const { currentMovie } = useMovieData();

  const rating: number = currentMovie?.rating ?? 0;
  const fullStars: number = Math.floor(rating);
  const emptyStars: number = Math.floor(5 - rating);
  const isHalfStar: boolean = rating / 2 > fullStars / 2;

  return (
    <div className="rating-block py-[16px] pl-[16px] pr-[21px] bg-[#141414] max-w-[200px] rounded-[8px] mb-[30px]">
      <h5 className="rating-name text-white text-[20px] font-[Manrope] font-semibold">
        IMDb
      </h5>
      <div className="rating flex gap-[4px] items-center">
        <div className="rating-stars flex gap-[2px]">
          {!isHalfStar &&
            [...Array(fullStars)].map((i: number) => (
              <FaStar key={i} className="text-[#E50000] w-[24px] h-[24px]" />
            ))}
          {!isHalfStar &&
            [...Array(emptyStars)].map((i: number) => (
              <FaStar key={i} className="text-[#999999] w-[24px] h-[24px]" />
            ))}

          {/*  for half stars ratings  */}
          {isHalfStar &&
            [...Array(fullStars)].map((i: number) => (
              <FaStar key={i} className="text-[#E50000] w-[24px] h-[24px]" />
            ))}
          {isHalfStar && <HalfStar />}
          {isHalfStar &&
            [...Array(emptyStars)].map((i: number) => (
              <FaStar key={i} className="text-[#999999] w-[24px] h-[24px]" />
            ))}
        </div>
        <p className="rating-number text-[20px] font-medium text-white">
          {currentMovie?.rating}
        </p>
      </div>
    </div>
  );
}
