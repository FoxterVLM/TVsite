import { GoArrowLeft } from "react-icons/go";
import { useSwiper } from "swiper/react";

export default function ReviewPrev() {
    const swiper = useSwiper();

    return (
        <>
            <button
                className="reviewPrev p-[14px] bg-[#141414] rounded-full border-1 border-[#262626] cursor-pointer"
                onClick={() => {
                    console.log("CLICK");
                    swiper.slidePrev();
                }}
            >
                <GoArrowLeft className="text-[#999999] w-[24px] h-[24px]" />
            </button>
        </>
    );
}
