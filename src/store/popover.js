import create from 'zustand';

const usePopoverStore = create((set) => ({
  isPopoverOpen: false,
  view: 'home',
  openPopover: (viewName) => set({ isPopoverOpen: true, view: viewName }),
  closePopover: () => set({ isPopoverOpen: false, view: 'home' }),
  setView: (viewName) => set({ view: viewName }),
}));

export default usePopoverStore;
