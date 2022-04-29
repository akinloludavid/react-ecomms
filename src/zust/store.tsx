import create from "zustand";

export const useStore = create((set: Function) => ({
  category: "",
  searchTerm: "",
  setSearchTerm: (query: string) =>
    set((state: any) => ({ ...state, searchTerm: query })),
  selectCategory: (cat: string) =>
    set((state: any) => ({ ...state, category: cat })),
}));

export const categorySelector = (state: any) => state.selectCategory;
export const searchTermSelector = (state: any) => state.setSearchTerm;
