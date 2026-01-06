import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies_Shows from "./pages/Movies_Shows.tsx";
import Nav from "./components/Nav.tsx";
import Home from "./pages/Home.tsx";
import Support from "./pages/Support.tsx";
import Subscription from "./pages/Subscription.tsx";
import { useGetMovieSwiper } from "./stores/useGetMovieSwiper.ts";
import {useMovieData} from "./stores/useMovieData.ts";
import { useEffect } from "react";
import OpenBlock from "./components/movies_open/OpenBlock.tsx";

function App() {
  const { getData } = useGetMovieSwiper();
    const { getCurrentMovie } = useMovieData();

  useEffect(() => {
    getData();
    getCurrentMovie('Avengers: Endgame');
  });

  return (
    <Router>
      <Nav />
        <OpenBlock/>
      <Routes>
        <Route path="/" element={<Movies_Shows />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sub" element={<Subscription />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
