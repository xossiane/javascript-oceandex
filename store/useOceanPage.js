import create from "zustand";

const useOceanPage = create((set) => ({
  page: "teste",
  setPage: (page) => set((state) => ({ page: page })),
}));

export default useOceanPage;
