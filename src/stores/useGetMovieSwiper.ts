import { create } from "zustand";
import axios from "axios";

type Props = {
  getData: () => Promise<void>;
};

export const useGetMovieSwiper = create<Props>(() => ({
  getData: async () => {
    try {
      const response = await axios
        .get("/api/swiper_db.json") // add server api, where u can get data
        .then((response) => response.data);
      return response;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
}));
