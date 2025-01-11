import { create } from "zustand";
import { Category } from "../interfaces/interfaces";

export const useDataStore = create((set) => ({
    partners: [],
    setPartners: (partners: any[]) => set({ partners }),
}));

interface CategoriesStore {
    categories: Category[];
    setCategories: (categories: Category[]) => void;
}

export const useCategoriesStore = create<CategoriesStore>((set) => ({
    categories: [],
    setCategories: (categories: Category[]) => set({ categories }),
}));
