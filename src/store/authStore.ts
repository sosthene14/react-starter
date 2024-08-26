import { create } from "zustand";

export const useAuth = create<{
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}>((set) => ({
  isAuth: true,
  setIsAuth: (value: boolean) => set({ isAuth: value }),
}));

export const useUserAuthDetails = create<{
  token: string;
  setModificationToken: (value: string) => void;
  setUserId: (value: string) => void;
  user_id: string;
  modification_token: string;
  setToken: (value: string) => void;
}>((set) => ({
  token: "",
  user_id: "",
  modification_token: "",
  setModificationToken: (value: string) => set({ modification_token: value }),
  setUserId: (value: string) => set({ user_id: value }),
  setToken: (value: string) => set({ token: value }),
}));
