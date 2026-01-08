import Trailer from "./Trailer.tsx";
import Characteristics from "./Characteristics.tsx";

export default function OpenBlock() {
  return (
    <div className="movie-open bg-[#141414] mb-10 pt-[50px]">
      {" "}
      {/* delete mb */}
      <Trailer />
      <Characteristics />
    </div>
  );
}
