import { GoArrowRight } from "react-icons/go";
import { useSwiper } from "swiper/react";

export default function ReviewNext() {
    const swiper = useSwiper();

    return (
        <>
            <button
                className="reviewNext p-[14px] bg-[#141414] rounded-full border-1 border-[#262626] cursor-pointer"
                onClick={() => swiper.slideNext()}
            >
                <GoArrowRight className="text-[#999999] w-[24px] h-[24px]" />
            </button>
        </>
    );
}
