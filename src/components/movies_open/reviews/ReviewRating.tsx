import {FaStar} from "react-icons/fa";
import HalfStar from "../ratings/HalfStar.tsx";

export default function ReviewRating({gotRating}: {gotRating: number}) {

    const rating: number = gotRating ?? 0;
    const fullStars: number = Math.floor(rating);
    const emptyStars: number = Math.floor(5 - rating);
    const isHalfStar: boolean = rating/2 > fullStars/2;

    return (
        <div className='rating-review py-[6px] px-[10px] w-fit bg-[#141414] rounded-full mb-[30px] border-1 border-[#262626]'>
            <div className="rating flex gap-[4px] items-center text-[#999999]">
                <div className="review-stars flex gap-[2px]">
                    {
                        !isHalfStar &&
                        [...Array(fullStars)].map((i: number) => (
                            <FaStar key={i} className='text-[#E50000] w-[24px] h-[24px]'/>
                        ))
                    }
                    {
                        !isHalfStar &&
                        [...Array(emptyStars)].map((i: number) => (
                            <FaStar key={i} className='text-[#999999] w-[24px] h-[24px]'/>
                        ))
                    }

                    {/*  for half stars ratings  */}
                    {
                        isHalfStar &&
                        [...Array(fullStars)].map((i: number) => (
                            <FaStar key={i} className='text-[#E50000] w-[24px] h-[24px]'/>
                        ))
                    }
                    {
                        isHalfStar && <HalfStar/>
                    }
                    {
                        isHalfStar &&
                        [...Array(emptyStars)].map((i: number) => (
                            <FaStar key={i} className='text-[#999999] w-[24px] h-[24px]'/>
                        ))
                    }
                </div>
                <p className="rating-number text-[20px] font-medium text-[#999999]">{gotRating}</p>
            </div>
        </div>
    )
}