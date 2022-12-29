import create from "zustand";

const useFetchData = create((set) => ({
  data: null,
  setData: (data) => set((state) => ({ data: data })),
}));

export default useFetchData;
