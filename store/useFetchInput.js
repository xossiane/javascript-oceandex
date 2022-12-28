import create from "zustand";

const useFecthInput = create((set) => ({
  search: "",
  setSearch: (data) => set((state) => ({ search: data })),
}));

export default useFecthInput;
