// import { create } from "zustand";
// import axios from "axios";
//
// type MovieType = {
//   title: string;
//   poster: string;
//   year: string;
// };
//
// type Props = {
//   title: string;
//   moviesToMap: MovieType[];
//   isEnter: boolean;
//   isSearching: boolean;
//   setIsEnter: (value: boolean) => void;
//   setTitle: (value: string) => void;
//   setIsSearching: (value: boolean) => void;
//   setMoviesToMap: (value: MovieType[]) => void;
//   searchMovies: (title: string) => Promise<void>;
// };
//
// export const useSearch = create<Props>((set, get) => ({
//   title: "",
//   moviesToMap: [],
//   isSearching: false,
//     isEnter: false,
//     setIsEnter: (value: boolean) => set({isEnter: value}),
//   setTitle: (value: string) => set({ title: value }),
//   setIsSearching: (value) => set({ isSearching: value }),
//     setMoviesToMap: (value) => set({ moviesToMap: value }),
//   searchMovies: async (title) => {
//     try {
//       const response = await axios
//         .get(`http://www.omdbapi.com/?i=tt3896198&apikey=81197708&s=${title}`)
//         .then((response) => response.data)
//         .then((data) => data.Search);
//       set({ moviesToMap: response });
//       return response;
//     } catch (error) {
//       set({ moviesToMap: [] });
//       alert(error);
//       return null;
//     }
//   },
// }));
