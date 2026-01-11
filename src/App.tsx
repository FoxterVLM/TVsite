import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies_Shows from "./pages/Movies_Shows.tsx";
import Nav from "./components/Nav.tsx";
import Home from "./pages/Home.tsx";
import Support from "./pages/Support.tsx";
import Subscription from "./pages/Subscription.tsx";
import OpenBlock from "./components/movies_open/OpenBlock.tsx";

import { useGetMovieSwiper } from "./stores/useGetMovieSwiper.ts";
import { useMovieData } from "./stores/useMovieData.ts";
// import { useSearch } from "./stores/useSearch.ts";

import { useEffect } from "react";

function App() {
  const { getData } = useGetMovieSwiper();
  const { currentMovie } = useMovieData();
  // const { searchMovies } = useSearch();

  useEffect(() => {
    getData();
    // searchMovies("Avengers");
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ms" element={<Movies_Shows />} />
        <Route path="/sub" element={<Subscription />} />
        <Route path="/support" element={<Support />} />
        <Route
          path={"/ms" + "/" + currentMovie?.title}
          element={<OpenBlock />}
        />
      </Routes>
    </Router>
  );
}

export default App;
