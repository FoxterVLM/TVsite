import { create } from "zustand/react";

type CurrentPage = {
  page: string;
  setPage: (page: string) => void;
};

export const useCurrentPage = create<CurrentPage>((set) => ({
  page: "home",
  setPage: (changeTo: string) => set({ page: changeTo }),
}));
