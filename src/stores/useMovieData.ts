import { create } from "zustand";
import axios from "axios";

export type ReviewType = {
  nickname: string;
  country: string;
  rating: number;
  text: string;
};

type DirectorType = {
  name: string;
  country: string;
  img: string;
}

type MovieType = {
  title: string;
  img: string;
  description: string;
  releasedYear: number;
  availableLanguages: string[];
  rating: number;
  genres: string[];
  director: DirectorType;
  music: DirectorType;
  cast: string[];
  reviews: ReviewType[];
};

type Props = {
  currentMovie: MovieType | null;
  getCurrentMovie: (byTitle: string) => Promise<void>;
};

// here I create axios request to openMovie_db.json, in Trailer and Characteristics I destructuring data from this state and I`ll have changed data every time without using props, but in OpenBlock I do server request after getting movie name from button click in TrailerSlide

export const useMovieData = create<Props>((set) => ({
  currentMovie: null,
  getCurrentMovie: async (byTitle) => {
    try {
      const response = await axios
        .get<MovieType[]>("/api/openMovie_db.json")
        .then((response) => response.data);
      const movie = response.find(
        (movie: MovieType) => movie.title === byTitle,
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      movie !== undefined
        ? set({ currentMovie: movie })
        : set({ currentMovie: null });
    } catch (error) {
      set({ currentMovie: null });
      alert(error);
    }
  },
}));
