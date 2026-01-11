import VideoTrailer from "../components/movies_shows/trailer/VideoTrailer.tsx";
import SwiperBlock from "../components/movies_shows/SwiperBlock.tsx";

export default function Movies_Shows() {
  return (
    <div className="msPage bg-[#141414]">
      <VideoTrailer />
      <SwiperBlock />
    </div>
  );
}
