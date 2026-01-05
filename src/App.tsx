import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies_Shows from "./pages/Movies_Shows.tsx";
import Nav from "./components/Nav.tsx";
import Home from "./pages/Home.tsx";
import Subscription from "./pages/Subscription.tsx";
import Support from "./pages/Support.tsx";

import {useGetMovie} from "./stores/useGetMovie.ts";
import {useEffect} from "react";

function App() {

    const {getData} = useGetMovie();

    useEffect(() => {
        getData();
    })

  return (
    <Router>
      <Nav />
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
