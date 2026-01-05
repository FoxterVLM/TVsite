import { useSwiper } from "swiper/react";
import { GoArrowRight } from "react-icons/go";

export default function SwiperNext() {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className=" p-[14px] bg-[#0F0F0F] border-1 text-white border-[#1F1F1F] rounded-[8px] cursor-pointer relative z-1000"
    >
      <GoArrowRight className="w-[28px] h-[28px]" />
    </button>
  );
}
