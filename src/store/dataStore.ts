import { create } from "zustand";
import { IuserDataInterface } from "../app/interfaces/userDataInterface";

export const useUserData = create<{
    data: IuserDataInterface[];
    setDataUser: (value: IuserDataInterface[]) => void;
  }>((set) => ({
    data: [],
    setDataUser: (value: IuserDataInterface[]) => set({ data: value }),
  }));