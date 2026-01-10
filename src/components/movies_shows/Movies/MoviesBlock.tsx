import { lazy, Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { useGetMovieSwiper } from "../../../stores/useGetMovieSwiper.ts";

const MoviesSwiper = lazy(() => import("./swiper/MovieSwiper.tsx"));

export default function MoviesBlock() {
  const { getData } = useGetMovieSwiper();

  const { data, isLoading } = useQuery({
    queryKey: ["genreMovies"],
    queryFn: getData,
  });

  return (
    <section className="movies bg-[#141414] relative border-1 rounded-[12px] border-[#262626] w-[1598px] m-auto p-[50px]">
      <button className="movies-title absolute -top-6.5 left-[50px] text-white bg-[#E50000] px-[24px] py-[10px] font-semibold text-[20px] font-[Manrope] rounded-[8px]">
        Movies
      </button>
      <div className="movies-swipers">
        {!isLoading && (
          <Suspense
            fallback={
              <div className="text-[50px] flex justify-center text-white">
                Loading...
              </div>
            }
          >
            <MoviesSwiper data={data.genreMovies} />
          </Suspense>
        )}
      </div>
    </section>
  );
}
