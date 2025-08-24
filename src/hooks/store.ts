import { create } from 'zustand';

type Store = {
  isTestimonialsModalOpen: boolean;
  toggleTestimonialsModal: () => void;
};

export const useAppStore = create<Store>((set) => ({
  isTestimonialsModalOpen: false,
  toggleTestimonialsModal: () =>
    set((state) => ({ isTestimonialsModalOpen: !state.isTestimonialsModalOpen })),
}));
