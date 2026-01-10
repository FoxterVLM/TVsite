import Trailer from "./Trailer.tsx";
import Characteristics from "./Characteristics.tsx";

export default function OpenBlock() {
  return (
    <div className="movie-open bg-[#141414] pt-[50px]">
      <Trailer />
      <Characteristics />
    </div>
  );
}
