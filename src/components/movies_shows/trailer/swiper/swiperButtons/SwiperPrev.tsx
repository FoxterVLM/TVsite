import { useSwiper } from "swiper/react";
import { GoArrowLeft } from "react-icons/go";

export default function SwiperPrev() {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className=" text-white p-[14px] bg-[#0F0F0F] border-1 border-[#1F1F1F] rounded-[8px] cursor-pointer z-100"
    >
      <GoArrowLeft className="w-[28px] h-[28px]" />
    </button>
  );
}
