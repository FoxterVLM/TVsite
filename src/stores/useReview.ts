import { create } from "zustand";
import axios from "axios";

type FormDataType = {
    nickname: string,
    country: string,
    rating: number,
    text: string,
}

type Props = {
  isAdded: boolean;
  isClicked: boolean;
  nickname: string;
  country: string;
  rating: number;
  text: string;
  setIsClicked: (value: boolean) => void;
  setIsAdded: (value: boolean) => void;
  addReview: (
    object: FormDataType,
  ) => Promise<void>;
};


export const useReview = create<Props>((set) => ({
  isAdded: false,
  isClicked: false,
  nickname: "",
  country: "",
  rating: 0,
  text: "",
  setIsClicked: (value) => set({ isClicked: value }),
  setIsAdded: (value) => set({ isAdded: value }),
  addReview: async (object) => {
    try {
      const response = await axios
        .post("https://jsonplaceholder.typicode.com/posts", object) // later add server
        .then((response) => response.data)
        .then((data) => {
          set({ isAdded: true });
          set({ nickname: data.nickname });
          set({ country: data.country });
          set({ rating: data.rating });
          set({ text: data.text });
        });
      return response;
    } catch (err) {
      alert(err);
      set({ isAdded: false });
    }
  },
}));
