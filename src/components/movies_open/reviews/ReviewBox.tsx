import type {ReviewType} from '../../../stores/useMovieData.ts'
import ReviewRating from "./ReviewRating.tsx";

export default function ReviewBox({nickname, country, rating, text}: ReviewType ) {

    return (
        <div className='review-box bg-[#0F0F0F] p-[40px] rounded-[12px] mr-5 ml-5 border-1 border-[#262626]  max-w-[475px]'>
            <div className="box-top flex justify-between">
                <div className="top-person">
                    <p className="person-name text-white text-[20px] font-medium">{nickname}</p>
                    <p className="preson-country text-[18px] text-[#999999] font-medium">From {country}</p>
                </div>
                <ReviewRating gotRating={rating}/>
            </div>
            <p className="box-text text-[18px] text-[#999999]">{text}</p>
        </div>
    )
}