import { FiPlus } from "react-icons/fi";
import ReviewsSwiper from "./swiper/ReviewsSwiper.tsx";

export default function ReviewsBlock() {
    return (
        <div className='reviews p-[50px] bg-[#1A1A1A] max-w-[1057px]'>
            <div className="reviews-top flex justify-between items-center mb-[40px]">
                <h6 className='top-title text-[18px] text-[#999999] font-medium'>Reviews</h6>
                <div className="top-btn px-[16px] py-[14px] text-white border-1 border-[#262626] rounded-[8px] bg-[#141414] flex gap-[4px] items-center cursor-pointer ease-in-out duration-500 hover:bg-[#E50000]">
                    <FiPlus className='w-[20px] h-[20px]'/>
                    <button className="btn-add cursor-pointer">Add Your Review</button>
                </div>
            </div>
            <div className="reviews-swiper">
                <ReviewsSwiper />
            </div>
        </div>
    )
}