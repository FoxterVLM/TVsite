import { FaPlay } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import Sound from "../../../../public/img/movies_shows/Sound.png";
import Like from "../../../../public/img/movies_shows/Like.png";

import {Link} from 'react-router-dom'
import {useMovieData} from "../../../stores/useMovieData.ts";

export default function TrailerSlide({
  img,
  title,
  description,
}: {
  img: unknown;
  title: string;
  description: string;
}) {

  const {getCurrentMovie} = useMovieData();

  return (
    <div
      className="videoTrailer w-full min-h-[835px] max-w-[1594px] m-auto mt-[50px] flex flex-col justify-center items-center px-[200px] pt-[508px] pb-[126px] gap-[20px]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="trailer-title flex flex-col gap-[4px]">
        <h1 className="title-big text-[38px] text-white font-bold font-[Manrope] text-center">
          {title}
        </h1>
        <p className="title-small font-[Manrope] text-[18px] font-light text-center text-[#999999]">
          {description}
        </p>
      </div>
      <div className="trailer-buttons flex justify-center items-center gap-[20px]">
        <Link
            to={'/ms' + "/" + title}
          className="buttons-play px-[24px] py-[14px] text-white font-[Manrope] text-[18px] font-semibold flex gap-[4px] items-center cursor-pointer bg-[#E50000] rounded-[8px]"
          onClick={() => getCurrentMovie(title)} // change to title
        >
          <FaPlay className="ml w-[17.84px] h-[19.19px]" />
          Play Now
        </Link>
        <div className="buttons-small flex justify-between items-center gap-[10px]">
          <button className="buttons-like p-[14px] rounded-[8px] bg-[#0F0F0F] border-1 border-[#262626] cursor-pointer">
            <img src={Like} />
          </button>
          <button className="buttons-plus p-[14px] rounded-[8px] text-white bg-[#0F0F0F] border-1 border-[#262626] cursor-pointer">
            <FiPlus className="w-[28px] h-[28px]" />
          </button>
          <button className="buttons-sound p-[14px] rounded-[8px] bg-[#0F0F0F] border-1 border-[#262626] cursor-pointer">
            <img src={Sound} />
          </button>
        </div>
      </div>
    </div>
  );
}
