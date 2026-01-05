import MoviesBlock from "./Movies/MoviesBlock.tsx";
import ShowsBlock from "./Shows/ShowsBlock.tsx";

export default function SwiperBlock() {
  return (
    <main className="swipers bg-[#141414]">
      <MoviesBlock />
      <ShowsBlock />
    </main>
  );
}
