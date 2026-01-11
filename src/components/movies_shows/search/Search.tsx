// import { useSearch } from "../../../stores/useSearch.ts";
// import { useQuery } from "@tanstack/react-query";
// import * as React from "react";
//
// export default function Search() {
//   const { searchMovies, title, setTitle, moviesToMap, setMoviesToMap, isEnter, setIsEnter } = useSearch();
//
//   const {data, isLoading} = useQuery({
//       queryKey: ["search"],
//       queryFn: searchMovies(title),
//       enabled: isEnter && title,
//   });
//
//   const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key == "Enter") {
//       if(data !== undefined) setMoviesToMap(data);
//       setIsEnter(true);
//       setTitle("");
//     }
//   };
//
//   return (
//       <>
//           {!isLoading &&
//               <div className="search absolute">
//
//                   <input
//                       type="text"
//                       className="search-input"
//                       placeholder="Search..."
//                       onChange={(e) => setTitle(e.target.value)}
//                       value={title}
//                       onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleEnter(e)}
//                   />
//                   <ul className='search-list'>
//                       {moviesToMap.map((movie, i: number) => (
//                           <li key={i} className="movie-list-item">
//                               <img src={movie.poster} loading='lazy'/>
//                               <div className='movie-data'>
//                                   <h6 className='data-title'>{movie.title}</h6>
//                                   <p className='data-year'>{movie.year}</p>
//                               </div>
//                           </li>
//                       ))}
//                   </ul>
//               </div>
//           }
//       </>
//
//   );
// }
