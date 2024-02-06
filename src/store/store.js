import { create } from 'zustand'

export const useUserStore = create((set) => ({
  isLogin: false,
  username: "",
  email: "",
  setLogin: (newState) => set({ isLogin: newState }),
  setUsername: (newUsername) => set({ username: newUsername }),
  setEmail: (newEmail) => set({ email: newEmail })
}))
