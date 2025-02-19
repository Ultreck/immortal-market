import { create } from "zustand";

const useOddsStore = create((set) => ({
  selectedOdds: [],
  
  addOdd: (odd) =>
    set((state) => ({
      selectedOdds: [...state.selectedOdds, odd],
    })),

  removeOdd: (odd) =>
    set((state) => ({
      selectedOdds: state.selectedOdds.filter(
        (item) =>
          !(
            item.rowId === odd.rowId &&
            item.section === odd.section &&
            item.key === odd.key
          )
      ),
    })),
}));
export default useOddsStore;