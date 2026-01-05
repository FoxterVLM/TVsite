import { create } from "zustand/react";

type CurrentPage = {
  page: string;
  setPage: (page: string) => void;
};

export const useCurrentPage = create<CurrentPage>((set) => ({
  page: "ms", // change later to home, ms - movies_shows
  setPage: (changeTo: string) => set({ page: changeTo }),
}));
