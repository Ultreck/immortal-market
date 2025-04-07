import { create } from 'zustand';

const useIsOpenStore = create((set) => ({
    isSideBarOpen: true,
    setIsSideBarOpen: (ai) => set({isSideBarOpen: ai}),
}));

export default useIsOpenStore;