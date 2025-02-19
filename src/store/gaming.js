const { createStore } = require("zustand");


const useBetStore =  createStore((set) => ({
    bets: [],
    addBet: (bet) => {
        set((state) => ({ bets: [...state.bets, bet] }));
    },
    removeBet: (id) => {
        set((state) => ({ bets: state.bets.filter((b) => b.id!==id) }));
    },
    updateBet: (id, updatedBet) => {
        set((state) => ({ bets: state.bets.map((b) => b.id === id? updatedBet : b) }));
    }
}));

export default useBetStore;