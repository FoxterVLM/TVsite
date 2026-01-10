import VideoTrailer from "./trailer/VideoTrailer.tsx";
import SwiperBlock from "./SwiperBlock.tsx";

export default function MSblock() {
    return (
        <div className="msPage bg-[#141414]">
            <VideoTrailer />
            <SwiperBlock />
        </div>
    )
}