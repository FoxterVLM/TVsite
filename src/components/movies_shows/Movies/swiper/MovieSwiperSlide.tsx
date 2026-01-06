import { FaArrowRightLong } from "react-icons/fa6";
export default function MovieSwiperSlide({
  genre,
  array,
}: {
  genre: string;
  array: string[];
}) {
  return (
    <div className="slide bg-[#1A1A1A] p-[30px] rounded-[12px]">
      <div className="slide-movies m-auto rounded-[12px] flex flex-wrap gap-[10px] max-h-[342px] w-[230px] items-center">
        <img
          loading="lazy"
          src={array[0]}
          alt="1"
          className="movies-imgs rounded-[15px] w-[100px] h-[100px]"
        />
        <img
          src={array[1]}
          alt="2"
          className="movies-imgs rounded-[15px] w-[100px] h-[100px]"
        />
        <img
          src={array[2]}
          alt="3"
          className="movies-imgs rounded-[15px] w-[100px] h-[100px]"
        />
        <img
          src={array[3]}
          alt="4"
          className="movies-imgs rounded-[15px] w-[100px] h-[100px]"
        />
      </div>
      <div className="genre text-white flex items-center justify-start font-[Manrope] text-[18px] font-semibold pt-2  cursor-pointer transition-all duration-400 ease-in-out hover:text-[#E50000]">
        <h3 className="genre-title w-full">{genre}</h3>
        <FaArrowRightLong className="mr-3 font-bold text-[30px]" />
      </div>
    </div>
  );
}
