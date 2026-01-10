import { useMovieData } from "../../stores/useMovieData.ts";
import CastSwiper from "./castSwiper/CastSwiper.tsx";
import ReviewsBlock from "./reviews/ReviewsBlock.tsx";
import Rating from "./ratings/Rating.tsx";

import { MdDateRange } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { PiSquaresFourLight } from "react-icons/pi";

export default function Characteristics() {
  const { currentMovie } = useMovieData();

  return (
    <>
      {currentMovie !== null ? (
        <div className="movie-characteristics ml-[118px] flex gap-[20px] font-[Manrope]">
          <div className="left-desc flex flex-col gap-y-[30px]">
            <div className="desc-description p-[50px] bg-[#1A1A1A] max-w-[1057px] rounded-[12px]">
              <h4 className="description-title text-[18px] font-medium text-[#999999] mb-[14px]">
                Description
              </h4>
              <p className="description-paragraph text-[18px] text-white font-medium max-w-[957px]">
                {currentMovie.description}
              </p>
            </div>
            <div className="desc-cast bg-[#1A1A1A] p-[50px] max-w-[1057px] rounded-[12px]">
              <CastSwiper />
            </div>
            <div className="desc-review">
              <ReviewsBlock />
            </div>
          </div>
          <div className="right-desc flex flex-col bg-[#1A1A1A] rounded-[12px] p-[50px] w-[519px]">
            <div className="year mb-[30px]">
              <div className="year-top flex gap-[4px] items-center text-[18px] font-medium text-[#999999] mb-[14px] w-full">
                <MdDateRange />
                <h6 className="top-title">Released Year</h6>
              </div>
              <p className="year-data font-semibold text-[20px] text-white">
                {currentMovie.releasedYear}
              </p>
            </div>
            <div className="languages mb-[30px]">
              <div className="languages-top flex gap-[4px] items-center text-[18px] font-medium text-[#999999] mb-[14px] w-full">
                <IoLanguage />
                <h6 className="top-title">Available Languages</h6>
              </div>
              <div className="langs-array flex flex-wrap max-w-[419px] gap-[10px]">
                {currentMovie.availableLanguages.map((lang, i) => (
                  <div
                    className="lang font-medium text-white text-[18px] py-[8px] px-[14px] bg-[#141414] border-1 border-[#262626] w-fit rounded-[8px]"
                    key={i}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>
            <div className="ratings">
              <div className="ratings-top flex gap-[4px] items-center text-[18px] font-medium text-[#999999] mb-[14px] w-full">
                <FaRegStar />
                <h6 className="top-title">Ratings</h6>
              </div>
              <Rating />
            </div>
            <div className="genres mb-[30px]">
              <div className="genres-top flex gap-[4px] items-center text-[18px] font-medium text-[#999999] mb-[14px] w-full">
                <PiSquaresFourLight />
                <h6 className="top-title">Genres</h6>
              </div>
              <div className="genres-array flex flex-wrap max-w-[419px] gap-[10px]">
                {currentMovie.genres.map((lang, i) => (
                  <div
                    className="lang font-medium text-white text-[18px] py-[8px] px-[14px] bg-[#141414] border-1 border-[#262626] w-fit rounded-[8px]"
                    key={i}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>
            <div className="director mb-[30px]">
              <h6 className="director-title text-[18px] font-medium text-[#999999] mb-[14px]">
                Director
              </h6>
              <div className="director-block p-[14px] bg-[#141414] border-1 border-[#262626] rounded-[8px] flex gap-[10px] items-center">
                <img
                  src={currentMovie.director.img}
                  loading="lazy"
                  className="director-img rounded-[8px]"
                />
                <div className="block-text">
                  <h6 className="text-name text-white text-[18px] font-medium">
                    {currentMovie.director.name}
                  </h6>
                  <p className="text-country text-[#999999] text-[16px] font-medium">
                    From {currentMovie.director.country}
                  </p>
                </div>
              </div>
            </div>
            <div className="music">
              <h6 className="music-title text-[18px] font-medium text-[#999999] mb-[14px]">
                Music
              </h6>
              <div className="music-block p-[14px] bg-[#141414] border-1 border-[#262626] rounded-[8px] flex gap-[10px] items-center">
                <img
                  src={currentMovie.music.img}
                  loading="lazy"
                  className="director-img rounded-[8px]"
                />
                <div className="block-text">
                  <h6 className="text-name text-white text-[18px] font-medium">
                    {currentMovie.music.name}
                  </h6>
                  <p className="text-country text-[#999999] text-[16px] font-medium">
                    From {currentMovie.music.country}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Movie is not found</div>
      )}
    </>
  );
}
