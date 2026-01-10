import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/navigation";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/pagination";
// import defMovie from "../../../../../public/img/movies_shows/movies/defMovie.png";

import MovieSwiperSlide from "../swiper/MovieSwiperSlide.tsx";
import GenresSwiperNext from "./swiperButtons/GenresSwiperNext.tsx";
import GenresSwiperPrev from "./swiperButtons/GenresSwiperPrev.tsx";

import "./moviesPagination.css";

type dataType = {
  genre: string;
  array: string[];
};

export default function MoviesSwiper({ data }: { data: dataType[] }) {
  return (
    <div className="movie-swiper">
      <div className="swiper-top flex justify-between items-center mb-[50px]">
        <h2 className="top-title font-bold text-[38px] font-[Manrope] text-white">
          Our Genres
        </h2>
        {/*control swiper*/}
        <div className="move flex rounded-[12px] justify-between items-center gap-[80px] p-[16px] bg-[#0F0F0F]">
          <GenresSwiperPrev />
          <div className="pagination" />
          <GenresSwiperNext />
        </div>
      </div>
      <Swiper
        className="genres-swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        speed={500}
        navigation={{
          nextEl: ".next-genres",
          prevEl: ".prev-genres",
        }}
        pagination={{
          // el: "top-pagination",
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data &&
          data.map((item: dataType, i: number) => (
            <SwiperSlide>
              <MovieSwiperSlide key={i} array={item.array} genre={item.genre} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
