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
import './reviewPagination.css'

import {useMovieData} from "../../../../stores/useMovieData.ts";
import ReviewBox from "../ReviewBox.tsx";
import ReviewPrev from "./ReviewPrev.tsx";
import ReviewNext from "./ReviewNext.tsx";


export default function ReviewsSwiper() {

    const {currentMovie} = useMovieData();
    const reviewLength: number = currentMovie?.reviews.length ?? 0;
    const gap: number = reviewLength * 30;
    const buttonsClass = `review-pag-buttons mt-[20px] flex justify-center gap-[${gap}px]`;

    return (
        <div className="reviews-swiper">
            <Swiper
                className="genres-swiper"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                loop={true}
                slidesPerView={2}
                slidesPerGroup={1}
                speed={500}
                navigation={{
                    nextEl: ".reviewNext",
                    prevEl: ".reviewPrev",
                }}
                pagination={{
                    // el: "top-pagination",
                    clickable: true,
                }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change1111")}
            >

                <div className="review-boxes">

                    {
                        currentMovie && currentMovie.reviews.map((review, i) => (
                            <SwiperSlide key={i} ><ReviewBox nickname={review.nickname} country={review.country} text={review.text} rating={review.rating}/></SwiperSlide>
                        ))
                    }
                </div>
                {/* k*30 - width*/}
                <div className="review-pag-buttons flex justify-center mt-[30px] gap-[20px]">
                    <ReviewPrev/>
                    <ReviewNext/>
                </div>
            </Swiper>

        </div>
    )
}