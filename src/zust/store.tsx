import create from "zustand";
import { persist } from "zustand/middleware";
import { IGetAllProducts } from "../types";

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

export const useCartStore = create(
  persist(
    (set: Function, get: Function) => ({
      cart: [],
      addToCart: (product: IGetAllProducts) =>
        set({ cart: [...get().cart, product] }),
      removeFromCart: (product: IGetAllProducts) =>
        set({
          cart: get().cart.filter(
            (item: IGetAllProducts) => item.id !== product.id
          ),
        }),
      emptyCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-items", // unique name
    }
  )
);
