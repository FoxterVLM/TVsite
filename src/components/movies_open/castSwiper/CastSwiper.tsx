import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/navigation";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/pagination";

import { useMovieData } from "../../../stores/useMovieData.ts";
import CastPrev from "./CastPrev.tsx";
import CastNext from "./CastNext.tsx";

export default function CastSwiper() {
  const { currentMovie } = useMovieData();

  return (
    <div className="cast-swiper max-w-[957px] ">
      <Swiper
          className="relative swiper-container"
        modules={[Navigation, Pagination, A11y]}
          loop={true}
        spaceBetween={20}
        slidesPerView={8}
        speed={500}
        navigation={{
            nextEl: ".nextCast",
            prevEl: ".prevCast",
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change232222")}
      >
          <div className="swiper-buttons absolute top-0 z-10 flex items-center gap-[30px]">
              <h5 className='cast-title w-[810px] font-medium text-[18px] text-[#999999]'>Cast</h5>
              <div className="btns flex items-center gap-[10px]">
                  <CastPrev />
                  <CastNext />
              </div>
          </div>
        {currentMovie &&
          currentMovie.cast.map((actor, i) => (
            <SwiperSlide key={i}>
              <img
                src={actor}
                loading="lazy"
                className="shrink-0 w-[102px] h-[109px] mt-[85px]"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
