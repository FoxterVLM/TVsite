import TrailerSlide from "./TrailerSlide.tsx";
import Avengers from "../../../../public/img/movies_imgs/Avengers.png";
import Kantara from "../../../../public/img/movies_imgs/Kantara.svg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

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

import "./swiper/paginationStyle.css";
import SwiperPrev from "./swiper/swiperButtons/SwiperPrev.tsx";
import SwiperNext from "./swiper/swiperButtons/SwiperNext.tsx";

export default function VideoTrailer() {
  return (
    <section className="MS mb-[180px]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        loop={true}
        slidesPerView={1}
        speed={500}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <TrailerSlide
            img={Avengers}
            title="Avengers: Endgame"
            description="With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen."
          />
        </SwiperSlide>

        <SwiperSlide>
          <TrailerSlide
            img={Kantara}
            title="Kantara"
            description="A gripping tale of tradition, nature, and heroism, where a villager fights to protect his land and culture."
          />
        </SwiperSlide>

        <SwiperSlide>
          <TrailerSlide
            img={Avengers}
            title="Avengers: Endgame"
            description="With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen."
          />
        </SwiperSlide>

        <SwiperSlide>
          <TrailerSlide
            img={Avengers}
            title="Avengers: Endgame"
            description="With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen."
          />
        </SwiperSlide>
        <div className="trailer-switch flex justify-center items-center gap-[650.5px] absolute bottom-0 left-1/2 -translate-x-1/2 z-100 mb-[20px]">
          <SwiperPrev />
          <div className="switch-pagination" />
          <SwiperNext />
        </div>
      </Swiper>
    </section>
  );
}
